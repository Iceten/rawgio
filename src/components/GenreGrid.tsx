import { SimpleGrid } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreCard from "./GenreCard";
import GenreCardContainer from "./GenreCardContainer";
import GenreCardSkeleton from "./GenreCardSkeleton";

const GenreGrid = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <SimpleGrid columns={1}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GenreCardContainer>
              <GenreCardSkeleton />
            </GenreCardContainer>
          ))}
        {data.map((genre) => (
          <GenreCardContainer>
            <GenreCard key={genre.id} genre={genre} />
          </GenreCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GenreGrid;
