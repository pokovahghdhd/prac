import { cn } from "@/lib/utils";
import { Title } from "./title";
import { ProductCard } from "./product-card";

interface Props {
    title: string;
    items: any[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
    title,
    items,
    categoryId,
    listClassName
}) => {
    return (
        <div className={className}>
            <Title text={title} size="lg" className="font-extrabold md-5"/>
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((product, i)=>(
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.item[0].price}
                    />
                ))}
            </div>
        </div>
    );
}
<div className="flex-1">
    <div className="flex flex-col gap-16">
        <ProductsGroupList title="Пиццы" items={[{
            id: 1,
            name: 'Чизбургер-пицца',
            imageUrl:'https://storage.yandexcloud.net/pjproduction/images/catalog/thumds/full/1e76d079f2aba43961e3b2a01d5c5dcd.webp',
            
        }]}/>
    </div>
</div>