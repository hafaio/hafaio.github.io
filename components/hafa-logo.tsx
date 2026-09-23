import type { ReactElement, SVGProps } from "react";

export default function HafaLogo(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg
      viewBox="25 42 130 130"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M30,150 C30,80 90,40 150,50 C120,55 95,80 95,110 C95,140 120,150 140,140 C120,170 70,175 30,150 Z" />
    </svg>
  );
}
