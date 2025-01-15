import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center">
      <div className="bg-white p-10 rounded-lg h-[80%] w-[80%]" style={{ backgroundColor: "var(--color1)" }}>
        <h1 className="text-3xl font-bold text-center mb-6">Résumé d'Article</h1>
        
        <div className="flex justify-center gap-16 mb-6">
          <button className="font-semibold py-2 px-16 rounded-lg transition-transform transform hover:scale-110"
            style={{ backgroundColor: "var(--color2)" }}>URL</button>
          <button className="font-semibold py-2 px-16 rounded-lg transition-transform transform hover:scale-110"
            style={{ backgroundColor: "var(--color2)" }}>Texte</button>
          <button className="font-semibold py-2 px-16 rounded-lg transition-transform transform hover:scale-110"
            style={{ backgroundColor: "var(--color2)" }}>Fichier</button>
        </div>
        
        <div className="mb-4">
          <label for="input" className="block font-medium mb-2">Entrée :</label>
          <textarea id="input" rows="1" placeholder="URL de l'article" className="w-full p-2 border border-gray-300 rounded bg-gray-100"></textarea>
          <button className="font-semibold my-2 py-1 px-8 rounded bg-blue-400 hover:bg-blue-500">Résumer</button>
        </div>
        
        <div>
          <label for="output" className="block font-medium mb-2">Sortie :</label>
          <textarea id="output" rows="6" placeholder="Résumé de l'article" className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none" disabled></textarea>
        </div>
      </div>
    </div>
  );
}
