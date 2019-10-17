const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [
				{
					id: "1",
					full_name: "Jose",
					email: "Jose@gmail.com",
					phone: "(786) 123 4567",
					address: "EE UU"
				},

				{
					id: "2",
					full_name: "Ricardo",
					email: "Ricardo@gmail.com",
					phone: "(786) 123 4567",
					address: "Espana"
				},

				{
					id: "3",
					full_name: "Fernando",
					email: "Fernando@gmail.com",
					phone: "(786) 123 4567",
					address: "Italia"
				}
			]
		},

		actions: {
			addContact: (name, address, phone, email) => {
				let store = getStore();
				setStore({
					contacts: store.contacts.concat([
						{
							full_name: name,
							email: email,
							phone: phone,
							address: address,
							id: store.contacts.length + 3
						}
					])
				});
			},

			editContact: (name, address, phone, email, id) => {
				let store = getStore();
				let contactIndex = store.contacts.findIndex(item => item.id == id);
				console.log("en el flux", contactIndex);
				setStore({
					contacts: store.contacts[contactIndex]([
						{
							full_name: name,
							email: email,
							phone: phone,
							address: address
						}
					])
				});
			},

			deleteContact: id => {
				const store = getStore();
				const filteredItems = store.contacts.filter((contacts, index) => {
					return id !== index;
				});
				setStore({ contacts: filteredItems });
			}

			//deleteContact: id => {
			//let store = getStore();
			//let filteredItems = store.contacts.filter((contact, index) => contact.id !== id);
			//setStore({ contacts: filteredItems });
			//}

			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
