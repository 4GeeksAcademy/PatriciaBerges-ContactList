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
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
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
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
