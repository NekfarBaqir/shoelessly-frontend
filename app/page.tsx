import { Button } from "components/Button/Button"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Shoelessly",
  description: "Shoelessly waiting page",
}

export default function Web() {
  return (
   <>
    <section className="w-screen h-screen bg-primary overflow-hidden text-white">
      <h1>Shoelessly</h1>
      <Button href="/" intent={"secondary"} className="h-auto">Get Started</Button>
      <h1 className="font-apercu">This will use Apercu Pro</h1>
<p className="font-futura text-7xl font-bold text-secondary uppercase">This will use Futura</p>
    </section>
   </>
  )
}
