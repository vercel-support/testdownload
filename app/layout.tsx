// import Footer from "../components/footer";
// import Nav from "../components/nav";
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* <Nav/> */}
        {children}
        {/* <Footer/> */}
        </body>
    </html>
  );
}
