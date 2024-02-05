import { Card, CardContent } from "../../_components/ui/card";
import { Barbershop } from "@prisma/client";
import Image from "next/image";
import { Button } from "../../_components/ui/button";
import { StarIcon } from "lucide-react";
import { Badge } from "@/app/_components/ui/badge";
interface BarbershopItemProps {
    barbershop: Barbershop;
}
const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
    return (
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="px-1 py-0">
                <div className="p-1 w-full h-[159px] relative">
                    <div className="absolute top-2 left-2 z-50">
                        <Badge variant="secondary" className="opacity-90 flex gap-1 items-center justify-center bg-[#221C3D] z-50">
                            <StarIcon size={12} className="fill-primary text-primary" />
                            <span className="text-xs">5,0</span>
                        </Badge>
                    </div>
                    <Image
                        alt={barbershop.name}
                        src={barbershop.imageUrl}
                        style={{
                            objectFit: "cover"
                        }}
                        fill
                        className="rounded-2xl"
                    />
                </div>

                <div className="px-2 pb-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>

                    <Button className="w-full mt-3" variant="secondary">
                        Reservar
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default BarbershopItem;