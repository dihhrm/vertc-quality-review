import React, { useState } from "react";
import { Link } from "@remix-run/react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Icons,
  Navbar,
} from "@vert-capital/design-system-ui";
import { routes } from "~/common/constants";

export default function Header() {
  const [user, setUser] = useState({ name: "Diego", email: "" });

  const signOut = () => {};

  return (
    <Navbar>
      <div className="flex items-center">
        <img
          src="/resources/images/logo.svg"
          alt="User Icon"
          height={60}
          width={60}
          className="mr-2"
        />
        <h4 className="font-bold">Quality Review</h4>
      </div>
      {user.id ? (
        <Link to={routes.login} prefetch="intent" className="">
          <Button variant={"outline"}>Entrar</Button>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative rounded-full  flex justify-end items-center space-x-3 cursor-pointer text-muted-foreground">
              <img
                src="/resources/images/user.svg"
                alt="User Icon"
                height={40}
                width={40}
                className="w-6 h-6"
              />
              <div className="max-w-[10rem] truncate">{user.name}</div>
              <Icons.ChevronDown className="h-4 w-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1 px-1 py-2.5">
                <div className="text-sm font-bold leading-none truncate">
                  {user.name}
                </div>
                <p className="text-xs leading-tight truncate">{user.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={signOut}>
              <div className="flex justify-start space-x-2 items-center p-1">
                <div>Sair</div>
                <Icons.LogOut className="h-4 w-4 text-muted-foreground" />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </Navbar>
  );
}
