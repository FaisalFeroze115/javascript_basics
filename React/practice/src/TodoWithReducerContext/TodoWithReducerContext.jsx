import './TodoWithReducerContext.css'
import Header from './components/Header'
import AddItem from "./components/AddItem"
import Lists from './components/Lists'
import TaskContextProvider from "./context/taskContext"


const TodoWithReducerContext = () => {
    
    return (
        <TaskContextProvider>
            <div className='todo_body'>
                <Header />
                <AddItem />
                <Lists/>
            </div>
        </TaskContextProvider>
    )
}

export default TodoWithReducerContext