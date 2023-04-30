import ms from 'ms';
import { useQuery } from '@tanstack/react-query';

import genres from '../data/genres';
import API from '../services/api';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const api = new API<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: api.getList,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
