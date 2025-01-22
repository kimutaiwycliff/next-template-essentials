import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import Navbar from '../navbar/Navbar';
const SideBarProvider = ({
  children,
  isSidebar = false,
  isNavbar = false,
}: {
  children: React.ReactNode;
  isSidebar?: boolean;
  isNavbar?: boolean;
}) => {
  return (
    <SidebarProvider>
      {isSidebar && <AppSidebar />}
      <main className="w-full">
        {isNavbar && <Navbar isSidebar={isSidebar} />}
        {children}
      </main>
    </SidebarProvider>
  );
};
export default SideBarProvider;
