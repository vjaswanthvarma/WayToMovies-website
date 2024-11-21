import React from "react";
import Routep from "./Routep";
import  {Provider} from "react-redux";
import AppStore from "./Store/AppStore";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/es/integration/react";
export default function App(){
    const persist=persistStore(AppStore)
    return(<>
   <Provider store={AppStore}>
    <PersistGate persistor={persist}>
    <Routep />
    </PersistGate>
    </Provider>
    </>)
}