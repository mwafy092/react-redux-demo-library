import React, { Component } from 'react';
import Todos from './Todos';
import Goals from './Goals';
import { connect } from 'react-redux';
import { handleReceiveData } from '../actions/shared';
class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleReceiveData());
    }
    render() {
        const { loading } = this.props;
        if (loading) {
            return <h1>Loading ....</h1>;
        }
        return (
            <div>
                <Todos />
                <Goals />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
    };
};
export default connect(mapStateToProps)(App);
