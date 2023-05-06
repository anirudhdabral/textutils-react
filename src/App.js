import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./components/About";

function App() {
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.body.style.backgroundColor = '#06456b';
      showAlert("Dark mode has been enabled", "success")
      // document.body.style.color
    }
    else {
      setTheme('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" theme={theme} toggleTheme={toggleTheme} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" theme={theme} />

      {/* commented below code as router does not work with github pages properly */}
      {/* <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" theme={theme} toggleTheme={toggleTheme} />
        <Alert alert={alert} />
        <Routes>
          <Route index exact path='/' element={
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" theme={theme} />
          } />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
