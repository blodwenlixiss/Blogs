import { updateProfileInfo } from "@/api/account";
import { logout } from "@/api/auth/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userAtom } from "@/store/auth";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const [user] = useAtom(userAtom);
  const [profilePayload, setProfilePayload] = useState<{
    avatar_url: string;
    full_nameKa: string;
    full_nameEn: string;
    phone: string;
  }>({
    avatar_url: "",
    full_nameKa: "",
    full_nameEn: "",
    phone: "",
  });
  const navigate = useNavigate();
  const { mutate: handleLogout } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: () => {
      navigate("/");
    },
  });

  const { mutate: handleUpdateProfile } = useMutation({
    mutationKey: ["update-profile"],
    mutationFn: updateProfileInfo,
  });

  const handleUpdate = () => {
    return handleUpdateProfile({ ...profilePayload, id: user?.user?.id });
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <ul className="flex flex-col gap-5">
          <li>
            <Label>Name</Label>
            <Input
              name="name"
              value={profilePayload.full_nameEn}
              onChange={(e) => {
                setProfilePayload({
                  ...profilePayload,
                  full_nameEn: e.target.value,
                });
              }}
              type="text"
            />
          </li>
          <li>
            <Label>სახელი</Label>
            <Input
              name="სახელი"
              value={profilePayload.full_nameKa}
              onChange={(e) => {
                setProfilePayload({
                  ...profilePayload,
                  full_nameKa: e.target.value,
                });
              }}
              type="text"
            />
          </li>
          <li>
            <Label>ტელეფონი/Phone</Label>
            <Input
              name="phone"
              value={profilePayload.phone}
              onChange={(e) => {
                setProfilePayload({
                  ...profilePayload,
                  phone: e.target.value,
                });
              }}
              type="text"
            />
          </li>
          <li>
            <Label>Avatar</Label>
            <Input
              name="avatar"
              value={profilePayload.avatar_url}
              onChange={(e) => {
                setProfilePayload({
                  ...profilePayload,
                  avatar_url: e.target.value,
                });
              }}
              type="text"
            />
          </li>
        </ul>
        <Button onClick={handleUpdate} className="mt-5">
          Update
        </Button>
      </div>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </div>
  );
};
