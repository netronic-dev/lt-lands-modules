import Image from "next/image"
import { useInView } from "react-hook-inview"

export default function HeadBandImage(props) {
  const [ref, isVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  return (
    <div ref={ref} key={isVisible ? "band-rainbow" : "band-rainbow-inview"}>
      <div className="desktop fade-up-animation">
        <Image
          src="/bandNetronic/bandrainbow.jpg"
          layout="responsive"
          width={1920}
          height={1320}
          quality={90}
          priority={true}
        />
      </div>
      <div className="mobile">
        <Image
          src="/bandNetronic/bandrainbow-mob.jpg"
          layout="responsive"
          width={500}
          height={335}
          quality={90}
          priority={true}
        />
      </div>
    </div>
  )
}