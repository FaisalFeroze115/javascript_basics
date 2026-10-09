import Item from "./Item"

const Lists = ({tasks, onChange, onDelete}) => {
  return (
    <div>
        {
          tasks.map((task) => (
            <Item key={task.id} task={task} onChange={onChange} onDelete={onDelete}/>
          ))
        }
        
    </div>
  )
}

export default Lists