import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { httpClient } from '@api/index';
import apiUrls from '@api/apiUrls/apiUrls';
import { IFactorGradesNow } from '@api/useFactorGradesNow/interfaces/factorGrades.interface';

const queryKey = ['factor-grades', 'now'] as const;

const fetchFactorGradesNow = async (): Promise<IFactorGradesNow> => {
  const response = await httpClient.get<IFactorGradesNow>({
    url: apiUrls.factorGradesNow(),
  });

  return response.data;
};

export const useFactorGradesNow = (): UseQueryResult<IFactorGradesNow, Error> => {
  return useQuery({
    queryKey,
    queryFn: fetchFactorGradesNow,
  });
};
