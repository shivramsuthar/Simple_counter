import React,{Component} from 'react';
import './Counter.css'
class Counter extends Component {
    constructor(){
        super();
        this.state={
            counter :0
        }
        this.increment=this.increment.bind(this)
        this.reset=this.reset.bind(this)
    }
    render(){
    return (
      <div className="Counter">
        <CounterButton by={1} incrementMethod={this.increment}/>
        <CounterButton by={10}incrementMethod={this.increment}/>
        <CounterButton by={100}incrementMethod={this.increment}/>
        <CounterButton by={-1}incrementMethod={this.increment}/>
        <CounterButton by={-10}incrementMethod={this.increment}/>
        <CounterButton by={-100}incrementMethod={this.increment}/>
        <span className="count">{this.state.counter}</span>
        <div><button
        className="reset"
        onClick={this.reset}
        >reset</button></div>
      </div>
    );
    }
    increment(by){
        //console.log('increment in perent by ${by}');
        //this.state.counter++;
        this.setState({
            counter: this.state.counter+by
        });
    }
    reset(){
        this.setState({
            counter: 0
        });
    }
  }
class CounterButton extends Component {
    constructor(){
        super();
        this.state={
            counter :0
        }
        this.increment=this.increment.bind(this)
    }
    render(){
    return (
      <div className="CounterButton">
        <button onClick={this.increment}>{this.props.by}</button>
      </div>
    );
    }  
    increment(){
        //console.log('increment in child by');
        //this.state.counter++;
        this.setState({
            counter: this.state.counter+this.props.by
        });
        this.props.incrementMethod(this.props.by);
    }
  }
  
  export default Counter