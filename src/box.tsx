import React from 'react';

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface BoxProps extends DivProps {
  title?: string;
}

function Box({ title, children, ...props }: BoxProps) {
  return (
    <div
      css={{
        marginTop: 24,
        background: 'white',
        boxShadow: '0px 8px 24px rgba(15, 21, 84, 0.05)',
        borderRadius: 12,
      }}
      {...props}
    >
      {title && (
        <div
          css={{
            width: '100%',
            backgroundColor: '#0F1554',
            borderRadius: '12px 12px 0 0',
            textAlign: 'center',
            padding: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h5
            css={{
              color: 'white',
              margin: 0,
              lineHeight: '20px',
              fontSize: '16px',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </h5>
        </div>
      )}
      <div
        css={{
          padding: 32,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export { Box };
