import { Component } from "react";

class propsEx1 extends Component{
    render(){
        console.log(this.props)
        // const {color} = this.props;
        // const {style} = this.props;
        // const {color,style} = this.props; // 객체 형태로 반환 
        // const dressCode = this.props.children; //.children (속성) 리터럴값(value값) 반환. 중괄호 빼야됨 이해는 못했음 ㅋ
        
        const {color, style,children} = this.props; //위 8번줄,9번줄 합쳐서 쓴거임
        

        return (
        <div>
            <div>오늘의 포인트 컬러는 {color}입니다.</div>
            <div>내일의 코디는 {style}입니다.</div>
            <div>언제일지 모를 회식 날 드레스 코드는 {children}입니다.</div>
        </div>
        )
    }
}

propsEx1.defaultProps={color:'초록', style:'아무거나'}
    
export default propsEx1;