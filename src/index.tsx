import ReactDOM from "react-dom";
import App from "./App";
import { ClayIconSpriteContext } from "@clayui/icon";
import spritemap from "./img/icons.svg";
import { RepositoryProvider } from "../src/contexts/repositories";
import { SortProvider } from "./contexts/sorts";

ReactDOM.render(
  <RepositoryProvider>
    <SortProvider>
      <ClayIconSpriteContext.Provider value={spritemap}>
        <App />
      </ClayIconSpriteContext.Provider>
    </SortProvider>
  </RepositoryProvider>,
  document.getElementById("root")
);
