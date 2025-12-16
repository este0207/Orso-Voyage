import Card from "@/app/components/card";

export default function NosIntervenants() {
    return (
        <div className=" flex flex-col mt-22 items-center justify-center py-2 px-2 ">
            <h2 className="font-bold text-2xl">Nos Intervenants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4 py-1 bg-brown-100 dark:bg-brown-800">
                <Card href="/intervenants/Marie-Tergemina" hrefimg="/intervenants/Marie-Tergemina.jpg" title="Marie Tergemina" desc="Chamane"/>
                <Card href="/intervenants/annabelle-de-villedieu" hrefimg="/intervenants/Annabelle-de-Villedieu.jpg" title="Annabelle de Villedieu" desc="créatrice de l'école lore heya chamanisme"/>
                <Card href="/intervenants/Crow-(John MacKinnon)" hrefimg="/intervenants/Crow-(John MacKinnon).jpg" title="Crow (John MacKinnon)" desc="Directeur des voyages chamaniques"/>
                <Card href="/intervenants/carina-flood" hrefimg="/intervenants/Carina-Flood.jpg" title="Carina Flood" desc="La guérison en conscience modifiée"/>
                <Card href="/intervenants/Oriana-Brigitte-Heydel" hrefimg="/intervenants/Oriana-Brigitte-Heydel.jpg" title="Oriana Brigitte Heydel" desc="Cryptologue & Fondatrice d’un langage d’unité-source"/>
                <Card href="/intervenants/NANOUK" hrefimg="/intervenants/NANOUK.jpg" title="NANOUK" desc="Praticienne Chamanique"/>
                <Card href="/intervenants/Anja-Normann" hrefimg="/intervenants/Anja-Normann.jpg" title="Anja Normann" desc="Chaman Suédoise Et Animatrice Du Voyage"/>
                <Card href="/intervenants/Aigle-Bleu" hrefimg="/intervenants/Aigle-Bleu.jpg" title="Aigle Bleu" desc="Chamane De Tradition Amérindien"/>
                <Card href="/intervenants/Catherine-Darbord" hrefimg="/intervenants/Catherine-Darbord.jpg" title="Catherine Darbord" desc="Spécialiste Du Chant Harmonique"/>
                <Card href="/intervenants/Isabelle-Lejuste" hrefimg="/intervenants/Isabelle-Lejuste.jpg" title="Isabelle Lejuste" desc="Guérisseuse de l’âme"/>
                <Card href="/intervenants/Line-Sturny-et-Patrick-Dacquay" hrefimg="/intervenants/Line-Sturny-et-Patrick-Dacquay.jpg" title="Line Sturny et Patrick Dacquay" desc="Chamanes Deo De Tradition Celtique"/>
                <Card href="/intervenants/Rivka-Crémisi" hrefimg="/intervenants/Rivka-Crémisi.jpg" title="Rivka Crémisi" desc="Qi Gong, Tai Ji Quan, Symbolique Des Lettres Hébraïques"/>
                <Card href="/intervenants/Tolit" hrefimg="/intervenants/Tolit.jpg" title="Tolit" desc="Grande Maître Tolit, Chaman Mongol"/>
                <Card href="/intervenants/Peter-Fourbears" hrefimg="/intervenants/Peter-Fourbears.jpg" title="Peter Fourbears" desc="Chaman du dernier peuple nomade de l’Europe"/>
                <Card href="/intervenants/Aleika" hrefimg="/intervenants/Aleika.jpg" title="Aleika" desc="Danses de l’âme"/>
                <Card href="/intervenants/Jean-Michel-Charriaut" hrefimg="/intervenants/Jean-Michel-Charriaut.jpg" title="Jean Michel Charriaut" desc="Relié aux mémoires les plus anciennes de l’humanité"/>
                <Card href="/intervenants/Christine-Bonneau" hrefimg="/intervenants/Christine-Bonneau.jpg" title="Christine Bonneau" desc="Musicothérapeute Énergétique"/>
                <Card href="/intervenants/Charlotte-Marchina" hrefimg="/intervenants/Charlotte-Marchina.jpg" title="Charlotte Marchina" desc="Anthropologue et Maître De Conférences"/>
                <Card href="/intervenants/Tolit-homme miroir" hrefimg="/intervenants/Tolit-homme miroir.jpeg" title="Tolit, homme miroir" desc="Grand chaman mongol, héritier des traditions ancestrales des monts Altaï."/>
                <Card href="/intervenants/Karine-Petissof" hrefimg="/intervenants/Karine-Petissof.jpeg" title="Karine Petissof" desc="CHAMANE de la Voie Blanche"/>
                <Card href="/intervenants/loreheya" hrefimg="/intervenants/loreia.jpeg" title="loreheya" desc="créatrice de l'école lore heya chamanisme"/>
                <Card href="/intervenants/Gunn-Tove-Minde" hrefimg="/intervenants/Gunn-Tove-Minde.jpg" title="Gunn-Tove Minde" desc="Chercheuse et professeure associée à l’Université arctique de Norvège"/>
                <Card href="/intervenants/Jon-Kohrs" hrefimg="/intervenants/Jon-Kohrs.jpg" title="Jon Kohrs" desc="animateur de retraites et écrivain"/>
                <Card href="/intervenants/Jean-Sébastien-Durant" hrefimg="/intervenants/Jean-Sébastien-Durant.jpeg" title="Jean Sébastien Durant" desc="Ostéopathe depuis 15 ans"/>
            </div>

        </div>
    );
}