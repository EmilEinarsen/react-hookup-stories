const style = {
	display: 'block',
	backgroundColor: "black",
	color: 'whitesmoke',
	padding: '20px',
	width: '250px',
	position: 'fixed',
	top: '0',
	right: '0',
}

const WindowScroll = ({ 
	props: { 
		state: { 
			x, 
			y 
		} 
	} 
}) => (
	<div style={style}>
		Your scroll position is X:{Math.floor(x)}, Y:{Math.floor(y)}
	</div>
)

export default WindowScroll
