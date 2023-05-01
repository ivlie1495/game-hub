import ms from 'ms';
import { useQuery } from '@tanstack/react-query';

import genres from '../data/genres';
import Genre from '../entities/Genre';

import API from '../services/api';

const api = new API<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: api.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
