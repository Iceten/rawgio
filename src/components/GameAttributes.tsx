import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";

import CriticScore from "./CriticScore";
import DefiniftionItem from "./DefiniftionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefiniftionItem term="Platforms">
        {game!.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefiniftionItem>
      <DefiniftionItem term="Metascore">
        <CriticScore score={game!.metacritic} />
      </DefiniftionItem>
      <DefiniftionItem term="Genres">
        {game!.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefiniftionItem>
      <DefiniftionItem term="Publishers">
        {game!.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefiniftionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
