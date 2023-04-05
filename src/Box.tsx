import { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { rainbowSprinkles, Sprinkles } from "./Box.css";
import {atoms} from "./atoms.css"

const container = atoms({
    display: "flex",
    paddingX: "small",
    flexDirection: {
        mobile: "column",
        desktop: "row"
    },
    background: {
        lightMode: "blue50",
        darkMode: "blue100"
    }
});
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
    const className = atoms(props);
    const Component = as || "div";

    return (
        <Component className={className}>
            {children}
        </Component>
    );
};
