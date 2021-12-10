import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "@clayui/core";
import spritemap from "./img/icons.svg";

ReactDOM.render(
  <Provider spritemap={spritemap}>
    <App />
  </Provider>,
  document.getElementById("root")
);
