import { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { rainbowSprinkles, Sprinkles } from "./Box.css";
import clsx from "clsx"

const container = rainbowSprinkles({
    display: "flex",
    paddingX: "small",
    flexDirection: {
        medium: "column",
        large: "row"
    },
    backgroundColor: "$background-base",
});
export type BoxProps<C extends ElementType> = Sprinkles &
    ComponentPropsWithoutRef<C> & {
        as?: C;
        children?: ReactNode;
    };

export const Box = <C extends ElementType = "div">({
    as,
    children,
    className,
    ...props
}: BoxProps<C>) => {
    const { className: atoms, style, otherProps } = rainbowSprinkles(props);
    const Component = as || "div";
    const cls = clsx(className, atoms);
    return (
        <Component className={cls} style={style} {...otherProps}>
            {children}
        </Component>
    );
};
