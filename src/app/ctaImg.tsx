import Image from 'next/image'


const CtaImg = () => {
  return (
    <div className="flex flex-col gap-4 items-center"
    >
      <div className="flex flex-col lg:flex-row gap-4 lg:items-end">
         <Image src="/cta-0.jpeg" alt="cta0" className="h-40 w-[329px] md:h-40 md:w-40 object-cover object-[center_30%] md:object-none" sizes="(max-width: 425px) 160px, (max-width: 1440px) 160px, 160px" height={160} width={160} />
        <Image src="/cta-1.jpeg" alt="cta1" className="h-40 w-[329px] object-cover object-[center_20%] md:h-60 md:object-none md:w-auto" sizes="(max-width: 425px) 160px, (max-width: 1440px) 160px, 160px" height={160} width={160} />

      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:items-start">
        <Image src="/cta-2.png" alt="cta2" className="h-40 w-[329px] object-cover object-[center_top] md:h-32 md:object-none md:w-auto" sizes="(max-width: 425px) 160px, (max-width: 1440px) 160px, 160px" height={160} width={160} />
        <Image src="/cta-3.jpeg" alt="cta3" className="h-40 w-[329px] object-cover object-[center_40%] md:h-60 md:object-none md:w-auto" sizes="(max-width: 425px) 160px, (max-width: 1440px) 160px, 160px" height={160} width={160} />
        <Image src="/cta-4.jpeg" alt="cta4" className="h-40 w-[329px] object-cover object-[center_25%] md:h-32 md:object-none md:w-auto" sizes="(max-width: 425px) 160px, (max-width: 1440px) 160px, 160px" height={160} width={160} />
      </div>

    </ div>
  )
}
export default CtaImg
