import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

export const useUser = (userId: number) => {
  return useQuery<User>(['user', userId], async () => {
    const response = await axios.get(`/api/users/${userId}`);
    return response.data;
  });
};
