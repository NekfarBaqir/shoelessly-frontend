import Image from "next/image"
import React from "react"
import DoctorImag from "../../../public/images/doctor.png"
import UnderLine from "../../../public/images/highlight.png"
type DoctorInfoProps = {
hideInMobile?: boolean,
sloganTitle: string,
sloganSubtitle: string;
consultation: string; 
shoelessly: string,
discussSymptoms: string, 
getAssessment: string,
secondOpinion: string,
secondOpinion2: string,
entExamination: string,
findMe: string,
findMe2: string,
doctorName: string,
doctorInfo: string,
}

const MainWrapper = ({ hideInMobile, sloganTitle,
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
 }: DoctorInfoProps) => {
  return (
    <div className="relative z-20 flex flex-col items-start justify-start flex-grow w-full h-[100%] overflow-hidden md:flex-row">
      {/* leaf side */}
      <div className="flex h-[100%] w-full flex-col items-start justify-center gap-12 md:w-[65%] md:gap-16 2xl:gap-32">
        <div className="flex h-[100%] w-[100%] flex-col items-start justify-center gap-12 md:w-[65%] md:gap-16 2xl:gap-32">
          <div className="flex flex-col items-start justify-center">
            <h1 className="font-futura text-secondary text-[1.2rem] font-extrabold uppercase md:text-[1.9rem] lg:text-[2.5rem] 2xl:text-[4rem]">
              {sloganTitle}
            </h1>
            <p className="font-futura flex flex-col items-start justify-start text-[1.2rem] font-extrabold text-white uppercase md:text-[1.9rem] lg:text-[2.5rem] 2xl:text-[4rem]">
              <span>{sloganSubtitle}</span>
              <span className="relative inline-block">
               {consultation}
                {/* <span className="coming-soon-note">Coming Soon</span> */}
              </span>
            </p>
            <div className="font-futura text-secondary relative inline-block text-[1.2rem] font-extrabold uppercase md:text-[1.9rem] lg:text-[2.5rem] 2xl:text-[4rem]">
             { shoelessly}
              <div className="absolute top-[90%] left-0 h-full w-full">
                <Image src={UnderLine} alt="Doctor Image" width={500} height={100} />
              </div>
            </div>
          </div>
          <p className="flex flex-col items-start justify-start font-sans text-[0.6rem] font-light md:text-[1.2rem] lg:text-[2rem] 2xl:text-[1.8rem]">
           {discussSymptoms}
            <br />
            {getAssessment}
            <br />
           {secondOpinion}
            <br />
           {secondOpinion2}
          </p>
        </div>
      </div>

      {/* leaf side */}
      <div className="relative flex h-[100%] w-full items-center justify-center md:-ml-[10%] md:w-[50%]">
        <Image
          src={DoctorImag}
          className="-right-[15%] z-[-1] h-[330px] w-full md:right-0 md:ml-0 md:h-auto md:w-auto"
          alt="Description"
          style={{ position: "relative", zIndex: 2 }}
        />

        <div className="absolute top-0 left-0 h-[75%] w-[40%] md:hidden">
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="flex flex-col items-center justify-start md:flex">
              <h2 className="font-futura text-secondary text-[1rem] font-extrabold">{entExamination}</h2>
              <p className="font-sans text-[0.9rem] font-light">
                {findMe}
                <br />
                {findMe2}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 flex h-auto w-[40%] flex-col items-start justify-start gap-2 md:right-[0.5rem] md:left-auto lg:right-[0.5rem] md:bottom-0 lg:bottom-[-2rem] xl:right-[0.5rem]">
          <div
            className={`flex flex-grow flex-col items-start justify-start ${hideInMobile ? "hidden md:flex" : "flex"} md:flex`}
          >
            <h1 className="text-[1rem] font-futura uppercase text-secondary font-extrabold md:text-[1.5rem] lg:text-[1.6rem] xl:text-[2.5rem]">{doctorName}</h1>
            <p className="text-[0.9rem] font-sans font-light md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">{doctorInfo}</p>
          </div>
        </div>

      </div>
    </div>
  )
}
export default MainWrapper
