import {componentsPlugin} from './components'
import {installFactory} from "./utils/plugins";

const NAME = 'SparxworksVue'

const install = installFactory({
    plugins: {
        componentsPlugin,
    }
})

const SparxworksVue = {
    install,
    NAME
}

export default SparxworksVue