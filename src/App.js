
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// importamos los componentes
import NavBarLayout from './layouts/navbar';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import FunComponent from './components/functionComponent/FunComponent';
import ArrowComponent from './components/functionComponent/ArrowComponent';
import AsyncComponent from './components/functionComponent/AsyncComponent';
import CallbackComponent from './components/functionComponent/CallbackComponent';
import EventHandlerComponent from './components/functionComponent/EventHandlerComponent';
import OverrideComponent from './components/functionComponent/OverrideComponent';
import PropsComponent from './components/functionComponent/PropsComponent';
import StateComponent from './components/functionComponent/StateComponent';
import StatelessComponent from './components/functionComponent/StatelessComponent';
import ClassComponent from './components/classComponent/ClassComponent';
import StateClassComponent from './components/classComponent/StateClassComponent';
import IterateComponent from './components/iterate/IterateComponent';
import IfComponent from './components/conditionalComponent/IfComponent';
import PropsDemo from './components/conditionalComponent/PropsDemo';
import PropsWithoutDestructuring from './components/conditionalComponent/PropsWithoutDestructuring';
import EmpList from './components/pagination/EmpList';
import ReactDataTable from './components/pagination/ReactDataTable';

import HookDemo from './components/hook/HookDemo';
import HookUseState from './components/hook/HookUseState';
import HookUseEffect from './components/hook/HookUseEffect';
import HookUseContext from './components/hook/HookUseContext';
import HookUseRef from './components/hook/HookUseRef';
import HookUseReducer from './components/hook/HookUseReducer';
import HookUseCallback from './components/hook/HookUseCallback';
import HookUseMemo from './components/hook/HookUseMemo';
import CustomHook from './components/hook/CustomHook';
import ParentChild from './components/ParentChildCommunication/ParentChild';
import ChildToParent from './components/ChildParentCommunication/ChildToParent';
import ParentToChild from './components/ParentChildCommunication/ParentToChild';
import ChildParentComm from './components/ChildParentCommunication/ChildParentComm';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='ReactUtility/' element={<NavBarLayout/>}>
            <Route index element={<Home/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
            <Route path='funComponent' element={<FunComponent/>}></Route>

            <Route path='arrowComponent' element={<ArrowComponent/>}></Route>
            <Route path='asyncComponent' element={<AsyncComponent/>}></Route>
            <Route path='callbackComponent' element={<CallbackComponent/>}></Route>
            <Route path='eventHandlerComponent' element={<EventHandlerComponent/>}></Route>
            <Route path='overrideComponent' element={<OverrideComponent/>}></Route>
            <Route path='propsComponent' element={<PropsComponent/>}></Route>
            <Route path='stateComponent' element={<StateComponent/>}></Route>
            <Route path='statelessComponent' element={<StatelessComponent/>}></Route>

            <Route path='classComponent' element={<ClassComponent/>}></Route>
            <Route path='stateClassComponent' element={<StateClassComponent/>}></Route>

            <Route path='iterateComponent' element={<IterateComponent/>}></Route>
            <Route path='empList' element={<EmpList/>}></Route>
            <Route path='reactDataTable' element={<ReactDataTable/>}></Route>
            

            <Route path='ifComponent' element={<IfComponent/>}></Route>
            <Route path='propsDemo' element={<PropsDemo/>}></Route>
            <Route path='propsWithoutDestructuring' element={<PropsWithoutDestructuring/>}></Route>

            <Route path='hookDemo' element={<HookDemo/>}></Route>
            <Route path='hookUseState' element={<HookUseState/>}></Route>
            <Route path='hookUseEffect' element={<HookUseEffect/>}></Route>
            <Route path='hookUseContext' element={<HookUseContext/>}></Route>
            <Route path='hookUseRef' element={<HookUseRef/>}></Route>
            <Route path='hookUseReducer' element={<HookUseReducer/>}></Route>
            <Route path='hookUseCallback' element={<HookUseCallback/>}></Route>
            <Route path='hookUseMemo' element={<HookUseMemo/>}></Route>
            <Route path='customHook' element={<CustomHook/>}></Route>

            <Route path='parentChild' element={<ParentChild/>}></Route>
            <Route path='parentToChild' element={<ParentToChild/>}></Route>
            
            <Route path='childToParent' element={<ChildToParent/>}></Route>
            <Route path='childParentComm' element={<ChildParentComm/>}></Route>
            
            <Route path='*' element={<Navigate replace to="/"/>}></Route>
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
