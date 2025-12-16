
import Header from "./components/header";
import Card from "./components/card";
import About from "./components/about";


export default function Home() {
  return (
    <div className="min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <div className="flex flex-col justify-center gap-5 py-5 bg-brown-100 dark:bg-brown-800">
        <h2>NOS VOYAGES INITIATIQUES EN 2026</h2>
        <div className="grid grid-cols-4 justify-center gap-1 py-5 bg-brown-100 dark:bg-brown-800">
          <Card href="/contact" hrefimg="image12.jpg" title="Fête familiale et chamanisme à l'ouest" desc="17 au 31 octobre 2027"/>
          <Card href="/contact" hrefimg="image2.jpg" title="Yoga et Chamanisme en Mongolie centrale " desc="8 au 24 août 2026"/>
          <Card href="/test" hrefimg="image3.jpg" title="Festival et Solstice en Mongolie" desc="15 au 29 juin 2026"/>
          <Card href="/test" hrefimg="image3.jpg" title="Les massifs de l'Altai, le Berceau de l'humanité" desc="12 au 25 juillet 20266"/>
        </div>
      </div>
      <About />
    </div>
  );
}