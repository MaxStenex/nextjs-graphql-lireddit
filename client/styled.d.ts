import "styled-components";
import { MyTheme } from "./src/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
