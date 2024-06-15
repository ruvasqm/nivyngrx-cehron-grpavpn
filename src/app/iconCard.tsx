import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  src: string;
  iconWidth: number;
  iconHeight: number;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}


const iconCard = ({ src, iconWidth, iconHeight, alt, title, description, buttonText, buttonLink }: Props) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 max-w-sm hover:bg-purple-300 p-2 rounded-xl">

      <Link href={buttonLink} >
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 flex rounded-[10px] border border-icon-border">
            <Image className="m-auto" src={src} width={iconWidth} height={iconHeight} alt={alt} />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-primary font-semibold text-xl">{title}</h3>
              <p className="text-tertiary font-normal text-lg">
                {description}
              </p>
            </div>
            <Link href={buttonLink} className="font-semibold text-base text-tertiary-bg">
              {buttonText}
              <Image src="/arrow-right.svg" width={20} height={20} alt="arrow-right" className="inline" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default iconCard

