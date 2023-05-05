import { useQuery } from '@tanstack/react-query'

import Game from '@entities/Game'
import API from '@services/api'

const api = new API<Game>('/games')

const useGame = (slug: string) =>
  useQuery({
    queryKey: ['games', slug],
    queryFn: () => api.get(slug),
  })

export default useGame
