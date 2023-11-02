import { useQuery } from "react-query";

const useWalletQuery = () => {
  const results = useQuery("get_wallet", () =>
    fetch("https://fe-task-api.mainstack.io/wallet").then((res) => res.json())
  );
  return results;
};

export default useWalletQuery;
