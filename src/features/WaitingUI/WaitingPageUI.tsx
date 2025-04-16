"use client"

import useDetectInitLanguage from "src/hooks/useDetectInitLanguage"
import { DoctorInfoTranslationObject } from "src/types/translations"

import Footer from "./Footer"
import Header from "./Header"
import MainWrapper from "./MainWrapper"

import translations from "../WaitingUI/translations.json"



const WaitingPageUI = () => {
  const { language, setLanguage } = useDetectInitLanguage()


  const t = translations[language as keyof typeof translations]
  return (
    <div className="flex items-center justify-center overflow-hidden text-white bg-primary h-svh">
      <div className="m-auto flex h-[100%] max-h-[1440px] w-full max-w-[1440px] flex-col items-start justify-start p-4 md:p-6 lg:p-8 xl:p-10 2xl:max-w-[1920px]">
        <Header onLanguageChange={setLanguage} />
        <MainWrapper
          translations={t as DoctorInfoTranslationObject}
        />
        <Footer entExamination={t.entExamination} findMe={t.findMe} findMe2={t.findMe2} />
      </div>
    </div>
  )
}

export default WaitingPageUI
