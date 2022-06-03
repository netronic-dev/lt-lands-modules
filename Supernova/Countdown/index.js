import { useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import Countdown, { zeroPad } from 'react-countdown';
import { useInView } from 'react-hook-inview';
import { useModals } from '../../../../context/ModalsProvider';
import style from "../style.module.scss"

export default function SupernovaCountdown(props) {

  const modals = useModals()

  const counterRef = useRef()

  let time = Date.now() + 60000

  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
    onEnter: () => {
      counterStart()
    },
  })

  const counterStart = (e) => {
    counterRef.current?.start();
  }

  function onInputFormOpen() {
    counterRef.current.pause();
    modals.EmailPhoneModalChangeVisibility()
  }

  return (
    <>
      <section className={style.count_down} ref={ref}>
        <Fade direction="up" triggerOnce>
          <div className={style.logo} >
            {logo}
            <span className={style.logo__title}>
              Supernova
            </span>
            <span className={style.logo__subtitle}>
              LASER TAG BOMB
            </span>
          </div>
        </Fade>
        <Fade direction="up" triggerOnce>
          <h2 className={style.title}>{props.title}</h2>
          <p className={style.sutitle_1}>
            {props.subtitle1}
          </p>
          <p className={style.sutitle_2}>
            {props.subtitle2}
          </p>
        </Fade>

        <div className={style.bomb_timer} onClick={onInputFormOpen}>
          <div className={style.bomb_timer__in}>
            <div className={style.timer}>
              <Countdown ref={counterRef} autoStart={false} date={time} renderer={renderer} />
            </div>
            <div className={style.button} >
              <img
                className={style.button__img}
                src={props.en ? "/supernova/vector/bomb-button-en.svg" : "/supernova/vector/bomb-button.svg"}
              />
            </div>
          </div>
          <img
            className={style.img}
            src="/supernova/vector/bomb-border.svg"
          />
        </div>
      </section >
    </>
  )
}

const Completionist = () => <span>Done</span>;

const renderer = ({ minutes, seconds, completed }) => {
  return (
    <span className={style.countdown_numbers}>
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );
};

const logo = (
  <svg width="84" height="80" viewBox="0 0 84 80" fill="none" className={style.logo__vector}>
    <path d="M42.0111 0L34.2255 26.7407L42.0111 34.9584L49.7967 26.7407L42.0111 0Z" fill="#040E18" />
    <path d="M84 30.4941L56.1849 30.7385L50.5952 40.5774L60.6876 45.6857L84 30.4941Z" fill="#0074FF" />
    <path d="M0 30.4941L27.8152 30.7385L33.427 40.5774L23.3346 45.6857L0 30.4941Z" fill="#0074FF" />
    <path d="M16.0814 80.0001L25.7745 53.8812L36.9095 51.949L38.2625 63.1872L16.0814 80.0001Z" fill="#0074FF" />
    <path d="M67.9631 80.0001L58.2699 53.8812L47.135 51.949L45.7819 63.1872L67.9631 80.0001Z" fill="#0074FF" />
  </svg>
)