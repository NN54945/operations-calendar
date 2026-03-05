import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Header from './Header';
import SidebarFilters from './SidebarFilters';

export default function Layout({ children }: { children: React.ReactNode }) {
  const sidebarOpen = useSelector((state: RootState) => state.ui.sidebarOpen);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {sidebarOpen && (
          <aside className="w-64 bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0">
            <SidebarFilters />
          </aside>
        )}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
