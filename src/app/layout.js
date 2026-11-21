import { EB_Garamond, DM_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "NESTORA PROPERTIES | Architectural Residences & Private Estates",
  description:
    "Curated architectural residences, private estates, and luxury coastal retreats across Egypt and premier Arab markets.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${ebGaramond.variable} ${dmSans.variable} ${ibmPlexSansArabic.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var t=localStorage.getItem('nestora_theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){d.classList.add('dark');}else{d.classList.remove('dark');}var l=localStorage.getItem('nestora_lang');if(l==='ar'){d.lang='ar';d.dir='rtl';}else{d.lang='en';d.dir='ltr';}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAF9F6] text-[#1A1C1A] dark:bg-[#141513] dark:text-[#FAF9F6] transition-colors duration-200">
        <AppProvider>
          <ScrollRevealObserver />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
