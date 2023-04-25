import "./App.css";
import SignUpPage from "./Components/SignUpPage";
import LoginPage from "./Components/LoginPage";
import AfterLogin from "./Components/AfterLogin";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import FirstPageDetails from "./Components/FirstPage";
import CompleteProfile from "./Components/CompleteProfile";
import VerificationPage from "./Components/VerificationPage";

function App() {
  return (
    <Router>
      <FirstPageDetails />
      <Switch>
        <Route exact path="/SignupPage">
          <SignUpPage />
        </Route>
        <Route exact path="/LoginPage">
          <LoginPage />
        </Route>
        <Route exact path="/WelcomePage">
          <AfterLogin />
        </Route>
        <Route exact path="/completeProfile">
          <CompleteProfile />
        </Route>
        <Route exact path="/">
          <Redirect to={"/LoginPage"} />
        </Route>
        <Route exact path="/verify-email">
          <VerificationPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
