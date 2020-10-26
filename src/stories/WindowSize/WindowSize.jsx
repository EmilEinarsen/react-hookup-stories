const style = {
	padding: '20px',
	backgroundColor: 'black',
	color: 'white',
	maxWidth: '220px'
}

const WindowSize = ({ props: { size: { width, height } } }) => (
	<div style={style}>
		<p>Width: {width}px, Height: {height}px</p>
	</div>
)

export default WindowSize
