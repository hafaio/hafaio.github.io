import { ReactElement } from "react";
import Image, { ImageProps, ImageLoaderProps } from "next/image";

function staticLoader({ src }: ImageLoaderProps): string {
  return src;
}

export default function StaticImage({
  alt,
  ...props
}: Omit<ImageProps, "loader" | "unoptimized"> & { alt: string }): ReactElement {
  return (
    <Image alt={alt} {...props} loader={staticLoader} unoptimized={true} />
  );
}
