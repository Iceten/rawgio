import { Button, ButtonGroup, Show, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav" bg="blue">
        navigation
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg="orange">
          aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="green">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
