import style from "./style.module.scss";

const styles = {
  45: style.first,
  black: style.second,
  scorpionBlack: style.third,
  ltoBlack: style.lto_Black,
};

export function BlockIconText(props) {
  return (
    <section className={styles[props.style]}>
      <div className={style.icon}>{props.icon}</div>
      <h3 className={style.title}>{props.title}</h3>
      <p className={style.text}>{props.text}</p>
    </section>
  );
}
