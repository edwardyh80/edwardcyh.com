import Link from "next/link";

import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

const freelance = [
  {
    label: "jia",
    date: "2024 -",
    title: "Jia 121 - SNS application",
    desc: ["Starting soon!"],
    skills: {
      main: [],
      sub: [],
    },
  },
  {
    label: "ailab",
    date: "2023 -",
    title: "E&M AI Lab - Event Website",
    desc: [
      "An engaging, informative site that provides key information about upcoming academic events such as seminars and workshops,",
      "allowing interested audience to subscribe for organizer's latest updates.",
    ],
    url: "https://enmailab.org",
    skills: {
      main: ["Next.js", "Strapi", "PostgreSQL"],
      sub: ["Caddy", "Docker", "AWS"],
    },
  },
  {
    label: "kube",
    date: "2021 -",
    title: "Kube - Warehouse Management System",
    desc: [
      "A full-stack application that helps a local warehouse company manage and control inventory and daily logistics operations for each client,",
      "supporting features including invoice generation, real-time notifications and data analytics.",
    ],
    skills: {
      main: ["Next.js", "Nest.js", "MySQL", "ELK Stack", "WordPress"],
      sub: ["Caddy", "Docker"],
    },
  },
];

const Freelance = () => (
  <ul className="not-prose mt-4 flex flex-col gap-8">
    {freelance.map((f) => (
      <li
        key={f.label}
        className="grid gap-2 lg:grid-cols-[1fr_3fr] lg:gap-y-8"
      >
        <div className="mt-2 flex flex-row justify-between lg:flex-col lg:justify-start">
          <p className="text-xs font-semibold uppercase">{f.date}</p>
        </div>
        <div>
          <p className="font-semibold text-primary-200">
            {f.url ? (
              <Link href={f.url} target="_blank">
                {f.title}{" "}
                <Icon
                  className="inline-block"
                  icon="fa6-solid:link"
                  height={16}
                />
              </Link>
            ) : (
              f.title
            )}
          </p>
          <p className="text-sm">{f.desc.join(" ")}</p>
          {(["main", "sub"] as const).map((t) => (
            <ul key={t} className="mt-2 flex flex-row flex-wrap gap-2">
              {f.skills[t].map((s) => (
                <li
                  key={s}
                  className={twMerge(
                    "rounded-full px-2 py-1 text-xs",
                    t === "main"
                      ? "border-2 border-secondary-900 bg-secondary-950 text-secondary-200"
                      : "border-2 border-tertiary-900 bg-tertiary-950 text-tertiary-200",
                  )}
                >
                  {s}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </li>
    ))}
  </ul>
);

export default Freelance;
