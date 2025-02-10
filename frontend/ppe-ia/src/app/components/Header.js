import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/"
          className="flex items-center justify-center p-2 w-[5vh] h-[5vh] rounded-lg"
          style={{ backgroundColor: "var(--color2)" }}
        >
          <FontAwesomeIcon icon={faHome} className="text-xl"/>
        </Link>
        <h1 className="text-3xl font-bold text-center">Article Summary</h1>
        <div className="p-2 w-[5vh] h-[5vh]"></div>
      </div>
      <div className="flex justify-center gap-16 mb-6">
        <Link
          href="/pages/url"
          className="font-semibold py-2 px-16 rounded-lg transition-transform transform hover:scale-110"
          style={{ backgroundColor: "var(--color2)" }}
        >URL
        </Link>
        <Link
          href="/pages/text"
          className="font-semibold py-2 px-16 rounded-lg transition-transform transform hover:scale-110"
          style={{ backgroundColor: "var(--color2)" }}
        >Text
        </Link>
        <Link
          href="/pages/file"
          className="font-semibold py-2 px-16 rounded-lg transition-transform transform hover:scale-110"
          style={{ backgroundColor: "var(--color2)" }}
        >File
        </Link>
        </div>
    </header>
  );
}
