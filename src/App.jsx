import { useState } from "react";
import explorer from "./data/FolderData";
function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log(explorerData);
  return <> </>;
}

export default App;
