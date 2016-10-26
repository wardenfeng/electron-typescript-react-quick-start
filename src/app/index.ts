import Greeting from './greeting';
import ColorMaterialTest from './feng3d/ColorMaterialTest';

import * as injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

const greeting = new Greeting();

greeting.hello();

new ColorMaterialTest();