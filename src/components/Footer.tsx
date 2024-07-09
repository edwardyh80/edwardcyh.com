import Link from "next/link";

const Footer = ({ className }: { className: string }) => (
  <footer className={className}>
    <p className="text-sm">
      Built with{" "}
      <Link
        className="font-semibold text-primary-200 transition hover:text-secondary-400"
        href="https://nextjs.org"
        target="_blank"
      >
        Next.js
      </Link>{" "}
      &{" "}
      <Link
        className="font-semibold text-primary-200 transition hover:text-secondary-400"
        href="https://tailwindcss.com"
        target="_blank"
      >
        Tailwind CSS
      </Link>
    </p>
    <p className="text-sm">© {new Date().getFullYear()} Edward Chow</p>
  </footer>
);

export default Footer;
