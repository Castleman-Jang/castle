import FuncComp from './components/01_component/FuncComponent'
// import ClassComp from './components/01_component/ClassComponent'
import {Test} from './components/01_component/ClassComponent'
import ClassProps from './components/02_props/ClassProps'
import FuncProps from './components/02_props/FuncProps'

import ClassStateExample from './components/03_state/ClassStateExample'
import ClassOneNumTwoBtn from './components/03_state/ClassOneNumTwoBtn'
import FuncStateExample from './components/03_state/FuncStateExample'
import FuncOneNumTwoBtn from './components/03_state/FuncOneNumTwoBtn'
import FuncNameJob from './components/03_state/FuncNameJob'
import FuncSendDelValue from './components/03_state/FuncSendDelValue'
import TodoList from './components/03_state/TodoList'

import './App.css';


function App() {
  return(
  <div>
    <h1>component</h1>
      <FuncComp/>
      {/* <ClassComp/> */}
      <Test/>

      <hr/>

      <h1>props</h1>
      <ClassProps color="빨강"/>
      <ClassProps/>
      <ClassProps color="노랑" style="샤랄라" />
      <ClassProps color="파랑" style="올블랙">큐티깜찍</ClassProps>
      <ClassProps color="파랑" style="올블랙">
        <span style={{background:'pink'}}>깜찍큐티</span>
      </ClassProps>
      <FuncProps today='라면'/>
      <FuncProps/>
      <FuncProps today="쫄면" tomorrow/>
      <FuncProps today="떡볶이" tomorrow="순대">
        <mark>어묵</mark>
      </FuncProps>
      

      <hr/>

      <h1>state</h1>
      <ClassStateExample msg="click!"/>

      <hr/>
      <h1>버튼 오르락 내리락</h1>
      <ClassOneNumTwoBtn msg1="-" msg2="+" />

      <FuncStateExample/>
      <FuncOneNumTwoBtn/>
      <FuncNameJob/>
      <hr/>
      <FuncSendDelValue/>
      <TodoList/>
  </div>
   )
  
}
export default App
