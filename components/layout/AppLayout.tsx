import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import BottomToolbar from "./BottomToolbar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen bg-slate-950 text-white overflow-hidden">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 relative">
          {children}
        </main>

        <BottomToolbar />
      </div>
    </div>
  );
}