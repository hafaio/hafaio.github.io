import { ReactElement } from "react";
import ExternalAnchor from "./external-anchor";

export interface ButtonProps {
  text: string;
  href?: string;
  icon?: ReactElement;
}

function Button({ text, href, icon }: ButtonProps): ReactElement {
  return (
    <ExternalAnchor href={href} className="grow md:grow-0">
      <button className="w-full text-gray-600 rounded-lg px-4 py-2 border transition hover:text-black hover:shadow-sm active:shadow-none space-x-2 flex justify-center items-center dark:text-gray-400 dark:hover:text-gray-100 dark:border-gray-400 dark:hover:border-gray-100 dark:hover:shadow-none focus:ring-3 ring-teal-400">
        <span>{text}</span>
        {icon}
      </button>
    </ExternalAnchor>
  );
}

export default function Project({
  logo,
  name,
  description,
  buttons,
}: {
  logo?: React.ReactElement;
  name: string;
  description: string;
  buttons: ButtonProps[];
}): ReactElement {
  // {logo && <StaticImage src={logo} alt={name} height={72} width={72} />}

  return (
    <li className="rounded-lg shadow-sm overflow-hidden bg-gray-100 md:flex dark:bg-gray-700 dark:shadow-none">
      <div className="bg-gray-300 h-40 flex shrink-0 justify-center items-center md:h-auto md:w-48">
        {logo ?? null}
      </div>
      <div className="space-y-4 p-4">
        {/* eslint-disable-next-line spellcheck/spell-checker */}
        <h3 className="text-2xl font-semibold text-center md:text-left dark:text-gray-100">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        <div className="flex space-x-4">
          {buttons.map((props) => (
            <Button {...props} key={props.text} />
          ))}
        </div>
      </div>
    </li>
  );
}
