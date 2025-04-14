import * as Select from "@radix-ui/react-select"
import Image from "next/image"
import {  useState } from "react"
import { Language } from "./WaitingPageUI"
import Logo from "../../../public/images/logo.png"

const languageMap: Record<string, Language> = {
  English: "EN",
  Deutsch: "DE",
  Slovak: "SK",
  Czech: "CZ",
}

export type LanguageDropdownProps = {
  onLanguageChange: (language: Language) => void
}

const Header = ({ onLanguageChange }: LanguageDropdownProps) => {
  const [selected, setSelected] = useState("English")

  const handleLanguageChange = (value: string) => {
    setSelected(value)

    // Ensure that the selected value is a valid language
    const newLanguage = languageMap[value as keyof typeof languageMap]
    if (newLanguage) {
      onLanguageChange(newLanguage)
    }
  }

  return (
    <div className="flex w-full items-center justify-between pb-[1rem] lg:pb-[1.1rem] xl:pb-[1.5rem]">
      <Image
        src={Logo}
        alt="logo.png"
        width={300}
        height={100}
        className="h-[50px] w-[110px] md:h-[50px] md:w-[170px] lg:h-[60px] lg:w-[225.59px] xl:w-[245.59px]"
      />

      <Select.Root value={selected} onValueChange={handleLanguageChange}>
        <Select.Trigger className="flex items-center gap-2 px-3 py-1 bg-transparent border-none shadow-none focus:border-none focus:ring-0 focus:outline-none">
          <span className="text-2xl font-semibold">{languageMap[selected]}</span>
          <Select.Icon className="text-2xl">▼</Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="z-50 overflow-hidden bg-white border rounded-md shadow-lg" position="popper">
            <Select.Viewport className="p-1">
              {Object.keys(languageMap).map((item) => (
                <Select.Item
                  key={item}
                  value={item}
                  className="px-4 py-2 text-xl rounded cursor-pointer hover:bg-blue-100 focus:outline-none"
                >
                  <Select.ItemText>{item}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}

export default Header
