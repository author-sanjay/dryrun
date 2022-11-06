
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className="px-6 flex justify-center items-center">
        <div className='max-w-[1480px] w-full'>
        <Header/>
        
        </div>
      </div>
      <div className="px-6 flex justify-center items-center">
        <div className='max-w-[1480px] w-full'>
        <Home/>
        
        </div>
      </div>
      
    </div>
  );
}

export default App;
