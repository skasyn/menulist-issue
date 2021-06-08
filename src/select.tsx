/* @jsxImportSource @emotion/react */
import React from 'react';
import * as theme from './styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type SelectProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

function Select(props: SelectProps) {
  return (
    <div
      css={{
        position: 'relative',
        borderRadius: 6,
        fontSize: 14,
        fontWeight: 400,
        border: theme.common.border,
        color: theme.colors.darkBlue,
      }}
    >
      <select
        css={{
          appearance: 'none',
          borderRadius: 6,
          border: 'none',
          padding: '10px 36px 10px 14px',
          margin: 0,
          cursor: 'pointer',
          '&:focus': {
            outlineColor: theme.colors.persianBlue,
          },
        }}
        {...props}
      />
      <FontAwesomeIcon
        icon="angle-down"
        focusable={false}
        aria-hidden
        css={{
          position: 'absolute',
          pointerEvents: 'none',
          right: 0,
          height: '100%',
          margin: '0 14px',
        }}
      />
    </div>
  );
}

export { Select };
