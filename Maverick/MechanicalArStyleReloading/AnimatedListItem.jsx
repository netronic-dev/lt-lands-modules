import { useInView } from "react-hook-inview";
import Image from "next/image";

const AnimatedListItem = ({ item, index, style }) => {
  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
  });

  return (
    <li
      ref={ref}
      key={isVisible ? `visible-${item.id}` : `hidden-${item.id}`}
      className={`${style.mechanicalArStyleReloading_item_bottom} ${
        isVisible ? "fade-up-animation" : "hidden-before-animation"
      }`}
      style={{
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div
        className={style.mechanicalArStyleReloading_item_bottom_main_text_box}
      >
        <h3 className={style.mechanicalArStyleReloading_item_bottom_title}>
          {item.title}
        </h3>
        <div className={style.mechanicalArStyleReloading_item_bottom_text_box}>
          <p className={style.mechanicalArStyleReloading_item_bottom_text}>
            {item.textTop}
          </p>
          {item.textBottom && (
            <p className={style.mechanicalArStyleReloading_item_bottom_text}>
              {item.textBottom}
            </p>
          )}
        </div>
      </div>
      <div className={style.mechanicalArStyleReloading_item_bottom_img_box}>
        <Image
          className={style.mechanicalArStyleReloading_item_bottom_img}
          src={item.image}
          layout="fill"
          alt={item.title}
        />
      </div>
    </li>
  );
};

export default AnimatedListItem;
