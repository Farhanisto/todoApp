import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Messages';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux</h1>
        </header>
        <div className="Todo-App">
         <Message/>
         <TodoForm />
          <div className="Todo-List">
          <Route path='/:filter?' render = {({match})=>{
             return (
              <TodoList filter ={match.params.filter}/>
            );
          }}/>
          
          <Footer/>
          </div>
        </div>
      </div>
      </Router>
      
    );
  }
}


// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   updateCurrent
// },dispatch);

// const mapStateToProps = (state) => (state);
// const ConnectedApp=connect(mapStateToProps,mapDispatchToProps)(App);
// export default ConnectedApp;

export default App;