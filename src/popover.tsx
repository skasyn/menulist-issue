import ReachPopover, { positionDefault } from '@reach/popover';
import styled from '@emotion/styled/macro';
import * as theme from './styles/theme';

const Popover = styled(ReachPopover)({
  background: 'white',
  boxShadow: '0px 8px 24px rgba(15, 21, 84, 0.05)',
  borderRadius: 12,
  border: theme.common.border,
  padding: 16,
});

Popover.defaultProps = {
  position: positionDefault,
};

export { Popover };
