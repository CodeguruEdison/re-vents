import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";
import { getAllEvents } from "./features/event/eventActions";
import ReduxToastr from "react-redux-toastr";
const store = configureStore();
store.dispatch<any>(getAllEvents());
//store.dispatch(Dispatch<any>(loadEvents()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="bottom-right"
        //getState={(state) => state.toastr} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
