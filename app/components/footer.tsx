import Link from "next/link";

export default function Footer() {
    return (
        // Footer
            <footer className="bg-gray-900 text-gray-400 py-6 rounded-t-lg mt-5">
                <div className="max-w-6xl mx-auto px-4 text-center text-sm">
                    <p><Link href="/mention-legales" className="hover:text-white hover:underline">Mentions légales</Link> - Tous droits réservés © ORSO VOYAGE Mongolie 1998 - 2024</p>
                    <p>Voyager ailleurs : Agence de Voyage Mongolie | Voyage à cheval en Mongolie Randonnée et Trek</p>
                    <div className="flex justify-center gap-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition">f</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition">📷</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-sky-500 transition">𝕏</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-700 transition">in</a>
                    </div>
                </div>
            </footer>
    );
}