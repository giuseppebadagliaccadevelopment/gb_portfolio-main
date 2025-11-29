import "@/styles/globals.scss";
import { Suspense } from "react";
import Analytics from "@/components/Analytics/Analytics";
import AnalyticsEffects from "@/components/Analytics/AnalyticsEffects";
import Browsersize from "@/components/Browsersize/Browsersize";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  openGraph: {
    title: "Giuseppe Badagliacca | Senior Software Engineer",
    description:
      "Giuseppe Badagliacca is a Senior Full-Stack Software Engineer specializing in front-end development.",
    images: "/images/port_icons/gb_thumnail.png",
    url: "https://giuseppebadagliacca.com/",
    type: "website",
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  // address: {
  //   "@type": "PostalAddress",
  //   addressLocality: "Colorado Springs",
  //   addressRegion: "CO",
  //   postalCode: "80840",
  //   streetAddress: "100 Main Street",
  // },
  // colleague: [
  //   "http://www.example.com/JohnColleague.html",
  //   "http://www.example.com/JameColleague.html",
  // ],
  email: "joebadagliacca@gmail.com",
  images: "/images/port_icons/gb_thumnail.png",
  jobTitle: "Senior Software Engineer",
  name: "Giuseppe Badagliacca",
  alumniOf: "Stony Brook University",
  birthPlace: "New York, New York",
  birthDate: "1991-03-25",
  // height: "72 inches",
  gender: "male",
  // memberOf: "Republican Party",
  nationality: "American",
  telephone: "(631) 926-1023",
  url: "https://giuseppebadagliacca.com/",
  sameAs: ["https://www.linkedin.com/in/giuseppebadagliacca/"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Analytics />
        <link
          rel="icon"
          href="/images/port_icons/favicon-16x16.png"
          type="image/svg+xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Suspense>
          <AnalyticsEffects />
        </Suspense>
        <Header />
        {children}
        <Footer />
        {/* <Browsersize /> */}
      </body>
    </html>
  );
}
