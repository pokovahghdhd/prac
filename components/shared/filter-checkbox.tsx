import React from 'react';
import { Input } from '@/components/ui/';
import { Checkbox } from '../ui/checkbox'

export interface FilterCheckboxProps {
    text: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({ 
    text,
    value,
    endAdornment,
    onCheckedChange,
    checked, 
}) => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox 
            onCheckedChange={onCheckedChange}
            checked={checked}
            value={value}
            className="rounded-[8px] w-6 h-6"
            id={`checkbox-${String(value)}`}
            />
            {/* {Рендерим label} */}
            <label
                htmlFor={`checkbox-${String(value)}`}
                className="leading-none cursor-pointer flex-1"
            >
                {text}
            </label>
            {endAdornment}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className='font-bold mb-3'>Цена от и до:</p>
                <div>
                    <Input type="number" placeholder="0" min={0} max={5000} defaultValue={0} />
                    <Input type='number' min={0} max={5000} placeholder="5000" />
                </div> 
            </div>
        </div>


);
}