
import { Container, Filters, Title, TopBar } from "@/components/shared/";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";



export default function Home() {
  return (
    <>

      <Container className="mt-10">
        <Title size="lg" text="Все пиццы" className="font-black"></Title>

      </Container>
      <TopBar/>
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
                imageUrl: "https://lavera-pizza.ru/wp-content/uploads/2024/04/royal-chizburger-vid-sverhu-kontrast.jpg",
                price: 550,
                items: [{ price: 500 }]
              },
              {
                id: 2,
                name: 'Чизбургер-пицца',
                imageUrl: "https://lavera-pizza.ru/wp-content/uploads/2024/04/royal-chizburger-vid-sverhu-kontrast.jpg",
                price: 550,
                items: [{ price: 500 }]
              }, {
                id: 3,
                name: 'Чизбургер-пицца',
                imageUrl: "https://lavera-pizza.ru/wp-content/uploads/2024/04/royal-chizburger-vid-sverhu-kontrast.jpg",
                price: 550,
                items: [{ price: 500 }]
              }, {
                id: 4,
                name: 'Чизбургер-пицца',
                imageUrl: "https://lavera-pizza.ru/wp-content/uploads/2024/04/royal-chizburger-vid-sverhu-kontrast.jpg",
                price: 550,
                items: [{ price: 500 }]
              }, {
                id: 5,
                name: 'Чизбургер-пицца',
                imageUrl: "https://lavera-pizza.ru/wp-content/uploads/2024/04/royal-chizburger-vid-sverhu-kontrast.jpg",
                price: 550,
                items: [{ price: 500 }]
              }
              ]} categoryId={1} />
            </div>
              </div>
            </div>
          </Container>
          
        </>
      );
    }
    