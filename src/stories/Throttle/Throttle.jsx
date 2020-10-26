const Throttle = ({ 
	props: { 
		count, 
		setCount, 
		clicked, 
		setClicked 
	} 
}) => (
	<>
		<p>I'm {count}, but clicked {clicked}</p>
		<button onClick={() => { 
			setCount(++count, 1000) 
			setClicked(++clicked)
		}}>
			Throttle
		</button>
	</>
)

export default Throttle
