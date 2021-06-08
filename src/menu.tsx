import {
  MenuItem as ReachMenuItem,
  MenuList as ReachMenuList,
} from '@reach/menu-button';
import '@reach/menu-button/styles.css';
import styled from '@emotion/styled/macro';
import * as theme from './styles/theme';

const MenuItem = styled(ReachMenuItem)({
  padding: '8px 16px',
  color: theme.colors.darkBlue,
  '&[data-selected]': {
    background: theme.colors.mercureGray,
    color: theme.colors.darkBlue,
    outline: theme.colors.persianBlue,
  },
  ':hover': {
    color: 'inherit',
    background: theme.colors.mercureGray,
    transition: '0.2s',
  },
});

const MenuList = styled(ReachMenuList)({
  padding: '8px 0',
  borderRadius: 6,
  boxShadow: '0px 8px 24px rgba(15, 21, 84, 0.05)',
  border: 'none',
});

export { MenuItem, MenuList };
