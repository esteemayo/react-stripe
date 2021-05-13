import Hero from './components/Hero';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import SubMenu from './components/SubMenu';

import './App.css';

function App() {
  return (
    <div>
      <NavBar/>
      <SideBar/>
      <Hero/>
      <SubMenu/>
    </div>
  );
}

export default App;
