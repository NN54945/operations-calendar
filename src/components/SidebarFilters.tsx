import { useFilters } from '../hooks/useFilters';
import FilterGroup from './FilterGroup';
import { EVENT_TYPE_LABELS, EVENT_STATUS_LABELS } from '../utils/constants';
import { EventType, EventStatus } from '../types';

const TYPE_OPTIONS = (Object.keys(EVENT_TYPE_LABELS) as EventType[]).map((k) => ({
  value: k,
  label: EVENT_TYPE_LABELS[k],
}));

const STATUS_OPTIONS = (Object.keys(EVENT_STATUS_LABELS) as EventStatus[]).map((k) => ({
  value: k,
  label: EVENT_STATUS_LABELS[k],
}));

export default function SidebarFilters() {
  const { filters, toggleType, toggleStatus, setSearchText, resetFilters } = useFilters();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-800">筛选</h2>
        <button
          onClick={resetFilters}
          className="text-xs text-indigo-600 hover:underline"
        >
          重置
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="搜索活动..."
          value={filters.searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full text-sm border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <FilterGroup<EventType>
        title="活动类型"
        options={TYPE_OPTIONS}
        selected={filters.types}
        onToggle={toggleType}
      />

      <FilterGroup<EventStatus>
        title="状态"
        options={STATUS_OPTIONS}
        selected={filters.statuses}
        onToggle={toggleStatus}
      />
    </div>
  );
}
