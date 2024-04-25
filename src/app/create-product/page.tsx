"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/button";
import { useDropzone } from "@uploadthing/react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

import { Card, CardContent } from "~/components/ui/card";
import { Check, Loader2, PackagePlus } from "lucide-react";
import { useCallback, useState } from "react";
import {
  type TCreateProductSchema,
  createProductSchema,
} from "~/lib/validator/product";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Textarea } from "~/components/ui/textarea";
import { UploadDropzone } from "~/lib/uploadthing";
import { toast } from "sonner";
import Image from "next/image";

const CreateProductPage = () => {
  const [values, setValues] = useState<TCreateProductSchema>();
  const [imageUrl, setImageUrl] = useState<string>("");

  // 1. Define your form.
  const form = useForm<TCreateProductSchema>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      name: "",
    },
  });
  function onSubmit(values: TCreateProductSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (imageUrl.length === 0) {
      toast.warning("You should upload an Image");
      return;
    }
    setValues(values);
  }

  return (
    <>
      <Card>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex...Nexus Framer Template"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="paid"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Select a type...</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={false}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={true} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Premium Product
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={false} />
                          </FormControl>
                          <FormLabel className="font-normal">Freebie</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {form.watch("paid") && (
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          required={form.watch("paid")}
                          placeholder="Enter a price in USD"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="demoLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Demo Link (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <UploadDropzone
                config={{ mode: "auto" }}
                onUploadBegin={() => {
                  toast.loading("Uploading assets", { id: "upload" });
                }}
                onClientUploadComplete={(file) => {
                  setImageUrl(file[0]?.url ?? "");
                  toast.dismiss();
                  toast.success("Upload Completed!");
                }}
                appearance={{
                  button: "hidden",
                  label:
                    "text-foreground hover:text-foreground/50 transition-all",
                  container: "border-2 border-border",
                  uploadIcon: "text-muted-foreground",
                  allowedContent: "text-muted-foreground",
                }}
                endpoint="imageUploader"
                content={{
                  uploadIcon: imageUrl.length !== 0 && (
                    <Image
                      src={imageUrl ?? ""}
                      alt="Image"
                      width={100}
                      height={100}
                    />
                  ),
                }}
              />

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Create Product <PackagePlus className="size-5 " />{" "}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <pre className="mt-20">{JSON.stringify(values, null, 2)}</pre>
    </>
  );
};

export default CreateProductPage;
