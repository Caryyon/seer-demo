import { Button } from "@blueprintjs/core";
import styled, { css } from "styled-components";
// consuming the blueprint js button component
// this also allows for adding some type checking
// on specific props the conponent will handle
const SeerButton = styled(Button)<{ intent: string }>``;
export default SeerButton;
