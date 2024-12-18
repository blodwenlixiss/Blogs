import { updateProfileInfo } from "@/api/account";
import { logout } from "@/api/auth/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userAtom } from "@/store/auth";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { UpdateInfo } from "./index.types";

export const Profile = () => {
  const [user] = useAtom(userAtom);

  const profilePayload: UpdateInfo = {
    avatar_url: user?.avatar_url || "",
    full_nameKa: user?.full_nameKa || "",
    full_nameEn: user?.full_nameEn || "",
    phone: user?.phone || "",
  };

  const { control, handleSubmit } = useForm<UpdateInfo>({
    defaultValues: profilePayload,
  });
  const navigate = useNavigate();

  // Logout mutation
  const { mutate: handleLogout } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: () => {
      navigate("/");
    },
  });

  // Update profile mutation
  const { mutate: handleUpdateProfile, isSuccess } = useMutation({
    mutationKey: ["updateProfile"],
    mutationFn: updateProfileInfo,
    onSuccess: (data) => {
      console.log("Profile updated successfully:", data);
      alert("Profile updated successfully!");
    },
    onError: (error) => {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    },
  });

  const handleUpdate = (updateProfileValue: UpdateInfo) => {
    handleUpdateProfile({
      ...updateProfileValue,
    });
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <ul className="flex flex-col gap-5">
          <li>
            <Label>Name (English)</Label>
            <Controller
              control={control}
              name="full_nameEn"
              render={({ field: { onChange, value } }) => (
                <Input value={value} onChange={onChange} type="text" />
              )}
            />
          </li>
          <li>
            <Label>Name (Georgian)</Label>
            <Controller
              control={control}
              name="full_nameKa"
              render={({ field: { onChange, value } }) => (
                <Input value={value} onChange={onChange} type="text" />
              )}
            />
          </li>
          <li>
            <Label>Phone</Label>
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, value } }) => (
                <Input value={value} onChange={onChange} type="text" />
              )}
            />
          </li>
          <li>
            <Label>Avatar URL</Label>
            <Controller
              control={control}
              name="avatar_url"
              render={({ field: { onChange, value } }) => (
                <Input value={value} onChange={onChange} type="text" />
              )}
            />
          </li>
        </ul>
        <Button onClick={handleSubmit(handleUpdate)} className="mt-5"></Button>
        {isSuccess && <p className="text-green-500 mt-2">Profile Updated!</p>}
      </div>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </div>
  );
};
