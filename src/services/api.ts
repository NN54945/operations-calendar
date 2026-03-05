import { OperationEvent } from '../types';
import { MOCK_EVENTS } from './mockData';

export async function fetchEvents(): Promise<OperationEvent[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return MOCK_EVENTS;
}
