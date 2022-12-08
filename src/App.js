// import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Watch from "./components/Watch/Watch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PreviewChannel from "./components/PreviewChannel/PreviewChannel";
import Login from "./components/Login/Login";
import { useAppContext } from "./context/AppContext";

const App = () => {
    const { appState } = useAppContext();
    console.log(appState);

    return (
        <>
            {/* <div className="home"> */}
            <Header />

            <Router>
                <Routes>
                    <Route path="/watch" element={<Watch />} />
                    <Route
                        path="/PreviewChannel"
                        element={
                            <div className="app">
                                <Sidebar />
                                <PreviewChannel />
                            </div>
                        }
                    />

                    <Route
                        exact
                        path="/"
                        element={
                            <div className="app">
                                <Sidebar />
                                <Main />
                            </div>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    {/* {appState === "login" && <Login />} */}
                </Routes>
            </Router>
            {/* </div> */}
        </>
    );
};

export default App;
