const Storage = ({ 
	props: { 
		state, 
		setState 
	} 
}) => (
	<>
		<p>{ !state ? '💀 Empty' : `😎 Stored : ${state}` }</p>
		<input 
			onChange={e => setState(e.target.value)}
			value={state}
		></input>
	</>
)

export default Storage
