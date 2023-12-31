import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";
import AccountDetail from "./account-detail";
import AccountWallet from "./account-wallet";
import AccountTransactions from "./transactions";

const Account: React.FunctionComponent = () => {
  return (
    <Box>
      <Flex flexWrap="wrap" justifyContent="space-between" rowGap="3rem">
        <AccountDetail />
        <AccountWallet />
      </Flex>
      <Box mt="5.375rem">
        <AccountTransactions />
      </Box>
    </Box>
  );
};

export default Account;
