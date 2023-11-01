import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "*, html, body": {
        margin: "0",
        padding: "0",
      },
    },
  },
  fonts: {
    heading: `'Degular', sans-serif`,
    body: `'Degular', sans-serif`,
  },
  colors: {
    dark: {
      100: "#131316",
    },
    gray: {
      100: "#EFF1F6",
      200: "#363637",
      400: "#56616B",
    },
  },
});

export default theme;
