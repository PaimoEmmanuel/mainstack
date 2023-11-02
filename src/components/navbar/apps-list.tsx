import { Box, Icon, MenuItem, MenuList, Text } from "@chakra-ui/react";
import * as React from "react";
import { BioLink, Bookings, Invoicing, MediaKit, Store } from "./icons";

interface IAppsListProps {}

const appListData = [
  { title: "Link in Bio", desc: "Manage your Link in Bio", Icon: BioLink },
  { title: "Store", desc: "Manage your Store activities", Icon: Store },
  { title: "Media Kit", desc: "Manage your Media Kit", Icon: MediaKit },
  { title: "Invoicing", desc: "Manage your Invoices", Icon: Invoicing },
  { title: "Bookings", desc: "Manage your Bookings", Icon: Bookings },
];
const AppsList: React.FunctionComponent<IAppsListProps> = () => {
  return (
    <MenuList
      mt="0.5rem"
      boxShadow="0px 2px 4px 0px rgba(45, 59, 67, 0.05),
    0px 2px 6px 0px rgba(45, 59, 67, 0.06)"
      border="2px solid #FFF"
      ml="1rem"
      p="0.5rem"
      borderRadius="1.25rem"
      zIndex="5"
      w="25rem"
      bgColor="white"
    >
      {appListData.map((listItem) => (
        <MenuItem
          display="flex"
          key={listItem.title}
          as="button"
          w="100%"
          textAlign="left"
          p="1rem"
          borderRadius="1rem"
          borderWidth="1px"
          borderColor="white"
          transition="all .5s"
          _hover={{ borderColor: "gray.100", bgColor: "white" }}
          gap="0.75rem"
          alignItems="center"
          mb="0.5rem"
          className="group"
        >
          <Box
            borderWidth="1px"
            borderColor="gray.100"
            borderRadius="0.75rem"
            p="0.75rem"
          >
            <listItem.Icon />
          </Box>
          <Box>
            <Text fontWeight="600">{listItem.title}</Text>
            <Text fontSize="0.875rem" color="gray.400" fontWeight="500">
              {listItem.desc}
            </Text>
          </Box>
          <Icon
            _groupHover={{ display: "block" }}
            display="none"
            transition="all .5s"
            width="16px"
            height="16px"
            ml="auto"
            transform="rotate(270deg)"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_179_3116"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect width="20" height="20" fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask0_179_3116)">
              <path
                d="M9.99942 13.0211C9.8789 13.0211 9.76673 13.0019 9.66289 12.9634C9.55904 12.925 9.46032 12.8589 9.36674 12.7653L4.87252 8.27112C4.73405 8.13267 4.66322 7.95864 4.66002 7.74902C4.6568 7.53941 4.72763 7.36217 4.87252 7.2173C5.01738 7.07243 5.19302 7 5.39942 7C5.60582 7 5.78145 7.07243 5.92632 7.2173L9.99942 11.2904L14.0725 7.2173C14.211 7.07885 14.385 7.00802 14.5946 7.0048C14.8042 7.0016 14.9814 7.07243 15.1263 7.2173C15.2712 7.36217 15.3436 7.53781 15.3436 7.74422C15.3436 7.95062 15.2712 8.12626 15.1263 8.27112L10.6321 12.7653C10.5385 12.8589 10.4398 12.925 10.3359 12.9634C10.2321 13.0019 10.1199 13.0211 9.99942 13.0211Z"
                fill="#56616B"
              />
            </g>
          </Icon>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default AppsList;
