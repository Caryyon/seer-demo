import { Button } from "@blueprintjs/core";
import styled, { css } from "styled-components";
// consuming the blueprintjs button component
// this allows me to use the theme being passed down from
// the themeprovider
//
// this allows me to modify the attributes as well as the styles
// based on the props
const SeerButton = styled(Button).attrs((props) => ({}))`
  //
  ${(props) => css``}
`;
export default SeerButton;
