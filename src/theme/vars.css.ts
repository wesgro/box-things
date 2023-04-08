import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';
import {brightClass, darkClass} from "./constants";
import { modularScale } from 'polished';

const createScale = (ratio: number, base: number) => (steps: number) =>
    `${modularScale(steps, base, ratio)}px`;

const spaceScale = createScale(1.4, 4);
const prefixVar = (prefix: string)=>(name: string|null) => `dig-${prefix}-${name}`;

export const space = createGlobalThemeContract({
    'xsmall': 'spacing-1',
    'small': 'spacing-2',
    'medium': 'spacing-3',
    'large': 'spacing-4',
}, prefixVar('space'))

export const color = createGlobalThemeContract({
    'background-base': 'background-base',
    'on-background-base': 'on-background-base',
    'text-base': 'text-base',
}, prefixVar('color'))

export const shape = createGlobalThemeContract({
    'action-base': 'action-base',
    'panel-base': 'panel-base',
}, prefixVar('shape'))

createGlobalTheme(':root', space, {
    'xsmall': spaceScale(0),
    'small': spaceScale(1),
    'medium': spaceScale(2),
    'large': spaceScale(3),
});

createGlobalTheme(`:root,${brightClass(true)}`, color, {
    'background-base': '#fff',
    'on-background-base': '#ffe',
    'text-base': '#000',
});

createGlobalTheme(`${darkClass(true)}`, color, {
    'background-base': '#160b17',
    'on-background-base': '#2a142c',
    'text-base': '#fff',
});

createGlobalTheme(':root', shape, {
    'action-base': '4px',
    'panel-base': '8px',
});
