import React, {
  createElement,
  ForwardedRef,
  forwardRef,
  ReactElement,
} from "react";
import clsx from "clsx";
import { atoms } from "./AtomsBox.css";

export interface AtomsFnBase {
  (...args: any): string;
  properties: Set<string>;
}

export function extractAtomsFromProps<AtomsFn extends AtomsFnBase>(
  props: any,
  atomsFn: AtomsFn
) {
  let hasAtomProps = false;
  let atomProps: Record<string, unknown> = {};
  let otherProps: Record<string, unknown> = {};
  let styleProps: Record<string, unknown> = {};

  for (const key in props) {
    if (key[0] === "_" && key[1] === "_") {
      const actualKey = key.substring(2);
      styleProps[actualKey] = props[key];
    } else if (atomsFn.properties.has(key)) {
      hasAtomProps = true;
      atomProps[key] = props[key];
    } else {
      otherProps[key] = props[key];
    }
  }

  return { hasAtomProps, atomProps, otherProps, styleProps };
}
export type CreateBoxParams<AtomsFn> = {
  atoms: AtomsFn;
  defaultClassName?: string;
};
// adapted from https://github.com/kripod/react-polymorphic-box
type AsProp<TType extends React.ElementType = React.ElementType> = {
  as?: TType;
};
type BaseBoxProps<TType extends React.ElementType> = AsProp<TType> &
  Omit<React.ComponentProps<TType>, keyof AsProp>;

type PolymorphicComponentProps<TType extends React.ElementType, Props> = Props &
  BaseBoxProps<TType>;

type PolymorphicComponent<
  Props,
  DefaultType extends React.ElementType = "div"
> = <TType extends React.ElementType = DefaultType>(
  props: PolymorphicComponentProps<TType, Props>
) => React.ReactElement | null;
//

// export type OverrideTokens<T> = {
//   [K in keyof T as K extends keyof React.CSSProperties ? `__${K}` : number]:
//     | Extract<T[K], string | number>
//     | (string & {});
// };

export type OverrideTokens<T> = {
  [K in keyof T as K extends keyof React.CSSProperties ? `__${K}` : number]:
    | Extract<T[K], string | number>
    | (string & {});
};

// type OverrideTokens<T> = {
//   [K in keyof T as K extends string ? `__${K}` : number]:
//     | Extract<T[K], string | number>
//     | {};
// };

type Tokens<AtomsFn extends AtomsFnBase> = Parameters<AtomsFn>[0];
type BoxProps<
  AtomsFn extends AtomsFnBase,
  TType extends React.ElementType
> = PolymorphicComponentProps<
  TType,
  Tokens<AtomsFn> & OverrideTokens<Tokens<AtomsFn>>
>;

const defaultElement = "div";

type AtomsFn = typeof atoms;
export const Box: <TType extends React.ElementType = typeof defaultElement>(
  props: BoxProps<AtomsFn, TType>
) => null | ReactElement<BoxProps<AtomsFn, TType>> = forwardRef(
  <TType extends React.ElementType = typeof defaultElement>(
    { className, style, as, ...props }: BoxProps<AtomsFn, TType>,
    ref: ForwardedRef<PolymorphicComponent<BoxProps<AtomsFn, TType>, TType>>
  ) => {
    const Element = as || defaultElement;
    const { atomProps, styleProps, otherProps } = extractAtomsFromProps(
      props,
      atoms
    );
    const styleAttr = React.useMemo(
      () => ({ ...style, ...styleProps }),
      [style, styleProps]
    );

    return createElement(Element, {
      ref,
      style: styleAttr,
      ...otherProps,
      className: clsx(className, atoms(atomProps)),
    });
  }
);

(Box as any).displayName = "BoxThing";
