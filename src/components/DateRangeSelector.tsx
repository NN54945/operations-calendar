export default function DateRangeSelector({
  year,
  month,
  onPrev,
  onNext,
  onToday,
}: {
  year: number;
  month: number;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
}) {
  const title = `${year}年 ${String(month + 1).padStart(2, '0')}月`;

  return (
    <div className="flex items-center gap-2 mb-4">
      <button
        onClick={onPrev}
        className="p-1.5 rounded hover:bg-gray-200 text-gray-600"
        title="上个月"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <span className="font-semibold text-gray-800 w-32 text-center">{title}</span>
      <button
        onClick={onNext}
        className="p-1.5 rounded hover:bg-gray-200 text-gray-600"
        title="下个月"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button
        onClick={onToday}
        className="ml-2 text-sm px-3 py-1 rounded bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
      >
        今天
      </button>
    </div>
  );
}
