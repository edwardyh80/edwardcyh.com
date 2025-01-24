"use client";

import { RefObject, useEffect, useRef, useState } from "react";

import { twMerge } from "tailwind-merge";

import Details from "@/components/Details";
import { sections } from "@/components/Details";
import Profile from "@/components/Profile";

const Nav = ({
  vis,
  refList,
}: {
  vis: boolean[];
  refList: RefObject<HTMLElement[]>;
}) => (
  <nav className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:overflow-y-auto lg:py-24">
    <ul className="flex flex-col justify-center gap-1 text-center">
      {sections.map((s, i) => (
        <li
          key={s.id}
          className={twMerge(
            "cursor-pointer p-1 text-xs font-semibold uppercase",
            vis[i] && "text-secondary-400",
          )}
          onClick={() => {
            if (refList.current)
              refList.current[i].scrollIntoView({ behavior: "smooth" });
          }}
        >
          {s.label[0]}
        </li>
      ))}
    </ul>
  </nav>
);

const Home = () => {
  const [vis, setVis] = useState(new Array(sections.length).fill(false));
  const refList = useRef<HTMLElement[]>(new Array(sections.length).fill(null));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const delta = new Array(sections.length).fill(null);
      entries.forEach((e) => {
        delta[sections.findIndex((s) => s.id === e.target.id)] =
          e.isIntersecting;
      });
      setVis((v) => delta.map((d, i) => (d === null ? v[i] : d)));
    });

    refList.current.forEach((r) => {
      observer.observe(r);
    });
    return () => {
      observer.disconnect();
    };
  }, [refList]);

  return (
    <div className="m-auto flex max-w-screen-xl flex-col gap-16 px-4 lg:flex-row lg:gap-8 lg:px-8">
      <Profile />
      <Nav vis={vis} refList={refList} />
      <Details refList={refList} />
    </div>
  );
};

export default Home;
