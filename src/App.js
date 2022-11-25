// import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Watch from "./components/Watch/Watch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className="home">
            <Header />
            <Router>
                <Routes>
                    <Route path="/watch" element={<Watch />} />
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
                </Routes>
            </Router>
        </div>
    );
};

export default App;
