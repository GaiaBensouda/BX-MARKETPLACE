import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-col gap-4 items-center">
        <Image
          className="dark:invert"
          src="/images/marketplace-logo.png" // Replace with your marketplace logo
          alt="Marketplace logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl font-bold">Student Marketplace</h1>
        <p className="text-center text-lg">
          A place where students can trade, buy, or sell any kind of products.
        </p>
      </header>

      <main className="flex flex-col gap-8 items-center sm:items-start">
        <section className="text-center sm:text-left">
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

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/browse"
          >
            Browse Marketplace
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/sell"
          >
            List Your Items
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
        >
          <Image
            aria-hidden
            src="/icons/info.svg" // Replace with your info icon
            alt="Info icon"
            width={16}
            height={16}
          />
          About Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
        >
          <Image
            aria-hidden
            src="/icons/contact.svg" // Replace with your contact icon
            alt="Contact icon"
            width={16}
            height={16}
          />
          Contact Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/faq"
        >
          <Image
            aria-hidden
            src="/icons/faq.svg" // Replace with your FAQ icon
            alt="FAQ icon"
            width={16}
            height={16}
          />
          FAQ
        </a>
      </footer>
    </div>
  );
}
