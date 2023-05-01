import { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box, SimpleGrid, Spinner, Text } from '@chakra-ui/react';

import useGames from '@hooks/useGames';

import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  if (error) return <Text>{error.message}</Text>;

  const totalItems =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <Box padding={2}>
      <InfiniteScroll
        dataLength={totalItems}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner marginTop={2} />}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {isLoading &&
            Array.from(Array(15).keys()).map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {!isLoading &&
            data &&
            data.pages.map((page, index) => (
              <Fragment key={index}>
                {page.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}
              </Fragment>
            ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};

export default GameGrid;
