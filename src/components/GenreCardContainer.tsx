import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GenreCardContainer = ({ children }: Props) => {
  return (
    <Box width="200px" borderRadius={4} overflow="hidden" padding="10px">
      {children}
    </Box>
  );
};

export default GenreCardContainer;
