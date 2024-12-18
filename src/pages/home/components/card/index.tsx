import { CardContainer } from "./card-container/cardContainer";
import { CardInfo } from "./card-info/cardInfo";
import { CardImage } from "./card-image/cardImage";
import { NavLink } from "react-router-dom";
import { Authors } from "./authors";
import { useEffect, useState } from "react";
import { supabase } from "@/api";

type BlogCardTypes = {
  created_at: string;
  description_en: string;
  description_ka: string;
  id: number;
  image_url: string;
  title_en: string;
  title_ka: string;
  user_id: string;
};

export const Articles = () => {
  const [blogs, setBlogs] = useState<BlogCardTypes[]>([]);
  useEffect(() => {
    supabase
      .from("blog")
      .select("*")
      .throwOnError()
      .then((res) => {
        const blogsList = res.data as unknown as BlogCardTypes[];
        setBlogs(blogsList);
      });
  }, []);
  const blogImageUrl = `${import.meta.env.VITE_SUPABASE_BLOG_IMAGE_STORAGE}`;
  console.log(blogs[0]);

  return (
    <div className="px-5 py-5 mt-5 flex gap-5">
      <section className="w-2/3 flex flex-col gap-5">
        {blogs.map((item, index) => (
          <NavLink key={index} to="">
            <CardContainer>
              <CardImage imageUrl={`${blogImageUrl}/${item?.image_url}`} />
              <CardInfo
                title={item.title_en}
                description={item.description_en}
                creationDate={item.created_at}
              />
            </CardContainer>
          </NavLink>
        ))}
      </section>
      <aside className="w-1/3">
        <Authors />
      </aside>
    </div>
  );
};
