export type DoctorInfoTranslationObject = {
    hideInMobile?: boolean
    sloganTitle: string
    sloganSubtitle: string
    consultation: string
    comingSoon: string
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
    doctorInfo2: string
    doctorInfo3: string
}

export type Language = "EN" | "DE" | "SK" | "CZ"

export const languageMap: Record<string, Language> = {
    English: "EN",
    Deutsch: "DE",
    Slovak: "SK",
    Czech: "CZ",
  }