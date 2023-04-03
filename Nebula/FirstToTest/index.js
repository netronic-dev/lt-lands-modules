import style from './style.module.scss';
import { Button } from '../../../lt-modules/Buttons';

const FirstToTest = (props) => {
    return (
        <section className={style.first_test}>
            <div className='container'>
                <h2 className={style.title}>{props.title}</h2>
                <div className={style.btn_row}>
                    <span className={style.order_descr}>{props.text}</span>
                    <Button
                        style='blueBlack'
                        type='catalog'
                        text={props.buttonText}
                        uniqueClass={style.btn}
                    />
                </div>
            </div>
        </section>
    );
};

export default FirstToTest;
