import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@cnamts/vue-dot/tests';

import FormBuilder from '../';

import { questionForm } from './data/questionForm';

let wrapper: Wrapper<Vue>;

describe('FormBuilder', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FormBuilder, {
			propsData: {
				form: questionForm
			}
		}, true);

		expect(wrapper).toMatchSnapshot();
	});
});
