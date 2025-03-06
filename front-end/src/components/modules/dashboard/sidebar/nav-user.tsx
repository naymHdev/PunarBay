"use client";

import { LogOut } from "lucide-react";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";
import { logout } from "@/services/auth";
import { protectedRoutes } from "@/constants";

export function NavUser() {
  const { user, setIsLoading } = useUser();

  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    setIsLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div
              className="w-full cursor-pointer  text-red-500 flex gap-2 items-center font-medium text-lg"
              onClick={() => handleLogout()}
            >
              <LogOut />
              Log out
            </div>
          </SidebarMenuButton>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
