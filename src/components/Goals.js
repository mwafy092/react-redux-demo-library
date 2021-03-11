import React from 'react';
import { handleAddGoal, handleDeleteGoal } from '../actions/goals';
import List from './List';
import { connect } from 'react-redux';
class Goals extends React.Component {
    addGoal = (e) => {
        e.preventDefault();
        const name = this.input.value;
        this.props.dispatch(handleAddGoal(name));
        this.input.value = '';
    };
    removeItem = (goal) => {
        this.props.dispatch(handleDeleteGoal(goal));
    };
    render() {
        return (
            <div>
                <h1>Goals</h1>
                <input
                    type='text'
                    placeholder='Add Goal'
                    ref={(input) => (this.input = input)}
                />
                <button onClick={this.addGoal}>Add Goal</button>
                <List
                    items={this.props.goals}
                    remove={this.removeItem}
                    store={this.props.store}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        goals: state.goals,
    };
};
export default connect(mapStateToProps)(Goals);
