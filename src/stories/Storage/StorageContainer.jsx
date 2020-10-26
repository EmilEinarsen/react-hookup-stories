import React from 'react'
import { useStorage } from 'bjork_react-hookup'
import Storage from './Storage'

const StorageContainer = () => {
	const [ state, setState ] = useStorage( 'local', 'value' )

	return <Storage props={{ state, setState }} />
}

export default StorageContainer
