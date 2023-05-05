import ms from 'ms'
import { useQuery } from '@tanstack/react-query'

import Platform from '@entities/Platform'
import platforms from '@data/platforms'

import API from '@services/api'

const api = new API<Platform>('/platforms/lists/parents')

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: api.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  })

export default usePlatforms
