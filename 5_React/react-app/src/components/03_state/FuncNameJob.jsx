import { useState } from "react";

const FuncNameJob = () => {
    // 이름을 입력하고 커서가 밖으로 나가면 span에 이름 출력
    // 직업을 입력할 때마다 span에 직업 출력
    const [name, setName] = useState();
    const [job, setJob] = useState();

    const changeName= (e) =>{
        setName(e.target.value)
    }
    const changeJob = (e) =>{
        setJob(e.target.value)

    }

    return(
        
        <div>
            <input placeholder="이름을 입력하세요" onBlur={changeName}/>
            <input placeholder="직업을 입력하세요" onChange={changeJob}/>
            <br/>
            <span>이름 : {name}</span><br/>
            <span>직업 : {job}</span>
        </div>
    );
}

export default FuncNameJob;