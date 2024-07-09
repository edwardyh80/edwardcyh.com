import Image from "next/image";
import Link from "next/link";

import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

import RakutenSubsurfaceSpeakerImg from "@/../public/rakuten_subsurface_speaker.jpeg";

const experience = [
  {
    label: "rakuten",
    date: "Apr 2019 -",
    location: "Tokyo",
    role: "Database Administrator",
    company: "Rakuten, Inc.",
    url: "https://global.rakuten.com/corp",
    team: "NoSQL team, Cloud Services Department",
    duties: [
      "Design, construct and manage NoSQL database platform supporting Rakuten Travel and Leisure services.",
      "Monitor database health and performance 24/7, diagnose and resolve database errors/performance issues as necessary. ",
    ],
    skills: {
      main: ["Couchbase", "Elastic", "MongoDB", "Redis"],
      sub: ["Prometheus", "Grafana", "Ansible", "Python", "Shell"],
    },
    extra: () => (
      <>
        <div>
          <Image
            className="max-w-36 rounded-lg border-2 border-secondary-400/10"
            src={RakutenSubsurfaceSpeakerImg}
            alt="Rakuten Subsurface Speaker"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-primary-200">
            Speaker at Subsurface LIVE 2023
          </p>
          <p className="mt-1 text-xs">
            NoSQL Database and Hybrid Cloud Usage Scenarios at Rakuten Travel
          </p>
        </div>
      </>
    ),
  },
  {
    label: "ricoh",
    date: "Oct 2018 - Mar 2019",
    location: "Hong Kong",
    role: "IT Trainee",
    company: "Ricoh Asia Pacific",
    url: "https://www.ricoh-ap.com",
    team: "Information Technology Division",
    duties: [
      "Provided development and maintenance support for in-house ERP applications.",
      "Prepared RPA training materials and sample robots for end users' reference.",
    ],
    skills: {
      main: ["C#", "JavaScript", "OpenEdge ABL", "UiPath", "Power BI"],
      sub: [],
    },
  },
  {
    label: "cmhk",
    date: "Jun - Aug 2017",
    location: "Hong Kong",
    role: "Intern",
    company: "China Mobile HK",
    url: "https://www.hk.chinamobile.com",
    team: "Big Data Operation",
    duties: [
      "Facilitated deployment of an OpenStack-based cloud computing testbed with Ceph as a cloud storage and backup solution.",
      "Produced software documentation providing detailed instructions and troubleshooting assistance.",
    ],
    skills: {
      main: ["Linux", "Networking", "OpenStack", "Ceph"],
      sub: [],
    },
  },
  {
    label: "hkt",
    date: "Jun - Aug 2016",
    location: "Hong Kong",
    role: "Summer Intern",
    company: "HKT Services",
    url: "https://www.hkt.com",
    team: "Integrated Projects & CPE Services",
    duties: [
      "Tested and configured network equipment from suppliers before installation.",
      "Provided on-site maintenance service to clients including CUHK, CityU and Housing Authority.",
    ],
    skills: {
      main: ["Linux", "Networking"],
      sub: [],
    },
  },
];

const Experience = () => (
  <ul className="not-prose mt-4 flex flex-col gap-8">
    {experience.map((e) => (
      <li
        key={e.label}
        className="grid gap-2 lg:grid-cols-[1fr_3fr] lg:gap-y-8"
      >
        <div className="mt-2 flex flex-row justify-between lg:flex-col lg:justify-start">
          <p className="text-xs font-semibold uppercase">{e.date}</p>
          <p className="text-xs font-semibold uppercase">{e.location}</p>
        </div>
        <div>
          <p className="font-semibold text-primary-200">
            {e.role}
            <span className="mx-1">·</span>
            <Link href={e.url} target="_blank">
              {e.company}{" "}
              <Icon
                className="inline-block"
                icon="fa6-solid:link"
                height={16}
              />
            </Link>
          </p>
          <p className="text-sm text-secondary-400">{e.team}</p>
          <p className="mt-2 text-sm">{e.duties.join(" ")}</p>
          {(["main", "sub"] as const).map((t) => (
            <ul key={t} className="mt-2 flex flex-row flex-wrap gap-2">
              {e.skills[t].map((s) => (
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
        {e.extra && <e.extra />}
      </li>
    ))}
  </ul>
);

export default Experience;
