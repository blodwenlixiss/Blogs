import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "@/api/auth/auth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["register"],
    mutationFn: login,
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleLoginAcc = () => {
    if (!!loginPayload.email && !!loginPayload.password) {
      handleLogin(loginPayload);
    }
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="px-8 pb-8 border-2 rounded-lg flex flex-col items-center">
        <div className="text-center px-10 py-5">
          <h2 className="font-bold text-2xl">Log in to Blog</h2>
          <p className="text-muted-foreground">
            Enter your credentials to access your account
          </p>
        </div>
        <div className="w-full flex flex-col gap-8">
          <ul className="flex flex-col gap-5">
            <li className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input
                onChange={(e) => {
                  setLoginPayload({
                    ...loginPayload,
                    email: e.target.value,
                  });
                }}
                type="email"
                placeholder="john@example.com"
              />
            </li>
            <li className="flex flex-col gap-2">
              <Label>Password</Label>
              <Input
                onChange={(e) => {
                  setLoginPayload({
                    ...loginPayload,
                    password: e.target.value,
                  });
                }}
                type="password"
              />
            </li>
          </ul>
          <Button
            onClick={handleLoginAcc}
            className="bg-blue-600 hover:bg-blue-500 text-white"
          >
            Log In
          </Button>
        </div>
        <div className="w-full mt-5">
          <ul className="flex justify-between text-sm">
            <li>
              <NavLink className="text-blue-600 font-semibold" to="">
                Forgot Password?
              </NavLink>
            </li>
            <li>
              <p>
                Don't have an account?
                <NavLink
                  className="text-blue-600 font-semibold"
                  to="../register"
                >
                  Sign up
                </NavLink>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
