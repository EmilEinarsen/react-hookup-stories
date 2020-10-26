const Memento = ({ 
	props: { 
		state, 
		methods: {
			undo,
			redo, 
			set, 
			clear,
			latest
		},
		getEmolj
	}
}) => (
	<>
		<p>Past: { state.past.join(', ') }</p>
		<p>Present: { state.present }</p>
		<p>Future: {state.future.join(' ')}</p>
		<button onClick={() => { set(getEmolj())}}>Add</button>
		<button onClick={undo}>Undo</button>
		<button onClick={redo}>Redo</button>
		<button onClick={clear}>Clear</button>
		<button onClick={latest}>Latest</button>
	</>
)

export default Memento
