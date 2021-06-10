import { IndexedObject } from '../../types';
import { VueConstructor } from 'vue';

export type Components = IndexedObject<VueConstructor>;

/**
 * Register components in the global Vue instance
 *
 * @param {VueConstructor} Vue The global Vue instance
 * @param {object} components The list of components to register
 */
export function registerComponents(Vue: VueConstructor, components: Components): void {
	Object.keys(components).forEach((name: string) => {
		Vue.component(name, components[name]);
	});
}
