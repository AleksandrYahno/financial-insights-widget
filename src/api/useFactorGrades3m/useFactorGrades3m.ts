import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { httpClient } from '@api';
import apiUrls from '@api/apiUrls/apiUrls';
import { IFactorGrades3m } from '@api/useFactorGrades3m/interfaces/factorGrades.interface';

const queryKey = ['factor-grades', '3m'] as const;

const fetchFactorGrades3m = async (): Promise<IFactorGrades3m> => {
  const response = await httpClient.get<IFactorGrades3m>({
    url: apiUrls.factorGrades3m(),
  });

  return response.data;
};

export const useFactorGrades3m = (): UseQueryResult<IFactorGrades3m, Error> => {
  return useQuery({
    queryKey,
    queryFn: fetchFactorGrades3m,
  });
};
