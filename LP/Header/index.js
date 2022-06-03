import style from "./style.module.scss"
import { useState } from "react";
import { LPBurgerMenu } from "../BurgerMenu/LPBurgerMenu"
import Link from "next/link";
import LPButton from "../Button/LPButton";

export default function LPHeader(props) {

  const [isBurgerOpen, changeBurgerVisibility] = useState(false)

  function onBurgerMenuChange() {
    changeBurgerVisibility(!isBurgerOpen)
    isBurgerOpen === false
      ? (document.body.className = "popUp")
      : (document.body.className = "");
  }

  return (
    <>
      <header className={`
      ${style.header} 
      ${isBurgerOpen ? style.header_burger : ""}
      `}>
        <div className={`${style.header__logo} fade-animation`} >
          <Link href="#main">
            {props.en ? logoLTNET : logoForpost}
          </Link>
        </div>
        <nav className={`${style.header__nav} fade-up-animation`} >
          <ul className={style.header__nav_list} >
            <li className={style.nav_list__item}>
              <Link href={props.nav_item_1__link}>
                {props.nav_item_1__name}
              </Link>
            </li>
            <li className={style.nav_list__item}>
              <Link href={props.nav_item_2__link}>
                {props.nav_item_2__name}
              </Link>
            </li>
            <li className={style.nav_list__item}>
              <Link href={props.nav_item_3__link}>
                {props.nav_item_3__name}
              </Link>
            </li>
            <li className={style.nav_list__item}>
              <Link href={props.nav_item_4__link}>
                {props.nav_item_4__name}
              </Link>
            </li>
            <li className={style.nav_list__item}>
              <Link href={props.nav_item_5__link}>
                {props.nav_item_5__name}
              </Link>
            </li>
          </ul>
        </nav>
        <LPButton
          hover="blue"
          bgcolor="#000000"
          style={style.button}
          onClick={props.onButtonClick}
        >
          {props.buttonCatalogText}
        </LPButton>
        <BurgerButton
          isBurgerOpen={isBurgerOpen}
          onBurgerMenuChange={onBurgerMenuChange}
        />
      </header>
      {isBurgerOpen ?
        <LPBurgerMenu
          en={props.en}
          nav_item_1__name={props.nav_item_1__name}
          nav_item_1__link={props.nav_item_1__link}
          nav_item_2__name={props.nav_item_2__name}
          nav_item_2__link={props.nav_item_2__link}
          nav_item_3__name={props.nav_item_3__name}
          nav_item_3__link={props.nav_item_3__link}
          nav_item_4__name={props.nav_item_4__name}
          nav_item_4__link={props.nav_item_4__link}
          nav_item_5__name={props.nav_item_5__name}
          nav_item_5__link={props.nav_item_5__link}
          onClick={onBurgerMenuChange}
          location_1_name={props.location_1_name}
          location_1_email={props.location_1_email}
          location_1_phone_1={props.location_1_phone_1}
          location_1_phone_2={props.location_1_phone_2}
          location_1_whatsapp={props.location_1_whatsapp}
          location_1_telegram={props.location_1_telegram}
          location_1_viber={props.location_1_viber}
          location_1_skype={props.location_1_skype}
          facebook={props.facebook}
          instagram={props.instagram}
          youtube={props.youtube}
          vk={props.location_1_email}
        /> : ""}
    </>
  )
}
function BurgerButton(props) {
  return (
    <button className={
      `${style.burger} 
      ${props.isBurgerOpen ? style.active : ""}`} onClick={props.onBurgerMenuChange}
    >
      <div className={style.line_1}>
      </div>
      <div className={style.line_2}>
      </div>
    </button>
  )
}
const logoForpost = (
  <svg width="241" height="37" viewBox="0 0 241 37" fill="none" className={style.logo_forpost}>
    <path d="M65.3711 10.2349V27.0406H70.0406V20.9194H83.7994V17.2516H70.0406V13.9763H85.9968V10.2349H65.3711Z" fill="#040E18" />
    <path d="M93.7377 10.2349C92.2145 10.2349 90.916 10.7133 89.8423 11.6701C88.7768 12.6269 88.2441 13.7841 88.2441 15.1416V22.1338C88.2441 23.4914 88.7768 24.6485 89.8423 25.6054C90.916 26.5622 92.2145 27.0406 93.7377 27.0406H107.109C108.641 27.0406 109.939 26.5622 111.005 25.6054C112.079 24.6485 112.611 23.4914 112.603 22.1338V15.1416C112.611 13.7841 112.079 12.6269 111.005 11.6701C109.939 10.7133 108.641 10.2349 107.109 10.2349H93.7377ZM95.111 13.9763H105.736C106.36 13.9518 106.881 14.1398 107.297 14.5406C107.721 14.9086 107.933 15.3747 107.933 15.939V21.3365C107.933 21.868 107.721 22.3301 107.297 22.7226C106.881 23.0825 106.36 23.2746 105.736 23.2992H95.111C94.4951 23.291 93.9749 23.1029 93.5504 22.7349C93.1259 22.3424 92.9136 21.8762 92.9136 21.3365V15.939C92.9136 15.3747 93.1259 14.9127 93.5504 14.5528C93.9749 14.1603 94.4951 13.9681 95.111 13.9763Z" fill="#040E18" />
    <path d="M114.863 10.2349V27.0406H119.532V20.9439H127.336L132.479 27.0406H137.911L132.342 20.8826C133.857 20.7109 135.122 20.1343 136.138 19.1529C137.153 18.1471 137.661 16.9612 137.661 15.5955C137.661 14.1153 137.074 12.8518 135.9 11.805C134.727 10.7583 133.312 10.2349 131.655 10.2349H114.863ZM119.532 13.9763H131.206C131.755 13.9518 132.192 14.103 132.517 14.4302C132.867 14.7246 133.037 15.1171 133.029 15.6078C133.037 16.0739 132.867 16.4665 132.517 16.7854C132.192 17.0962 131.755 17.2516 131.206 17.2516L119.532 17.2393V13.9763Z" fill="#040E18" />
    <path d="M140.158 10.2349V27.0406H144.827V21.7903H157.038C158.22 21.7903 159.302 21.5368 160.284 21.0298C161.283 20.5146 162.065 19.8154 162.631 18.9321C163.214 18.0407 163.505 17.0717 163.505 16.0249C163.505 14.9699 163.218 14.0008 162.644 13.1176C162.07 12.2262 161.283 11.5229 160.284 11.0077C159.302 10.4925 158.22 10.2349 157.038 10.2349H140.158ZM144.827 13.9763H156.601C157.275 13.9681 157.825 14.1603 158.249 14.5528C158.682 14.9208 158.898 15.4115 158.898 16.0249C158.898 16.6137 158.682 17.1044 158.249 17.4969C157.825 17.8567 157.275 18.0489 156.601 18.0735H144.827V13.9763Z" fill="#040E18" />
    <path d="M171.246 10.2349C169.723 10.2349 168.425 10.7133 167.351 11.6701C166.285 12.6269 165.753 13.7841 165.753 15.1416V22.1338C165.753 23.4914 166.285 24.6485 167.351 25.6054C168.425 26.5622 169.723 27.0406 171.246 27.0406H184.618C186.15 27.0406 187.448 26.5622 188.513 25.6054C189.587 24.6485 190.12 23.4914 190.112 22.1338V15.1416C190.12 13.7841 189.587 12.6269 188.513 11.6701C187.448 10.7133 186.15 10.2349 184.618 10.2349H171.246ZM172.62 13.9763H183.245C183.869 13.9518 184.389 14.1398 184.805 14.5406C185.23 14.9086 185.442 15.3747 185.442 15.939V21.3365C185.442 21.868 185.23 22.3301 184.805 22.7226C184.389 23.0825 183.869 23.2746 183.245 23.2992H172.62C172.004 23.291 171.484 23.1029 171.059 22.7349C170.635 22.3424 170.422 21.8762 170.422 21.3365V15.939C170.422 15.3747 170.635 14.9127 171.059 14.5528C171.484 14.1603 172.004 13.9681 172.62 13.9763Z" fill="#040E18" />
    <path d="M198.052 10.2349C196.479 10.2839 195.147 10.7951 194.057 11.7682C192.958 12.7251 192.409 13.9068 192.409 15.3134C192.409 16.7036 192.958 17.8976 194.057 18.8953C195.156 19.8767 196.487 20.3715 198.052 20.3796H209.077C209.526 20.3796 209.913 20.5268 210.238 20.8213C210.562 21.1075 210.725 21.4591 210.725 21.8762C210.725 22.2769 210.567 22.6245 210.25 22.9189C209.934 23.1806 209.543 23.3237 209.077 23.3482H198.389C197.94 23.3482 197.553 23.201 197.228 22.9066C196.904 22.6122 196.741 22.2606 196.741 21.8517V21.8271H192.371C192.371 23.2746 192.937 24.5054 194.069 25.5195C195.218 26.5336 196.591 27.0406 198.19 27.0406H209.514C211.137 27.0406 212.506 26.5336 213.621 25.5195C214.77 24.5054 215.34 23.2746 215.332 21.8271C215.357 20.3796 214.791 19.1489 213.634 18.1348C212.51 17.1044 211.137 16.5932 209.514 16.6014C208.373 16.5769 206.605 16.5769 204.207 16.6014C201.81 16.6096 200.037 16.6137 198.889 16.6137C198.489 16.6137 198.152 16.4869 197.877 16.2334C197.603 15.9799 197.461 15.6732 197.453 15.3134C197.453 14.9536 197.59 14.651 197.865 14.4056C198.148 14.1276 198.489 14.0008 198.889 14.0254H208.615C209.039 14.0008 209.385 14.1235 209.651 14.3934C209.934 14.6387 210.076 14.9454 210.076 15.3134C210.092 15.3134 210.088 15.3379 210.063 15.387H214.608V15.3134C214.608 13.9068 214.058 12.7087 212.96 11.7192C211.869 10.7296 210.538 10.2349 208.964 10.2349H198.052Z" fill="#040E18" />
    <path d="M217.617 10.2349V13.9763H226.469V27.0406H231.138V13.9763H240.003V10.2349H217.617Z" fill="#040E18" />
    <path d="M27.9684 31.9832L22.125 36.2435V24.9703C22.125 23.378 22.9614 21.9044 24.3243 21.0953L39.3984 12.1471V17.989L29.014 24.559C28.3633 24.9707 27.9684 25.6899 27.9684 26.4634V31.9832Z" fill="#040E18" />
    <path d="M22.125 12.2924V19.7577L42.0233 8.22223V0.756836L22.125 12.2924Z" fill="#040E18" />
    <path d="M14.055 31.9832L19.8984 36.2435V24.9703C19.8984 23.378 19.062 21.9044 17.6991 21.0953L2.62504 12.1471V17.989L13.0094 24.559C13.6601 24.9707 14.055 25.6899 14.055 26.4634V31.9832Z" fill="#040E18" />
    <path d="M19.8984 12.2924V19.7577L0.000164032 8.22223V0.756836L19.8984 12.2924Z" fill="#040E18" />
  </svg>

)
const logoLTNET = (
  <svg width="140" height="50" viewBox="0 0 153 55" fill="none" className={style.logo_ltnet}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M90.0977 29.384V24.5895L91.8469 22.8086H101.088L102.599 24.3468V25.375H99.4597V24.9768L99.2321 24.7449H93.9389L93.237 25.4594V28.634L93.9389 29.3486H99.2321L99.4597 29.1168V28.0531H95.2836V26.2968H102.599V29.6268L101.088 31.1649H91.8469L90.0977 29.384Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M84.6158 22.8086H82.0763H79.9066L75.7305 30.5077V31.1649H78.5619L79.3361 29.6758H82.0791H84.822L85.5962 31.1649H89.1536L84.6158 22.8086ZM82.0763 27.6767H80.37L82.0763 24.3822L82.0818 24.3714L83.7827 27.6767H82.0763Z" fill="black" />
    <path d="M76.0868 22.8086H75.7305V24.8677H76.0868V22.8086Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M75.729 22.8086V24.8677H71.9815V31.1649H68.842V24.8677H64.7383V22.8086H75.729Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M75.7313 30.5073L75.375 31.1647H75.7313V30.5073Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M61.9905 27.8594L63.5495 26.2722V24.3468L62.0387 22.8086H57.5599H51.5703V31.1649H54.7097V28.4649H57.5599H59.0064L60.5064 31.1649H63.8495L61.9905 27.8594ZM60.4074 26.1385L59.968 26.5859H57.5599H54.7097V24.625H57.5599H59.968L60.4074 25.0721V26.1385Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3086 29.7468V28.7186H28.4507V29.0949L28.6758 29.3241H33.9688L34.1484 29.1414V28.064L34.0278 27.9441H26.6882L25.3569 26.5859V24.3468L26.8677 22.8086H35.8494L37.2396 24.2267V25.2549H34.1002V24.854L33.8725 24.625H28.6758L28.4963 24.8077V25.8495L28.6169 25.9694H35.9565L37.2877 27.325V29.6268L35.777 31.1649H26.7015L25.3086 29.7468Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M39.3672 22.8086H49.4659V24.625H42.5067V26.0295H48.7989V27.8458H42.5067V29.3486H49.49V31.1649H39.3672V22.8086Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.13672 22.8086H4.27616V29.0459H10.2845V31.1649H1.13672V22.8086Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8821 22.8086H17.3427H15.173L10.6406 31.1649H13.8283L14.6024 29.6758H17.3427H20.0857L20.8599 31.1649H24.4145L19.8821 22.8086ZM17.3427 27.6767H15.6364L17.3427 24.3822L17.348 24.3714L19.0491 27.6767H17.3427Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M115.7 0L107.117 5.04549V48.8976L115.7 53.9431L153.001 32.0157V21.9247L115.7 0ZM123.267 31.1647H118.413L114.427 24.8919V31.1647H111.634V22.8083H116.474L120.471 29.0565V22.8083H123.267V31.1647ZM135.769 31.1647H125.646V22.8083H135.745V24.6247H128.785V26.0292H135.078V27.8456H128.785V29.3483H135.769V31.1647ZM148.484 24.8675H144.381V31.1647H141.241V24.8675H137.135V22.8083H148.482V24.8675H148.484Z" fill="black" />
  </svg>
)
const arrow = (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" className={style.arrow}>
    <path d="M12 4.5L10.59 5.91L16.17 11.5H4V13.5H16.17L10.59 19.09L12 20.5L20 12.5L12 4.5Z" fill="white" />
  </svg>

)
const catalogIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H14V8H18V20ZM12 17C10.9 17 10 16.1 10 15V9.5C10 9.22 10.22 9 10.5 9C10.78 9 11 9.22 11 9.5V15H13V9.5C13 8.12 11.88 7 10.5 7C9.12 7 8 8.12 8 9.5V15C8 17.21 9.79 19 12 19C14.21 19 16 17.21 16 15V11H14V15C14 16.1 13.1 17 12 17Z" fill="white" />
  </svg>

)