import { useQuery } from '@tanstack/react-query';

import Trailer from '@entities/Trailer';
import API from '@services/api';

const useTrailers = (gameId: number) => {
  const api = new API<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: api.getAll,
  });
};

export default useTrailers;
