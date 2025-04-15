"use client"
import { useEffect, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import MainWrapper from "./MainWrapper"
import translations from "../WaitingUI/translations.json"
export type Language = "EN" | "DE" | "SK" | "CZ"

const WaitingPageUI = () => {
  const [language, setLanguage] = useState("EN")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])
  const t = translations[language as keyof typeof translations]
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden text-white bg-primary">
      <div className="m-auto flex h-[100%] max-h-[1440px] w-full max-w-[1440px] flex-col items-start justify-start p-4 md:p-6 lg:p-8 xl:p-10 2xl:max-w-[1920px]">
        <Header onLanguageChange={setLanguage} />
        <MainWrapper
          sloganTitle={t.slogan_title}
          sloganSubtitle={t.slogan_subtitle}
          consultation={t.consultation}
          shoelessly={t.shoelessly}
          discussSymptoms={t.discuss_symptoms}
          getAssessment={t.get_assessment}
          secondOpinion={t.second_opinion}
          secondOpinion2={t.second_opinion}
          entExamination={t.ent_examination}
          findMe={t.find_me}
          findMe2={t.find_me2}
          doctorName={t.doctor_name}
          doctorInfo={t.doctor_info}
          doctorInfo2={t.doctor_info2}
          doctorInfo3={t.doctor_info3}
          comingSoon={t.coming_soon}
        />

        <Footer entExamination={t.ent_examination} findMe={t.find_me} findMe2={t.find_me2} />
      </div>
    </div>
  )
}

export default WaitingPageUI
