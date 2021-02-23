export const lightTheme = {
  body: "#DAE0E6",
  block: "#fff",
  bg: {
    primary: "#0079D3",
    secondary: "#fff",
    hover: {
      primary: "#1784ff",
      secondary: "#d6e6ff",
    },
  },
  color: {
    primary: "#fff",
    secondary: "#0079D3",
  },
  fontColor: {
    primary: "#000",
  },
  borderColor: "#ccc",
};

export const darkTheme = {
  body: "#000000",
  block: "#1A1A1B",
  bg: {
    primary: "#939393",
    secondary: "#000",
    hover: {
      primary: "#595959",
      secondary: "#444445",
    },
  },
  color: {
    primary: "#fff",
    secondary: "#fff",
  },
  fontColor: {
    primary: "#fff",
  },
  borderColor: "#343536",
};

export type MyTheme = typeof lightTheme;
