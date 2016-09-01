import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Image from './image';

describe('Image component', () => {
	it('should render an image HTML tag', () => {
		//Arrange

		//Act
		const wrapper = render(<Image />);

		//Assert
		expect(wrapper.find('img').length).toEqual(1);
	});

	it('should pass a the src props to the img src attribute', () => {
		//Arrange
		const image_url = 'http://www.domain.com/image.png';

		//Act
		const wrapper = mount(<Image url={image_url} />);

		//Assert
		expect(wrapper.find('img').get(0).getAttribute('src')).toBe(image_url);
	});
});
