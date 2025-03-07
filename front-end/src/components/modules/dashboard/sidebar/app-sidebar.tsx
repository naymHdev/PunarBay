"use client";

import * as React from "react";
import { FolderKanban, HomeIcon, UserCog } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import Link from "next/link";
import { NavUser } from "./nav-user";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: HomeIcon,
    },
    {
      title: "My Account",
      url: "/user/my-account",
      icon: UserCog,
    },
    {
      title: "My Listings",
      url: "/user/dashboard",
      icon: FolderKanban,
      isActive: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className=" border-none rounded-2xl bg-white m-1"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center justify-center"></div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">PunarBay</h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="pb-10">
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
