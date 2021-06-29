import { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import hafa from "../public/hafa.svg";
import asciiMath from "../public/ascii-math.svg";
import favicon from "../public/favicon.ico";
import splash from "../public/irina-shishkina-FMlZAUFmkvw-unsplash.jpg";
import Project from "../components/project";
import ExternalAnchor from "../components/external-anchor";
import { useTheme } from "../components/theme";
import { FaChrome, FaGithub, FaSun, FaMoon, FaAdjust } from "react-icons/fa";

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
        <link rel="icon" href={favicon} />
        <meta name="google-site-verification" content="GSZtecn0mSgjHOwdsGTs9h_1fok8AZ7saSkYSuZ18yE" />
      </Head>
      <div className="fixed w-full shadow bg-white bg-opacity-80 backdrop-filter backdrop-blur backdrop-saturate-125 transition-opacity duration-500 opacity-0 scroll-show dark:bg-gray-800 dark:bg-opacity-80 dark:backdrop-brightness-125">
        <div className="max-w-4xl h-full mx-auto my-2 px-6 flex items-center justify-between dark:text-gray-100">
          <Link href="/">
            <a className="flex items-center">
              <img src={hafa} alt="hafa.io logo" height={36} width={36} />
              <span className="font-cursive text-4xl pl-2">hafa.io</span>
            </a>
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
        style={{ backgroundImage: `url(${splash})` }}
      >
        <span className="text-8xl font-bold text-white transition-opacity duration-500 scroll-hide font-cursive select-none">
          hafa.io
        </span>
      </div>
      <div className="min-h-screen max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold py-4 mt-4 bg-clip-text text-transparent bg-gradient-to-br from-teal-400 to-teal-500">
          Products
        </h2>
        <ul className="px-4 space-y-8 w-full">
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
