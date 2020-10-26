const Focus = ({ 
	props: { 
		isFocus, 
		bind 
	}
}) => (
	<>
		<p>{isFocus ? '😁' : '☹️'}</p>
		<input {...bind} ></input>
	</>
)

export default Focus
