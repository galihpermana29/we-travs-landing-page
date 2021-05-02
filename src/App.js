// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout'

function App() {
	return (
		<div>
         <Router>
            <Route path="/" component={Layout}/>
         </Router>
      </div>
	);
}

export default App;
