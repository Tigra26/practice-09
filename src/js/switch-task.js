import {refs} from "./refs";
import { onNotoficationCheckBoxChange, initSwitchTaskPage } from "./handler";


document.addEventListener('DOMContentLoaded', initSwitchTaskPage);
refs.notificationCheckBox.addEventListener('change', onNotoficationCheckBoxChange);