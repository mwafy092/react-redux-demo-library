// library code
// export default function createStore(reducer) {
//     let state;
//     let listeners = [];

//     let getState = () => state;

//     let subscribe = (listener) => {
//         listeners.push(listener);
//         return () => {
//             listeners = listeners.filter((l) => l !== listener);
//         };
//     };

//     let dispatch = (action) => {
//         state = reducer(state, action);
//         listeners.forEach((l) => l());
//     };

//     return {
//         getState,
//         subscribe,
//         dispatch,
//     };
// }

// connect abstraction
// function connect(mapStateToProps) {
//     return (Component) => {
//         class Receiver extends React.Component {
//             componentDidMount() {
//                 const { subscribe } = this.props.store;
//                 this.unsubscribe = subscribe(() => {
//                     this.forceUpdate();
//                 });
//             }

//             componentWillUnmount() {
//                 this.unsubscribe();
//             }

//             render() {
//                 const { dispatch, getState } = this.props.store;
//                 const state = getState();
//                 const stateNeeded = mapStateToProps(state);
//                 return <Component {...stateNeeded} dispatch={dispatch} />;
//             }
//         }

//         class ConnectedComponent extends React.Component {
//             render() {
//                 return (
//                     <Context.Consumer>
//                         {(store) => <Receiver store={store} />}
//                     </Context.Consumer>
//                 );
//             }
//         }
//         return ConnectedComponent;
//     };
// }

// Provider abstraction
// class Provider extends React.Component {
//     render() {
//         return (
//             <Context.Provider value={this.props.store}>
//                 {this.props.children}
//             </Context.Provider>
//         );
//     }
// }
