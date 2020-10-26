import { useScreenType } from 'bjork_react-hookup'
import ScreenType from './ScreenType'

const ScreenTypeContainer = () => {
	const [ type ] = useScreenType()
	
	return <ScreenType props={{ type }} />
}

export default ScreenTypeContainer