import { useQuery } from '@tanstack/react-query';
import { api } from '../api/client';
import { User } from '../types/user';

export const useUsers = () =>
  useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await api.get('/users');
      return res.data;
    },
  });
