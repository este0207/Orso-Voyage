
import Header from "./components/header";
import Card from "./components/card";


export default function Home() {
  return (
    <div className="min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <div className="flex flex-wrap justify-center gap-8 py-12 bg-brown-100 dark:bg-brown-800">
        <Card href="/contact" hrefimg="image1.jpg" title="Test1" desc="papapa"/>
        <Card href="/contact" hrefimg="image2.jpg" title="Test2" desc="papapa"/>
        <Card href="/contact" hrefimg="image3.jpg" title="Test3" desc="papapa"/>
      </div>
    </div>
  );
}
