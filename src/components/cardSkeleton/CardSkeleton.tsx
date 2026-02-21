import { FC, ReactElement } from 'react';

const CardSkeleton: FC = (): ReactElement => {
  return (
    <div
      className="min-h-[220px] rounded-lg bg-gray-100 p-4 animate-pulse"
      data-testid="card-skeleton"
    >
      <div className="mb-4 h-6 w-2/5 rounded bg-gray-300" />

      <div className="space-y-3">
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-4/5 rounded bg-gray-200" />
        <div className="h-4 w-3/5 rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-2/3 rounded bg-gray-200" />
      </div>
    </div>
  );
};

export { CardSkeleton };
