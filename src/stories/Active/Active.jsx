const style = {
	height: "50px", 
	width: "50px", 
	backgroundColor: "black",
	display: 'grid',
	placeContent: 'center',
}

const Active = ({ 
	props: { 
		isActive, 
		bind 
	} 
}) => (
	<>
		<div {...bind} style={style}>
			{isActive ? '😁' : '☹️'}
		</div>
	</>
)

export default Active
