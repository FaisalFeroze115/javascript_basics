import GitHubProfile from "./UseDebugValue/GitHubProfile";
import IdForm from "./UseId/IdForm";
import FindUser from "./UseTransition/FindUser";
import {users} from "./UseTransition/fakeuser";
import ListAnimal from "./UseDeferred/ListAnimal";
import Boomer from "./UseInsertionEffect/Boomer";
import ParentChild from "./UseImperativeHandle/ParentChild";
import LayoutTest from "./UseLayoutEffect/LayoutTest";

const UnUsedHooks = () => {
  return (
    <div>
        {/* <h1>UnUsedHooks</h1>

        <ul>
            <li>useDebugValue</li>
            <li>useId</li>
            <li>useTransition</li>
            <li>useDeferredValue</li>
            <li>useInsertionEffect</li>
            <li>useLayoutEffect</li>
            <li>useImperativeHandle</li>
        </ul>

        <GitHubProfile />

        <hr />

        <IdForm /> */}

        {/* <FindUser users={users} /> */}

        {/* <ListAnimal /> */}

        <Boomer />

        <ParentChild />
        <LayoutTest />
    </div>
  )
}

export default UnUsedHooks