import Link from "next/link";

import { Icon } from "@iconify/react";

import Footer from "./Footer";

const skills = [
  {
    label: "Couchbase",
    url: "https://www.couchbase.com",
    icon: "devicon:couchbase",
  },
  {
    label: "Elastic",
    url: "https://www.elastic.co",
    icon: "devicon:elasticsearch",
  },
  {
    label: "MongoDB",
    url: "https://www.mongodb.com",
    icon: "devicon:mongodb",
  },
  {
    label: "Redis",
    url: "https://redis.io",
    icon: "devicon:redis",
  },
  {
    label: "Docker",
    url: "https://www.docker.com",
    icon: "devicon:docker",
  },
  {
    label: "Kubernetes",
    url: "https://kubernetes.io",
    icon: "devicon:kubernetes",
  },
  {
    label: "Python",
    url: "https://www.python.org",
    icon: "devicon:python",
  },
  {
    label: "Node.js",
    url: "https://nodejs.org",
    icon: "devicon:nodejs",
  },
];

const contact = [
  {
    label: "Email",
    url: "mailto:mail@edwardcyh.com",
    icon: "fa6-regular:envelope",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/edwardyh80",
    icon: "fa6-brands:linkedin-in",
  },
  {
    label: "GitHub",
    url: "https://github.com/edwardyh80",
    icon: "fa6-brands:github",
  },
];

const Profile = () => (
  <header className="flex shrink-0 grow flex-col gap-8 pt-16 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:py-24">
    <div>
      <h1 className="text-5xl font-extrabold tracking-tight text-primary-200">
        Edward Chow
      </h1>
      <h2 className="mt-2 text-xl text-primary-200">Database Administrator</h2>
      <p className="mt-4 max-w-xs">
        I keep critical data inside NoSQL databases intact and secure.
      </p>
    </div>
    <div className="grow">
      <p className="text-xs font-semibold uppercase tracking-widest text-secondary-400">
        Skills
      </p>
      <ul className="mt-2 grid h-[136px] w-[280px] grid-cols-4 gap-2">
        {skills.map((s) => (
          <li key={s.label} className="group relative flex">
            <Link href={s.url} target="_blank" aria-label={s.label}>
              <Icon
                className="rounded-lg p-2 grayscale-50 transition group-hover:bg-secondary-400/10 group-hover:grayscale-0"
                icon={s.icon}
                height={64}
              />
            </Link>
            <span className="pointer-events-none absolute left-1/2 top-[68px] z-10 -translate-x-2/4 scale-0 select-none rounded-lg bg-primary-950 p-2 text-xs text-primary-200 transition group-hover:scale-100">
              {s.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <ul className="flex flex-row gap-2">
      {contact.map((c) => (
        <li key={c.label}>
          <Link href={c.url} target="_blank" aria-label={c.label}>
            <Icon
              className="rounded-lg p-2 transition hover:text-secondary-400"
              icon={c.icon}
              height={40}
            />
          </Link>
        </li>
      ))}
    </ul>
    <Footer className="hidden lg:block" />
  </header>
);

export default Profile;
