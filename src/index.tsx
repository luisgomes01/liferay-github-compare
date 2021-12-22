import ReactDOM from "react-dom";
import App from "./App";
import { ClayIconSpriteContext } from "@clayui/icon";
import spritemap from "./img/icons.svg";
import { RepositoryProvider } from "../src/contexts/repositories";

ReactDOM.render(
  <RepositoryProvider>
    <ClayIconSpriteContext.Provider value={spritemap}>
      <App />
    </ClayIconSpriteContext.Provider>
  </RepositoryProvider>,
  document.getElementById("root")
);
