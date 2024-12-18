import { supabase } from "@/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userAtom } from "@/store/auth";
import { useAtom } from "jotai";
import { Controller, useForm } from "react-hook-form";

interface BlogFieldsType {
  title_en: string;
  title_ka: string;
  description_en: string;
  description_ka: string;
  image_url: null | File;
}

const CreateBlogs = () => {
  const [user] = useAtom(userAtom);
  const blogFields = {
    title_en: "",
    title_ka: "",
    description_en: "",
    description_ka: "",
    image_url: null,
  };

  const { control, handleSubmit } = useForm<BlogFieldsType>({
    defaultValues: blogFields,
  });

  const onSubmit = (blogValues: BlogFieldsType) => {
    if (blogValues?.image_url) {
      supabase.storage
        .from("blog_images")
        .upload(blogValues?.image_url?.name, blogValues?.image_url)
        .then((res) => {
          return supabase.from("blog").insert({
            title_en: blogValues.title_en,
            title_ka: blogValues.title_ka,
            description_en: blogValues.description_en,
            description_ka: blogValues.description_ka,
            image_url: res.data?.fullPath,
            user_id: user?.user?.id,
          });
        })
        .then((res) => {
          console.log("successfully added", res);
        });
    }
  };
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <ul className="flex flex-col gap-5">
        <li>
          <Controller
            control={control}
            name="title_en"
            rules={{ required: "Title in English is required" }}
            render={({ field }) => <Input {...field} placeholder="Title(EN)" />}
          />
        </li>
        <li>
          <Controller
            control={control}
            name="title_ka"
            render={({ field: { onChange, value } }) => {
              return (
                <Input
                  onChange={onChange}
                  value={value}
                  type="text"
                  placeholder="Title(KA)"
                />
              );
            }}
          />
        </li>
        <li>
          <Controller
            control={control}
            name="description_en"
            render={({ field: { onChange, value } }) => {
              return (
                <Input
                  onChange={onChange}
                  value={value}
                  type="text"
                  placeholder="Description(EN)"
                />
              );
            }}
          />
        </li>
        <li>
          <Controller
            control={control}
            name="description_ka"
            render={({ field: { onChange, value } }) => {
              return (
                <Input
                  onChange={onChange}
                  value={value}
                  type="text"
                  placeholder="Description(KA)"
                />
              );
            }}
          />
        </li>
        <li>
          <Controller
            control={control}
            name="image_url"
            render={({ field: { onChange } }) => {
              return (
                <Input
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    onChange(file);
                  }}
                  type="file"
                />
              );
            }}
          />
        </li>
      </ul>
      <Button
        className="bg-inherit border-2 text-inherit"
        onClick={handleSubmit(onSubmit)}
      >
        Create
      </Button>
    </div>
  );
};

export default CreateBlogs;
