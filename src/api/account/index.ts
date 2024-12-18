import { UpdateInfo } from "@/pages/profile/index.types";
import { supabase } from "..";
export const updateProfileInfo = async (payload: UpdateInfo) => {
  const user = await supabase.auth.getUser();

  if (!user?.data?.user) {
    throw new Error("User not authenticated");
  }

  const { data } = await supabase
    .from("profiles")
    .upsert({ ...payload, id: user.data.user.id })
    .select()
    .single();

  return data;
};

export const getProfileInfo = (id: string | number) => {
  return supabase.from("profiles").select("*").eq("id", id);
};
