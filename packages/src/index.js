import {components} from './components'
import {installFactory} from "./utils/plugins";

const NAME = 'SparxworksVue'

const install = installFactory({
    components
})

const SparxworksVue = {
    install,
    NAME
}

import CsButton from './components/cs-button/cs-button'

export {
    CsButton
}

export default SparxworksVue