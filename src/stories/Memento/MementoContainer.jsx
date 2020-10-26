import { useMemento } from 'bjork_react-hookup'
import Memento from './Memento'

const getEmolj = () => {
	const emoljs = [ '🎥', '🎞', '📽', '🎬', '📺', '📷', '📸', '📹', '📼', '🔍']
	return emoljs[Math.floor(Math.random() * 10)]
}

const MementoContainer = () => {
	const [ state, methods ] = useMemento({ fullState: true })

	return <Memento props={{ state, methods, getEmolj }} />
}

export default MementoContainer