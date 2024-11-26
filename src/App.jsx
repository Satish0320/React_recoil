import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { Counteratom, evenselector } from "./atoms/Count"
import './App.css';

function App() {
  
  return (
   <RecoilRoot>
   <Buttons />
   <Counter />
   <Iseven />
   </RecoilRoot>
  )
}

function Buttons(){

  const setcount = useSetRecoilState(Counteratom);
  return <>
  <button onClick={()=> setcount( c => ( c + 2))}>Increase</button> 
  <button onClick={()=> setcount( c => ( c - 1))}>Decrease</button> <br />
  
  </>
}

function Counter(){
  const count = useRecoilValue(Counteratom)
  return <>
  {count} <br />
  </>
}

function Iseven(){
  const even  = useRecoilValue(evenselector)
  return(
    <> <br />
    {even ? "is even" : "odd"}
    </>
  )
}


export default App

