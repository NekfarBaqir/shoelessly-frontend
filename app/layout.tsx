import { Metadata } from "next"
import { apercu, futura, futuraCondensed, inter, roboto, verdana } from "src/libs/fonts"
import "styles/font.css"
import "styles/tailwind.css"
import { rootMetadata } from "../src/constants/root.metadata"

export const metadata: Metadata = rootMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${apercu.variable} ${futura.variable} ${futuraCondensed.variable} ${roboto.variable} ${verdana.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
