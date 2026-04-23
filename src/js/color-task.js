import {refs} from "./refs";
import { initColorTaskPage, onColorStatusChange} from "./handler";

document.addEventListener('DOMContentLoaded', initColorTaskPage);
refs.colorSelect.addEventListener('change', onColorStatusChange);