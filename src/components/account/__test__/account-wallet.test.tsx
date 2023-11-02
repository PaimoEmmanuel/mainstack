import "@testing-library/jest-dom/extend-expect";
import AccountWallet from "../account-wallet";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, screen } from "@testing-library/react";
import useWalletQuery from "../../../hooks/use-wallet";

const mockedUseWalletQuery = useWalletQuery;
jest.mock("../../../hooks/use-wallet");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default wrapper;

describe("Users component", () => {
  it("Displays the loading view", () => {
    mockedUseWalletQuery.mockImplementation(() => ({
      isLoading: true,
    }));
    render(<AccountWallet />, { wrapper });
    expect(screen.getByTestId("wallet-loading-1")).toBeInTheDocument();
  });

  it("Displays the error message", () => {
    mockedUseWalletQuery.mockImplementation(() => ({
      error: "error",
    }));
    render(<AccountWallet />, { wrapper });
    expect(screen.getByTestId("wallet-error")).toBeInTheDocument();
    expect(
      screen.getByText(/An error has occurred, please try again/i)
    ).toBeVisible();
  });

  it("should render users list", () => {
    mockedUseWalletQuery.mockImplementation(() => ({
      status: "success",
      data: {
        balance: 750.56,
        total_payout: 500,
        total_revenue: 1250.56,
        pending_payout: 0,
        ledger_balance: 500,
      },
    }));
    render(<AccountWallet />, { wrapper });
    expect(screen.getByText(/USD 1250.56/i)).toBeVisible();
    expect(screen.getByText(/USD 0/i)).toBeVisible();
  });
});
