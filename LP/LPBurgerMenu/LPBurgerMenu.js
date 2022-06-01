import style from "./style.module.scss"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SocialLinks } from "../LPFooter/LPFooter";
import Link from "next/link"
import { skype, whatsapp, facebookIcon, instagramIcon, youtubeIcon, linkedinIcon, vkIcon, telegram, viber } from "../LPFooter/LPFooter"

export function LPBurgerMenu(props) {
  return (
    <div className={style.burger_menu} >
      <div className={style.top}>
        <nav className={style.header__nav} >
          <ul className={style.header__nav_list} onClick={props.onClick}>
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
        <div className={style.contacts}>
          <div className={style.link_out}>
            <p className={style.lil_title}>
              Email
            </p>
            <p
              className={`${style.link} ${style.underline}`}>
              <a target="_blank" href={`mailto:${props.location_1_email}`}>
                {props.location_1_email}
              </a>
            </p>
          </div>
          <div className={style.link_out}>
            <p className={style.lil_title}>
              {props.en ? "Phone" : "Телефон"}
            </p>
            <p className={style.link}>
              <a
                target="_blank"
                href={`tel:${props.location_1_phone_1}`}
              >
                {formatPhoneNumber(props.location_1_phone_1)}
              </a>
            </p>
            <div className={style.links_union}>
              <p className={style.link}>
                <a
                  target="_blank"
                  href={`tel:${props.location_1_phone_2}`}
                >
                  {formatPhoneNumber(props.location_1_phone_2)}
                </a>
              </p>
              <div className={style.icons}>
                {props.location_1_whatsapp ?
                  <a
                    className={style.icon_link}
                    target="_blank"
                    href={`https://wa.me/${props.location_1_whatsapp}`}
                  >
                    {whatsapp}
                  </a> : ""}
                {props.location_1_telegram ?
                  <a
                    className={style.icon_link}
                    target="_blank"
                    href={`tg://resolve?domain=${props.location_1_telegram}`}
                  >
                    {telegram}
                  </a> : ""}
                {props.location_1_viber ?
                  <a
                    className={style.icon_link}
                    target="_blank"
                    href={`viber://chat?number=${props.location_1_viber}`}
                  >
                    {viber}
                  </a> : ""}
                {props.location_1_skype ?
                  <a
                    className={style.icon_link}
                    target="_blank"
                    href={`skype:${props.location_1_skype}?chat`}
                  >
                    {skype}
                  </a> : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <SocialLinks
          facebook={props.facebook}
          instagram={props.instagram}
          youtube={props.youtube}
          linkedin={props.linkedin}
          vk={props.vk}
          className={style.desktop}
        />
        <div className={style.privacy_copyright}>
          <p className={style.link} onClick={props.onClick}>
            <Link href="/privacy">
              <a target="_blank">
                {props.en ? "Privacy policy" : "Политика конфиденциальности"}
              </a>
            </Link>
          </p>
          <p className={style.copyright}>
            Copyright © 2021 All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
function formatPhoneNumber(number) {
  let newNum = number.replace(/[^\d]+/g, '')
    .replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5');
  return (newNum)
}