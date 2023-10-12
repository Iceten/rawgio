import { Genre } from "../hooks/useGenres";
import { Card, HStack, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  genre: Genre;
}
const GenreCard = ({ genre }: Props) => {
  return (
    <>
      <HStack>
        <Card width="80px" height="100%" borderRadius="20px">
          <Image src={getCroppedImageUrl(genre.image_background)} />
        </Card>
        <Text fontSize="2xl" marginLeft="10px">
          {genre.name}
        </Text>
      </HStack>
    </>
  );
};

export default GenreCard;
