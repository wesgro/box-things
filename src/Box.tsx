import { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { rainbowSprinkles, Sprinkles } from "./Box.css";

export type BoxProps<C extends ElementType> = Sprinkles &
    ComponentPropsWithoutRef<C> & {
        as?: C;
        children?: ReactNode;
    };

export const Box = <C extends ElementType = "div">({
    as,
    children,
    ...props
}: BoxProps<C>) => {
    const { className, style, otherProps } = rainbowSprinkles(props);
    const Component = as || "div";

    return (
        <Component className={className} style={style} {...otherProps}>
            {children}
        </Component>
    );
};
