import {
  Box,
  Button,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import * as React from "react";

interface ICheckOptionsProps {
  options: string[];
  selectedItems: string[];
  handleItemSelectChange: (type: string, checked: boolean) => void;
}

const CheckOptions: React.FunctionComponent<ICheckOptionsProps> = ({
  options,
  selectedItems,
  handleItemSelectChange,
}) => {
  return (
    <Box
      sx={{
        '[data-popper-placement^="bottom"]': { w: "calc(100% - 3rem)" },
        '[aria-expanded="true"]': { border: "3px solid", bg: "gray.100" },
      }}
    >
      <Menu closeOnSelect={false}>
        <MenuButton
          as={Button}
          w="100%"
          bgColor="gray.100"
          textAlign="left"
          fontSize="0.875rem"
          fontWeight="500"
          borderRadius="0.75rem"
          h="3rem"
        >
          {selectedItems.join(", ")}
        </MenuButton>
        <MenuList
          minWidth="240px"
          display="flex"
          flexDir="column"
          border="none"
          boxShadow="0px 6px 12px 0px rgba(92, 115, 131, 0.08), 0px 4px 8px 0px rgba(92, 115, 131, 0.08)"
          borderRadius="0.75rem"
          p="0.5rem"
          w="100%"
        >
          {options.map((option) => (
            <Checkbox
              key={option}
              padding="0.875rem"
              fontWeight="600"
              isChecked={selectedItems.includes(option)}
              gap="0.25rem"
              colorScheme="blackAlpha"
              value={option}
              onChange={(e) =>
                handleItemSelectChange(option, e.target.checked)
              }
            >
              {option}
            </Checkbox>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default CheckOptions;
