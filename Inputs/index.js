import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import style from './style.module.scss';
import Image from 'next/image';
import { icons } from '../../lt-modules/InputForms/icons/icons';
import { useInView } from 'react-hook-inview';
import { FillButton } from '../../lt-modules/Buttons';
import Link from 'next/link';
import { useValidation } from '../../context/ValidationProvider';
import { postData } from '../../lt-modules/functions/postData';

const inputsLandTheme = {
    default: style.input_land,
    light: style.input_land_light,
};

export function Inputs(props) {
    const validate = useValidation();
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            phone: '',
            email: '',
            agreement: '',
        },
        validate,
        onSubmit: (values) => {
            postData(
                values,
                props.destinationURL,
                props.orderName,
                props.lang,
                window.location.hostname,
                router.query
            ).then(router.push('/thanks-catalog'));
        },
    });
    function onAgreementChange() {
        formik.setFieldValue('agreement', !formik.values.agreement);
    }
    const [ref, isVisible] = useInView({
        unobserveOnEnter: true,
    });

    return (
        <div className={style.input_land_out}>
            <div
                ref={ref}
                key={isVisible ? 1 : 2}
                className={`${style.input_land} swipe-right-animation`}
            >
                <div className={style.left}>
                    <form
                        onSubmit={formik.handleSubmit}
                        className='form_submit_land'
                    >
                        <div className={style.content}>
                            <h2 className={style.title}>{props.title}</h2>
                            <p className={style.text}>{props.text}</p>
                            <div className={style.input_out__outer}>
                                <div className={style.input_out}>
                                    <input
                                        className={style.input}
                                        type='tel'
                                        name='phone'
                                        maxLength='30'
                                        onChange={formik.handleChange}
                                        value={formik.values.phone}
                                        placeholder='Phone number'
                                    />
                                    <div className={style.error_icon}>
                                        {formik.errors.phone
                                            ? icons.error
                                            : formik.values.phone === ''
                                            ? null
                                            : icons.agree}
                                    </div>
                                </div>
                                <div className={style.error}>
                                    {formik.errors.phone}
                                </div>
                            </div>
                            <div className={style.input_out__outer}>
                                <div className={style.input_out}>
                                    <input
                                        className={style.input}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        maxLength='40'
                                        name='email'
                                        type='email'
                                        placeholder='Email'
                                    />
                                    <div className={style.error_icon}>
                                        {formik.errors.email
                                            ? icons.error
                                            : formik.values.email === ''
                                            ? null
                                            : icons.agree}
                                    </div>
                                </div>
                                <div className={style.error}>
                                    {formik.errors.email}
                                </div>
                            </div>
                        </div>
                        <Agreement
                            onAgreementChange={onAgreementChange}
                            agreement={formik.values.agreement}
                            error={formik.errors.agreement}
                        />
                        <FillButton
                            style='blueWhite'
                            submit
                            text={props.buttonText}
                        />
                    </form>
                </div>
                <div className={style.right}>
                    <Image
                        src={props.image || '/index/catalogs.png'}
                        layout='fill'
                        objectFit={props.objectFit || 'contain'}
                        priority={true}
                        quality={90}
                    />
                </div>
            </div>
        </div>
    );
}

export function InputsWName(props) {
    const validate = useValidation();
    const image = props.image ? props.image : '/index/catalogs.png';
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            agreement: '',
        },
        validate,
        onSubmit: (values) => {
            postData(
                values,
                props.destinationURL,
                props.orderName,
                props.lang,
                window.location.hostname,
                router.query
            ).then(router.push('/thanks-catalog'));
        },
    });

    function onAgreementChange() {
        formik.setFieldValue('agreement', !formik.values.agreement);
    }

    const [ref, isVisible] = useInView({
        unobserveOnEnter: true,
    });

    return (
        <div className={style.input_land_out}>
            <div
                ref={ref}
                key={isVisible ? 1 : 2}
                className={`${
                    inputsLandTheme[props.theme ? props.theme : 'default']
                } swipe-right-animation`}
            >
                <div className={style.left}>
                    <form
                        onSubmit={formik.handleSubmit}
                        className='form_submit_land'
                    >
                        <div className={style.content}>
                            <h2 className={style.title}>{props.title}</h2>
                            <p className={style.text}>{props.text}</p>
                            <div className={style.input_out__outer}>
                                <div className={style.input_out}>
                                    <input
                                        className={style.input}
                                        name='name'
                                        maxLength='30'
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        placeholder='Name'
                                    />
                                    <div className={style.error_icon}>
                                        {formik.errors.name
                                            ? icons.error
                                            : formik.values.name === ''
                                            ? null
                                            : icons.agree}
                                    </div>
                                </div>
                                <div className={style.error}>
                                    {formik.errors.name}
                                </div>
                            </div>
                            <div className={style.input_out__outer}>
                                <div className={style.input_out}>
                                    <input
                                        className={style.input}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        maxLength='40'
                                        name='email'
                                        type='email'
                                        placeholder='Email'
                                    />
                                    <div className={style.error_icon}>
                                        {formik.errors.email
                                            ? icons.error
                                            : formik.values.email === ''
                                            ? null
                                            : icons.agree}
                                    </div>
                                </div>
                                <div className={style.error}>
                                    {formik.errors.email}
                                </div>
                            </div>
                            <div className={style.input_out__outer}>
                                <div className={style.input_out}>
                                    <input
                                        className={style.input}
                                        type='tel'
                                        name='phone'
                                        maxLength='30'
                                        onChange={formik.handleChange}
                                        value={formik.values.phone}
                                        placeholder='Phone number'
                                    />
                                    <div className={style.error_icon}>
                                        {formik.errors.phone
                                            ? icons.error
                                            : formik.values.phone === ''
                                            ? null
                                            : icons.agree}
                                    </div>
                                </div>
                                <div className={style.error}>
                                    {formik.errors.phone}
                                </div>
                            </div>
                        </div>
                        <Agreement
                            onAgreementChange={onAgreementChange}
                            agreement={formik.values.agreement}
                            error={formik.errors.agreement}
                        />
                        <FillButton
                            style={
                                props.theme === 'light'
                                    ? 'bigBlue'
                                    : 'blueWhite'
                            }
                            submit
                            text={props.buttonText}
                        />
                    </form>
                </div>
                <div className={style.right}>
                    <Image
                        src={image}
                        layout='fill'
                        objectFit={props.objectFit || 'contain'}
                        quality={90}
                        priority={true}
                    />
                </div>
            </div>
        </div>
    );
}

function Agreement(props) {
    return (
        <div className={style.input_out__outer}>
            <div className={style.agreement}>
                <div
                    className={
                        props.agreement
                            ? style.agreement_dot_button_active
                            : style.agreement_dot_button
                    }
                    onClick={props.onAgreementChange}
                >
                    {dotIcon}
                </div>
                <p className={style.agreement__text}>
                    <span onClick={props.onAgreementChange}>
                        I agree with conditions of the processing and use of my
                        personal data
                    </span>{' '}
                    <Link href='/privacy-policy'>
                        <a>of my personal data</a>
                    </Link>
                </p>
            </div>
            <div className={style.error}>{props.error}</div>
        </div>
    );
}

const dotIcon = (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
        <circle cx='10' cy='10' r='10' fill='#212121' />
        <circle className={style.dot} cx='10' cy='10' r='6' fill='#0090FF' />
    </svg>
);
