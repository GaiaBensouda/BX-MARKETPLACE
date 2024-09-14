import Link from 'next/link';

export default function SideBar() {
  return (
    <div className="sidebar">
      <nav>
        <Link href="/">Accueil</Link>
        <Link href="/listings">Produits</Link>
        <Link href="/signup">S'inscrire</Link>
      </nav>
    </div>
  );
}
