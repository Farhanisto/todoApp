import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCurrent,saveTodo} from '../reducers/todo';
import {bindActionCreators} from 'redux';

class TodoForm extends Component{
   handleInputChange = (event) => {
        const val = event.target.value;
        this.props.updateCurrent(val) 
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.saveTodo(this.props.currentTodo);
    }
    render(){
    const {currentTodo} = this.props;
    return(
    <form onSubmit= {this.handleSubmit}>
    <input
     type="text" 
     onChange={this.handleInputChange}
     value = {currentTodo}/>
    </form> 
    );     
    }

}
const mapStateToProps = (state)=>({
    currentTodo: state.todo.currentTodo
}
);
//const mapDispatchToProps = (dispatch)=> (bindActionCreators({todoChangeHandler:updateCurrent},dispatch));
//This could be simply written as 
//const mapDispatchToProps = {todoChangeHandler:updateCurrent}
export default connect(mapStateToProps,{updateCurrent,saveTodo})(TodoForm);
          