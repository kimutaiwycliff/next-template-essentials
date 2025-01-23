import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  BookCopy,
  BookDashedIcon,
  BookDownIcon,
  BookOpen,
  ChartBar,
  ChevronUp,
  Home,
  LucideAlignVerticalJustifyCenter,
  Settings,
  ShieldQuestion,
  User2,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Users",
    href: "#",
    icon: Users,
  },
  {
    name: "Grades",
    href: "#",
    icon: ChartBar,
  },
  {
    name: "Subjects",
    href: "#",
    icon: BookOpen,
  },
  {
    name: "Topics",
    href: "#",
    icon: BookCopy,
  },
  {
    name: "Subtopics",
    href: "#",
    icon: BookDownIcon,
  },
  {
    name: "Difficulty Levels",
    href: "#",
    icon: LucideAlignVerticalJustifyCenter,
  },
  {
    name: "Questions",
    href: "#",
    icon: ShieldQuestion,
  },
  {
    name: "Exams",
    href: "#",
    icon: BookDashedIcon,
  },
  {
    name: "Settings",
    href: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" >
      <SidebarHeader className="">
        <Image src="/logo.png" width={100} height={50} alt='' className='mx-auto mt-5'/>
      </SidebarHeader>

      <SidebarContent className=" pt-[20px]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              {navLinks.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    className="rounded-none"
                    key={item.name}
                  >
                    <Link
                      className={`py-5 px-5 text-lg flex items-center gap-4 font-semibold ${
                        pathname.includes(item.href) ? " bg-primary " : ""
                      }`}
                      href={item.href}
                      key={item.name}
                    >
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className=' font-semibold'>
                    <User2 /> Profile
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <button>Account</button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  );
}
