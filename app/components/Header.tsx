import React, { useState } from "react";
import { Link, useSubmit } from "@remix-run/react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Icons,
  SliderStep,
  cn,
} from "@vert-capital/design-system-ui";
import { routes } from "~/common/constants";

export default function Header() {
  const [user, setUser] = useState({ name: "Diego", email: "" });
  const [fontSize, setFontSize] = useState(16);

  const signOut = () => {};

  return (
    <header className="flex justify-between border-b-light shadow-sm p-3">
      <img
        src="/resources/images/logo.svg"
        alt="User Icon"
        height={60}
        width={60}
      />
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
            <DropdownMenuLabel>
              <div className="flex p-1 font-normal justify-between items-center">
                <div>Interface</div>
                <SliderStep
                  defaultValue={[fontSize]}
                  className={cn("w-[60%]")}
                  min={12}
                  max={20}
                  step={4}
                />
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex p-1">Alterar senha</div>
            </DropdownMenuItem>
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
    </header>
  );
}
