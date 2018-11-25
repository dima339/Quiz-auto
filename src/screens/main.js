import {createStackNavigator} from 'react-navigation'
import Start from './start'
import Game from './game'
import End from './end'

const Main = createStackNavigator({
        Start: {
            screen: Start
        },
        Game: {
            screen: Game
        },
        End: {
            screen: End 
        }
    },
    {
        headerMode: 'none'
    })
export default Main
