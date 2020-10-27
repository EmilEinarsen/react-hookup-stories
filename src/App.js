import React from 'react'
import Storage from './stories/Storage/StorageContainer'
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
import WindowSize from './stories/WindowSize'
import ScreenType from './stories/ScreenType'
import Memento from './stories/Memento'
import Active from './stories/Active'

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
		<WindowSize />
		<ScreenType />
		<Memento />
		<Active />
	</>
)

export default App
