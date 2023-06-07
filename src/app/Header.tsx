import Image from "next/image";

export const Header = () => {
  return (
    <header className="text-4xl text-center font-display flex items-end gap-2">
      <Image src="/icon.svg" height={50} width={50} alt="Doodlebug" />
      <h1 className="text-yellow-100">Doodlebug</h1>
    </header>
  );
};
