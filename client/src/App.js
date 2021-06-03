import {BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Route component={Login} path='/login' />
      <ProtectedRoute component={Home} path='/' exact/>
     
    </Router>
  );
}

export default App;
