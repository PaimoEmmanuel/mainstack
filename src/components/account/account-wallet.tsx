import { Box, Flex, Icon, Skeleton, Text } from "@chakra-ui/react";
import useWalletQuery from "../../hooks/use-wallet";

const AccountWallet = () => {
  const { isLoading, error, data } = useWalletQuery();

  if (error)
    return (
      <Text data-testid="wallet-error">
        An error has occurred, please try again.
      </Text>
    );
  const accountWalletData = [
    { title: "Ledger Balance", value: data?.ledger_balance },
    { title: "Total Payout", value: data?.total_payout },
    { title: "Total Revenue", value: data?.total_revenue },
    { title: "Pending Payout", value: data?.pending_payout },
  ];
  return (
    <Box minW="16.9375rem">
      {accountWalletData?.map((data, index) => (
        <Box key={data?.title} mb="2rem" data-testid={`wallet-item-${index}`}>
          <Flex justifyContent="space-between" alignItems="center" mb="0.625">
            <Text fontSize="0.875rem" fontWeight="500" color="gray.400">
              {data?.title}
            </Text>
            <Icon
              width="1.25rem"
              height="1.25rem"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1_1444"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect width="20" height="20" fill="#C4C4C4" />
              </mask>
              <g mask="url(#mask0_1_1444)">
                <path
                  d="M10.0002 13.9583C10.1773 13.9583 10.3257 13.8984 10.4454 13.7786C10.5651 13.6588 10.6249 13.5104 10.6249 13.3333V9.79161C10.6249 9.61454 10.565 9.46611 10.4451 9.34631C10.3253 9.22652 10.1768 9.16663 9.99963 9.16663C9.82246 9.16663 9.67405 9.22652 9.5544 9.34631C9.43475 9.46611 9.37492 9.61454 9.37492 9.79161V13.3333C9.37492 13.5104 9.43484 13.6588 9.55467 13.7786C9.67452 13.8984 9.82302 13.9583 10.0002 13.9583ZM9.9999 7.74036C10.1906 7.74036 10.3505 7.67586 10.4795 7.54685C10.6085 7.41785 10.673 7.258 10.673 7.06729C10.673 6.8766 10.6085 6.71674 10.4795 6.58773C10.3505 6.45873 10.1906 6.39423 9.9999 6.39423C9.80919 6.39423 9.64934 6.45873 9.52034 6.58773C9.39134 6.71674 9.32684 6.8766 9.32684 7.06729C9.32684 7.258 9.39134 7.41785 9.52034 7.54685C9.64934 7.67586 9.80919 7.74036 9.9999 7.74036ZM10.0013 17.9166C8.90635 17.9166 7.87715 17.7088 6.91371 17.2933C5.95025 16.8777 5.11218 16.3138 4.3995 15.6014C3.68681 14.889 3.12259 14.0513 2.70686 13.0883C2.29112 12.1253 2.08325 11.0963 2.08325 10.0014C2.08325 8.90641 2.29103 7.87722 2.70659 6.91377C3.12214 5.95031 3.6861 5.11224 4.39846 4.39956C5.11084 3.68687 5.94854 3.12265 6.91156 2.70692C7.87458 2.29118 8.90356 2.08331 9.9985 2.08331C11.0934 2.08331 12.1226 2.29109 13.0861 2.70665C14.0495 3.1222 14.8876 3.68616 15.6003 4.39852C16.313 5.1109 16.8772 5.9486 17.2929 6.91163C17.7087 7.87464 17.9165 8.90362 17.9165 9.99856C17.9165 11.0935 17.7088 12.1227 17.2932 13.0861C16.8777 14.0496 16.3137 14.8877 15.6013 15.6004C14.889 16.3131 14.0513 16.8773 13.0882 17.293C12.1252 17.7087 11.0962 17.9166 10.0013 17.9166ZM9.9999 16.6666C11.861 16.6666 13.4374 16.0208 14.7291 14.7291C16.0207 13.4375 16.6666 11.8611 16.6666 9.99996C16.6666 8.13885 16.0207 6.56246 14.7291 5.27079C13.4374 3.97913 11.861 3.33329 9.9999 3.33329C8.13879 3.33329 6.5624 3.97913 5.27073 5.27079C3.97906 6.56246 3.33323 8.13885 3.33323 9.99996C3.33323 11.8611 3.97906 13.4375 5.27073 14.7291C6.5624 16.0208 8.13879 16.6666 9.9999 16.6666Z"
                  fill="#888F95"
                />
              </g>
            </Icon>
          </Flex>
          <Skeleton
            isLoaded={!isLoading}
            data-testid={`wallet-loading-${index}`}
          >
            <Text fontSize="1.75rem" fontWeight="700" h="2rem">
              USD {data.value}
            </Text>
          </Skeleton>
        </Box>
      ))}
    </Box>
  );
};

export default AccountWallet;
