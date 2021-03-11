import React from 'react';
import {
    handleDeleteTodo,
    handleSaveTodo,
    handleToggleTodo,
} from '../actions/todos';
import List from './List';
import { connect } from 'react-redux';

class Todos extends React.Component {
    addTodo = (e) => {
        e.preventDefault();
        const name = this.input.value;
        this.props.dispatch(handleSaveTodo(name));
        this.input.value = '';
    };

    removeItem = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo));
    };

    toggleItem = (todo) => {
        this.props.dispatch(handleToggleTodo(todo));
    };
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input
                    type='text'
                    placeholder='Add Todo'
                    ref={(input) => (this.input = input)}
                />
                <button onClick={this.addTodo}>Add Todo</button>
                <List
                    items={this.props.todos}
                    remove={this.removeItem}
                    toggle={this.toggleItem}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};
export default connect(mapStateToProps)(Todos);
