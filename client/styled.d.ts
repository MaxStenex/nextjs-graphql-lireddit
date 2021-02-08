import "styled-components";
import { MyTheme } from "./src/styles/globalStyles";

declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
