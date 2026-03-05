import { EventType, EventStatus } from '../types';

export const EVENT_TYPE_LABELS: Record<EventType, string> = {
  promotion: '促销活动',
  launch: '新品上线',
  maintenance: '系统维护',
  campaign: '营销活动',
  meeting: '会议',
  other: '其他',
};

export const EVENT_STATUS_LABELS: Record<EventStatus, string> = {
  planned: '计划中',
  ongoing: '进行中',
  completed: '已完成',
  cancelled: '已取消',
};

export const WEEKDAY_NAMES = ['日', '一', '二', '三', '四', '五', '六'];
