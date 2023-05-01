import { useQuery } from '@tanstack/react-query';

import Screenshots from '@entities/Screenshot';
import API from '@services/api';

const useScreenshots = (gameId: number) => {
  const api = new API<Screenshots>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: api.getAll,
  });
};

export default useScreenshots;
