import React from 'react';
import { keyframes, CSSObject } from '@emotion/react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

interface SpinnerProps extends Omit<FontAwesomeIconProps, 'icon'> {
  css: CSSObject;
}

function Spinner({ css, ...props }: SpinnerProps) {
  return (
    <FontAwesomeIcon
      icon="circle-notch"
      aria-label="loading"
      css={[
        {
          animation: `${spin} 1s infinite`,
        },
        css as any,
      ]}
      {...props}
    />
  );
}

export { Spinner };
