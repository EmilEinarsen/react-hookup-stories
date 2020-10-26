const Async = ({
	props: { 
		pending, 
		value, 
		error, 
		execute 
	}
}) => (
	<div>
		<p>{ value ? value : error ? error : '🏜'}</p>
		<button onClick={() => !pending ? execute() : ''}>
			{ pending ? 'pending ...' : 'fetch' }
		</button>
	</div>
)

export default Async
