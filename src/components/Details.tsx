import { RefObject } from "react";

import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Freelance from "./Freelance";
import Interests from "./Interests";

export const sections = [
  {
    id: "about",
    label: "About",
    content: About,
  },
  {
    id: "interests",
    label: "Interests",
    content: Interests,
  },
  {
    id: "experience",
    label: "Experience",
    content: Experience,
  },
  {
    id: "freelance-projects",
    label: "Freelance Projects",
    content: Freelance,
  },
];

const Details = ({ refList }: { refList: RefObject<HTMLElement[]> }) => (
  <main className="flex flex-col gap-16 pb-16 lg:py-24">
    {sections.map((s, i) => (
      <section
        key={s.id}
        id={s.id}
        className="prose prose-invert"
        style={{ scrollMargin: 64 }}
        ref={(n) => {
          if (refList.current && n) refList.current[i] = n;
        }}
      >
        <h3 className="text-xs font-semibold uppercase tracking-widest text-secondary-400">
          {s.label}
        </h3>
        <s.content />
      </section>
    ))}
    <Footer className="lg:hidden" />
  </main>
);

export default Details;
