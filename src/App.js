import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Problems from "./Components/Problems/Problems";
import CodeEditor from "./Components/CodeEditor/CodeEditor";
import Login from "./Components/Login/Login";
import { Provider } from "react-redux";
import {store} from "./store/store"
import { Persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

import Homewithauth from "./Components/Home/Homewithauth";
import EditProfile from "./Components/EditProfile/EditProfile";
import AddQuestions from "./Components/AddQuestions/AddQuestions";
import AddTestcase from "./Components/AddTestCases/AddTestcase";

function App() {
    
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={Persistor}> */}

    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            
            <div className="bg-primary  w-full " >
              <div className="px-6 flex justify-center items-center">
                <div className="max-w-[1480px] w-full">
                  <Header />
                </div>
              </div>
              <div className="px-6 flex justify-center items-center">
                <div className="max-w-[1480px] w-full">
                  <Home/>
                </div>
              </div>
            </div>
            
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/problems"
          element={
            <div className="bg-primary  w-full overflow-hidden" style={{height:"100%"}}>
              <div className="px-6 flex justify-center items-center">
                <div className="max-w-[1480px] w-full">
                  <Header />
                  <Problems />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/code-editor"
          element={
            <div className="bg-primary  w-full overflow-hidden" style={{height:"100%"}}>
              <div className="px-6 flex justify-center items-center">
                <div className="max-w-[1480px] w-full">
                  <Header />
                  <CodeEditor/>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/login"
          element={
            <div className="bg-primary  w-full overflow-hidden" style={{height:"100%"}}>
              <div className="px-6 flex justify-center items-center">
                <div className="max-w-[1480px] w-full">
                  <Header/>
                  <Login/>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/edit-profile"
          element={
            <div className="bg-primary  w-full overflow-hidden" style={{height:"100%"}}>
              <div className="px-6 flex justify-center items-center">
                <div className="max-w-[1480px] w-full">
                  <Header/>
                  
                </div>
              </div>
              <div className="px-6 flex justify-center items-center">
                <div className="max-w-[1480px] w-full">
                  <EditProfile/>
                  
                </div>
              </div>
            </div>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/add-question"
          element={
            <div className="bg-primary  w-full overflow-hidden" style={{height:"100%"}}>
              <div className="px-6 flex justify-center items-center">
                <div className="max-w-[1480px] w-full">
                  <Header/>
                  
                </div>
              </div>
              <div className="px-6 flex justify-center items-center">
                <div className="max-w-[1480px] w-full">
                  <AddQuestions/>
                  
                </div>
              </div>
            </div>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/add-testcase"
          element={
            <div className="bg-primary  w-full overflow-hidden" style={{height:"100%"}}>
              <div className="px-6 flex justify-center items-center">
                <div className="max-w-[1480px] w-full">
                  <Header/>
                  
                </div>
              </div>
              <div className="px-6 flex justify-center items-center">
                <div className="max-w-[1480px] w-full">
                  <AddTestcase/>
                  
                </div>
              </div>
            </div>
          }
        />
      </Routes>
     
    </BrowserRouter>
    {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
