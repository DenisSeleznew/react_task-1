import logo from './logo.svg';
import './App.css';
import { getTodayDate } from './date';

export const App = () => {
	return (
		// всё декаларативный стиль
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					<code>{getTodayDate()}</code>
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};
