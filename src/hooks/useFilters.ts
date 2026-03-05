import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleType, toggleStatus, setSearchText, resetFilters } from '../store/slices/filterSlice';
import { EventType, EventStatus, OperationEvent } from '../types';

export function useFilters() {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);

  function filterEvents(events: OperationEvent[]): OperationEvent[] {
    return events.filter((event) => {
      if (filters.types.length > 0 && !filters.types.includes(event.type)) return false;
      if (filters.statuses.length > 0 && !filters.statuses.includes(event.status)) return false;
      if (
        filters.searchText &&
        !event.title.includes(filters.searchText) &&
        !event.description.includes(filters.searchText) &&
        !event.owner.includes(filters.searchText)
      )
        return false;
      return true;
    });
  }

  return {
    filters,
    filterEvents,
    toggleType: (type: EventType) => dispatch(toggleType(type)),
    toggleStatus: (status: EventStatus) => dispatch(toggleStatus(status)),
    setSearchText: (text: string) => dispatch(setSearchText(text)),
    resetFilters: () => dispatch(resetFilters()),
  };
}
