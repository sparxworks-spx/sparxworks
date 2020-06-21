import CsButton from './cs-button.vue';
import { storiesOf } from '@storybook/vue';


storiesOf('Button', module)
    .add('as a component', () => ({
        components: { CsButton },
        template: '<cs-button>with text</cs-button>'
    }))
    .add('with emoji', () => ({
        components: { CsButton },
        template: '<cs-button>😀 😎 👍 💯</cs-button>'
    }))
    .add('with text', () => ({
        components: { CsButton },
        template: '<cs-button :rounded="true">rounded</cs-button>'
    }));