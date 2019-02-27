/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
import LandingPage from './Components/LandingPage/LandingPage.component';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => LandingPage);
