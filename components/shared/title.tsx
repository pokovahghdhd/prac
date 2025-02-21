import clsx from "clsx";
import React from "react";


type TitleSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';

interface Props {
    size?: TitleSize;
    className?: string;
    text: string;
}
    //  В зависимости от того что мы передали, будет тот или иной тег
export const Title: React.FC<Props> = ({ text, size = 'sm', className}) => {
    const mapTagBySize = {
        xs: 'h5',
        sm: 'h4',
        base: 'h3',
        lg: 'h2',
        xl: 'h1',
        '2xl': 'h1'
    } as const;
    // В зависимости от размера, будут задаваться разные классы
    const mapClassNameBySize = {
        xs: 'text-[16px]',
        sm: 'text-[20px]',
        base: 'text-[26px]',
        lg: 'text-[32px]',
        xl: 'text-[40px]',
        '2xl': 'text-[48px]',
    } as const;

    // Создается сам компонент
    return React.createElement(
        mapTagBySize[size],
        {className: clsx(mapClassNameBySize[size], className) },
        text,

    );
};