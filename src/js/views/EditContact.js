import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../store/appContext";

export default class EditContact extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			address: "",
			phone: "",
			email: ""
		};
	}
	render() {
		return (
			<Consumer>
				{({ store, actions }) => {
					let contact = store.contacts.find(item => item.id == this.props.match.params.bubu);
					console.log("$$$", contact);
					return (
						<div className="container">
							<div>
								<h1 className="text-center mt-5">Edit contact</h1>
								<form>
									<div className="form-group">
										<label>Full Name</label>
										<input
											defaultValue={contact.full_name}
											onChange={e => this.setState({ name: e.target.value })}
											type="text"
											className="form-control"
											placeholder="Full Name"
										/>
									</div>
									<div className="form-group">
										<label>Email</label>
										<input
											defaultValue={contact.email}
											onChange={e => this.setState({ email: e.target.value })}
											type="email"
											className="form-control"
											placeholder="Enter email"
										/>
									</div>
									<div className="form-group">
										<label>Phone</label>
										<input
											defaultValue={contact.phone}
											onChange={e => this.setState({ phone: e.target.value })}
											type="phone"
											className="form-control"
											placeholder="Enter phone"
										/>
									</div>
									<div className="form-group">
										<label>Address</label>
										<input
											defaultValue={contact.address}
											onChange={e => this.setState({ address: e.target.value })}
											type="text"
											className="form-control"
											placeholder="Enter address"
										/>
									</div>
									<button
										onClick={() =>
											actions.editContact(
												this.state.name,
												this.state.address,
												this.state.phone,
												this.state.email,
												contact.id
											)
										}
										type="button"
										className="btn btn-primary form-control"
										disabled={
											!this.state.name &&
											!this.state.address &&
											!this.state.phone &&
											!this.state.email
										}>
										save
									</button>
									<Link className="mt-3 w-100 text-center" to="/">
										or get back to contacts
									</Link>
								</form>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}
EditContact.propTypes = {
	match: PropTypes.object
};
