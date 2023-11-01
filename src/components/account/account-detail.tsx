import { Box, Button, Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import AccountChart from "./acccount-chart";

const AccountDetail: React.FunctionComponent = () => {
  return (
    <Box w={{ xl: "47.8125rem" }} minW={{ xl: "57%" }}>
      <Flex columnGap="4rem" rowGap="2rem" flexWrap="wrap">
        <Box>
          <Text fontSize="0.875rem" fontWeight="500" color="gray.400">
            Available Balance
          </Text>
          <Text fontWeight="700" fontSize="2.25rem" letterSpacing="-1.5px">
            USD 120,500.00
          </Text>
        </Box>
        <Button
          fontWeight="600"
          bgColor="dark.100"
          color="white"
          w="10.5rem"
          h="3.25rem"
          borderRadius="6.25rem"
          //   _hover={{ bgColor: "#56616B" }}
        >
          Withdraw
        </Button>
      </Flex>
      <AccountChart />
    </Box>
  );
};

export default AccountDetail;
