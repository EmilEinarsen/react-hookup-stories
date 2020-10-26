const Debounce = ({ 
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
			Debounce
		</button>
	</>
)

export default Debounce
