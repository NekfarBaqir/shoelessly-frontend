import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";


type FooterProp = {
  entExamination: string
  findMe: string
  findMe2: string
}

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/yourpage",
    icon: <FaFacebookF/>
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/yourpage",
    icon: <FaInstagram/>
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/yourpage",
    icon: <FaLinkedinIn/>
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/yourpage",
    icon: <FaTiktok/>
  },
  {
    name: "Twitter",
    href: "https://www.twitter.com/yourpage",
    icon: <FaTwitter/>
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/yourpage",
    icon: <FaYoutube/>
  },
 
  
]
const Footer = ({ entExamination, findMe, findMe2 }: FooterProp) => {
  return (
    <div className="flex w-[100%] items-center justify-between pt-[1rem]">
      <div className="hidden md:block">
        <h1 className="font-futura-condensed text-secondary text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[2rem]">{entExamination}</h1>
        <p className="font-sans text-[0.7rem] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.3rem]">
          {findMe} <br /> {findMe2}
        </p>
      </div>

      <div className="mt-5 flex w-[100%] items-center justify-center gap-[1.2rem] pr-0 md:w-fit md:justify-end md:pr-[3rem] lg:gap-[2rem] xl:gap-[2.5rem]">
       
       {socialLinks?.map(social=>{
        return(
          <a key={social?.name} className="bg-secondary text-primary inline-flex h-[1em] w-[1em] p-2 items-center justify-center rounded-full text-[2rem] no-underline hover:opacity-80 md:h-[1.2em] md:w-[1.2em] 2xl:h-[1.5em] 2xl:w-[1.5em]" href={social?.href}>
            {social?.icon}
          </a>
        )
       })}
      </div>
    </div>
  )
}

export default Footer
