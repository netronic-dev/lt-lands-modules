import Image from "next/image";
import { Button } from "../../../lt-modules/Buttons";
import style from "../lux.module.scss"
import { useSpring, animated } from 'react-spring'
import { BreadCrumbs } from "../../../lt-modules/BreadCrumbs"

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 150}px,${y / 150}px,0)`

export default function Main(props) {

  const [springProps, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  return (
    <section
      className={style.main}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      {props.breadcrumbData ?
        <div className={style.breadcrumbs}>
          <div className={style.breadcrumbs_inner}>
            <BreadCrumbs color="another_black" breadcrumbData={props.breadcrumbData} />
          </div>
        </div>
        : ""}
      <div className="background">
        <Image
          src="/lux/main-background.jpg"
          objectFit="cover"
          layout="fill"
          priority={true}
        />
      </div>
      <div className={style.main_content}>
        <animated.div
          className={style.logo}
          style={{ transform: springProps.xy.to(trans1) }} >
          {luxLogo}
        </animated.div>
        <div className={style.main_content__bottom}>
          <p className={style.main__text}>
            {props.text}
          </p>
          <Button style="black" type="catalog" text={props.buttonText} />
        </div>
      </div>
    </section>
  )
}


const luxLogo = (
  <svg width="688" height="1315" viewBox="0 0 688 1315" fill="none" >
    <g opacity="0.82" filter="url(#filter0_f)">
      <path d="M37 1278L268 94C268 147.425 266.526 235.945 284 268C305.842 308.069 357.789 298.017 384 288C404.968 279.986 416 239.043 416 214V94L651 1278H37Z" fill="url(#paint0_linear)" />
    </g>
    <path d="M99.7008 114.6H135.061V275.08H234.613V305H99.7008V114.6ZM341.745 307.72C315.451 307.72 294.961 300.376 280.273 285.688C265.585 270.819 258.241 249.603 258.241 222.04V114.6H293.601V220.68C293.601 258.035 309.739 276.712 342.017 276.712C374.113 276.712 390.161 258.035 390.161 220.68V114.6H424.977V222.04C424.977 249.603 417.633 270.819 402.945 285.688C388.438 300.376 368.038 307.72 341.745 307.72ZM591.793 305L540.113 232.648L488.977 305H448.721L519.441 207.896L452.529 114.6H492.513L541.201 182.328L589.345 114.6H627.697L561.057 206.536L632.593 305H591.793Z" fill="white" />
    <path d="M167.136 26.756V52.47H199.214V56.426H167.136V83H162.75V22.8H202.998V26.756H167.136ZM251.302 66.058H216.386L208.732 83H204.002L231.694 22.8H236.08L263.772 83H259.042L251.302 66.058ZM249.668 62.36L233.844 27.616L218.106 62.36H249.668ZM274.701 22.8H279.087V79.044H313.745V83H274.701V22.8ZM349.288 83.43C343.383 83.43 338.051 82.1113 333.292 79.474C328.591 76.8367 324.864 73.196 322.112 68.552C319.417 63.908 318.07 58.6907 318.07 52.9C318.07 47.1093 319.417 41.892 322.112 37.248C324.864 32.604 328.591 28.9633 333.292 26.326C338.051 23.6887 343.383 22.37 349.288 22.37C353.645 22.37 357.659 23.0867 361.328 24.52C364.997 25.896 368.122 27.96 370.702 30.712L367.95 33.55C363.134 28.7913 356.971 26.412 349.46 26.412C344.415 26.412 339.828 27.5587 335.7 29.852C331.572 32.1453 328.333 35.3273 325.982 39.398C323.631 43.4113 322.456 47.912 322.456 52.9C322.456 57.888 323.631 62.4173 325.982 66.488C328.333 70.5013 331.572 73.6547 335.7 75.948C339.828 78.2413 344.415 79.388 349.46 79.388C356.913 79.388 363.077 76.98 367.95 72.164L370.702 75.002C368.122 77.754 364.969 79.8467 361.242 81.28C357.573 82.7133 353.588 83.43 349.288 83.43ZM409.675 83.43C403.769 83.43 398.437 82.1113 393.679 79.474C388.92 76.7793 385.165 73.11 382.413 68.466C379.718 63.822 378.371 58.6333 378.371 52.9C378.371 47.1667 379.718 41.978 382.413 37.334C385.165 32.69 388.92 29.0493 393.679 26.412C398.437 23.7173 403.769 22.37 409.675 22.37C415.58 22.37 420.912 23.6887 425.671 26.326C430.429 28.9633 434.156 32.604 436.851 37.248C439.603 41.892 440.979 47.1093 440.979 52.9C440.979 58.6907 439.603 63.908 436.851 68.552C434.156 73.196 430.429 76.8367 425.671 79.474C420.912 82.1113 415.58 83.43 409.675 83.43ZM409.675 79.388C414.72 79.388 419.278 78.2413 423.349 75.948C427.419 73.6547 430.63 70.5013 432.981 66.488C435.331 62.4173 436.507 57.888 436.507 52.9C436.507 47.912 435.331 43.4113 432.981 39.398C430.63 35.3273 427.419 32.1453 423.349 29.852C419.278 27.5587 414.72 26.412 409.675 26.412C404.629 26.412 400.043 27.5587 395.915 29.852C391.844 32.1453 388.633 35.3273 386.283 39.398C383.932 43.4113 382.757 47.912 382.757 52.9C382.757 57.888 383.932 62.4173 386.283 66.488C388.633 70.5013 391.844 73.6547 395.915 75.948C400.043 78.2413 404.629 79.388 409.675 79.388ZM505.211 22.8V83H501.599L460.577 30.712V83H456.191V22.8H459.889L500.825 75.088V22.8H505.211Z" fill="white" />
    <defs>
      <filter id="filter0_f" x="0" y="57" width="688" height="1258" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="18.5" result="effect1_foregroundBlur" />
      </filter>
      <linearGradient id="paint0_linear" x1="327.5" y1="111" x2="315.766" y2="1043.85" gradientUnits="userSpaceOnUse">
        <stop stopColor="#24A4EC" />
        <stop offset="0.494792" stopColor="#ADA0FB" />
        <stop offset="0.916667" stopColor="#E1D3FF" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>

)