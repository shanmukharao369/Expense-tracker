import "./App.css";
import SignUpPage from "./Components/SignUpPage";
import LoginPage from "./Components/LoginPage";
import AfterLogin from "./Components/AfterLogin";
import {BrowserRouter as Router, Route , Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignUpPage />
        </Route>
        <Route exact path="/LoginPage">
          <LoginPage />
        </Route>
        <Route exact path="/WelcomePage">
          <AfterLogin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
