import { Component } from "react";

class ClassStateExample extends Component{
    // constructor 가장 먼저 실행되고, 한 번만 실행 됨
    constructor(props){
        super(props);
        this.state = {number1:0, number2:0}; //선언 및 초기화
    }

    render(){
        const {msg} = this.props;
        const {number1, number2} = this.state;
        return(
            <div>
                <h1>{number1}</h1>
                <button onClick={this.number1SumOne}>{msg}</button>

                <h1>{number2}</h1>
                <button onClick={()=>{
                    this.setState({number2:number2 - 1}) //안에서는 this.state안써도 되는듯
                }}>{msg}</button>
            </div>
        );
    }

    number1SumOne = () => {
        this.setState({number1:this.state.number1+1}); //state값을 세팅하겠다.
        
    }
}
export default ClassStateExample;