import { supabase } from "..";

export const updateProfileInfo = (payload: any) => {
  return supabase.from("profiles").upsert(payload).throwOnError();
};

export const getProfileInfo = (id: string | number) => {
  return supabase.from("profiles").select("*").eq("id", id);
};
