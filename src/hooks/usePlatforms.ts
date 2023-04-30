import ms from 'ms';
import { useQuery } from '@tanstack/react-query';

import platforms from '../data/platforms';
import API from '../services/api';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const api = new API<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: api.getList,
    staleTime: ms('24h'),
    initialData: platforms,
  });

export default usePlatforms;
