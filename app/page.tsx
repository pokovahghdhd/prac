import Image from "next/image";
import { CheckboxFiltersGroup, Container, Filters, Title, TopBar} from "@/components/shared/";



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

          <div>
            
          </div>
        </div>
      </Container>

    </div>
  );
}