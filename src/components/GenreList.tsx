import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';

import useGenres from '@hooks/useGenres';
import useGameQuery from '@stores/gameQueryStore';
import getCroppedImageUrl from '@utils/image';

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useGameQuery((state) => state.gameQuery.genreId);
  const setGenreId = useGameQuery((state) => state.setGenreId);

  if (error) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontSize="lg"
                variant="link"
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                onClick={() => setGenreId(genre.id)}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
