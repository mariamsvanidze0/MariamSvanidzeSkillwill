import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Customer {
  id: number;
  name: string;
  email: string;
}

export const useCustomers = () => {
  return useQuery<Customer[]>(['customers'], async () => {
    const response = await axios.get('/api/customers');
    return response.data;
  });
};
