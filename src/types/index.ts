export type EventType =
  | 'promotion'
  | 'launch'
  | 'maintenance'
  | 'campaign'
  | 'meeting'
  | 'other';

export type EventStatus = 'planned' | 'ongoing' | 'completed' | 'cancelled';

export interface OperationEvent {
  id: string;
  title: string;
  description: string;
  startDate: string; // ISO date string
  endDate: string;   // ISO date string
  type: EventType;
  status: EventStatus;
  owner: string;
  tags: string[];
}

export interface FilterState {
  types: EventType[];
  statuses: EventStatus[];
  owners: string[];
  searchText: string;
}

export interface CalendarState {
  events: OperationEvent[];
  loading: boolean;
  error: string | null;
  viewYear: number;
  viewMonth: number; // 0-indexed
}

export interface UIState {
  sidebarOpen: boolean;
  selectedEventId: string | null;
}
