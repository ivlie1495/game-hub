import ms from 'ms'
import { useInfiniteQuery } from '@tanstack/react-query'

import Game from '@entities/Game'

import API, { Response } from '@services/api'
import useGameQueryStore from '@stores/gameQueryStore'

const api = new API<Game>('/games')

const useGames = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery)

  return useInfiniteQuery<Response<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      api.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
    staleTime: ms('24h'),
  })
}

export default useGames
