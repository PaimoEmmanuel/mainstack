import { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import Logo from "../logo";
import {
  Analytics,
  Apps,
  CRM,
  Chat,
  Hamburger,
  HomeIcon,
  Notification,
  Revenue,
} from "./icons";
import AppsList from "./apps-list";
import NavMenuButton from "./nav-menu-button";
import { useQuery } from "react-query";
import ProfileMenu from "./profile-menu";

interface INavbarProps {}

const navMenu = [
  { title: "Home", Icon: HomeIcon },
  { title: "Analytics", Icon: Analytics },
  { title: "Revenue", Icon: Revenue },
  { title: "CRN", Icon: CRM },
  { title: "Apps", Icon: Apps },
];
const Navbar: React.FunctionComponent<INavbarProps> = () => {
  const [activeLinkIndex] = useState(2);
  const { isLoading, error, data } = useQuery("get_user_data", () =>
    fetch("https://fe-task-api.mainstack.io/user").then((res) => res.json())
  );

  if (error) return "An error has occurred, please try again.";
  return (
    <Box pos="fixed" h="5.125rem" w="100%" bgColor="white" zIndex="99">
      <Flex
        pos="fixed"
        w="calc(100% - 3rem)"
        boxShadow="0px 2px 4px 0px rgba(45, 59, 67, 0.05), 0px 2px 6px 0px rgba(45, 59, 67, 0.06)"
        m="1rem"
        p="0.75rem 1.5rem"
        borderRadius="6.25rem"
        zIndex="99"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/">
          <Logo />
        </Link>
        <Flex gap="1.25rem">
          {navMenu.map((menu, index) => (
            <Menu key={menu.title}>
              {({ isOpen }) => (
                <>
                  <NavMenuButton
                    index={index}
                    menu={menu}
                    activeLinkIndex={activeLinkIndex}
                    isOpen={isOpen}
                  />
                  {index === 4 ? <AppsList /> : null}
                </>
              )}
            </Menu>
          ))}
        </Flex>
        <Flex alignItems="center">
          <Box as="button" mr="1.5rem">
            <Notification />
          </Box>
          <Box as="button" mr="1rem">
            <Chat />
          </Box>
          <Menu>
            <MenuButton
              sx={{
                span: {
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  p: "0.25rem 0.75rem 0.25rem 0.3125rem",
                  bgColor: "gray.100",
                  borderRadius: "6.5rem",
                },
              }}
            >
              <Skeleton isLoaded={!isLoading}>
                <Text
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  color="white"
                  fontSize="0.875rem"
                  fontWeight="600"
                  h="2rem"
                  w="2rem"
                  borderRadius="100%"
                  bg="linear-gradient(139deg, #5C6670 2.33%, #131316 96.28%)"
                >
                  {data?.first_name[0]} {data?.last_name[0]}
                </Text>
              </Skeleton>

              <Hamburger />
            </MenuButton>
            <ProfileMenu
              firstName={data?.first_name|| "O"}
              lastName={data?.last_name|| "J"}
              email={data?.email}
            />
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
