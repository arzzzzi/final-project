import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes, Link
} from 'react-router-dom'
import React from 'react';
import ToDo from './to-do/todo';
import Scrum from './backlog/scrum';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/todo" exact element={<ToDo />} />
          <Route path="/scrum" exact element={<Scrum />} />
          <Route path="/" exact element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div className='main-menu'>
          <div className='todo'><Link to="/todo">TO-DO LIST</Link></div>
          <div className='scrum'><Link to="/scrum">SCRUM</Link></div>
        </div>
      </div>
    )
  }
}

export default App;
