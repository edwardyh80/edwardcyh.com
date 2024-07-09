import Link from "next/link";

const About = () => (
  <>
    <p>
      Back in middle school, I hosted a{" "}
      <Link href="https://www.counter-strike.net" target="_blank">
        Counter-Strike 1.6
      </Link>{" "}
      server on my PC for fellow players. I knew nothing about Linux or coding
      at that time. However, my desire to craft the perfect player experience
      pushed me to learn system administration to keep the server stable. I also
      picked up a few scripting languages necessary to customize{" "}
      <Link href="https://www.amxmodx.org" target="_blank">
        plugins
      </Link>
      , offering unique game features.
    </p>
    <p>
      This self-hosting experience has proven immensely helpful in my career.
      Today, I am part of the DBA team responsible for managing hundreds of
      databases at{" "}
      <Link href="https://travel.rakuten.co.jp" target="_blank">
        Rakuten Travel
      </Link>
      , Japan&apos;s largest online travel agency.
    </p>
    <p>
      My duties involve designing and maintaining NoSQL databases, ensuring
      service uptime and performance meet our standards, and resolving issues
      when something unexpected arises. While our past focus was primarily on
      service availability and data security, we have recently been
      experimenting with CI/CD tools and generative UI to improve organizational
      efficiency.
    </p>
    <p>
      Outside of work, I enjoy studying new things through side projects and
      freelance jobs. I also find articles on{" "}
      <Link href="https://news.ycombinator.com" target="_blank">
        Hacker News
      </Link>{" "}
      or{" "}
      <Link href="https://www.reddit.com" target="_blank">
        Reddit
      </Link>{" "}
      interesting, as they keep me updated on the latest tech trends.
    </p>
  </>
);

export default About;
