import styled from '@emotion/styled/macro';
import * as theme from './styles/theme';

const Input = styled.input({
  padding: '10px 14px',
  fontSize: 14,
  fontWeight: 400,
  border: theme.common.border,
  borderRadius: 6,
  color: theme.colors.darkBlue,
  '&:focus': {
    outlineColor: theme.colors.persianBlue,
  },
});

export { Input };
