import { decrement, increment } from "@features/count/count.slice";
import { useDispatch, useSelector } from "react-redux";

import { AutoComplete } from 'primereact/autocomplete';
import { Button } from "primereact/button";
import { RootState } from "./store";

function App() {
  const value = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4">
      <p>{value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <Button className="p-[10px]" tooltip="Confirm to proceed" tooltipOptions={{ showDelay: 1000, hideDelay: 300 }} label="Save" />
      <AutoComplete />
      <h1 className="text-3xl bg-red-700 font-bold underline">
        React 19 with Tailwind CSS v4
      </h1>
    </div>
  );
}

export default App;
