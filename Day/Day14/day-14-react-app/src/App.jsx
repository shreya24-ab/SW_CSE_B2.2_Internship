
import './App.css'
import ClickDemo from "./components/EventHandlerOne";
import FormDemo from "./components/EventHandlerTwo";

import ActionButtonDemo from "./components/EventHandlerThree";
import SimpleList from "./components/List&Keys";
import UserListHook from "./components/HookOne.jsx";
import ThemeProviderDemo from "./components/HookTwo.jsx";
import SimpleNameForm from "./components/FormOne.jsx";
import SignupForm from "./components/FormTwo.jsx";
import ValidatedForm from "./components/FormThree.jsx";
import GitHubProfile from "./components/GitHubApi.jsx";
function App() {
  return (
    <>
      <ClickDemo/>
      <FormDemo/>
      <ActionButtonDemo/>
      <SimpleList />
      <UserListHook/>
      <ThemeProviderDemo/>
      <SimpleNameForm/>
      <SignupForm/>
      <ValidatedForm/>
      <GitHubProfile/>
      </>
  )
}

export default App