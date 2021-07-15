import { ReactElement } from "react";
import ExternalAnchor from "./external-anchor";

export interface ButtonProps {
  text: string;
  href?: string;
  icon?: ReactElement;
}

function Button({ text, href, icon }: ButtonProps): ReactElement {
  return (
    <ExternalAnchor href={href} className="flex-grow md:flex-grow-0">
      <button className="w-full text-gray-600 rounded-lg px-4 py-2 border transition hover:text-black hover:shadow active:shadow-none space-x-2 flex justify-center items-center dark:text-gray-400 dark:hover:text-gray-100 dark:border-gray-400 dark:hover:border-gray-100 dark:hover:shadow-none focus:ring ring-teal-400">
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
  logo: string;
  name: string;
  description: string;
  buttons: ButtonProps[];
}): ReactElement {
  return (
    <li className="rounded-lg shadow overflow-hidden bg-gray-100 md:flex dark:bg-gray-700 dark:shadow-none">
      <div className="bg-gray-300 h-40 flex justify-center align-center md:h-auto md:w-60">
        <img src={logo} alt={name} height={64} width={64} />
      </div>
      <div className="space-y-4 p-4">
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
