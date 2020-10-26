const Boolean = ({
	props: { 
		state, 
		toggle, 
		setTrue, 
		setFalse 
	}
}) => (
	<>
		<p>{state ? '😁' : '☹️'}</p>
		<button onClick={toggle}>TOGGLE</button>
		<button onClick={setTrue}>TRUE</button>
		<button onClick={setFalse}>FALSE</button>
	</>
)

export default Boolean
