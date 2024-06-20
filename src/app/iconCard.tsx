import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  src: string;
  iconWidth: number;
  iconHeight: number;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const iconCard = ({
  src,
  iconWidth,
  iconHeight,
  alt,
  title,
  description,
  buttonText,
  buttonLink,
}: Props) => {
  return (
    <div className="flex max-w-sm flex-col items-center gap-4 rounded-xl p-2 text-center hover:bg-purple-300">
      <Link href={buttonLink}>
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-12 w-12 rounded-[10px] border border-icon-border">
            <Image
              className="m-auto"
              src={src}
              width={iconWidth}
              height={iconHeight}
              alt={alt}
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-primary">{title}</h3>
              <p className="text-lg font-normal text-tertiary">{description}</p>
            </div>
            <Link
              href={buttonLink}
              className="text-base font-semibold text-tertiary-bg"
            >
              {buttonText}
              <Image
                src="/arrow-right.svg"
                width={20}
                height={20}
                alt="arrow-right"
                className="inline"
              />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default iconCard;
