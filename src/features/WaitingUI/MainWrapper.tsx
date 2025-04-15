import { motion } from "motion/react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import DotBackground from "components/SVG/DotBackground"
import Dialogue from "../../../public/images/dialogue.svg"
import DoctorImag from "../../../public/images/doctor.png"
import UnderLine from "../../../public/images/highlight.png"

type DoctorInfoProps = {
  hideInMobile?: boolean
  sloganTitle: string
  sloganSubtitle: string
  consultation: string
  shoelessly: string
  discussSymptoms: string
  getAssessment: string
  secondOpinion: string
  secondOpinion2: string
  entExamination: string
  findMe: string
  findMe2: string
  doctorName: string
  doctorInfo: string
  comingSoon: string
}

const MainWrapper = ({
  hideInMobile,
  sloganTitle,
  sloganSubtitle,
  consultation,
  shoelessly,
  discussSymptoms,
  getAssessment,
  secondOpinion,
  secondOpinion2,
  entExamination,
  findMe,
  findMe2,
  doctorName,
  doctorInfo,
  comingSoon,
}: DoctorInfoProps) => {
  const rightSideRef = useRef<HTMLDivElement>(null)
  const consultationRef = useRef<HTMLSpanElement>(null)
  const [comingSoonSetting, setComingSoonSetting] = useState({
    top: 0,
    left: 0,
  })
  const [dotsSetting, setDotsSetting] = useState({
    bottom: 0,
    left: 0,
  })

  useEffect(() => {
    if (consultationRef.current) {
      const consultationRect = consultationRef.current.getBoundingClientRect()
      const rightSideRect = rightSideRef.current?.getBoundingClientRect()
      setComingSoonSetting({
        top: consultationRect.top + consultationRect.height / 2,
        left: consultationRect.right - 10,
      })
      if (rightSideRect) {
        setDotsSetting({
          bottom: rightSideRect.bottom + rightSideRect.height / 2,
          left: rightSideRect?.left,
        })
      }
    }
  }, [rightSideRef, consultationRef])

  const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2.5, ease: "easeInOut" },
    },
  }

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2.5, // خیلی آهسته
        ease: "easeInOut",
      },
    },
  }
  return (
    <div className="relative z-20 flex h-[100%] w-full flex-grow flex-col items-start justify-start overflow-visible md:flex-row">
      {/* leaf side */}
      <div className="flex h-auto w-[100%] flex-col items-start justify-start gap-7 pb-5 md:h-[100%] md:gap-16 md:pb-0 2xl:gap-32">
        <div className="flex flex-col items-start justify-center">
          <motion.h1
            variants={fadeInUp}
            transition={{ delay: 0.2, ease: "easeInOut" }}
            initial="hidden"
            animate="visible"
            className="font-futura-condensed text-secondary text-[1.9rem] leading-tight font-extrabold uppercase md:text-[1.9rem] lg:text-[3.6rem] 2xl:text-[6rem]"
          >
            {sloganTitle}
          </motion.h1>
          <p className="font-futura-condensed flex flex-col items-start justify-start text-[1.9rem] leading-tight font-extrabold text-white uppercase md:text-[1.9rem] lg:text-[3.6rem] 2xl:text-[6rem]">
            <motion.span
              variants={fadeInUp}
              transition={{ delay: 0.2, ease: "easeInOut" }}
              initial="hidden"
              animate="visible"
            >
              {sloganSubtitle}
            </motion.span>
            <span ref={consultationRef} className="relative inline-block">
              <motion.h1
                variants={fadeInUp}
                transition={{ delay: 0.2, ease: "easeInOut" }}
                initial="hidden"
                animate="visible"
              >
                {consultation}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: comingSoonSetting.top > 0 ? 1 : 0 }}
                transition={{ duration: 1.9 }}
                className="fixed z-20 aspect-[144/57] h-fit w-[180px] xl:w-[380px] 2xl:w-[480px]"
                style={{
                  top: comingSoonSetting.top,
                  left: comingSoonSetting.left,
                }}
              >
                <Image src={Dialogue} alt="Dialogue" className="pointer-events-none" width={500} height={100} />
                <div className="font-futura-condensed absolute top-0 left-0 flex h-full w-full items-center justify-center pt-[7%] text-[1.9rem] leading-tight font-extrabold text-white uppercase md:text-[1.9rem] lg:text-[3.6rem] 2xl:text-[5rem]">
                  {comingSoon}
                </div>
              </motion.div>
            </span>
          </p>
          <div className="font-futura-condensed text-secondary relative inline-block text-[1.9rem] leading-tight font-extrabold uppercase md:text-[1.9rem] lg:text-[3.6rem] 2xl:text-[6rem]">
            <motion.h1
              variants={fadeInUp}
              transition={{ delay: 0.2, ease: "easeInOut" }}
              initial="hidden"
              animate="visible"
            >
              {shoelessly}
              <div className="absolute top-[90%] left-0 h-full w-full">
                <Image src={UnderLine} alt="Doctor Image" width={500} height={100} />
              </div>
            </motion.h1>
          </div>
        </div>
        <motion.p
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start justify-start font-sans text-[0.9rem] font-light md:text-[1.3rem] lg:text-[1.7rem] 2xl:text-[2.2rem]"
        >
          <span className="w-full">{discussSymptoms}</span>
          <span className="w-full">{getAssessment}</span>
          <span className="w-full">{secondOpinion}</span>
          <span className="w-full">{secondOpinion2}</span>
        </motion.p>
      </div>

      {/* leaf side */}
      <div ref={rightSideRef} className="relative flex h-[100%] w-full items-center justify-center md:-ml-[15%]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: dotsSetting.bottom > 0 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 z-0 hidden w-full h-full pointer-events-none md:block"
          style={{
            bottom: dotsSetting.bottom,
            left: dotsSetting.left,
          }}
        >
          <DotBackground className="-mt-[10%] -ml-[25%] h-auto w-[130%] 2xl:-ml-[30%]" />
        </motion.div>

        <Image
          src={DoctorImag}
          className="relative -right-[15%] z-20 h-[330px] w-full md:right-0 md:ml-0 md:h-auto md:w-auto 2xl:h-full"
          alt="Description"
        />

        <div className="absolute top-0 left-0 flex h-[75%] w-[50%] flex-col items-start justify-center md:hidden">
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="flex flex-col items-center justify-start md:flex">
              <h2 className="font-futura-condensed text-secondary w-full text-left text-[1rem] font-extrabold md:text-[1rem] lg:text-[1.2rem] xl:text-[2rem]">
                {entExamination}
              </h2>
              <p className="xl:text-[1.3rem font-sans text-[0.7rem] font-light md:text-[1.2rem] lg:text-[1.4rem]">
                {findMe}
                <br />
                {findMe2}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 flex h-auto w-[45%] flex-col items-start justify-start gap-2 md:right-[0.5rem] md:bottom-0 md:left-auto lg:right-[0.5rem] lg:bottom-[-2rem] xl:right-[0.5rem] 2xl:bottom-[0rem]">
          <div
            className={`flex flex-grow flex-col items-start justify-start ${hideInMobile ? "hidden md:flex" : "flex"} `}
          >
            <h1 className="font-futura-condensed text-secondary text-[0.8rem] font-extrabold uppercase md:text-[1rem] lg:text-[1.2rem] xl:text-[2rem]">
              {doctorName}
            </h1>
            <p className="font-sans text-[0.7rem] font-light md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.3rem]">
              {doctorInfo}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainWrapper
