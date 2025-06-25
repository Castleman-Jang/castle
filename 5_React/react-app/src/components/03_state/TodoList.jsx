import { useState } from "react";

const TodoList = () => {

    const [todo,setTodo] = useState([
        {no:1, content:'React 시험준비', checked:false },
        {no:2, content:'조 발표하기', checked:false},
        {no:3, content:'점심 샐러드 먹기', checked:true}
    ]);

    const [no, setNo] = useState(4);
    const [content, setContent] = useState();
    const insertTodo = () => {
         setTodo([...todo, {no:no, content:content, checked:false}]);
         setNo(no + 1);
         setContent('');
    }

    const changeChecked = (no) => {
        setTodo(todo.map((element)=>{
            return element.no === no ? {...element, checked:!element.checked} : element
        }));
    }

    const changeCheckIndex = no =>{
        setTodo(todo.map((element, index)=>
           index === no ? {...element, checked:!element.checked} : element
        ));
    }

    // const deleteTodo = (index) =>{
    //     // Array.filter() : 배열의 각 요소를 돌면서 함수 실행, 조건에 맞는 요소만을 갖는 배열 반환?????????
    //     setTodo(todo.filter((item,i)=>{
    //         return index !== i;
    //     }));

    const deleteTodoNo = (no) => {
        setTodo(todo.filter((element)=>{
            return no !== element.no;
        }));
    }
    
    return(
        <div className='todo'>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>할 일 내용</th>
                        <th>완료 여부</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {todo.map((element, index)=>{ //객체가 담겨져있는 element를 가져옴 ??? map 머 검사한다고?
                        return(
                            <tr style={element.checked ? {textDecoration:'line-through'}:{}}>
                                <td>{element.no}</td>
                                <td>{element.content}</td>
                                {/* <td onClick={()=>{changeChecked(element.no)}}>{element.checked ? '완료' : '미완료'}</td> */}
                                <td onClick={()=>{changeCheckIndex(index)}}>{element.checked ? '완료' : '미완료'}</td>
                                {/* <td><button onClick={()=>{deleteTodo(index)}}>삭제</button></td> */}
                                <td><button onClick={()=>{deleteTodoNo(element.no)}}>삭제</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <br/>
            <input type="text" onChange={(e)=>{
                setContent(e.target.value) // e.target.value를 세팅해준다?????????
            }}value={content}/><button onClick={insertTodo}>할 일 등록</button>
        </div>
    );
}

export default TodoList;

/*

*/