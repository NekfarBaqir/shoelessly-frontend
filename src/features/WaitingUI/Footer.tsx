import React from "react"
type FooterProp = {
  entExamination: string
  findMe: string
  findMe2: string
}
const Footer = ({ entExamination, findMe, findMe2 }: FooterProp) => {
  return (
    <div className="flex w-[100%] items-center justify-between pt-[1rem]">
      <div className="hidden md:block">
        <h1 className="font-futura text-secondary text-[3rem] font-extrabold md:text-[2rem]">{entExamination}</h1>
        <p className="font-sans text-[1.8rem] font-light md:text-[1.5rem]">
          {findMe} <br /> {findMe2}
        </p>
      </div>

      <div className="mt-5 flex w-[100%] items-center justify-center gap-[1.2rem] pr-0 md:w-fit md:justify-end md:pr-[3rem] lg:gap-[2rem] xl:gap-[2.5rem]">
        <a href="">
          <div className="bg-secondary inline-flex h-[1em] w-[1em] items-center justify-center rounded-full text-[2rem] no-underline hover:opacity-80 md:h-[1.2em] md:w-[1.2em] 2xl:h-[1.5em] 2xl:w-[1.5em]">
            f
          </div>
        </a>
        <a href="">
          <div className="bg-secondary inline-flex h-[1em] w-[1em] items-center justify-center rounded-full text-[2rem] no-underline hover:opacity-80 md:h-[1.2em] md:w-[1.2em] 2xl:h-[1.5em] 2xl:w-[1.5em]">
            In
          </div>
        </a>
        <a href="">
          <div className="bg-secondary inline-flex h-[1em] w-[1em] items-center justify-center rounded-full text-[2rem] no-underline hover:opacity-80 md:h-[1.2em] md:w-[1.2em] 2xl:h-[1.5em] 2xl:w-[1.5em]">
            Li
          </div>
        </a>
        <a href="">
          <div className="bg-secondary inline-flex h-[1em] w-[1em] items-center justify-center rounded-full text-[2rem] no-underline hover:opacity-80 md:h-[1.2em] md:w-[1.2em] 2xl:h-[1.5em] 2xl:w-[1.5em]">
            T
          </div>
        </a>
        <a href="">
          <div className="bg-secondary inline-flex h-[1em] w-[1em] items-center justify-center rounded-full text-[2rem] no-underline hover:opacity-80 md:h-[1.2em] md:w-[1.2em] 2xl:h-[1.5em] 2xl:w-[1.5em]">
            Tw
          </div>
        </a>
        <a href="">
          <div className="bg-secondary inline-flex h-[1em] w-[1em] items-center justify-center rounded-full text-[2rem] no-underline hover:opacity-80 md:h-[1.2em] md:w-[1.2em] 2xl:h-[1.5em] 2xl:w-[1.5em]">
            Yo
          </div>
        </a>
      </div>
    </div>
  )
}

export default Footer
