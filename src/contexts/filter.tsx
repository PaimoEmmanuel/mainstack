import { ReactElement, createContext, useState } from "react";

const initialData = {
  data: { noOfFilters: 0 },
  setNoOfFilters: (noOfFilters: number) => {
    console.log(noOfFilters);
  },
};

export const FilterContext = createContext(initialData);

const FilterProvider = ({ children }: { children: ReactElement }) => {
  const [filterData, setFilterData] = useState(initialData.data);
  const setNoOfFilters = (noOfFilters: number) => {
    setFilterData({ ...filterData, noOfFilters });
  };
  return (
    <FilterContext.Provider value={{ data: filterData, setNoOfFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
