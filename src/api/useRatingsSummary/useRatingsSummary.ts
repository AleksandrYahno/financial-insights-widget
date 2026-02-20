import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { httpClient } from '@api/index';
import apiUrls from '@api/apiUrls/apiUrls';
import { IRatingsSummary } from '@api/useRatingsSummary/interfaces/ratingsSummary.interface';

const queryKey = ['ratings-summary'] as const;

const fetchRatingsSummary = async (): Promise<IRatingsSummary> => {
  const response = await httpClient.get<IRatingsSummary>({
    url: apiUrls.ratingsSummary(),
  });

  return response.data;
};

export const useRatingsSummary = (): UseQueryResult<IRatingsSummary, Error> => {
  return useQuery({
    queryKey,
    queryFn: fetchRatingsSummary,
  });
};
