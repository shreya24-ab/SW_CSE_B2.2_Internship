
import './App.css'
import ClickDemo from "./components/EventHandlerOne";
import FormDemo from "./components/EventHandlerTwo";

import ActionButtonDemo from "./components/EventHandlerThree";
import SimpleList from "./components/List&Keys";
import UserListHook from "./components/HookOne.jsx";
import ThemeProviderDemo from "./components/HookTwo.jsx";
function App() {
  return (
    <>
      <ClickDemo/>
      <FormDemo/>
      <ActionButtonDemo/>
      <SimpleList />
      <UserListHook/>
      <ThemeProviderDemo/>
      </>
  )
}

export default App