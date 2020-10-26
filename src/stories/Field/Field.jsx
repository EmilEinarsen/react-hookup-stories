const Field = ({ 
	props: { 
		state, 
		bind 
	} 
}) => (
	<>
		<p>{ !state ? '💀 Empty' : `😎 Value: ${state}` }</p>
		<input {...bind}></input>
	</>
)

export default Field