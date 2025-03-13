import Image from "next/image";
import { CheckboxFiltersGroup, Container, Filters, Title, TopBar} from "@/components/shared/";
import { ProductCard } from "@/components/shared/product-card";



export default function Home() {
  return (
    <div>
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
              <ProductCard id={0}
              name="Чизбургер-пицца"
              price={550}
              imageUrl="https://www.google.com/imgres?q=%D0%B4%D0%BE%D0%B4%D0%BE%20%D0%BF%D0%B8%D1%86%D1%86%D0%B0&imgurl=https%3A%2F%2Fcdn.dodostatic.net%2Fstatic%2FImg%2FProducts%2Fcea570842b754c52b786c231c65bd2e2_1875x1875.jpeg&imgrefurl=https%3A%2F%2Fdodopizza.ru%2Fmoscow&docid=MXNwXJjd60kzuM&tbnid=gMKdIbZF3Xp33M&vet=12ahUKEwjFlJSf8_SLAxVRIBAIHafIBxAQM3oFCIQBEAA..i&w=1875&h=1875&hcb=2&ved=2ahUKEwjFlJSf8_SLAxVRIBAIHafIBxAQM3oFCIQBEAA"/>
            </div>

          </div>
        </div>
      </Container>

    </div>
  );
}