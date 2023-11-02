import { Box, Flex, MenuItem, MenuList, Text } from "@chakra-ui/react";
import * as React from "react";
import {
  Integrations,
  PurchaseHistory,
  ReferAndEarn,
  ReportBug,
  Settings,
  Signout,
  SwitchAccount,
} from "./icons";

interface IProfileMenuProps {
  firstName: string;
  lastName: string;
  email: string;
}

const profileMenu = [
  { title: "Settings", Icon: Settings },
  { title: "Purchase History", Icon: PurchaseHistory },
  { title: "Refer and Earn", Icon: ReferAndEarn },
  { title: "Integrations", Icon: Integrations },
  { title: "Report Bug", Icon: ReportBug },
  { title: "Switch Account", Icon: SwitchAccount },
  { title: "Sign Out", Icon: Signout },
];
const ProfileMenu: React.FunctionComponent<IProfileMenuProps> = ({
  firstName,
  lastName,
  email,
}) => {
  return (
    <MenuList
      borderRadius="1.25rem"
      px="0.25rem"
      border="none"
      boxShadow="0px 4px 8px 0px rgba(45, 59, 67, 0.05), 0px 6px 12px 0px rgba(45, 59, 67, 0.06)"
      mt="1rem"
      minW="23.125rem"
    >
      <Flex
        alignItems="center"
        gap="0.75rem"
        pt="1.5rem"
        pb="0.875rem"
        px="1rem"
      >
        <Text
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="white"
          fontSize="1.125rem"
          gap="0.75rem"
          fontWeight="600"
          h="2rem"
          w="2rem"
          borderRadius="100%"
          bg="linear-gradient(139deg, #5C6670 2.33%, #131316 96.28%)"
        >
          {firstName[0]} {lastName[0]}
        </Text>
        <Box>
          <Text fontSize="1.25rem" fontWeight="600">
            {firstName} {lastName}
          </Text>
          <Text fontSize="0.875rem" fontWeight="600" color="gray.400">
            {email}
          </Text>
        </Box>
      </Flex>
      {profileMenu.map((profile) => (
        <MenuItem
          key={profile.title}
          px="1rem"
          py="0.875rem"
          gap="0.75rem"
          mb="0.5rem"
        >
          <profile.Icon />
          <Text fontWeight="600">{profile.title}</Text>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default ProfileMenu;
