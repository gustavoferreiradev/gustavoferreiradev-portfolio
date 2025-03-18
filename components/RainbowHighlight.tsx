import React from 'react';
import { RoughNotation } from 'react-rough-notation';

interface RainbowHighlightProps {
  color: string;
  children: any;
}

export function RainbowHighlight(props: RainbowHighlightProps) {
  const animationDuration = Math.floor(30 * props.children.type);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 3]}
      iterations={1}
      animationDuration={animationDuration}
      color={props.color}
    >
      {props.children}
    </RoughNotation>
  );
}
