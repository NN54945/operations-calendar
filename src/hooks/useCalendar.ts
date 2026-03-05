import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setEvents, setLoading, setError, prevMonth, nextMonth, goToToday } from '../store/slices/calendarSlice';
import { fetchEvents } from '../services/api';

export function useCalendar() {
  const dispatch = useDispatch<AppDispatch>();
  const { events, loading, error, viewYear, viewMonth } = useSelector(
    (state: RootState) => state.calendar
  );

  useEffect(() => {
    dispatch(setLoading(true));
    fetchEvents()
      .then((data) => {
        dispatch(setEvents(data));
      })
      .catch((err: unknown) => {
        dispatch(setError(err instanceof Error ? err.message : '加载失败'));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [dispatch]);

  return {
    events,
    loading,
    error,
    viewYear,
    viewMonth,
    prevMonth: () => dispatch(prevMonth()),
    nextMonth: () => dispatch(nextMonth()),
    goToToday: () => dispatch(goToToday()),
  };
}
