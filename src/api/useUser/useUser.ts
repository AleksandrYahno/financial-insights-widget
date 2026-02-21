import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { httpClient } from '@api';
import apiUrls from '@api/apiUrls/apiUrls';
import { IUser } from '@api/useUser/interfaces/user.interface';

const queryKey = ['user'] as const;

const fetchUser = async (): Promise<IUser> => {
  const response = await httpClient.get<IUser>({ url: apiUrls.user() });

  return response.data;
};

export const useUser = (): UseQueryResult<IUser, Error> => {
  return useQuery({
    queryKey,
    queryFn: fetchUser,
  });
};
