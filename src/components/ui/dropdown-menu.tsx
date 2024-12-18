import * as React from "react"
import {
  DropdownMenu as DropdownMenuPrimitive,
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal
} from "@radix-ui/react-dropdown-menu"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive
const DropdownMenuTriggerComponent = DropdownMenuTrigger

const DropdownMenuContentComponent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuContent>,
  DropdownMenuContentProps
>(({ className, align = "end", sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPortal>
    <DropdownMenuContent
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:animate-slide-up data-[side=left]:animate-slide-right data-[side=right]:animate-slide-left data-[side=top]:animate-slide-down",
        className
      )}
      {...props}
    />
  </DropdownMenuPortal>
))
DropdownMenuContentComponent.displayName = "DropdownMenuContent"

const DropdownMenuItemComponent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  DropdownMenuItemProps
>(({ className, ...props }, ref) => (
  <DropdownMenuItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))
DropdownMenuItemComponent.displayName = "DropdownMenuItem"

export {
  DropdownMenu,
  DropdownMenuTriggerComponent as DropdownMenuTrigger,
  DropdownMenuContentComponent as DropdownMenuContent,
  DropdownMenuItemComponent as DropdownMenuItem,
}
