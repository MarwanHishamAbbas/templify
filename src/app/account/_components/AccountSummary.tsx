"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "lucide-react";
import { useState, type FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import RichText from "~/components/ui/RichText";
import { Button } from "~/components/ui/button";

interface AccountSummaryProps {
  userId: string | undefined;
  content: string | undefined;
}

const contentSchema = z.object({
  content: z.string(),
});

export type TContentSchema = z.infer<typeof contentSchema>;

const AccountSummary: FC<AccountSummaryProps> = ({ userId, content }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [summaryContent, setSummaryContent] = useState("");
  const form = useForm<TContentSchema>({
    resolver: zodResolver(contentSchema),
    defaultValues: {
      content: "",
    },
  });
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
        <div className="space-y-2 text-end">
          <RichText accountForm={form} />
          <Button
            onClick={() => {
              setSummaryContent(form.watch("content"));
              setIsEditing(false);
            }}
          >
            Save Edits
          </Button>
        </div>
      ) : (
        <article
          className="prose-sm prose-headings:text-muted prose-p:text-muted"
          dangerouslySetInnerHTML={{
            __html: summaryContent ?? "",
          }}
        />
      )}
    </>
  );
};

export default AccountSummary;
