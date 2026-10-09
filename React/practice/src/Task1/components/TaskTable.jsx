import TableRow from "./TableRow"

export default function TaskTable({taskList, handleOnClickEditTask, handleOnClickDeleteTask, handleIsFavoriteClick}) {
  return (
    
        taskList.length > 0 ? (
            <table className="table-fixed overflow-auto xl:w-full">
                <thead>
                <tr>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
                </tr>
                </thead>
                <tbody>
                    {
                        taskList.map((task) => (
                            <TableRow key={task.id} task={task} handleOnClickEditTask={handleOnClickEditTask} 
                                handleOnClickDeleteTask={handleOnClickDeleteTask} handleIsFavoriteClick={handleIsFavoriteClick}/>
                        ))
                    }
                </tbody>
            </table>
        ) : (
            <div className="flex flex-col items-center justify-center py-20">
                <p className="text-center text-lg font-semibold text-[#A1A1AA]">No tasks available. Please add a task.</p>
            </div>
        )
    
   
  );
}