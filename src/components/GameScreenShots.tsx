import React from "react";
import useScreenShots from "../hooks/useScreenShots";
import { SimpleGrid, Image } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenShots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  if (data)
    return (
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data?.results.map((file) => (
          <Image key={file.id} src={file.image} />
        ))}
      </SimpleGrid>
    );
  else {
    return null;
  }
};

export default GameScreenShots;
