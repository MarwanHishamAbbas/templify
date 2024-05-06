"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "./button";
import { type UseFormReturn } from "react-hook-form";
import { type TCreateProductSchema } from "~/lib/validator/product";
import { type TContentSchema } from "~/app/account/_components/AccountSummary";
import { SeparatorHorizontal } from "lucide-react";

const RichText = ({
  form,
  accountForm,
}: {
  form?: UseFormReturn<TCreateProductSchema>;
  accountForm?: UseFormReturn<TContentSchema>;
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "Describe your product",
    onBeforeCreate: () => {
      form?.register("description");
      if (accountForm) {
        accountForm.register("content");
      }
    },
    onUpdate: () => {
      if (!editor) return;
      form?.setValue("description", editor?.getHTML());
      if (accountForm) {
        accountForm.setValue("content", editor.getHTML());
      }
    },
    editorProps: {
      attributes: {
        class:
          "prose-sm prose-headings:text-white prose-p:text-white min-h-[200px] rounded-md border border-input bg-secondary px-3 py-2 text-sm ring-offset-background transition-all placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 !w-full",
      },
    },
  });

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1">
        <Button
          size={"sm"}
          onClick={() => editor?.chain().focus().toggleBold().run()}
          disabled={!editor?.can().chain().focus().toggleBold().run()}
          type="button"
          variant={editor?.isActive("bold") ? "default" : "outline"}
        >
          bold
        </Button>
        <Button
          size={"sm"}
          type="button"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 1 }).run()
          }
          variant={
            editor?.isActive("heading", { level: 1 }) ? "default" : "outline"
          }
        >
          h1
        </Button>
        <Button
          size={"sm"}
          type="button"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 2 }).run()
          }
          variant={
            editor?.isActive("heading", { level: 2 }) ? "default" : "outline"
          }
        >
          h2
        </Button>
        <Button
          size={"sm"}
          type="button"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 3 }).run()
          }
          variant={
            editor?.isActive("heading", { level: 3 }) ? "default" : "outline"
          }
        >
          h3
        </Button>
        <Button
          size={"sm"}
          type="button"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 4 }).run()
          }
          variant={
            editor?.isActive("heading", { level: 4 }) ? "default" : "outline"
          }
        >
          h4
        </Button>
        <Button
          size={"sm"}
          type="button"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 5 }).run()
          }
          variant={
            editor?.isActive("heading", { level: 5 }) ? "default" : "outline"
          }
        >
          h5
        </Button>
        <Button
          size={"sm"}
          type="button"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 6 }).run()
          }
          variant={
            editor?.isActive("heading", { level: 6 }) ? "default" : "outline"
          }
        >
          h6
        </Button>
        <Button
          size={"sm"}
          type="button"
          onClick={() => editor?.commands.setHorizontalRule()}
          variant={
            editor?.isActive("heading", { level: 6 }) ? "default" : "outline"
          }
        >
          <SeparatorHorizontal className="size-5" />
        </Button>
      </div>

      <EditorContent
        required
        style={{ width: "100% !important" }}
        editor={editor}
      />
    </div>
  );
};

export default RichText;
