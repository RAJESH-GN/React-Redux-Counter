import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionType from "../../store/actions/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.incrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.decrementCounter}
        />
        <CounterControl label="Add 5" clicked={() => this.props.add(5)} />
        <CounterControl label="Subtract 5" clicked={this.props.subract} />
        <hr />
        <button onClick={this.props.storeResult}>Store Result</button>
        <ul>
          {this.props.storedResults.map((res) => (
            <li onClick={() => this.props.deleteItem(res.id)} key={res.id}>
              {res.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch({ type: actionType.INCREMENT }),
    decrementCounter: () => dispatch({ type: actionType.DECREMENT }),
    add: (val) => dispatch({ type: actionType.ADD, value: val }),
    subract: () => dispatch({ type: actionType.SUBRACT, value: 5 }),
    storeResult: () => dispatch({ type: actionType.STORE_RESULT }),
    deleteItem: (id) => dispatch({ type: actionType.DELETE_ITEM, id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
