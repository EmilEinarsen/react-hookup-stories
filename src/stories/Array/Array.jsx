const Array = ({
	props: { 
		array, 
		methods: {
			add, 
			clear, 
			removeByIndex, 
			removeByValue
		},
	}
}) => (
	<>
		<p>{ array.length ? array.join(' ') : '🏜'}</p>
		<button onClick={() => add('dog 🐕')}>Add dog 🐕</button>
		<button onClick={() => removeByValue('cat 🐈')}>Remove cat 🐈</button>
		
		{ array.length && 
			<button onClick={() => removeByIndex(array.length-1)}>
				Remove last ({array[array.length-1]})
			</button>
		}

		<button onClick={() => clear()}>Remove all 🗑</button>
	</>
)

export default Array
