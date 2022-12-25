import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { prayers } from "./services/prayers";
import Main from "./components/main";
function App() {
  return <Main prayers={prayers} />;
}

export default App;
