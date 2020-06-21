import {componentsPlugin} from './components'
import {installFactory} from "./utils/plugins";

const NAME = 'SparxworksVue'

const install = installFactory({
    components: {
        componentsPlugin,
    }
})

const SparxworksVue = {
    install,
    NAME
}

export default SparxworksVue