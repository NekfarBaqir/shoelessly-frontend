
import { Metadata } from "next"
import WaitingPageUI from "src/features/WaitingUI/WaitingPageUI"


export const metadata: Metadata = {
  title: "Shoelessly",
  description: "Shoelessly waiting page",
}

export default function Web() {
  return (
   <>
   <WaitingPageUI/>
   </>
  )
}
