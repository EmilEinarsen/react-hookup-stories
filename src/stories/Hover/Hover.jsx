const style = {
	height: "50px", 
	width: "50px", 
	backgroundColor: "black",
	display: 'grid',
	placeContent: 'center',
}

const Hover = ({ 
	props: { 
		isHover, 
		bind 
	} 
}) => (
	<>
		<div {...bind} style={style}>
			{isHover ? '😁' : '☹️'}
		</div>
	</>
)

export default Hover
