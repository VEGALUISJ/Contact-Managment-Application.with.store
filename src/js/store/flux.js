const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
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
				console.log("index", contactIndex);

				let updated_store = store.contacts
					.slice(0, contactIndex)
					.concat({
						...store.contacts[contactIndex],
						full_name: name,
						email: email,
						address: address,
						phone: phone
					})
					.concat(store.contacts.slice(contactIndex + 1));
				console.log("Upd", updated_store);
				setStore({ contacts: updated_store });
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
