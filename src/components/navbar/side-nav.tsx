import { Box, Flex, Tooltip, VStack } from "@chakra-ui/react";
import { BioLink, Invoicing, MediaKit, Store } from "./icons";

const links = [
  { title: "Link in Bio", Icon: BioLink },
  { title: "Store", Icon: Store },
  { title: "Media Kit", Icon: MediaKit },
  { title: "Invoiving", Icon: Invoicing },
];
const SideNav: React.FunctionComponent = () => {
  return (
    <Flex
      as="aside"
      pos="fixed"
      top="0"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <VStack
        borderRadius="6.25rem"
        border="2px solid #FFF"
        boxShadow="0px 6px 12px 0px rgba(92, 115, 131, 0.08), 0px 4px 8px 0px rgba(92, 115, 131, 0.08)"
        p="0.75rem"
        gap="1.5rem"
        sx={{ svg: { filter: "grayscale(1)" } }}
      >
        {links.map((link) => (
          <Tooltip
            key={link.title}
            hasArrow
            label={link.title}
            bg="dark.100"
            color="white"
            placement="right"
            borderRadius="0.375rem"
            py="0.5rem"
            fontSize="1rem"
            px="0.75rem"
            ml="1.5rem"
          >
            <Box
              key={link.title}
              as="button"
              _hover={{ svg: { filter: "none" } }}
              sx={{ svg: { transition: "all .4s" } }}
            >
              <link.Icon />
            </Box>
          </Tooltip>
        ))}
      </VStack>
    </Flex>
  );
};

export default SideNav;
