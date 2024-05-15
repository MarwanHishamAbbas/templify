"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "lucide-react";
import { useState, type FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Spinner from "~/components/common/Spinner";
import RichText from "~/components/ui/RichText";
import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { api } from "~/trpc/react";

interface AccountSummaryProps {
  userId: string | undefined;
}

const contentSchema = z.object({
  content: z.string(),
});

export type TContentSchema = z.infer<typeof contentSchema>;

const AccountSummary: FC<AccountSummaryProps> = ({ userId }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const {
    data: user,
    refetch,
    isLoading,
  } = api.auth.getUserById.useQuery(userId ?? "");

  const { mutate: updateSummary, isPending } =
    api.auth.updateUserSummary.useMutation({
      onSuccess: async () => {
        setIsEditing(false);
        await refetch();
      },
    });
  const form = useForm<TContentSchema>({
    resolver: zodResolver(contentSchema),
    defaultValues: {
      content: user?.summary ?? "",
    },
  });

  async function onSubmit(values: TContentSchema) {
    updateSummary(values.content);
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold lg:text-3xl">Account Summary</h1>
        <Button
          onClick={() => setIsEditing(true)}
          variant="secondary"
          size="sm"
        >
          <Edit className="size-5" /> Edit
        </Button>
      </div>
      {isEditing ? (
        <Form {...form}>
          <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
            <RichText accountForm={form} content={user?.summary ?? ""} />
            <Button
              type="submit"
              className="w-full lg:w-auto"
              disabled={isPending}
            >
              Save Edits
            </Button>
          </form>
        </Form>
      ) : isLoading ? (
        <Spinner />
      ) : (
        <article
          className="prose-sm prose-headings:text-muted prose-p:text-muted"
          dangerouslySetInnerHTML={{
            __html: user?.summary ?? "",
          }}
        />
      )}
    </>
  );
};

export default AccountSummary;
