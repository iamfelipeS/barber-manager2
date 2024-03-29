import Image from 'next/image'; 
import { Card, CardContent } from './ui/card';  
import { Button } from './ui/button';  
import { MenuIcon } from 'lucide-react';
const Header = () => {
  return (
    <Card>
      <CardContent className="px-5 py-8 justify-between items-center flex flex-row">
        <Image src="/logo.png" alt="Barber Manager" width={70} height={70} />
        <Button variant="outline" size="icon" className='h-8 w-8'>
          <MenuIcon size={16}/>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
