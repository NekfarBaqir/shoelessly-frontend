import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

// Inter font as default
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Custom fonts
export const apercu = localFont({
  src: '../../public/fonts/Apercu/apercu_regular_pro.otf',
  variable: '--font-apercu',
})

export const futura = localFont({
  src: '../../public/fonts/Futura/Futura Regular Book Italic.ttf',
  display: 'swap',
  variable: '--font-futura',
})

export const futuraCondensed = localFont({
  src: '../../public/fonts/Futura Condensed/futura-pt_cond-extra-bold.otf',
  variable: '--font-futura-condensed',
})

export const roboto = localFont({
  src: '../../public/fonts/Roboto/Roboto-Regular.ttf',
  variable: '--font-roboto',
})

export const verdana = localFont({
  src: '../../public/fonts/Verdana/Verdana.ttf',
  variable: '--font-verdana',
}) 