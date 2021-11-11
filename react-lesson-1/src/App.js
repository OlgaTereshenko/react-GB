import { ChatHomework } from "./components/index";
import { Provider } from "react-redux";
import {store} from "./store/index";
 
const App=()=> {
  return (
  <Provider store={store}> 
    <ChatHomework/>
  </Provider>
  )
}

export default App;