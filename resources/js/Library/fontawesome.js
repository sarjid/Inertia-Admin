/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import {
    faBarsStaggered,
    faTimes,
    faEllipsisV,
    faUserCircle,
    faSpinner
} from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(faBarsStaggered, faTimes, faEllipsisV, faUserCircle, faSpinner);

export default FontAwesomeIcon;
