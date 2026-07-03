import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import { FaChrome, FaGithub, FaGlobe } from "react-icons/fa";
import ExternalAnchor from "../components/external-anchor";
import Project from "../components/project";
import ThemeButton from "../components/theme-button";
import asciiMath from "../images/ascii-math.svg";
import hafa from "../images/hafa.svg";
import splash from "../images/irina-shishkina-FMlZAUFmkvw-unsplash.jpg";
import repub from "../images/repub.svg";
import riso from "../images/riso-logo.svg";
import scenicRoute from "../images/scenic-route.svg";

export const metadata: Metadata = {
  title: "hafa.io",
};

interface Svg {
  src: string;
}

function FooterIcon({
  href,
  icon,
}: {
  href: string;
  icon: ReactElement;
}): ReactElement {
  return (
    <ExternalAnchor
      href={href}
      className="p-1 hover:text-teal-600 dark:hover:text-teal-400"
    >
      {icon}
    </ExternalAnchor>
  );
}

export default function Hero(): ReactElement {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900">
      <div className="fixed z-50 w-full shadow-sm bg-white/80 backdrop-blur-sm backdrop-saturate-150 transition-[opacity,visibility] duration-500 opacity-0 scroll-show dark:bg-zinc-800/80 dark:backdrop-brightness-150">
        <div className="max-w-4xl h-full mx-auto my-2 px-6 flex items-center justify-between dark:text-zinc-100">
          <Link href="/">
            <span className="flex items-center">
              <Image
                src={(hafa as Svg).src}
                alt="hafa.io logo"
                height={36}
                width={36}
              />
              <span className="font-cursive text-4xl pl-2">hafa.io</span>
            </span>
          </Link>
          <ThemeButton />
        </div>
      </div>
      <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
        <Image
          src={splash}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-zoom object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
        <span className="relative text-8xl font-bold text-white transition-opacity duration-500 scroll-hide font-cursive select-none">
          hafa.io
        </span>
      </div>
      <div className="min-h-screen max-w-4xl mx-auto flex flex-col items-center pb-32">
        <div className="reveal flex flex-col items-center gap-3 py-8 mt-4">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Projects
          </h2>
          <span className="h-1 w-16 rounded-full bg-linear-to-r from-teal-400 to-teal-500" />
        </div>
        <ul className="px-4 w-full columns-1 md:columns-2 lg:columns-3 gap-6">
          <Project
            tint="from-white to-sky-50 dark:from-zinc-800 dark:to-sky-950/30"
            logo={
              <Image
                src={(repub as Svg).src}
                // eslint-disable-next-line spellcheck/spell-checker
                alt="repub logo"
                height={72}
                width={72}
              />
            }
            name="reMarkable ePub"
            description={`reMarkable ePub is an open source chrome extension
            for converting web pages into ePubs for reading on reMarkable. In
            contrast to the "Read on reMarkable" extension, this allows more
            customization and allows you to include images.`}
            buttons={[
              {
                text: "Chrome",
                href: "https://chrome.google.com/webstore/detail/repub/blkjpagbjaekkpojgcgdapmikoaolpbl",
                icon: <FaChrome />,
              },
              {
                text: "Github",
                href: "https://github.com/hafaio/repub",
                icon: <FaGithub />,
              },
            ]}
          />
          <Project
            tint="from-white to-indigo-50 dark:from-zinc-800 dark:to-indigo-950/30"
            logo={
              <Image
                src={(riso as Svg).src}
                alt="Risograph logo"
                height={72}
                width={72}
              />
            }
            name="Spot Color Separation"
            description="Website for separating an image into spot colors. Intended for decomposing images for a Risograph."
            buttons={[
              {
                text: "Website",
                href: "https://hafaio.github.io/color-separation",
                icon: <FaGlobe />,
              },
              {
                text: "Github",
                href: "https://github.com/hafaio/color-separation",
                icon: <FaGithub />,
              },
            ]}
          />
          <Project
            tint="from-white to-blue-50 dark:from-zinc-800 dark:to-blue-950/30"
            logo={<span className="text-6xl">🐀</span>}
            name="Loose RAT Helper"
            description="Helper for finding 'loose' (homophone) Remote Associates Tests given a starting word."
            buttons={[
              {
                text: "Website",
                href: "https://hafaio.github.io/loose-rat",
                icon: <FaGlobe />,
              },
              {
                text: "Github",
                href: "https://github.com/hafaio/loose-rat",
                icon: <FaGithub />,
              },
            ]}
          />
          <Project
            tint="from-white to-violet-50 dark:from-zinc-800 dark:to-violet-950/30"
            logo={
              <Image
                src={(asciiMath as Svg).src}
                alt="ascii math logo"
                height={72}
                width={72}
              />
            }
            name="Ascii Math Unicode"
            description="Ascii math unicode is an open source chrome extension for converting highlighted ascii math into unicode math expressions."
            buttons={[
              {
                text: "Chrome",
                href: "https://chrome.google.com/webstore/detail/ascii-math-unicode/llehdcbaonklonjlfgeggamnebgggoab",
                icon: <FaChrome />,
              },
              {
                text: "Github",
                href: "https://github.com/hafaio/ascii-math-unicode",
                icon: <FaGithub />,
              },
            ]}
          />
          <Project
            tint="from-white to-cyan-50 dark:from-zinc-800 dark:to-cyan-950/30"
            logo={
              <Image
                src={(scenicRoute as Svg).src}
                alt="Scenic Route logo"
                height={72}
                width={72}
              />
            }
            name="Scenic Route"
            description="Navigation for taking the scenic route."
            buttons={[
              {
                text: "Website",
                href: "https://hafaio.github.io/scenic-route",
                icon: <FaGlobe />,
              },
              {
                text: "Github",
                href: "https://github.com/hafaio/scenic-route",
                icon: <FaGithub />,
              },
            ]}
          />
          <Project
            tint="from-white to-purple-50 dark:from-zinc-800 dark:to-purple-950/30"
            logo={<span className="text-6xl">🎹</span>}
            name="Synesthizer"
            description="A synesthetic synthesizer that converts images into piano compositions."
            buttons={[
              {
                text: "Website",
                href: "https://hafaio.github.io/synesthizer",
                icon: <FaGlobe />,
              },
              {
                text: "Github",
                href: "https://github.com/hafaio/synesthizer",
                icon: <FaGithub />,
              },
            ]}
          />
        </ul>
        <div className="my-8 space-y-2 w-full text-zinc-600 dark:text-zinc-400">
          <div className="text-md flex justify-center">
            <FooterIcon href="https://github.com/hafaio" icon={<FaGithub />} />
          </div>
          <div className="text-center text-sm">
            Hero photo by{" "}
            <ExternalAnchor
              className="hover:text-teal-400"
              href="https://unsplash.com/@whoisrobinhood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Irina Shishkina
            </ExternalAnchor>{" "}
            on{" "}
            <ExternalAnchor
              className="hover:text-teal-400"
              href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </ExternalAnchor>
          </div>
        </div>
      </div>
    </div>
  );
}
