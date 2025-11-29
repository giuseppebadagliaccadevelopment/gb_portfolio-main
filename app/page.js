import { homePageData } from "@/data/homePageData";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import SliderSection from "@/components/SliderSection/SliderSection";

export const metadata = {
  title: "Giuseppe Badagliacca | Senior Software Engineer",
  description:
    "Giuseppe Badagliacca is a Senior Full-Stack Software Engineer specializing in front-end development.",
};

export default function Home() {
  const heroData = {
    imgPath: "/images/port_icons/IMG_5762.jpg",
    btnText: "Learn&nbsp;more",
    btnLink: "/about",
    btnTextTwo: "see&nbsp;projects",
    btnLinkTwo: "/#projects",
    withExtra: false,
  };

  return (
    <>
      <Hero data={heroData} />
      <div id="projects">
        <SliderSection />
      </div>
    </>
  );
}
