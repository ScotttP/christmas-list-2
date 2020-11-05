import React from "react";

export default function GiftsCard(props) {
	function enabledVsDisabled() {
		if (props.gifts[props.index].link === "") {
			return <b className="linkToGift">Link Unavailable</b>;
		} else {
			return (
				<a
					className="linkToGift"
					href={props.gifts[props.index].link}
					target="_blank"
					rel="noreferrer"
				>
					<b>Link to Gift</b>
				</a>
			);
		}
	}

	return (
		<div className="giftCards" id={props.gifts[props.index].name + "-Card"}>
			<img
				className="giftImage"
				id={"imageFor" + props.gifts[props.index].name}
				src={props.gifts[props.index].image}
				alt={props.gifts[props.index].name}
			></img>
			<h4 className="giftName">{props.gifts[props.index].name}</h4>
			<h4 className="giftPrice">{props.gifts[props.index].price}</h4>
			<p className="giftNotes">{props.gifts[props.index].notes}</p>
			{/*  */}
			{enabledVsDisabled()}
		</div>
	);
}
