import React from 'react';
import * as theme from './styles/theme';
import { keyframes } from '@emotion/react';

interface LoaderProps {
  size?: number;
  color?: string;
  loading?: boolean;
}

const clip = keyframes`
  0% {transform: rotate(0deg) scale(1)}
  50% {transform: rotate(180deg) scale(0.8)}
  100% {transform: rotate(360deg) scale(1)}
`;

// TODO: Implement loading and remove ts-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function Loader({ size = 150, loading = true }: LoaderProps) {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="loading"
    >
      <span
        css={{
          width: size,
          height: size,
          background: 'transparent !important',
          borderRadius: '100%',
          border: '2px solid',
          borderColor: theme.colors.persianBlue,
          borderBottomColor: 'transparent',
          display: 'inline-block',
          animation: `${clip} 0.75s 0s infinite linear`,
          animationFillMode: 'both',
        }}
      />
    </div>
  );
}

export { Loader };
