import { Provider } from "react-redux";
import UserSliceKonsumer from "./features/users/UserSliceKonsumer";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <UserSliceKonsumer />
    </Provider>
  );
}
