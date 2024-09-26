//import logo from './logo.svg';
import './App.css';
import Landing from './Pages/landing'
import Info from './Pages/info';
import Form from './Pages/form';
import Headshot from './Pages/headshot';
import WaistUp from './Pages/waistUp';
import FullBody from './Pages/fullBody';
import Illustration from './Pages/illustration';
import ItemList from './Pages/itemList';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faPixiv } from '@fortawesome/free-solid-svg-icons';

// library.add(fab, faPixiv);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/itemList" element={<ItemList />}></Route>
            <Route path="/info" element={<Info />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/headshot" element={<Headshot />}></Route>
            <Route path="/waistUp" element={<WaistUp />}></Route>
            <Route path="/fullBody" element={<FullBody />}></Route>
            <Route path="/illustration" element={<Illustration />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
