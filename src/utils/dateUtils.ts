import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isSameMonth,
  isSameDay,
  parseISO,
  isWithinInterval,
} from 'date-fns';
import { zhCN } from 'date-fns/locale';

export function getCalendarDays(year: number, month: number): Date[] {
  const monthStart = startOfMonth(new Date(year, month));
  const monthEnd = endOfMonth(monthStart);
  const calStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const calEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });
  return eachDayOfInterval({ start: calStart, end: calEnd });
}

export function formatMonthTitle(year: number, month: number): string {
  return format(new Date(year, month), 'yyyy年 MM月', { locale: zhCN });
}

export function formatDate(date: Date): string {
  return format(date, 'yyyy-MM-dd');
}

export function isCurrentMonth(date: Date, year: number, month: number): boolean {
  return isSameMonth(date, new Date(year, month));
}

export function isToday(date: Date): boolean {
  return isSameDay(date, new Date());
}

export function eventSpansDay(eventStart: string, eventEnd: string, day: Date): boolean {
  try {
    return isWithinInterval(day, {
      start: parseISO(eventStart),
      end: parseISO(eventEnd),
    });
  } catch {
    return false;
  }
}
