import { Box, Flex, Text } from "@chakra-ui/react";
import * as React from "react";

export interface ITransactionItemProps {
  type: "incoming" | "outgoing";
  title: string;
  clientName: string;
  amount: string;
  date: string;
}

const TransactionItem: React.FunctionComponent<ITransactionItemProps> = ({
  type,
  title,
  clientName,
  amount,
  date,
}) => {
  return (
    <Flex justifyContent="space-between" mb="1.5rem">
      <Flex gap="0.875rem" alignItems="center">
        <TransactionIcon transactionType={type} />
        <Box>
          <Text fontWeight="500">{title}</Text>
          <Text fontWeight="500" fontSize="0.875rem">
            {clientName}
          </Text>
        </Box>
      </Flex>
      <Box>
        <Text fontWeight="700" textAlign="right">
          {amount}
        </Text>
        <Text fontWeight="500" fontSize="0.875rem" textAlign="right">
          {date}
        </Text>
      </Box>
    </Flex>
  );
};

export default TransactionItem;

const TransactionIcon = ({
  transactionType,
}: {
  transactionType: ITransactionItemProps["type"];
}) => (
  <svg
    width="49"
    height="49"
    viewBox="0 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="24.5"
      cy="24.5"
      r="24"
      fill={transactionType === "incoming" ? "#E3FCF2" : "#F9E3E0"}
    />
    <mask
      id="mask0_1387_243"
      maskUnits="userSpaceOnUse"
      x="14"
      y="14"
      width="21"
      height="21"
    >
      <rect x="14.5" y="14.5" width="20" height="20" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0_1387_243)">
      {transactionType === "incoming" ? (
        <path
          d="M19.25 29.75V22.25H20.0833V28.3333L30.1667 18.25L30.75 18.8333L20.6667 28.9167H26.75V29.75H19.25Z"
          fill="#075132"
        />
      ) : (
        <path
          d="M18.9998 30.5833L18.4165 30L28.4998 19.9167H22.4165V19.0833H29.9165V26.5833H29.0832V20.5L18.9998 30.5833Z"
          fill="#961100"
        />
      )}
    </g>
  </svg>
);
