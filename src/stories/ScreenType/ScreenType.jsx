const style = {
	padding: '20px',
	backgroundColor: 'black',
	color: 'white',
	maxWidth: '220px'
}

const ScreenType = ({ props: { type: { xs, sm, md, lg, xl } } }) => (
	<div style={style}>
		<p>Size: { xl ? 'xl' : lg ? 'lg' : md ? 'md' : sm ? 'sm' : xs ? 'xs' : '' }</p>
	</div>
)

export default ScreenType
