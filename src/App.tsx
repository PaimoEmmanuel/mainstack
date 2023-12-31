import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import SideNav from "./components/navbar/side-nav";
import { useEffect } from "react";
import Account from "./components/account";
import FilterProvider from "./contexts/filter";

function App() {
  useEffect(() => {
    document.title = "Mainstack";
  }, []);
  return (
    <>
      <Navbar />
      <Flex px="1rem">
        <SideNav />
        <Box as="main" mx="8.75rem" pt="8.375rem" pb="4rem" w="100%">
          <FilterProvider>
            <Account />
          </FilterProvider>
        </Box>
      </Flex>
    </>
  );
}

export default App;
