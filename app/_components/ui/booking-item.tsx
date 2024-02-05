"use client";

import { Prisma } from "@prisma/client";
import { Card, CardContent } from '@/app/_components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/app/_components/ui/avatar';
import { Badge } from "@/app/_components/ui/badge";

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: true;
      barbershop: true;
    };
  }>;
}

const BookingItem = () => {
  return (
        <Card>
          <CardContent className="py-0 flex px-0">
            <div className="flex flex-col gap-2 py-5 flex-[3] pl-5">
              <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">Confirmado</Badge>
              <h2 className="font-bold">Corte de Cabelo</h2>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  {/* <AvatarImage src={booking.barbershop.imageUrl} /> */}
                  <AvatarImage src="/logo.png" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>

                {/* <h3 className="text-sm">{booking.barbershop.name}</h3> */}
                <h3 className="text-sm">Vintage Barber</h3>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 border-l border-solid border-secondary">
              {/* <p className="text-sm capitalize">
                {format(booking.date, "MMMM", {
                  locale: ptBR,
                })}
              </p> */}
              {/* <p className="text-2xl">{format(booking.date, "dd")}</p>
              <p className="text-sm">{format(booking.date, "hh:mm")}</p> */}
              <p className="text-sm">Fevereiro</p>
              <p className="text-2xl">06</p>
              <p className="text-sm">09:45</p>
            </div>
          </CardContent>
        </Card>
  );
}

export default BookingItem;