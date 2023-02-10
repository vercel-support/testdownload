import '../styles/globals.css'
import { Mulish, Roboto_Serif } from '@next/font/google';

const mulish = Mulish({
  variable: '--font-mulish',
  subsets: ['latin']
});

const roboto_serif = Roboto_Serif({
  variable: '--font-roboto-serif',
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mulish.variable} ${roboto_serif.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
        </body>
    </html>
  );
}
