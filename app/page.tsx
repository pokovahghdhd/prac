
import { Container, Filters, Title, TopBar } from "@/components/shared/";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";



export default function Home() {
  return (
    <>

      <Container className="mt-10">
        <Title size="lg" text="Все пиццы" className="font-black"></Title>

      </Container>
      <TopBar />
      <Container>
        <div>
          <div className="w-[250px]">
            <Filters />
          </div>


          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Пиццы" items={[{
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://storage.yandexcloud.net/pjproduction/images/catalog/thumds/full/1e76d079f2aba43961e3b2a01d5c5dcd.webp',
                price: 550,
                items: [{ price: 500 }]
              },
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://i.pinimg.com/564x/83/de/c1/83dec11fa50073062a19b7a923270be.jpg',
                price: 550,
                items: [{ price: 500 }]
              }, {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://storage.yandexcloud.net/pjproduction/images/catalog/thumds/full/1e76d079f2aba43961e3b2a01d5c5dcd.webp',
                price: 550,
                items: [{ price: 500 }]
              }, {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: '',
                price: 550,
                items: [{ price: 500 }]
              }
              ]} categoryId={1} />
              <ProductsGroupList title="Пиццы" items={[{
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://storage.yandexcloud.net/pjproduction/images/catalog/thumds/full/1e76d079f2aba43961e3b2a01d5c5dcd.webp',
                price: 550,
                items: [{ price: 500 }]
              },
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://i.pinimg.com/564x/83/de/c1/83dec11fa50073062a19b7a923270be.jpg',
                price: 550,
                items: [{ price: 500 }]
              }, {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://storage.yandexcloud.net/pjproduction/images/catalog/thumds/full/1e76d079f2aba43961e3b2a01d5c5dcd.webp',
                price: 550,
                items: [{ price: 500 }]
              }, {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: '',
                price: 550,
                items: [{ price: 500 }]
              }
              ]} categoryId={2} />
            </div>
          </div>
        </div>
  
    </Container>

    </>
  );
}
