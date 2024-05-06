"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

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
import { PackagePlus } from "lucide-react";
import { useState } from "react";
import {
  type TCreateProductSchema,
  createProductSchema,
} from "~/lib/validator/product";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

import { UploadDropzone } from "~/lib/uploadthing";
import { toast } from "sonner";
import Image from "next/image";
import { api } from "~/trpc/react";
import RichText from "~/components/ui/RichText";

const CreateProductPage = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

  // 1. Define your form.
  const form = useForm<TCreateProductSchema>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      name: "",
      demoLink: "",
      description: "",
      paid: false,
      price: "0",
    },
  });
  const { mutate: createProduct, isPending } = api.product.create.useMutation({
    onMutate: () => {
      toast.loading("Creating a product");
    },
    onSuccess: (data) => {
      console.log(data);

      toast.success("Product Created!");
    },
    onSettled: () => {
      toast.dismiss();
    },
    onError: (error) => {
      if (error.data?.code === "UNAUTHORIZED") {
        toast.warning("You Should login in first");
      }
    },
  });

  async function onSubmit(values: TCreateProductSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (imageUrl.length === 0) {
      toast.warning("You should upload an Image");
      return;
    }
    if (form.watch("description").length <= 7) {
      toast.warning("Please describe your product");
      return;
    }
    createProduct({ ...values, imageUrl: imageUrl });
  }

  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {createProductSchema.shape.category._def.values.map(
                        (select, idx) => (
                          <SelectItem key={idx} value={select}>
                            {select}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
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
                  <FormLabel>Demo Link</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <RichText form={form} />

            <div>
              <UploadDropzone
                onUploadError={(error) => {
                  if (error.code === "INTERNAL_CLIENT_ERROR") {
                    toast.error("Please Login in First");
                  }
                }}
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
                  container: "border-2 border-border min-w-auto",
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
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isPending}>
              Create Product <PackagePlus className="size-5 " />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CreateProductPage;
