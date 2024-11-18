import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { NavLink } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <div className="p-20 flex justify-center items-center">
      <div className="px-8 pb-8 border-2 rounded-lg flex flex-col items-center">
        <div className="text-center px-10 py-5">
          <h2 className="font-bold text-2xl">Sign Up for Blog</h2>
          <p className="text-muted-foreground">
            Create your account to start blogging
          </p>
        </div>
        <div className="w-full flex flex-col gap-8">
          <ul className="flex flex-col gap-5">
            <li className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input type="text" placeholder="john" />
            </li>
            <li className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input type="email" placeholder="john@example.com" />
            </li>
            <li className="flex flex-col gap-2">
              <Label>Password</Label>
              <Input type="password" />
            </li>
            <li className="flex flex-col gap-2">
              <Label>Confirm Password</Label>
              <Input type="password" />
            </li>
          </ul>
          <Button className="bg-blue-600 hover:bg-blue-500 text-white">
            Sign Up
          </Button>
        </div>
        <div className="w-full mt-5 text-center">
          <p className="text-muted-foreground">
            Already have an account?
            <NavLink className="text-blue-600 font-medium" to="../login">
              Log In
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
