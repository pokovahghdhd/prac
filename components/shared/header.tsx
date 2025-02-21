import { Container } from './container';
import {User} from 'lucide-react';
import {ShoppingCart} from 'lucide-react';
import { cn } from '@/lib/utils';
import * as React from 'react';
import Image from 'next/image';

import { Search } from 'lucide-react';
import { Button } from '../ui/button';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                <div className='flex item-center gap-4'>
                    <Image
                        src='/logo-pizza.svg'
                        alt='Логотип NEXT PIZZA'
                        width={66} // Укажите ширину изображения
                        height={96} // Укажите высоту изображения
                        className='h-auto' // Можно добавить класс для управления стилями
                    />
                    <div>
                        <h1  className='text-sm font-black uppercase text-2xl' >NEXT PIZZA
                        </h1>
                        <div className='font-normal text-base'>вкусней уже некуда</div>
                    </div>
                    <div className=''>
                    <input className='w-[756px] h-[40px]' type="text" />
                    </div>
                    <div className='flex items-center gap-3'>
                        <Button variant='outline' className='flex items-center gap-2'>
                        <User size={16}/> Войти </Button>
                        <Button variant='outline' className='flex items-center gap-2'> 520 Р 
                        <span className='h-full w-[1px] bg-white/30 mx-3' />
                        <ShoppingCart /> 3 </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}