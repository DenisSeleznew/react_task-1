import './App.css';
import { getTodayDate } from './date';
import { renderingHTML } from './pageRendering';

export const App = () => {
	return renderingHTML(getTodayDate());
};
