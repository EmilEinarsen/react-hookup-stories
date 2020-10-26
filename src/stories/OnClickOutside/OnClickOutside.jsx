const style = {
	display: 'block',
	width: '200px',
	wrap: 'nowrap',
	backgroundColor: 'black',
	color: 'whitesmoke',
	padding: '20px',
}

const OnClickOutside = ({ 
	props: { 
		ref, 
		isVisible, 
		setTrue 
	} 
}) => (
	<>
		{ isVisible ?
			<div ref={ref} style={style}>
				👋 Click anywhere outside of me to close
			</div>
		: <button onClick={setTrue}>Show</button> }
	</>
)

export default OnClickOutside
