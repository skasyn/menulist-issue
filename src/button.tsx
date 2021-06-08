import styled from '@emotion/styled/macro';
import * as theme from './styles/theme';
import { CSSObject } from '@emotion/react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'transparent';
export type ButtonSize = 'small' | 'default' | 'large';

const buttonVariants: Record<ButtonVariant, CSSObject> = {
  primary: {
    backgroundColor: theme.colors.persianBlue,
    color: 'white',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: '#12069d',
    },
  },
  secondary: {
    backgroundColor: 'white',
    border: `1px solid ${theme.colors.persianBlue}`,
    color: theme.colors.persianBlue,
    '&:hover': {
      color: 'white',
      backgroundColor: theme.colors.persianBlue,
    },
  },
  tertiary: {
    backgroundColor: '#F5F4FB',
    color: '#9792D6',
    '&:hover': {
      color: theme.colors.persianBlue,
    },
  },
  danger: {
    color: 'white',
    backgroundColor: theme.colors.redDanger,
  },
  transparent: {
    color: theme.colors.persianBlue,
    background: 'transparent',
  },
};

const buttonSizes: Record<ButtonSize, CSSObject> = {
  small: {
    textTransform: 'capitalize',
    padding: '8px 12px',
  },
  default: {
    textTransform: 'uppercase',
    padding: '10px 16px',
    fontSize: 15,
  },
  large: {
    textTransform: 'uppercase',
    padding: '12px 16px',
    fontSize: 16,
  },
};

const Button = styled.button<{ variant?: ButtonVariant; size?: ButtonSize }>(
  {
    borderRadius: 6,
    border: 'none',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    transition: '0.3s',
    '&:focus': {
      outlineColor: theme.colors.persianBlue,
    },
    '&:disabled': {
      opacity: 0.3,
      cursor: 'not-allowed',
    },
  },
  ({ variant = 'primary' }) => buttonVariants[variant],
  ({ size = 'default' }) => buttonSizes[size]
);

Button.defaultProps = {
  type: 'button',
};

export { Button };
