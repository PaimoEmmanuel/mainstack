import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import * as React from "react";

interface ILineChartProps {}

const AccountChart: React.FunctionComponent<ILineChartProps> = () => {
  return (
    <Box mt="3rem">
      <Icon
        width={{ base: "100%", lg: "767px" }}
        height="178"
        viewBox="0 0 767 178"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 177L166.916 21.336C211.748 -20.7264 285.462 6.79004 292.871 67.8171V67.8171C293.287 71.2484 293.981 74.6685 294.939 77.9895V77.9895C308.165 123.839 364.75 140.125 400.326 108.322L480.44 36.7048C538.095 -14.8352 627.475 -6.14781 674.126 55.5303L766 177"
          stroke="#FF5403"
          strokeLinecap="round"
        />
      </Icon>
      <Icon
        width={{ base: "100%", lg: "771px" }}
        height="6"
        viewBox="0 0 771 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM765.541 3C765.541 4.47276 766.735 5.66667 768.208 5.66667C769.68 5.66667 770.874 4.47276 770.874 3C770.874 1.52724 769.68 0.333333 768.208 0.333333C766.735 0.333333 765.541 1.52724 765.541 3ZM3 3.5L768.208 3.5V2.5L3 2.5V3.5Z"
          fill="#DBDEE6"
        />
      </Icon>
      <Flex
        color="gray.500"
        fontSize="0.875rem"
        justifyContent="space-between"
        fontWeight="500"
      >
        <Text>Apr 1 , 2022</Text>
        <Text>Apr 30 , 2022</Text>
      </Flex>
    </Box>
  );
};

export default AccountChart;
