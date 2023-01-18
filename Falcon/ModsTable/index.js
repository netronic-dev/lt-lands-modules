import style from "../falcon.module.scss";
import { Button } from "../../../lt-modules/Buttons";
import { Fade, Zoom } from "react-awesome-reveal";
import { nanoid } from "nanoid";

export default function FalconModsTable(props) {
	return (
		<>
			<div className={style.tagerModifications}>
				<Fade direction="up" triggerOnce>
					<h2 className={style.table_title}>{props.title}</h2>
				</Fade>
				<Zoom triggerOnce>
					<table
						className={`${style.table} ${
							props.sets === true ? style.table_sets : null
						}`}
					>
						<thead
							className={`${style.table_head} ${
								props.sets === true ? style.table_sets_head : null
							}`}
						>
							<tr>
								{props.tableHead.map((item) => (
									<td key={nanoid()}>{item}</td>
								))}
							</tr>
						</thead>
						<tbody
							className={`${style.table_body} ${
								props.sets === true ? style.table_sets_body : null
							}`}
						>
							{props.tableBody.map((item) => (
								<tr key={nanoid()}>
									{item.items.map((item, index) =>
										item === "plus" ? (
											<td key={nanoid()}>+</td>
										) : item === "cross" ? (
											<td key={nanoid()}>{cross}</td>
										) : index === 0 ? (
											<th key={nanoid()}>{item}</th>
										) : (
											<td key={nanoid()}>{item}</td>
										)
									)}
								</tr>
							))}
						</tbody>
					</table>
					<div className={style.tableAddon}>
						{props.tableAddon.map((item) => (
							<div className={style.tableAddon_line} key={nanoid()}>
								<p>{item.item_1}</p>
								<p>{item.item_2}</p>
							</div>
						))}
					</div>
				</Zoom>
				<div>
					<Button style="blueWhite" text={props.buttonText} />
				</div>
			</div>
		</>
	);
}

const cross = (
	<svg height="15px" viewBox="0 0 24 24" width="15px" fill="#8e8e8e">
		<path d="M0 0h24v24H0V0z" fill="none" />
		<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
	</svg>
);
