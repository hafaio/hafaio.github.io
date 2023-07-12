import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import {
  FaAdjust,
  FaChrome,
  FaGithub,
  FaGlobe,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import ExternalAnchor from "../components/external-anchor";
import Project from "../components/project";
import StaticImage from "../components/static-image";
import { useTheme } from "../components/theme";
import asciiMath from "../public/ascii-math.svg";
import favicon from "../public/favicon.ico";
import hafa from "../public/hafa.svg";
import splash from "../public/irina-shishkina-FMlZAUFmkvw-unsplash.jpg";
import repub from "../public/repub.svg";

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
      className="p-1 hover:text-black dark:hover:text-gray-100"
    >
      {icon}
    </ExternalAnchor>
  );
}

export default function Hero(): ReactElement {
  const { theme, toggleTheme } = useTheme();
  const themeTitle =
    theme === undefined ? "System Theme" : theme ? "Dark Theme" : "Light Theme";
  const themeIcon =
    theme === undefined ? <FaAdjust /> : theme ? <FaMoon /> : <FaSun />;
  return (
    <div className="dark:bg-gray-800">
      <Head>
        <title>hafa.io</title>
        <link rel="icon" href={favicon.src} />
        <meta
          name="google-site-verification"
          content="GSZtecn0mSgjHOwdsGTs9h_1fok8AZ7saSkYSuZ18yE"
        />
      </Head>
      <div className="fixed w-full shadow bg-white bg-opacity-80 backdrop-filter backdrop-blur backdrop-saturate-125 transition-opacity duration-500 opacity-0 scroll-show dark:bg-gray-800 dark:bg-opacity-80 dark:backdrop-brightness-125">
        <div className="max-w-4xl h-full mx-auto my-2 px-6 flex items-center justify-between dark:text-gray-100">
          <Link href="/">
            <span className="flex items-center">
              <StaticImage
                src={hafa}
                alt="hafa.io logo"
                height={36}
                width={36}
              />
              <span className="font-cursive text-4xl pl-2">hafa.io</span>
            </span>
          </Link>
          <button
            onClick={toggleTheme}
            title={themeTitle}
            className="p-2 rounded-full ring-teal-400 text-gray-500 hover:bg-gray-300 focus:ring dark:text-gray-400 dark:hover:bg-gray-700"
          >
            {themeIcon}
          </button>
        </div>
      </div>
      <div
        className={`h-screen w-full bg-center bg-cover bg-fixed flex justify-center items-center`}
        style={{ backgroundImage: `url(${splash.src})` }}
      >
        <span className="text-8xl font-bold text-white transition-opacity duration-500 scroll-hide font-cursive select-none">
          hafa.io
        </span>
      </div>
      <div className="min-h-screen max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold py-4 mt-4 bg-clip-text text-transparent bg-gradient-to-br from-teal-400 to-teal-500">
          Projects
        </h2>
        <ul className="px-4 space-y-8 w-full">
          <Project
            logo={repub}
            name="reMarkable ePub"
            description={`reMarkable ePub is an open source chrome extension
            for converting web pages into ePubs for reading on reMarkable. In
            contrast to the "Read on reMarkable" extension, this allows more
            customization and allows you to include images.`}
            buttons={[
              {
                text: "Chrome Store",
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
            logo={asciiMath}
            name="Ascii Math Unicode"
            description="Ascii math unicode is an open source chrome extension for converting highlighted ascii math into unicode math expressions."
            buttons={[
              {
                text: "Chrome Store",
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
                href: "https://github.com/hafaio/ascii-math-unicode",
                icon: <FaGithub />,
              },
            ]}
          />
        </ul>
        <div className="my-8 space-y-2 w-full text-gray-600 dark:text-gray-400">
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
              href="https://unsplash.com/@whoisrobinhood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </ExternalAnchor>
          </div>
        </div>
      </div>
    </div>
  );
}
