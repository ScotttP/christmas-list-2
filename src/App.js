import React from "react";
import "./App.css";
import giftIdeas from "./data";
import GiftsCard from "./gifts";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gifts: giftIdeas,
		};
	}
	render() {
		const rendering = this.state.gifts.map((item, i) => (
			<GiftsCard
				className="gifts"
				key={item.id}
				id={item.name + i}
				gifts={this.state.gifts}
				index={i}
			></GiftsCard>
		));
		return (
			<div>
				<header id="header">
					<b>Scott's Gift List</b>
				</header>
				<div id="giftCardContainer">{rendering}</div>
			</div>
		);
	}
}
