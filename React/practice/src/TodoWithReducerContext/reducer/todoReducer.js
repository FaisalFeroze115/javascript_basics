export function todoReducer(tasks, action){
    switch (action.type){
        case "added": {
            let newItem = {
                id: getNextId(tasks),
                task: action.text,
                isDone: false
            }

            let newTasks = [
                ...tasks,
                newItem
            ]
            return newTasks

        }
        case "changed":{
            let newTasks = tasks.map((item)=>{
                if(action.task.id === item.id){
                    return action.task
                }else{
                    return item
                }
            })
            return newTasks

        }
        case "deleted":{
            let newTasks = tasks.filter((task)=>{
                if(task.id !== action.id){
                    return task
                }
            })
            return newTasks

        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
    
}

function getNextId(task){
    return task[task.length -1].id + 1
}