import { useContext, useState } from "react";
import { FilterContext } from "../contexts/filter";

const filterBy = {
  days: ["Today", "Last 7 days", "This month", "Last 3 months"],
};
const transactionTypes = [
  "Store Transactions",
  "Get Tipped",
  "Withdrawals",
  "Chargebacks",
  "Cashbacks",
  "Refer & Earn",
];
const transactionStatuses = ["Successful", "Pending", "Failed"];

const useFilter = () => {
  const { setNoOfFilters } = useContext(FilterContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleDateChage = (index: 0 | 1, date: Date) => {
    if (index === 0) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };
  const [selectedTypes, setSelectedTypes] = useState([transactionTypes[0]]);
  const handleTypeSelectChange = (type: string, checked: boolean) => {
    if (checked) {
      if (!selectedTypes.includes(type)) {
        setSelectedTypes([...selectedTypes, type]);
      }
    } else {
      const types = [...selectedTypes];
      setSelectedTypes(types.filter((item) => item !== type));
    }
  };

  const [selectedStatuses, setSelectedStatuses] = useState([
    transactionStatuses[0],
  ]);
  const handleStatusSelectChange = (status: string, checked: boolean) => {
    if (checked) {
      if (!selectedStatuses.includes(status)) {
        setSelectedStatuses([...selectedStatuses, status]);
      }
    } else {
      const statuses = [...selectedStatuses];
      setSelectedStatuses(statuses.filter((item) => item !== status));
    }
  };
  const clearFilter = () => {
    setStartDate(new Date());
    setEndDate(new Date());
    setSelectedTypes([transactionTypes[0]]);
    setSelectedStatuses([transactionStatuses[0]]);
    setNoOfFilters(0);
  };
  const handleApplyFilter = () => {
    let noOfFilters = 0;
    if (
      startDate.toString().substring(0, 15) !==
        new Date().toString().substring(0, 15) ||
      endDate.toString().substring(0, 15) !==
        new Date().toString().substring(0, 15)
    ) {
      noOfFilters++;
    }
    if (
      selectedStatuses.length > 1 ||
      selectedStatuses[0] !== transactionStatuses[0]
    ) {
      noOfFilters++;
    }
    if (selectedTypes.length > 1 || selectedTypes[0] !== transactionTypes[0]) {
      noOfFilters++;
    }
    // console.log(startDate.toString());
    setNoOfFilters(noOfFilters);
  };
  return {
    filterBy,
    transactionTypes,
    transactionStatuses,
    startDate,
    endDate,
    handleDateChage,
    selectedTypes,
    handleTypeSelectChange,
    selectedStatuses,
    handleStatusSelectChange,
    clearFilter,
    handleApplyFilter,
  };
};

export default useFilter;
