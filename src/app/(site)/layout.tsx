import { Nav } from "@/components/Nav";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-terracota/15 px-4 py-12 text-center text-tinta-suave">
        <div className="ornamental-divider text-dorado">
          <span className="h-1.5 w-1.5 rotate-45 bg-current" />
        </div>
        <p className="mt-4 font-serif-display text-xl italic">
          Siete años, y lo que queda.
        </p>
      </footer>
    </div>
  );
}
