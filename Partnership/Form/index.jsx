import Link from 'next/link';
import style from './style.module.scss';
import { InputsWName } from '../Form/Inputs';

const PartnershipForm = (props) => {
	return (
		<section className={style.main} id='become_a_partner'>
			<div className='container'>
				<div className={style.content_wrapper}>
					<div className={style.content_info}>
						<h2 className={style.title}>{props.title}</h2>
						<p className={style.text}>{props.text}</p>
						<div className={style.contact_us}>
							<span className={style.hightlight_text}>
								{props.hightlight_text}
							</span>
							<div className={style.contants_wrapper}>
								<div className={style.contact_cell}>
									<span className={style.contanct_title}>
										{props.email_title}
									</span>
									<Link
										href={`mailto:${props.email}`}
										target='_blank'
									>
										{props.email}
									</Link>
								</div>
								<div className={style.contact_cell}>
									<span className={style.contanct_title}>
										{props.phone_title}
									</span>
									<PhoneWithLinks
										phone_number={props.phone_number1}
										whatsapp={props.whatsapp1}
									/>
									<PhoneWithLinks
										phone_number={props.phone_number2}
										whatsapp={props.whatsapp2}
									/>
								</div>
							</div>
						</div>
					</div>
					<InputsWName
						buttonText={props.buttonText}
						agreementText={props.agreementText}
						agreementSpanText={props.agreementSpanText}
						destinationURL={props.destinationURL}
						orderName={props.orderName}
						namePlaceholder={props.namePlaceholder}
						callPlaceholder={props.callPlaceholder}
					/>
					<div className={style.contact_us_mob}>
						<span className={style.hightlight_text}>
							{props.hightlight_text}
						</span>
						<div className={style.contants_wrapper}>
							<div className={style.contact_cell}>
								<span className={style.contanct_title}>
									{props.email_title}
								</span>
								<Link
									href={`mailto:${props.email}`}
									target='_blank'
								>
									{props.email}
								</Link>
							</div>
							<div className={style.contact_cell}>
								<span className={style.contanct_title}>
									{props.phone_title}
								</span>
								<PhoneWithLinks
									phone_number={props.phone_number1}
									whatsapp={props.whatsapp}
								/>
								<PhoneWithLinks
									phone_number={props.phone_number2}
									whatsapp={props.whatsapp2}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

function formatPhoneNumber(number) {
	let newNum = number
		.replace(/[^\d]+/g, '')
		.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5');
	return newNum;
}
export function PhoneWithLinks(props) {
	return (
		<div className={style.links_union}>
			{props.phone_number ? (
				<p className={style.phone_link}>
					<Link target='_blank' href={`tel:${props.phone_number}`}>
						{formatPhoneNumber(props.phone_number)}
					</Link>
				</p>
			) : (
				''
			)}
			<div className={style.icons}>
				{props.whatsapp ? (
					<a
						className={style.icon_link}
						target='_blank'
						href={props.whatsapp}
					>
						{whatsapp}
					</a>
				) : (
					''
				)}
			</div>
		</div>
	);
}
const whatsapp = (
	<svg
		width='22'
		height='23'
		viewBox='0 0 22 23'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M22 11.5983C22 17.5138 17.16 22.3049 11.1956 22.3049C9.31333 22.3049 7.52889 21.816 5.96444 20.9605L0 22.8916L1.95556 17.1472C0.977778 15.5338 0.415556 13.6272 0.415556 11.6227C0.391111 5.68271 5.23111 0.891602 11.1956 0.891602C17.16 0.891602 22 5.68271 22 11.5983ZM11.1956 2.60271C6.18444 2.60271 2.12667 6.63605 2.12667 11.5983C2.12667 13.5783 2.76222 15.3872 3.86222 16.8783L2.73778 20.2272L6.23333 19.1272C7.67556 20.0805 9.38667 20.6183 11.22 20.6183C16.2067 20.6183 20.2889 16.5849 20.2889 11.5983C20.2889 6.6116 16.2067 2.60271 11.1956 2.60271ZM16.6467 14.0672C16.5733 13.9694 16.4022 13.896 16.1333 13.7494C15.8644 13.6272 14.5689 12.9916 14.3244 12.8938C14.08 12.796 13.9089 12.7716 13.7378 13.016C13.5667 13.2849 13.0533 13.8716 12.9067 14.0427C12.76 14.2138 12.5889 14.2383 12.3444 14.116C12.0756 13.9938 11.22 13.7005 10.2178 12.8205C9.43556 12.136 8.89778 11.256 8.75111 11.0116C8.60444 10.7427 8.72667 10.596 8.87333 10.4738C8.99555 10.3516 9.14222 10.156 9.26445 10.0094C9.38667 9.86271 9.43556 9.74049 9.53333 9.56938C9.63111 9.39827 9.58222 9.2516 9.50889 9.10493C9.43556 8.98271 8.92222 7.68716 8.70222 7.14938C8.48222 6.63605 8.26222 6.70938 8.11556 6.70938C7.96889 6.70938 7.77333 6.68494 7.60222 6.68494C7.43111 6.68494 7.13778 6.75827 6.89333 7.00271C6.64889 7.2716 5.96444 7.90716 5.96444 9.20271C5.96444 10.4983 6.91778 11.7449 7.04 11.916C7.16222 12.0872 8.87333 14.8249 11.5622 15.876C14.2511 16.9272 14.2511 16.5849 14.74 16.536C15.2289 16.4872 16.3044 15.9005 16.5244 15.2894C16.72 14.7027 16.72 14.1894 16.6467 14.0672Z'
			fill='#0090FF'
		/>
	</svg>
);

export default PartnershipForm;
