import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from "@chakra-ui/react";
import DateRangePicker from "./date-range";
import CheckOptions from "./check-options";
import useFilter from "../../hooks/use-filters";

interface IFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.MutableRefObject<null>;
}

const FilterDrawer: React.FC<IFilterDrawerProps> = ({
  isOpen,
  onClose,
  btnRef,
}) => {
  const {
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
  } = useFilter();
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent
        minW="28.5rem"
        m="12px"
        box-shadow="0px 8px 16px 4px rgba(188, 196, 204, 0.10), 0px 12px 24px 0px rgba(219, 222, 229, 0.10), 0px 16px 32px 0px rgba(219, 222, 229, 0.10)"
        borderRadius="1.25rem"
        backdropFilter="blur(8px)"
        p="1.5rem"
      >
        <DrawerCloseButton />
        <DrawerHeader p="0" mb="1.25rem">
          Filter
        </DrawerHeader>

        <DrawerBody p="0">
          <Flex justifyContent="space-between">
            {filterBy.days.map((day) => (
              <Text
                as="button"
                key={day}
                fontSize="0.85rem"
                fontWeight="600"
                py="0.4375rem"
                px="1rem"
                borderWidth="1px"
                borderColor="gray.100"
                borderRadius="6.25rem"
                _hover={{ bgColor: "gray.100" }}
              >
                {day}
              </Text>
            ))}
          </Flex>
          <Box mt="1.75rem">
            <Text mb="0.5">Date Range</Text>
            <DateRangePicker
              startDate={startDate}
              endDate={endDate}
              onDateChange={handleDateChage}
            />
          </Box>
          <Box mt="1.75rem">
            <Text mb="0.5">Transaction Type</Text>
            <CheckOptions
              options={transactionTypes}
              selectedItems={selectedTypes}
              handleItemSelectChange={handleTypeSelectChange}
            />
          </Box>
          <Box mt="1.75rem">
            <Text mb="0.5">Transaction Status</Text>
            <CheckOptions
              options={transactionStatuses}
              selectedItems={selectedStatuses}
              handleItemSelectChange={handleStatusSelectChange}
            />
          </Box>
        </DrawerBody>

        <DrawerFooter gap="0.75rem" p="0">
          <Button
            variant="outline"
            fontWeight="600"
            onClick={() => {
              clearFilter();
              onClose();
            }}
            h="3rem"
            w="100%"
            borderRadius="6.25rem"
            borderColor="gray.100"
          >
            Clear
          </Button>
          <Button
            h="3rem"
            w="100%"
            borderRadius="6.25rem"
            bgColor="dark.100"
            fontWeight="600"
            color="white"
            onClick={() => {
              handleApplyFilter();
              onClose();
            }}
          >
            Apply
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;
