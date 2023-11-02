import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import TransactionItem, { ITransactionItemProps } from "./transaction-item";
import FilterDrawer from "../filter";
import { FilterContext } from "../../contexts/filter";

interface IAccountTransactionsProps {}

const transactions: ITransactionItemProps[] = [
  {
    type: "incoming",
    title: "Mom",
    clientName: "Pascal Ama",
    amount: "3.40 USD",
    date: "20/03/19",
  },
  {
    type: "outgoing",
    title: "Imposer Alan",
    clientName: "Pascal Ama",
    amount: "3.40 USD",
    date: "20/03/19",
  },
  {
    type: "incoming",
    title: "Alan",
    clientName: "Pascal Ama",
    amount: "3.40 USD",
    date: "20/03/19",
  },
  {
    type: "incoming",
    title: "Dylan",
    clientName: "Pascal Ama",
    amount: "3.40 USD",
    date: "20/03/19",
  },
  {
    type: "incoming",
    title: "Umar Jombo",
    clientName: "Pascal Ama",
    amount: "3.40 USD",
    date: "20/03/19",
  },
];
const AccountTransactions: React.FunctionComponent<
  IAccountTransactionsProps
> = () => {
  const {
    isOpen: isFilterOpen,
    onOpen: onFilterOpen,
    onClose: onFilterClose,
  } = useDisclosure();
  const filterBtnRef = useRef(null);
  const { data } = useContext(FilterContext);
  return (
    <>
      <Box>
        <Flex
          w="100%"
          justifyContent="space-between"
          pb="1.5rem"
          borderBottom="1px"
          borderBottomColor="gray.100"
        >
          <Box>
            <Text fontSize="1.5rem" fontWeight="700">
              24 Transactions
            </Text>
            <Text fontSize="0.875rem" fontWeight="500" color="gray.400">
              Your transactions for the last 7 days
            </Text>
          </Box>
          <Flex gap="0.75rem">
            <Button
              w="6.75rem"
              h="3rem"
              borderRadius="6.25rem"
              fontWeight="600"
              ref={filterBtnRef}
              onClick={onFilterOpen}
              gap="0.25rem"
              alignItems="center"
            >
              Filter
              {data.noOfFilters > 0 ? (
                <Text
                  as="span"
                  bgColor="dark.100"
                  color="white"
                  height="20px"
                  minW="20px"
                  borderRadius="50%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  fontSize="14px"
                >
                  {data.noOfFilters}
                </Text>
              ) : null}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1_1413"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#C4C4C4" />
                </mask>
                <g mask="url(#mask0_1_1413)">
                  <path
                    d="M9.99942 13.0211C9.8789 13.0211 9.76673 13.0019 9.66289 12.9634C9.55904 12.925 9.46032 12.8589 9.36674 12.7653L4.87252 8.27112C4.73405 8.13267 4.66322 7.95864 4.66002 7.74902C4.6568 7.53941 4.72763 7.36217 4.87252 7.2173C5.01738 7.07243 5.19302 7 5.39942 7C5.60582 7 5.78145 7.07243 5.92632 7.2173L9.99942 11.2904L14.0725 7.2173C14.211 7.07885 14.385 7.00802 14.5946 7.0048C14.8042 7.0016 14.9814 7.07243 15.1263 7.2173C15.2712 7.36217 15.3436 7.53781 15.3436 7.74422C15.3436 7.95062 15.2712 8.12626 15.1263 8.27112L10.6321 12.7653C10.5385 12.8589 10.4398 12.925 10.3359 12.9634C10.2321 13.0019 10.1199 13.0211 9.99942 13.0211Z"
                    fill="#131316"
                  />
                </g>
              </svg>
            </Button>
            <Button
              w="8.75rem"
              h="3rem"
              borderRadius="6.25rem"
              fontWeight="600"
            >
              Export list
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1_1419"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#C4C4C4" />
                </mask>
                <g mask="url(#mask0_1_1419)">
                  <path
                    d="M10.0001 12.6875L7.04175 9.75L7.64591 9.14583L9.58341 11.0833V3.875H10.4167V11.0833L12.3542 9.14583L12.9584 9.75L10.0001 12.6875ZM5.52091 15.8333C5.13203 15.8333 4.80925 15.705 4.55258 15.4483C4.29536 15.1911 4.16675 14.8681 4.16675 14.4792V12.5H5.00008V14.4792C5.00008 14.6181 5.0523 14.7394 5.15675 14.8433C5.26064 14.9478 5.38203 15 5.52091 15H14.4792C14.6181 15 14.7395 14.9478 14.8434 14.8433C14.9479 14.7394 15.0001 14.6181 15.0001 14.4792V12.5H15.8334V14.4792C15.8334 14.8681 15.7051 15.1911 15.4484 15.4483C15.1912 15.705 14.8681 15.8333 14.4792 15.8333H5.52091Z"
                    fill="#131316"
                  />
                </g>
              </svg>
            </Button>
          </Flex>
        </Flex>
        <Box mt="2rem">
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.title} {...transaction} />
          ))}
        </Box>
      </Box>
      <FilterDrawer
        isOpen={isFilterOpen}
        btnRef={filterBtnRef}
        onClose={onFilterClose}
      />
    </>
  );
};

export default AccountTransactions;
