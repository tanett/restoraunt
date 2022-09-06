

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Action from "./Components/Action";
import Pizza from "./Components/Pizza";
import Kontact from "./Components/Kontact";
import Test from "./Test/Test";


function App() {
  return (
    <div>

   <BrowserRouter>
       <Routes>
           <Route path="/"        element={<Test/>}/>
           <Route path="/action"  element={<Action/>}/>
           <Route path="/pizza"   element={<Pizza/>}/>
           <Route path="/kontact" element={<Kontact/>}/>
       </Routes>
   </BrowserRouter>


    </div>
  );
}

export default App;
