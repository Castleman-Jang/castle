import { Component } from "react";

class ClassOneNumTwoBtn extends Component{
    constructor(props){
        super(props);
        this.state = {number1:0};
    }

    render(){
        const {msg1, msg2} = this.props;
        const {number1} = this.state;
        return(
        <div>
            <button onClick={()=>{
                this.setState({number1:number1 - 1})
            }}>{msg1}</button>
            <h2 style={{display: 'inline'}}>{number1}</h2>
            <button onClick={()=>{
                this.setState({number1:number1 + 1})
            }}>{msg2}</button>
        </div>
        )
    }

}
export default ClassOneNumTwoBtn
