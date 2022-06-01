import { useInView } from "react-hook-inview";
import style from "./style.module.scss";

export function NetronicGalaxyLogos() {
  const [ref, IsVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  return (
    <div className={style.logos} ref={ref} key={IsVisible ? "logoses-inview" : "logoses"}>
      <div className={`${style.cell} fade-right-animation`}>
        <img src="/netroniclogo.svg" alt="netroniclogo" />
      </div>
      <hr />
      <div className={`${style.cell} fade-left-animation`}>
        <img src="/galaxylogo.svg" alt="galaxypulselogo" />
      </div>
    </div>
  );
}
