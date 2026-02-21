import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { httpClient } from '@api';
import apiUrls from '@api/apiUrls/apiUrls';
import { IQuantRanking } from '@api/useQuantRanking/interfaces/quantRanking.interface';

const queryKey = ['quant-ranking'] as const;

const fetchQuantRanking = async (): Promise<IQuantRanking> => {
  const response = await httpClient.get<IQuantRanking>({
    url: apiUrls.quantRanking(),
  });

  return response.data;
};

export const useQuantRanking = (): UseQueryResult<IQuantRanking, Error> => {
  return useQuery({
    queryKey,
    queryFn: fetchQuantRanking,
  });
};
