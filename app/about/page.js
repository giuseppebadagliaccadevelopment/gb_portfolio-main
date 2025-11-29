import { aboutPageData } from "@/data/aboutPageData";
import Hero from "@/components/Hero/Hero";

export const metadata = {
  title: "About | Giuseppe Badagliacca | Full-Stack Software Engineer",
  description:
    "Learn about Giuseppe Badagliacca. Discover his journey from mental health to tech, and his work with high-profile clients like Fiat Automobiles and luxury real estate companies.",
};

const heroData = {
  imgPath: "/images/port_icons/Joe0106_Square copy.jpg",
  btnText: "contact",
  btnLink: "/contact",
  withExtra: true,
};
export default function About() {
  return (
    <>
      <Hero data={heroData} />
    </>
  );
}
