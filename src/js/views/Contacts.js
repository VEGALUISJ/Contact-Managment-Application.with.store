import React from "react";
import { Link } from "react-router-dom";

import ContactCard from "../component/ContactCard.js";
import Modal from "../component/Modal";
import { Consumer } from "../store/appContext.js";

export default class Contacts extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		};
	}

	render() {
		return (
			<div className="container">
				<div>
					<p className="text-right my-3">
						<Link className="btn btn-success" to="/add">
							Add new contact
						</Link>
					</p>
					<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							<Consumer>
								{({ store, actions }) => {
									return store.contacts.map((item, index) => {
										return (
											<ContactCard
												position={index}
												id={item.id}
												key={index}
												name={item.full_name}
												email={item.email}
												phone={item.phone}
												address={item.address}
												onDelete={() => this.setState({ showModal: true })}
											/>
										);
									});
								}}
							</Consumer>
						</ul>
					</div>
				</div>
				<Modal show={this.state.showModal} onClose={() => this.setState({ showModal: false })} />
			</div>
		);
	}
}
