// import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Watch from "./components/Watch/Watch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PreviewChannel from "./components/PreviewChannel/PreviewChannel";
import Login from "./components/Login/Login";
import { useAppContext } from "./context/AppContext";
import SelectVideo from "./components/UploadVideo/SelectVideo";

const App = () => {
    const { appState, showUploadVideo, videos } = useAppContext();

    return (
        <>
            <div className="home">
                <Header />

                <Router>
                    <Routes>
                        {videos.map((item) => (
                            <Route
                                // path={`/watch/${item.id}`}
                                path="/watch"
                                element={<Watch video={item} />}
                                // key={item.id}
                            />
                        ))}

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
                                    {showUploadVideo && <SelectVideo />}
                                </div>
                            }
                        />
                        <Route path="/login" element={<Login />} />
                        {/* {appState === "login" && <Login />} */}
                    </Routes>
                </Router>
            </div>
        </>
    );
};

export default App;
