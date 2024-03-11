import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ViewHorizontalIcon, ViewGridIcon } from "@radix-ui/react-icons";

export default function ToggleView() {
  const toggleGroupItemClasses =
    "hover:bg-primary color-primary data-[state=on]:bg-primaryLight data-[state=on]:text-violet12 flex h-[35px] w-[35px] items-center justify-center bg-white text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none";

  return (
    <ToggleGroup.Root
      className="inline-flex bg-primary rounded  space-x-px"
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="center"
        aria-label="Visualizar tabela"
      >
        <ViewHorizontalIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="right"
        aria-label="Visualizar grid"
      >
        <ViewGridIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
