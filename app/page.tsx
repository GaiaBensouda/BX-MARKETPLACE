import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex flex-col items-center gap-4 p-8">
        <Image
          className="dark:invert"
          src="/images/logo.png" // Replace with your marketplace logo
          alt="Marketplace logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold">BX MARKETPLACE</h1>
        <p className="text-center text-lg">
          A futuristic platform where students can trade, buy, or sell any kind of products.
        </p>
        <nav className="mt-4">
          <Link href="/browse">
            <a className="text-lg font-semibold hover:underline">Buy & Sell</a>
          </Link>
        </nav>
      </header>

      <main className="flex flex-col items-center gap-8 p-8">
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <ol className="list-inside list-decimal text-sm">
            <li className="mb-2">
              Browse the available products or list your own items for sale.
            </li>
            <li>
              Sign up to create an account and manage your listings.
            </li>
          </ol>
        </section>

        <div className="flex gap-4 flex-col sm:flex-row">
          <Link href="/browse">
            <a className="bg-gray-800 hover:bg-gray-600 text-white rounded-full py-2 px-4 transition-colors text-sm sm:text-base">
              Browse Marketplace
            </a>
          </Link>
          <Link href="/sell">
            <a className="bg-gray-800 hover:bg-gray-600 text-white rounded-full py-2 px-4 transition-colors text-sm sm:text-base">
              List Your Items
            </a>
          </Link>
        </div>
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center p-8">
        <Link href="/about">
          <a className="flex items-center gap-2 hover:underline">
            About Us
          </a>
        </Link>
        <Link href="/contact">
          <a className="flex items-center gap-2 hover:underline">
            Contact Us
          </a>
        </Link>
        <Link href="/faq">
          <a className="flex items-center gap-2 hover:underline">
            FAQ
          </a>
        </Link>
      </footer>
    </div>
  );
}
