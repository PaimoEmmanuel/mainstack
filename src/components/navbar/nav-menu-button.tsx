import { Flex, Icon, MenuButton, Text } from "@chakra-ui/react";
import * as React from "react";

interface IMenuButtonProps {
  menu: { title: string; Icon: () => JSX.Element };
  index: number;
  activeLinkIndex: number;
  isOpen: boolean;
}

const NavMenuButton: React.FunctionComponent<IMenuButtonProps> = ({
  menu,
  index,
  activeLinkIndex,
  isOpen,
}) => {
  return (
    <MenuButton
      _hover={{
        bgColor: activeLinkIndex === index || isOpen ? "dark.100" : "gray.100",
      }}
      bgColor={activeLinkIndex === index || isOpen ? "dark.100" : "white"}
      borderRadius="6.25rem"
      overflow="hidden"
      sx={{
        span: {
          display: "flex",
          gap: "0.25rem",
          p: "0.5rem 0.875rem",
          alignItems: "center",
          svg: {
            path: {
              fill: activeLinkIndex === index || isOpen ? "white" : "gray.400",
            },
          },
        },
      }}
    >
      <menu.Icon />
      <Text
        fontWeight="600"
        color={activeLinkIndex === index || isOpen ? "white" : "gray.400"}
        mt="0.125rem"
      >
        {menu.title}
      </Text>
      {index === 4 && isOpen ? (
        <Flex
          px="0.875rem"
          bgColor="dark.100"
          color="white"
          fontWeight="600"
          gap="0.25rem"
          borderLeftWidth="1px"
          ml="1.125rem"
          borderLeftColor="gray.200"
          alignItems="center"
        >
          <Text>Link in Bio</Text>
          <Icon
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_183_1794"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect width="20" height="20" fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask0_183_1794)">
              <path
                d="M9.99942 13.0211C9.8789 13.0211 9.76673 13.0019 9.66289 12.9634C9.55904 12.925 9.46032 12.8589 9.36674 12.7653L4.87252 8.27112C4.73405 8.13267 4.66322 7.95864 4.66002 7.74902C4.6568 7.53941 4.72763 7.36217 4.87252 7.2173C5.01738 7.07243 5.19302 7 5.39942 7C5.60582 7 5.78145 7.07243 5.92632 7.2173L9.99942 11.2904L14.0725 7.2173C14.211 7.07885 14.385 7.00802 14.5946 7.0048C14.8042 7.0016 14.9814 7.07243 15.1263 7.2173C15.2712 7.36217 15.3436 7.53781 15.3436 7.74422C15.3436 7.95062 15.2712 8.12626 15.1263 8.27112L10.6321 12.7653C10.5385 12.8589 10.4398 12.925 10.3359 12.9634C10.2321 13.0019 10.1199 13.0211 9.99942 13.0211Z"
                fill="white"
              />
            </g>
          </Icon>
        </Flex>
      ) : null}
    </MenuButton>
  );
};

export default NavMenuButton;
