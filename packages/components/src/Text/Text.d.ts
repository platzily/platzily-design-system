import { HTMLProps } from 'react';

export interface TextProps extends HTMLProps<HTMLHeadingElement | HTMLParagraphElement> {}

export default function Text(props: TextProps): JSX.Element;
