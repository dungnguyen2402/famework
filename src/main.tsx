import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import CounterProvider from "./Context/CounterContext.tsx";
// import ProductProvider from "./Context/ProductContext.tsx";
import { Provider } from 'react-redux'
import store from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // <ProductProvider>
    //     <CounterProvider>
    //         <App />
    //     </CounterProvider>
    // </ProductProvider>
    <Provider store={store}>
        <App />
    </Provider>
);
