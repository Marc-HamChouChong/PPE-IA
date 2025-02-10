export default function Page() {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="input" className="block font-medium mb-2">Article URL :</label>
        <textarea id="input" rows="1" placeholder="URL" className="w-full p-2 border border-gray-300 rounded bg-gray-100"></textarea>
        <button className="font-semibold my-2 py-1 px-8 rounded bg-blue-400 hover:bg-blue-500">Summarize</button>
      </div>
      
      <div>
        <label htmlFor="output" className="block font-medium mb-2">Summary :</label>
        <textarea id="output" rows="10" placeholder="Summary ..." className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none" disabled></textarea>
      </div>
    </div>
  );
}
