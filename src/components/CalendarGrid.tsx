import { OperationEvent } from '../types';
import { getCalendarDays, isCurrentMonth, isToday } from '../utils/dateUtils';
import { eventSpansDay, formatDate } from '../utils/dateUtils';
import { WEEKDAY_NAMES } from '../utils/constants';
import EventCard from './EventCard';

interface CalendarGridProps {
  year: number;
  month: number;
  events: OperationEvent[];
}

export default function CalendarGrid({ year, month, events }: CalendarGridProps) {
  const days = getCalendarDays(year, month);

  return (
    <div className="flex-1">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 mb-1">
        {WEEKDAY_NAMES.map((name) => (
          <div key={name} className="text-center text-xs font-semibold text-gray-500 py-1">
            {name}
          </div>
        ))}
      </div>

      {/* Calendar cells */}
      <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded overflow-hidden">
        {days.map((day) => {
          const dateStr = formatDate(day);
          const inMonth = isCurrentMonth(day, year, month);
          const today = isToday(day);
          const dayEvents = events.filter((e) => eventSpansDay(e.startDate, e.endDate, day));

          return (
            <div
              key={dateStr}
              className={`bg-white min-h-[90px] p-1 ${inMonth ? '' : 'opacity-40'}`}
            >
              <div
                className={`text-xs font-medium w-6 h-6 flex items-center justify-center rounded-full mb-0.5 ${
                  today
                    ? 'bg-indigo-600 text-white'
                    : inMonth
                    ? 'text-gray-700'
                    : 'text-gray-400'
                }`}
              >
                {day.getDate()}
              </div>
              <div className="space-y-0.5">
                {dayEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
