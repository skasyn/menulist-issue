import React from "react";
import styled from "@emotion/styled/macro";
import debounceFn from "debounce-fn";
import * as theme from "./styles/theme";

const Textarea = styled.textarea({
  borderRadius: 8,
  border: theme.common.border,
  padding: 8,
  fontSize: 14,
  fontWeight: 400,
  resize: "none",
  transition: "0.3s",
  color: theme.colors.darkBlue,
  "&:focus": {
    outlineColor: theme.colors.persianBlue,
  },
});

function useDebounce(callback: (...args: any[]) => any, delay: number) {
  const callbackRef = React.useRef(callback);

  React.useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  return React.useMemo(
    () => debounceFn((...args) => callbackRef.current(...args), { wait: delay }),
    [delay]
  );
}

interface DebouncedTextareaProps extends React.ComponentProps<typeof Textarea> {
  wait?: number;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

function DebouncedTextarea({ onChange, wait = 1000, ...props }: DebouncedTextareaProps) {
  const debouncedOnChange = useDebounce(onChange, wait);

  return <Textarea {...props} onChange={debouncedOnChange} />;
}

export { Textarea, DebouncedTextarea };
