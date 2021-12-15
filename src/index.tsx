import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "@clayui/core";
import spritemap from "./img/icons.svg";
import { RepositoryProvider } from "../src/contexts/repositories";

ReactDOM.render(
  <RepositoryProvider>
    <Provider spritemap={spritemap}>
      <App />
    </Provider>
  </RepositoryProvider>,
  document.getElementById("root")
);
