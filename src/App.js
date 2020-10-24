import React from 'react'
import Storage from './stories/Storage'
import Boolean from './stories/Boolean'
import Focus from './stories/Focus'
import Debounce from './stories/Debounce'
import Throttle from './stories/Throttle'
import Array from './stories/Array'
import Object from './stories/Object'
import Hover from './stories/Hover'
import OnClickOutside from './stories/OnClickOutside'
import Async from './stories/Async'
import WindowScroll from './stories/WindowScroll'
import Field from './stories/Field'

const App = () => (
	<>
		<Storage />
		<Boolean />
		<Focus />
		<Debounce />
		<Throttle />
		<Array />
		<Object />
		<Hover />
		<OnClickOutside />
		<Async />
		<WindowScroll />
		<Field />
	</>
)

export default App
