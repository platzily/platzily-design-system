import * as CSS from 'csstype';
import { Theme } from '../theme';

type JSSNormalCssProperties = CSS.Properties<number | string>;
type JSSFontface = CSS.AtRule.FontFace & { fallbacks?: CSS.AtRule.FontFace[] };

export interface BaseCSSProperties extends JSSNormalCssProperties {
  '@font-face'?: JSSFontface | JSSFontface[];
}

export interface CSSProperties extends BaseCSSProperties {
  [k: string]: unknown | CSSProperties;
}

export type StyleRule<ClassKey extends string = string> = Record<ClassKey, CSSProperties>;

export type StyleRulesCallback<T, Props extends object, ClassKey extends string = string> = (theme: T, props: Props) => StyleRule<ClassKey>;

export type Styles<T, Props extends object, ClassKey extends string = string> = StyleRulesCallback<T, Props, ClassKey> | StyleRule<ClassKey>;

export type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>;

export default function createStyleSheet<
  T = Theme,
  Props extends object = {},
  ClassKey extends string = string
>(styles: Styles<T, Props, ClassKey>, config?: { key?: string }): keyof Props extends never ? (props?: any) => ClassNameMap<ClassKey> : (props: Props) => ClassNameMap<ClassKey>;
