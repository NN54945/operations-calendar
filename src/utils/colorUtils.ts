import { EventType, EventStatus } from '../types';

export const EVENT_TYPE_COLORS: Record<EventType, string> = {
  promotion: 'bg-red-100 text-red-700 border-red-300',
  launch: 'bg-green-100 text-green-700 border-green-300',
  maintenance: 'bg-yellow-100 text-yellow-700 border-yellow-300',
  campaign: 'bg-blue-100 text-blue-700 border-blue-300',
  meeting: 'bg-purple-100 text-purple-700 border-purple-300',
  other: 'bg-gray-100 text-gray-700 border-gray-300',
};

export const EVENT_STATUS_COLORS: Record<EventStatus, string> = {
  planned: 'bg-sky-50 text-sky-600',
  ongoing: 'bg-emerald-50 text-emerald-600',
  completed: 'bg-slate-100 text-slate-500',
  cancelled: 'bg-rose-50 text-rose-400 line-through',
};
