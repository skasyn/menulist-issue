import React from 'react';
import {
  TabList as ReachTabList,
  TabPanel as ReachTabPanel,
} from '@reach/tabs';
import styled from '@emotion/styled/macro';
import * as theme from './styles/theme';

const TabList = (styled(ReachTabList)<{ children: React.ReactNode }>({
  background: 'transparent',
  margin: '0 -8px',
  '& > *': {
    margin: '0 8px',
  },
  '> [data-reach-tab]': {
    fontSize: '1.5rem',
    color: theme.colors.marsGray,
    outline: 'none',
    fontWeight: 500,
    border: 'none',
    padding: 0,
    borderBottom: `4px solid transparent`,
  },
  '> [data-reach-tab][data-selected]': {
    borderBottom: `4px solid ${theme.colors.persianBlue}`,
    color: theme.colors.persianBlue,
  },
}) as unknown) as typeof ReachTabList; // trix to avoid a bug where styled(ReachTabList) can't accept children

const TabPanel = styled(ReachTabPanel)({
  outline: 'none',
});

export * from '@reach/tabs';
export { TabList, TabPanel };
