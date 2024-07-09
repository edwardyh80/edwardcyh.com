import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Interests from "./Interests";

const sections = [
  {
    label: "About",
    content: About,
  },
  {
    label: "Interests",
    content: Interests,
  },
  {
    label: "Experience",
    content: Experience,
  },
];

const Details = () => (
  <main className="flex flex-col gap-16 pb-16 lg:py-24">
    {sections.map((s) => (
      <section key={s.label} className="prose prose-invert">
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
