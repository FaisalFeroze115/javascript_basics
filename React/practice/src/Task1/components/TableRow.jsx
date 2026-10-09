import GoldenStar from "./GoldenStar";
import GrayStar from "./GrayStar";


export default function TableRow({task, handleOnClickEditTask, handleOnClickDeleteTask, handleIsFavoriteClick}) {
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            <td>
                <div className="cursor-pointer" onClick={() => handleIsFavoriteClick(task.id)}>
                    {
                        task.isFavorite ? <GoldenStar /> : <GrayStar />
                    }
                </div>
                
            </td>
            <td>{task.title}</td>
            <td>
            <div>
                {task.description}
            </div>
            </td>
            <td>
            <ul className="flex justify-center gap-1.5 flex-wrap">
                
                {
                    task.tags.map((tag, index) => {
                        const colors = [
                        "bg-red-500",
                        "bg-blue-500",
                        "bg-green-500",
                        "bg-yellow-500",
                        "bg-purple-500",
                        ];
                            return (
                                <li key={index}>
                                    <span
                                    className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6] ${colors[index % colors.length]}`}
                                    >
                                    {tag}
                                    </span>
                                </li>
                        );
                    })
                }
               
            </ul>
            </td>
            <td className="text-center">{task.priority}</td>
            <td>
            <div className="flex items-center justify-center space-x-3">
                <button className="text-red-500" onClick={() => handleOnClickDeleteTask(task.id)}>Delete</button>
                <button className="text-blue-500" onClick={() => handleOnClickEditTask(task.id)}>Edit</button>
            </div>
            </td>
        </tr>
  );
}