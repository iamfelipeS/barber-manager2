import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/ui/booking-item";
import BarbershopItem from "./_components/barbershop-item";
import { db } from "../lib/prisma";


export default async function Home() {
  const barbershops = await db.barbershop.findMany({})

  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Felipe</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EE, d 'de' MMMM 'de' yyyy",
            { locale: ptBR })
          }
        </p>
      </div>

      <div className="px-5 mt-6">
          <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">Agendamentos</h2>
        <BookingItem />
      </div>

      <div className="mt-6">
          <h2 className="px-5text-xs px-5 mb-3 uppercase text-gray-400 font-bold">Recomendados</h2>
          <div className="flex gap-4 px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
      </div>
    </div>
  );
}
