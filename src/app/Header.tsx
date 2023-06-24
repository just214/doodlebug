import Image from "next/image";

import { PageRouteToggle } from "app/PageRouteToggle";

export const Header = () => {
  return (
    <header className="text-4xl text-center font-display flex items-end gap-2">
      <Image src="/icon.svg" height={50} width={50} alt="Doodlebug" />
      <h1 className="text-yellow-100 mr-4">Doodlebug</h1>
      <PageRouteToggle />
    </header>
  );
};
