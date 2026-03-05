import { OperationEvent } from '../types';
import { EVENT_TYPE_COLORS } from '../utils/colorUtils';
import { EVENT_TYPE_LABELS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectEvent } from '../store/slices/uiSlice';
import { RootState } from '../store';

interface EventCardProps {
  event: OperationEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const dispatch = useDispatch();
  const selectedId = useSelector((state: RootState) => state.ui.selectedEventId);
  const isSelected = selectedId === event.id;

  return (
    <div
      className={`text-xs rounded border px-1 py-0.5 truncate cursor-pointer transition-opacity hover:opacity-80 ${EVENT_TYPE_COLORS[event.type]} ${
        isSelected ? 'ring-1 ring-offset-1 ring-indigo-500' : ''
      }`}
      title={`${event.title} (${EVENT_TYPE_LABELS[event.type]})`}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(selectEvent(isSelected ? null : event.id));
      }}
    >
      {event.title}
    </div>
  );
}
