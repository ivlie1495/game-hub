import { Link } from 'react-router-dom'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'

import Game from '@entities/Game'
import getCroppedImageUrl from '@utils/image'

import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import Emoji from './Emoji'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((item) => item.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  )
}

export default GameCard
