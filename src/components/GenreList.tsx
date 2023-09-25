import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import { skeletons } from "./GameGrid";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  //if (isLoading) return <Spinner />;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem paddingY='10px'>
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
            <Text fontSize="lg"> {genre.name} </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
