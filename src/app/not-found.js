import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#141513] text-[#1A1C1A] dark:text-[#FAF9F6] flex flex-col justify-between transition-colors">
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-28 text-center flex-1 flex flex-col items-center justify-center">
        <span className="label-caps text-xs text-[#705B3F] dark:text-[#C5A880] tracking-[0.2em] mb-4">
          ARCHITECTURAL REGISTRY • 404
        </span>
        <h1 className="font-editorial-serif text-4xl sm:text-5xl md:text-6xl text-[#1A1C1A] dark:text-[#FAF9F6] mb-6 font-normal">
          Residence Not Located
        </h1>
        <p className="font-editorial-sans text-sm sm:text-base text-[#464741] dark:text-[#A0A29C] max-w-lg mb-10 leading-relaxed">
          The requested architectural residence or folio is either private, unlisted, or no longer available in the active public collection.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/properties"
            className="bg-[#242521] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#141513] px-8 py-3.5 label-caps text-xs tracking-[0.16em] hover:bg-[#705B3F] dark:hover:bg-[#C5A880] transition-colors"
          >
            EXPLORE ALL PROPERTIES
          </Link>
          <Link
            href="/"
            className="border border-[#242521] dark:border-[rgba(250,249,246,0.2)] text-[#1A1C1A] dark:text-[#FAF9F6] px-8 py-3.5 label-caps text-xs tracking-[0.16em] hover:bg-[#EAE3D8] dark:hover:bg-[#202220] transition-colors"
          >
            RETURN HOME
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
