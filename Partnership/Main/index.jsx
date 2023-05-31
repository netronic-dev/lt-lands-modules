import Image from 'next/image';
import style from './style.module.scss';
import { BreadCrumbs } from '../../../lt-modules/BreadCrumbs';

const PartnershipMain = (props) => {
	return (
		<section className={style.main}>
			<div className='container'>
				<div className={style.content}>
					<div className={style.breadcrumb}>
						<BreadCrumbs
							breadcrumbData={breadcrumbData}
							color='white'
						/>
					</div>
					<div className={style.content_wrapper}>
						<h1 className={style.title}>{props.title}</h1>
						<p className={style.text}>{props.text}</p>
						<a
							href={props.btnUrl}
							className={style.btn}
							scroll={false}
						>
							{props.btn_text}
						</a>
					</div>
				</div>
			</div>
			<div className={style.background}>
				<Image
					className={style.image}
					src={props.image}
					alt={props.imageAlt}
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<div className={style.background_res}>
				<Image
					className={style.image}
					src={props.image_res}
					alt={props.imageAlt}
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<div className={style.background_mob}>
				<Image
					className={style.image}
					src={props.image_mob}
					alt={props.imageAlt}
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<div className={style.background_text_wrapper}>
				<span className={style.background_text}>{props.bg_text1}</span>
				<span className={style.background_text}>{props.bg_text2}</span>
				<span className={style.background_text}>{props.bg_text3}</span>
			</div>
		</section>
	);
};

export default PartnershipMain;

const breadcrumbData = [
	{
		'@type': 'ListItem',
		position: 1,
		name: 'Home',
		item: '/',
	},
	{
		'@type': 'ListItem',
		position: 2,
		name: 'About us',
		item: '/about-us/',
	},
	{
		'@type': 'ListItem',
		position: 3,
		name: 'Partnerships',
		item: '',
	},
];
