const OBJECT = ({ 
	props: { 
		object: { 
			name, 
			age, 
			country 
		}, 
		add, 
		removeByKey, 
		clear 
	} 
}) => (
	<>
		{ name || age || country ?
			<p>{ name && `My name is ${name}. ` }{  age && `I'm less then ${age} year old. ` }I was developed in {country}</p>
		: <p>Nothing here</p> }
		<button onClick={() => add({country: 'Sweden'})}>
			Update country
		</button>
		<button onClick={() => removeByKey('age')}>
			Remove age
		</button>
		<button onClick={() => clear()}>
			Go incognito
		</button>
	</>
)

export default OBJECT