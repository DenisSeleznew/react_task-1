// import { getTodayDate } from './date';
import LOGO_IMAGE from './logo.svg';

export const renderingHTML = (callback) => {
	const root = document.querySelector('#root');
	const div = document.createElement('div');
	div.className = 'App';
	const header = document.createElement('header');
	header.className = 'App-header';
	const imgLogo = document.createElement('img');
	imgLogo.src = LOGO_IMAGE;
	imgLogo.className = 'App-logo';
	imgLogo.alt = 'logo';
	const paragraph = document.createElement('p');
	const codeInParagraph = document.createElement('code');
	codeInParagraph.textContent = `${callback}`;
	const link = document.createElement('a');
	link.className = 'App-link';
	link.href = 'https://reactjs.org';
	link.target = '_blank';
	link.rel = 'noopener noreferrer';
	link.textContent = 'Learn React';
	return (
		root.append(div),
		div.append(header),
		header.append(imgLogo, paragraph, link),
		paragraph.append(codeInParagraph)
	);
};
