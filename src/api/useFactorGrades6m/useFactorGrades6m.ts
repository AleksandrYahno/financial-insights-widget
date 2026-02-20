import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { httpClient } from '@api/index';
import apiUrls from '@api/apiUrls/apiUrls';
import { IFactorGrades6m } from '@api/useFactorGrades6m/interfaces/factorGrades.interface';

const queryKey = ['factor-grades', '6m'] as const;

const fetchFactorGrades6m = async (): Promise<IFactorGrades6m> => {
  const response = await httpClient.get<IFactorGrades6m>({
    url: apiUrls.factorGrades6m(),
  });

  return response.data;
};

export const useFactorGrades6m = (): UseQueryResult<IFactorGrades6m, Error> => {
  return useQuery({
    queryKey,
    queryFn: fetchFactorGrades6m,
  });
};
