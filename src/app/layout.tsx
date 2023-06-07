import "app/global.css";
import { Lilita_One } from "next/font/google";

const bebas = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-default",
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${bebas.variable}`}>{children}</body>
    </html>
  );
}
