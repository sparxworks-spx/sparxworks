export const installFactory = ({components} = {}) => {
    const install = (Vue, config = {}) => {
        if (install.installed) {
            /* istanbul ignore next */
            return
        }
        install.installed = true
        registerComponents(Vue, components)
    }

    install.installed = false

    return install
}

export const registerComponent = (Vue, name, def) => {
    if (Vue && name && def) {
        Vue.component(name, def)
    }
}

export const registerComponents = (Vue, components = {}) => {
    for (const component in components) {
        registerComponent(Vue, component, components[component])
    }
}