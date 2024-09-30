const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [{
				name: "",
				phone: "",
				email: "",
				address: "",
				id: ""
			}]
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadContacts: () => {
			fetch('https://playground.4geeks.com/contact/agendas/patry/contacts')
			.then(resp => {
			if(!resp.ok){
				//Create agenda if it doesn't exist:
				return fetch('https://playground.4geeks.com/contact/agendas/patry',{
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then(response => {if(!response.ok){throw new Error("Failed to create user")}
				return response.json()})
				.then(() => {
					//After creating the agenda, fetch the contacts (should be empty)
					return fetch('https://playground.4geeks.com/contact/agendas/patry/contacts')
					.then(r => {if(!r.ok){throw new Error("Failed to load contacts of new agenda")}
					return r.json()})
					.then(d => {setStore({ contacts: d.contacts })
					//Keep the function from going on
					Promise.resolve()})
				})
			}
			return resp.json()})
			.then(data => setStore({ contacts: data.contacts }))
			.catch(error => {console.log("Error: ", error)})
			},
			addContact: (contact) => {
				const store = getStore()
				fetch('https://playground.4geeks.com/contact/agendas/patry/contacts', {
					method: "POST",
					body: JSON.stringify(contact),
					headers: {"Content-Type": "application/json"}
				})
				.then(response => response.json())
				.then((data) => {
					setStore({contacts: [...store.contacts, data]})
				})
				.catch(err => console.log("Error: ", err))
			},
			delContact: (id) =>  {
				const store = getStore()
				const actions = getActions()
				
				fetch(`https://playground.4geeks.com/contact/agendas/patry/contacts/${id}`, {
					method: "DELETE",
					headers: {"Content-Type": "application/json"}
				})
				.then(r => {if(!r.ok){throw new Error("Failed to delete contact")}})
				.then(() => {
					let newList = store.contacts.filter(contact => contact.id !== id)
					setStore({contacts: newList})
					actions.loadContacts()})
			},
			updContact: (contact, id) => {
				const store = getStore()
				fetch(`https://playground.4geeks.com/contact/agendas/patry/contacts/${id}`, {
					method: "PUT",
					body: JSON.stringify(contact),
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then(res => {if(!res.ok){throw new Error("Failed to update the contact")}
				res.json()})
				.then(data => {
					const newList = store.contacts.map((contact) => {
						if(contact.id == id){return data}
						else return contact
					})
					setStore({contacts: newList})
				})
			}
		}
	};
};

export default getState;
