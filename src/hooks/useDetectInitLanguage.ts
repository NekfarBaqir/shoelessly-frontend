import { useEffect, useState } from "react"
import { Language } from "src/types/translations"

const mapDomainToLanguage = {
    ".com": "EN",
    ".de": "DE",
    ".sk": "SK",
    ".cz": "CZ",
} as const

const useDetectInitLanguage = () => {
  const [language, setLanguage] = useState<Language>("EN")

  const setLanguageBasedOnDomain = () => {
    const domain = window.location.hostname
    const domainParts = domain.split('.')
    const tld = `.${domainParts[domainParts.length - 1]}`
    
    const detectedLanguage = mapDomainToLanguage[tld as keyof typeof mapDomainToLanguage]
    if (detectedLanguage) {
      setLanguage(detectedLanguage)
    }
  }

  useEffect(() => {
     setLanguageBasedOnDomain()
    const savedLanguage = localStorage.getItem("selectedLanguage") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  return {
    language,
    setLanguage
  }
}

export default useDetectInitLanguage
