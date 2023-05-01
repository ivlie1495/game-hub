import ms from 'ms';
import { useInfiniteQuery } from '@tanstack/react-query';

import { Platform } from './usePlatforms';
import API, { Response } from '../services/api';
import useGameQuery from '../stores/gameQueryStore';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const api = new API<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQuery((state) => state.gameQuery);

  return useInfiniteQuery<Response<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      api.getList({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
};

export default useGames;
