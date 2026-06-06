import type { ReactElement } from "react";
import ExternalAnchor from "./external-anchor";

export interface ButtonProps {
  text: string;
  href?: string;
  icon?: ReactElement;
}

function Button({ text, href, icon }: ButtonProps): ReactElement {
  return (
    <ExternalAnchor href={href} className="grow md:grow-0">
      <button
        type="button"
        className="w-full rounded-lg px-4 py-2 transition-colors bg-zinc-100 text-zinc-700 hover:bg-teal-50 hover:text-teal-700 space-x-2 flex justify-center items-center dark:bg-zinc-700/60 dark:text-zinc-300 dark:hover:bg-teal-950/50 dark:hover:text-teal-300 focus:ring-3 ring-teal-400"
      >
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
  tint = "from-white to-zinc-100 dark:from-zinc-800 dark:to-zinc-700/40",
}: {
  logo?: React.ReactElement;
  name: string;
  description: string;
  buttons: ButtonProps[];
  tint?: string;
}): ReactElement {
  return (
    <li className="reveal mb-6 break-inside-avoid flex flex-col rounded-xl overflow-hidden bg-white ring-1 ring-zinc-200 shadow-sm transition-shadow hover:shadow-md hover:ring-2 hover:ring-teal-400/50 dark:bg-zinc-800 dark:ring-zinc-700/50 dark:shadow-none">
      <div
        className={`bg-linear-to-br ${tint} h-40 flex shrink-0 justify-center items-center`}
      >
        {logo ?? null}
      </div>
      <div className="flex flex-col gap-4 p-4">
        {/* eslint-disable-next-line spellcheck/spell-checker */}
        <h3 className="text-2xl font-semibold text-center md:text-left dark:text-zinc-100">
          {name}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
        <div className="flex space-x-4">
          {buttons.map((props) => (
            <Button {...props} key={props.text} />
          ))}
        </div>
      </div>
    </li>
  );
}
