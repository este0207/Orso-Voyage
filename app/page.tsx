
import Header from "./components/header";
import Card from "./components/card";
import About from "./components/about";


export default function Home() {
  return (
    <div className="min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <div className="flex flex-col items-center justify-center py-2 px-2 ">
        <h2 className="text-2xl font-bold text-black/80 ml-3 py-2 dark:text-white/80">NOS VOYAGES INITIATIQUES EN 2026</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4 py-1 bg-brown-100 dark:bg-brown-800">
          <Card href="/test" hrefimg="card8.jpg" title="Nouvel an en Mongolie" desc="14 février au 1 mars 2026"/>
          <Card href="/test" hrefimg="card3.jpg" title="Festival et Solstice en Mongolie" desc="15 au 29 juin 2026"/>
          <Card href="/test" hrefimg="card6.jpg" title="Chaman péruvien en Mongolie" desc="1 au 15 juillet 2026"/>
          <Card href="/test" hrefimg="card4.jpg" title="Les massifs de l'Altai, le Berceau de l'humanité" desc="12 au 25 juillet 20266"/>
          <Card href="/test" hrefimg="card7.jpg" title="Immersion et Naadam Sources chaudes avec Loreia" desc="27 au 10 août 2026"/>
          <Card href="/contact" hrefimg="card2.jpg" title="Yoga et Chamanisme en Mongolie centrale " desc="8 au 24 août 2026"/>
          <Card href="/test" hrefimg="card5.jpg" title="Rencontre avec les chamanes mongols et la chamane Karine" desc="9 au 24 août 2026"/>
          <Card href="/contact" hrefimg="card1.jpg" title="Fête familiale et chamanisme à l'ouest" desc="17 au 31 octobre 2027"/>
        </div>
      </div>
      <About />
    </div>
  );
}