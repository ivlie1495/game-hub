import { SimpleGrid, Text } from '@chakra-ui/react';

import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

import useGames, { GameQuery } from '../hooks/useGames';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGames(gameQuery);
  // const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={2}
      spacing={6}
    >
      {loading &&
        Array.from(Array(15).keys()).map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {!loading &&
        data &&
        data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;
