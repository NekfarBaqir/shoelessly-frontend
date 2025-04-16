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
    <div className="flex w-[100%] items-end justify-between pt-[1rem]">
      <div className="hidden md:block">
        <h1 className="font-futura-condensed text-secondary text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.6rem] 2xl:text-[1.8rem]">{entExamination}</h1>
        <p className="font-sans text-[0.7rem]  md:text-[0.8rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]">
          {findMe} <br /> {findMe2}
        </p>
      </div>

      <div className="mt-5 flex w-[100%] items-center justify-center gap-[1.2rem] pr-0 md:w-fit md:justify-end md:pr-[3rem] lg:gap-[1.5rem] xl:gap-[2rem]">
       
       {socialLinks?.map(social=>{
        return(
          <a key={social?.name} className="bg-secondary text-primary inline-flex p-2 items-center justify-center rounded-full text-[2rem] no-underline hover:opacity-80 w-8 h-8 2xl:w-10 2xl:h-10" href={social?.href}>
            {social?.icon}
          </a>
        )
       })}
      </div>
    </div>
  )
}

export default Footer
