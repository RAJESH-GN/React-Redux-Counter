import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import {
  increment,
  decrement,
  add,
  subract,
  storeResult,
  deleteItem,
} from "../../store/actions/actions";

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
        <button onClick={() => this.props.storeResult(this.props.ctr)}>
          Store Result
        </button>
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
    incrementCounter: () => dispatch(increment()),
    decrementCounter: () => dispatch(decrement()),
    add: (val) => dispatch(add(val)),
    subract: () => dispatch(subract(5)),
    storeResult: (ctr) => dispatch(storeResult(ctr)),
    deleteItem: (id) => dispatch(deleteItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
