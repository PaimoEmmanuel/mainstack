import { Flex } from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

interface IDateRangePickerProps {
  startDate: Date;
  endDate: Date;
  onDateChange: (index: 0 | 1, date: Date) => void;
}

const DateRangePicker: React.FC<IDateRangePickerProps> = ({
  startDate,
  endDate,
  onDateChange,
}) => {
  return (
    <Flex
      gap="0.3125rem"
      sx={{
        input: {
          borderColor: "gray.100",
          bg: "gray.100",
          borderRadius: "0.75rem",
        },
        '[aria-expanded="true"]': {
          border: "3px solid",
        },
        '[aria-describedby^="popover-body-"]': {
          border: "none",
        },
        ".chakra-popover__popper": {
          width: "calc(100% - 3rem)",
        },
        ".chakra-stack": {
          width: "100%",
          borderRadius: "1rem",
          border: "none",
          boxShadow:
            "0px 6px 12px 0px rgba(92, 115, 131, 0.08), 0px 4px 8px 0px rgba(92, 115, 131, 0.08)",
          ".chakra-stack": {
            justifyContent: "space-between",
            boxShadow: "none",
            padding: "0.5rem 1.5rem",
          },
          "*": { border: "none" },
          div: {
            width: "100%",
            gap: "0.75rem",
          },
          '[aria-label="Go back 1 month"]': { m: "0" },
          '[aria-label="Go forward 1 month"]': { m: "0" },
          button: {
            w: "2rem",
            h: "2rem",
            m: "auto",
            fontWeight: "600",
            borderRadius: "50%",
            _hover: {
              border: "1px solid",
              bgColor: "white",
              borderColor: "gray.400",
            },
          },
          '[aria-pressed="true"]': {
            bgColor: "dark.100",
            color: "white",
            borderRadius: "50%",
          },
          ".chakra-heading": {
            fontSize: "0.875rem",
            fontWeight: "600",
          },
          '[aria-label="Go back 12 months"]': {
            display: "none",
          },
          '[aria-label="Go forward 12 months"]': {
            display: "none",
          },
        },
        ".chakra-popover__body": { padding: "0" },
      }}
    >
      <SingleDatepicker
        name="start-date-input"
        date={startDate}
        onDateChange={(e) => {
          onDateChange(0, e);
        }}
      />
      <SingleDatepicker
        name="end-date-input"
        date={endDate}
        onDateChange={(e) => {
          onDateChange(1, e);
        }}
      />
    </Flex>
  );
};

export default DateRangePicker;
