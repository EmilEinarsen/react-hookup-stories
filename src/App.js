import React from 'react'
import Storage from './stories/Storage/StorageContainer'
import Boolean from './stories/Boolean/BooleanContainer'
import Focus from './stories/Focus/FocusContainer'
import Debounce from './stories/Debounce/DebounceContainer'
import Throttle from './stories/Throttle/ThrottleContainer'
import Array from './stories/Array/ArrayContainer'
import Object from './stories/Object/ObjectContainer'
import Hover from './stories/Hover/HoverContainer'
import OnClickOutside from './stories/OnClickOutside/OnClickOutsideContainer'
import Async from './stories/Async/AsyncContainer'
import WindowScroll from './stories/WindowScroll/WindowScrollContainer'
import Field from './stories/Field/FieldContainer'

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
