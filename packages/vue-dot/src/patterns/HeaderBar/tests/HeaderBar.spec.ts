import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import HeaderBar from '../';

let wrapper: Wrapper<Vue>;

describe('HeaderBar', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(HeaderBar);

		expect(wrapper).toMatchSnapshot();
	});
});
