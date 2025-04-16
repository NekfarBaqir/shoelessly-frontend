import DotBackground from "components/SVG/DotBackground"
import { motion } from "motion/react"
import Image from "next/image"
import { useRef } from "react"
import { fadeInUp, slideInFromLeft } from "src/constants/animations"
import { useElementPosition } from "src/hooks/useElementPosition"
import { useResponsiveTextSize } from "src/hooks/useResponsiveTextSize"
import { DoctorInfoTranslationObject } from "src/types/translations"
import Dialogue from "../../../public/images/dialogue.svg"
import DoctorImag from "../../../public/images/doctor.png"
import UnderLine from "../../../public/images/highlight.png"

type MainWrapperProps = {
  translations: DoctorInfoTranslationObject
}

const SloganSection = ({ translations }: { translations: DoctorInfoTranslationObject }) => (
  <div className="flex flex-col items-start justify-center z-50">
    <motion.h1
      variants={fadeInUp}
      transition={{ delay: 0.2, ease: "easeInOut" }}
      initial="hidden"
      animate="visible"
      className="font-futura-condensed text-secondary text-[1.9rem] leading-tight font-extrabold uppercase md:text-[1.9rem] lg:text-[3.3rem] 2xl:text-[6rem]"
    >
      {translations.sloganTitle}
    </motion.h1>
    <p className="font-futura-condensed flex flex-col items-start justify-start text-[1.9rem] leading-tight font-extrabold text-white uppercase md:text-[1.9rem] lg:text-[3.3rem] 2xl:text-[6rem]">
      <motion.span
        variants={fadeInUp}
        transition={{ delay: 0.2, ease: "easeInOut" }}
        initial="hidden"
        animate="visible"
      >
        {translations.sloganSubtitle}
      </motion.span>
      <ConsultationText translations={translations} />
    </p>
    <ShoelesslyText translations={translations} />
  </div>
)

const ConsultationText = ({ translations }: { translations: DoctorInfoTranslationObject }) => {
  const consultationRef = useRef<HTMLSpanElement>(null);
  const { textRef, containerRef, textSize } = useResponsiveTextSize(translations.comingSoon);
  const comingSoonPosition = useElementPosition(
    consultationRef,
    undefined,
    (element) => ({
      top: element.top + element.height / 2,
      left: element.right - 20,
    })
  );

  return (
    <span ref={consultationRef} className="relative inline-block">
      <motion.h1
        variants={fadeInUp}
        transition={{ delay: 0.2, ease: "easeInOut" }}
        initial="hidden"
        animate="visible"
      >
        {translations.consultation}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: comingSoonPosition.top ? 1 : 0 }}
        transition={{ duration: 1.9 }}
        className="fixed z-20 aspect-[144/57] h-fit w-[180px] xl:w-[350px] 2xl:w-[480px]"
        style={comingSoonPosition}
      >
        <Image src={Dialogue} alt="Dialogue" className="pointer-events-none" width={500} height={100} />
        <div ref={containerRef} className="font-futura-condensed absolute top-0 text-nowrap left-0 flex h-full w-full items-center justify-center pt-[7%] text-white uppercase">
          <span 
            ref={textRef}
            className="font-extrabold leading-tight inline-block whitespace-nowrap" 
            style={{ fontSize: textSize }}
          >
            {translations.comingSoon}
          </span>
        </div>
      </motion.div>
    </span>
  )
}

const ShoelesslyText = ({ translations }: { translations: DoctorInfoTranslationObject }) => (
  <div className="font-futura-condensed text-secondary relative inline-block text-[1.9rem] leading-tight font-extrabold uppercase md:text-[1.9rem] lg:text-[3.6rem] 2xl:text-[6rem]">
    <motion.h1
      variants={fadeInUp}
      transition={{ delay: 0.2, ease: "easeInOut" }}
      initial="hidden"
      animate="visible"
    >
      {translations.shoelessly}
      <div className="absolute top-[90%] left-0 h-full w-full">
        <Image src={UnderLine} alt="Doctor Image" width={500} height={100} />
      </div>
    </motion.h1>
  </div>
)

const FeaturesList = ({ translations }: { translations: DoctorInfoTranslationObject }) => (
  <motion.p
    variants={slideInFromLeft}
    initial="hidden"
    animate="visible"
    className="flex flex-col items-start justify-start font-sans text-[0.7rem] font-light md:text-[1rem] lg:text-[1.2rem] pt-4 2xl:text-[1.8rem] xl:pt-10"
  >
    <span className="w-full">{translations.discussSymptoms}</span>
    <span className="w-full">{translations.getAssessment}</span>
    <span className="w-full">{translations.secondOpinion}</span>
    <span className="w-full">{translations.secondOpinion2}</span>
  </motion.p>
)

const DoctorImageSection = ({ translations }: { translations: DoctorInfoTranslationObject }) => {
  const rightSideRef = useRef<HTMLDivElement>(null);
  const dotsPosition = useElementPosition(
    rightSideRef,
    undefined,
    (element) => ({
      bottom: element.bottom + element.height / 2,
      left: element.left,
    })
  );

  return (
    <div ref={rightSideRef} className="relative flex h-auto md:h-[100%] w-full items-center justify-center md:-ml-[15%]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: dotsPosition.bottom ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 z-0 hidden w-full h-full pointer-events-none md:block"
        style={dotsPosition}
      >
        <DotBackground className="-mt-[10%] -ml-[25%] h-auto w-[130%] 2xl:-ml-[30%]" />
      </motion.div>

      <Image
        src={DoctorImag}
        className="relative -right-[15%] z-20 h-[300px] w-auto object-cover md:right-0 md:ml-0 md:h-auto md:w-auto 2xl:h-full"
        alt="Description"
      />
      <div className="absolute inset-0 w-full h-full md:hidden z-10 ml-[25%] top-[10%]">
        <DotBackground className="w-[250%] h-auto -ml-[30%]" />
      </div>

      <MobileDoctorInfo translations={translations} />
      <DesktopDoctorInfo translations={translations} />
    </div>
  )
}

const MobileDoctorInfo = ({ translations }: { translations: DoctorInfoTranslationObject }) => (
  <div className="absolute top-0 left-0 flex h-[75%] w-[50%] flex-col items-start justify-center md:hidden">
    <div className="flex flex-col items-start justify-center gap-2">
      <div className="flex flex-col items-center justify-start md:flex">
        <h2 className="font-futura-condensed text-secondary w-full text-left text-[1rem] font-extrabold md:text-[1rem] lg:text-[1.2rem] xl:text-[2rem]">
          {translations.entExamination}
        </h2>
        <p className="xl:text-[1.3rem font-sans text-[0.7rem] font-light md:text-[1.2rem] lg:text-[1.4rem]">
          {translations.findMe}
          <br />
          {translations.findMe2}
        </p>
      </div>
    </div>
  </div>
)

const DesktopDoctorInfo = ({ translations }: { translations: DoctorInfoTranslationObject }) => (
  <div className="absolute bottom-0 left-0 flex h-auto w-[45%] flex-col items-start justify-start gap-2 md:right-[0.5rem] md:bottom-0 md:left-auto lg:right-[0.5rem] lg:bottom-[-2rem] xl:right-[0.5rem] 2xl:bottom-[0rem]">
    <div className={`flex flex-grow flex-col items-start justify-start ${translations.hideInMobile ? "hidden md:flex" : "flex"}`}>
      <h1 className="font-futura-condensed text-secondary text-[0.8rem] font-extrabold uppercase md:text-[0.9rem] lg:text-[1rem] xl:text-[1.6rem]">
        {translations.doctorName}
      </h1>
      <p className="font-sans text-[0.7rem] font-light md:text-[0.8rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]">
        {translations.doctorInfo} <br/> {translations.doctorInfo2} <br/> {translations.doctorInfo3}
      </p>
    </div>
  </div>
)

const MainWrapper = ({ translations }: MainWrapperProps) => {
  return (
    <div className="relative z-20 flex h-[100%] w-full flex-grow flex-col items-start justify-start overflow-visible md:flex-row">
      <div className="flex h-auto w-[100%] flex-col items-start justify-start gap-7 pb-5 md:h-[100%] md:gap-16 md:pb-0 2xl:gap-32">
        <SloganSection translations={translations} />
        <FeaturesList translations={translations} />
      </div>
      <DoctorImageSection translations={translations} />
    </div>
  )
}

export default MainWrapper
