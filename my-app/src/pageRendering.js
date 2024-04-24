// import { getTodayDate } from './date';
import LOGO_IMAGE from './logo.svg';
import { createElement } from 'react';

export const renderingHTML = (callback) => {
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { src: LOGO_IMAGE, className: 'App-logo', alt: 'logo' }),
			createElement('p'),
			createElement('code', {}, callback),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
		),
	);
};
