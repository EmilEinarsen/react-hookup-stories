import React, { useState } from 'react'
import { useDebounce } from 'bjork_react-hookup'
import Debounce from './Debounce'

const DebounceContainer = () => {
	const [ count, setCount ] = useDebounce(0)
	const [ clicked, setClicked ] = useState(0)

	return <Debounce props={{ count, setCount, clicked, setClicked }} />
}

export default DebounceContainer
