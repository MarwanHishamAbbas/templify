"use client";
import { useMutation } from "@tanstack/react-query";
import { LogOut, User2 } from "lucide-react";
import { signIn, signOut } from "next-auth/react";
import Loader from "~/components/common/Loader";

import { Button } from "~/components/ui/button";

export function SignInButton() {
  const { isPending, mutate: login } = useMutation({
    mutationFn: async () => {
      await signIn("google");
    },
  });
  return (
    <Button variant={"secondary"} onClick={() => login()} disabled={isPending}>
      <User2 className="size-5" />
      My Account
      <Loader indicator={isPending} />
    </Button>
  );
}

export function SignOutButton() {
  const { mutate: logout, isPending } = useMutation({
    mutationFn: async () => {
      await signOut();
    },
  });
  return (
    <Button
      onClick={() => logout()}
      disabled={isPending}
      variant="outline"
      size="icon"
    >
      {isPending ? (
        <Loader indicator={isPending} />
      ) : (
        <LogOut className="size-5" />
      )}
    </Button>
  );
}
