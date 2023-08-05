import './App.css';
import {Space} from 'antd';
//import Login from './components/login/login';
import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar';
import PageContent from './components/pageContent/pageContent';


function App() {
  return (
    <div className="App">
      <Header />
      <Space className='sidebar-dashboard'>
        <SideBar />
        <PageContent />
      </Space>
    </div>
  );
}

export default App;
