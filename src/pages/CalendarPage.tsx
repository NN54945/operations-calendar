import { useCalendar } from '../hooks/useCalendar';
import { useFilters } from '../hooks/useFilters';
import DateRangeSelector from '../components/DateRangeSelector';
import CalendarGrid from '../components/CalendarGrid';

export default function CalendarPage() {
  const { events, loading, error, viewYear, viewMonth, prevMonth, nextMonth, goToToday } =
    useCalendar();
  const { filterEvents } = useFilters();

  const filteredEvents = filterEvents(events);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <DateRangeSelector
          year={viewYear}
          month={viewMonth}
          onPrev={prevMonth}
          onNext={nextMonth}
          onToday={goToToday}
        />
        <span className="text-sm text-gray-500">
          共 {filteredEvents.length} 项活动
        </span>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-12 text-gray-400">加载中...</div>
      )}

      {error && (
        <div className="text-red-500 text-sm py-4">{error}</div>
      )}

      {!loading && !error && (
        <CalendarGrid year={viewYear} month={viewMonth} events={filteredEvents} />
      )}
    </div>
  );
}
