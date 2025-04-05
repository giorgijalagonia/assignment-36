import { useQuery } from '@tanstack/react-query';
import { api } from '../api/client';
import { User } from '../types/user';

export const useUser = (id: number) =>
  useQuery<User>({
    queryKey: ['user', id],
    queryFn: async () => {
      const res = await api.get(`/users/${id}`);
      return res.data;
    },
    enabled: !!id, 
  });
