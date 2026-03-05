import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleSidebar } from '../store/slices/uiSlice';

export default function Header() {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state: RootState) => state.ui.sidebarOpen);

  return (
    <header className="flex items-center justify-between h-14 px-4 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="p-2 rounded hover:bg-gray-100 text-gray-500"
          title={sidebarOpen ? '收起侧边栏' : '展开侧边栏'}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="text-lg font-semibold text-indigo-700">运营日历</span>
      </div>
    </header>
  );
}
