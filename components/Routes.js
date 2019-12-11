import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import EventScreen from '../screens/EventScreen'
import HomeScreen from '../screens/HomeScreen'
import InfoScreen from '../screens/InfoScreen'

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="home" component={HomeScreen} title="Home" initial={true} />
            <Scene key="events" component={EventScreen} title="Events" />
            <Scene key="info" component={InfoScreen} title="Info" />
            {/* <Scene key="events" component={ActivitiesScreen} title="Activities" /> */}
        </Scene>
    </Router>
)
export default Routes