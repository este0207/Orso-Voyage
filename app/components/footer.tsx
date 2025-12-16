import Link from "next/link";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

export default function Footer() {
    return (
        // Footer
            <footer className="bg-gray-900 text-gray-400 py-6 rounded-t-lg mt-5">
                <div className="max-w-6xl mx-auto px-4 text-center text-sm">
                    <p><Link href="/mention-legales" className="hover:text-white hover:underline">Mentions légales</Link> - Tous droits réservés © ORSO VOYAGE Mongolie 1998 - 2024</p>
                    <p>Voyager ailleurs : Agence de Voyage Mongolie | Voyage à cheval en Mongolie Randonnée et Trek</p>
                    <div className="flex justify-center gap-4 mt-4">
                        <a href="https://www.facebook.com/randomongolieorso.orsovoyages" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition"><FaFacebook /></a>
                        <a href="https://x.com/MongolieVoyage" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition"><FaTwitter /></a>
                        <a href="mailto:orsosvoyages@gmail.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-sky-500 transition"><IoMdMail /></a>
                        <a href="https://fr.pinterest.com/orsovoyage/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-700 transition"><FaPinterest /></a>
                    </div>
                </div>
            </footer>
    );
}