import Nav from "./components/Nav"
import HeroSection from "./components/HeroSection"
import Footer from "./components/Footer"
import Search from "./components/Search"
import CardHeader from "./components/CardHeader"
import TaskTable from "./components/TaskTable"
import Modal from "./components/Modal"
import "./Task1.css"

import {useState} from "react"

function Task1() {

  let tasks = [
    {
      id: 1,
      title: "Learn React",
      description: "Learn React from scratch and build amazing web applications.",
      tags: ["React", "JavaScript", "Frontend"],
      priority: "High",
      isFavorite: true
    },
    {
      id: 2,
      title: "Learn Tailwind CSS",
      description: "Learn Tailwind CSS to style your web applications easily.",
      tags: ["Tailwind CSS", "CSS", "Frontend"],
      priority: "Medium",
      isFavorite: false
    },
    {
      id: 3,
      title: "Build a Portfolio",
      description: "Build a personal portfolio to showcase your projects and skills.",
      tags: ["Portfolio", "Web Development", "Frontend"],
      priority: "Low",
      isFavorite: false
    }
  ] 

  const [taskList, setTaskList] = useState(tasks)
  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false)
  const [editTaskModalOpen, setEditTaskModalOpen] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState({})


  const handleOnClickAddTask = () => {
    setAddTaskModalOpen(true)
  }

  const handleOnClickEditTask = (taskId) => {
    console.log("Edit Task Clicked", taskId)
    let task = taskList.find(task => task.id === taskId)
     console.log("task", task)
    setTaskToEdit(task)
    setEditTaskModalOpen(true)
  }

  const editTask = (updatedTask) => {
    let updatedTaskList = taskList.map(task => {
      if(task.id === updatedTask.id) {
        return updatedTask
      }
      return task
    })
    setTaskList(updatedTaskList)
    handleCloseModal()  

  }

  const handleCloseModal = () => {
    setAddTaskModalOpen(false)
    setEditTaskModalOpen(false)
  }

  const createTask = (newTask) => {
    let tags = newTask.tags.split(",").map(tag => tag.trim())
    newTask.id = taskList.length + 1
    newTask.isFavorite = false
    newTask.tags = tags
    console.log("New Task Created", newTask)
    setTaskList([...taskList, newTask])
    handleCloseModal()
  }

  const deleteAllTasks = () => {
    setTaskList([])
  }

  const handleOnClickDeleteTask = (taskId) => { 
    setTaskList(taskList.filter(task => task.id !== taskId))
  }

  const handleIsFavoriteClick = (taskId) => {
    let updatedTaskList = taskList.map(task => {
      if(task.id === taskId) {
        return {...task, isFavorite: !task.isFavorite}
      }
      return task
    })
    setTaskList(updatedTaskList)
  }

  const handleSearch = (searchTerm) => {
    console.log("Search Term", searchTerm)
    if(searchTerm === "") {setTaskList(tasks); return}
    let filteredTasks = taskList.filter(task => {
      return task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
             task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
             task.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    })
    console.log("Filtered Tasks", filteredTasks)
    setTaskList(filteredTasks)

  }


  return (
      <div className="bg-[#191D26] font-[Inter] text-white relative">
       
        <Nav />

        <HeroSection /> 
    
        <section className="mb-20" id="tasks">
          <div className="container">
            <div className="p-2 flex justify-end">
              <Search handleSearch={handleSearch} />
            </div>

            <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
              <div className="mb-14 items-center justify-between sm:flex">
                <CardHeader handleOnClickAddTask={handleOnClickAddTask} deleteAllTasks={deleteAllTasks}/>
              </div>
              <div className="overflow-auto">
                <TaskTable taskList={taskList} handleOnClickEditTask={handleOnClickEditTask} handleOnClickDeleteTask={handleOnClickDeleteTask} handleIsFavoriteClick={handleIsFavoriteClick}/>
              </div>
            </div>

          </div>
        </section>

        {
          addTaskModalOpen && <Modal role="add" handleCloseModal={handleCloseModal} createTask={createTask} />
        }

        {
          editTaskModalOpen && <Modal role="edit" handleCloseModal={handleCloseModal} editTask={editTask} taskToEdit={taskToEdit}/>
        }

        <Footer />
      </div>

  )
}

export default Task1
