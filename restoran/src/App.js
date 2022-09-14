

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Action from "./Components/Action";
import Pizza from "./Components/Pizza";
import Kontact from "./Components/Kontact";

import Login from "./Components/Avtorizacia/Login";
import Carzina from "./Components/Pizza/Carzina";


function App() {
  return (
    <div>

   <BrowserRouter>
       <Routes>
           <Route path="/"        element={<Pizza/>}/>
           <Route path="/login"   element={<Login/>}/>
           <Route path="/action"  element={<Action/>}/>
           <Route path="/kontact" element={<Kontact/>}/>
           <Route path="/carzina" element={<Carzina/>}/>
       </Routes>
   </BrowserRouter>


    </div>
  );
}

export default App;
