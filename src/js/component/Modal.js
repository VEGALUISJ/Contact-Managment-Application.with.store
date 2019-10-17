import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../store/appContext.js";

class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// Initialize your state
		};
	}

	render() {
		return (
			<Consumer>
				{({ store, actions }) => {
					return (
						<div
							className="modal"
							tabIndex="-1"
							role="dialog"
							style={{ display: this.props.show ? "inline-block" : "none" }}>
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title">Are you sure?</h5>
										{this.props.onClose ? (
											<button
												onClick={() => this.props.onClose()}
												type="button"
												className="close"
												data-dismiss="modal"
												aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										) : (
											""
										)}
									</div>
									<div className="modal-body">
										<p>If you delete this, universe complete will go down...Are you sure?</p>
									</div>
									<div className="modal-footer">
										{this.props.onClose ? (
											<button
												onClick={() => this.props.onClose()}
												type="button"
												className="btn btn-primary">
												Oh no please!
											</button>
										) : (
											""
										)}

										<button
											onClick={() => {
												actions.deleteContact(actions.items);
											}}
											type="button"
											className="btn btn-secondary"
											d
											ata-dismiss="modal">
											Yes Baby!
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
export default withRouter(Modal);
