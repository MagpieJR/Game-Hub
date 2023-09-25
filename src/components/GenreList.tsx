import { HStack, Image, List, ListItem, Spinner, Button, Box } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import { skeletons } from "./GameGrid";

interface Props{
  onSelectedGenre: (genre: Genre) => void,
  selectedGenre: Genre | null,
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  //if (isLoading) return <Spinner />;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY='10px'>
            <GenreSkeleton />
          </ListItem>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Box fontWeight={ genre.id === selectedGenre?.id ? 'bold' : 'normal'} as='button' display='flex' flex-wrap='wrap' onClick={() => onSelectedGenre(genre)} fontSize="lg" > {genre.name} </Box>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
