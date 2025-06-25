// const propsEx2 = props =>{
const propsEx2 = ({today='김밥', tomorrow='비빔밥', children}) =>{

    
    // console.log(props);
    // const {today='김밥', tomorrow='비빔밥'} = props; // 비구조 할당
    return (
        <div>
            <div>오늘 먹은 음식은 {today}입니다.</div>
            <div>내일 먹을 음식은 {tomorrow}입니다.</div>
            <div>어제 먹은 음식은 {children}입니다.</div>
        </div>
    );
};

export default propsEx2;
