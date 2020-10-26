import React from 'react'
import { useArray } from 'bjork_react-hookup'
import Array from './Array'

const ArrayContainer = () => {
	const [ array, , methods ] = useArray(['cat 🐈', 'fish 🐠', 'turtile 🐢'])

	return <Array props={{ array, methods }} />
}

export default ArrayContainer