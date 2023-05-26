import Image from 'next/image';
import style from './style.module.scss';

const PartnershipLookingFor = (props) => {
	return (
		<section className={style.main}>
			<div className='container'>
				<div className={style.content}>
					<div className={style.title_wrap}>
						<h2 className={style.title}>{props.title}</h2>
					</div>
					<div className={style.cell_wrapper}>
						{props.data.map((item, index) => (
							<div className={style.cell} key={index}>
								<span className={style.number}>
									{item.number}
								</span>
								<p className={style.text}>{item.text}</p>
							</div>
						))}
					</div>
				</div>
				<div className={style.image}>
					<Image
						src={props.image}
						alt='bg image'
						layout='fill'
						objectFit='cover'
						objectPosition='50% 50%'
					/>
				</div>
                <div className={style.image_laptop}>
					<Image
						src={props.image_laptop}
						alt='bg image'
						layout='fill'
						objectFit='cover'
						objectPosition=' 80% 50%'
					/>
				</div>
                <div className={style.image_mob}>
					<Image
						src={props.image_mob}
						alt='bg image'
						layout='fill'
						objectFit='cover'
						objectPosition=' 50% 50%'
					/>
				</div>
			</div>
		</section>
	);
};

export default PartnershipLookingFor;
