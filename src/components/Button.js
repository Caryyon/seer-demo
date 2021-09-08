import { Button } from "@blueprintjs/core";
import styled from "styled-components";
// consuming the blueprintjs button component
// this allows me to use the theme being passed down from
// the themeprovider
//
// this allows me to modify the attributes as well as the styles
// based on the props
const SeerButton = styled(Button)`
  // rasies the level of specificity
  &&& {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.secondary};
    span {
      color: ${({ theme }) => theme.secondary};
    }
  }
`;
export default SeerButton;
