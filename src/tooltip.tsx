import ReachTooltip from "@reach/tooltip";
import styled from "@emotion/styled/macro";

const Tooltip = styled(ReachTooltip)({
  background: "hsla(0, 0%, 0%, 0.75)",
  color: "white",
  border: "none",
  borderRadius: "4px",
  padding: "0.5em 1em",
});

export { Tooltip };
