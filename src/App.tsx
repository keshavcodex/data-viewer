import store from './store/store';
import { Provider } from 'react-redux';
import './App.css';
import Home from './screen/Home';

const App = () => {
	return (
		// Providing the Redux store to the entire application using Provider
		<Provider store={store}>
			<Home />
		</Provider>
	);
};

export default App;
