import fonts from "@/fonts/fonts";

export default function Home() {
  return (
    <main className={`${fonts.modernNegra.variable} antialiased`}>
      <div className="h-screen pt-30">
        <h1 className="font-modern-negra">Aqui</h1>
      </div>
      <div className="h-screen flex-center bg-neutral-950"></div>
    </main>
  );
}
