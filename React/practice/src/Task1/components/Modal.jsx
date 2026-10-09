import { useState } from "react"

export default function Modal({ handleCloseModal, role, createTask, taskToEdit, editTask }) {
  
  const [formValue, setFormValue] = useState({
      title: "",
      description: "",
      tags: "",
      priority: "",
  });

  const formSubmitted = (e) => {
    e.preventDefault()
    if(role === "add") {   
        createTask(formValue)
    }else if(role === "edit") {
      console.log("taskToEdit", taskToEdit)
        for (const key in formValue) {
            if (formValue[key] === "") {
                formValue[key] = taskToEdit[key]
            }
        }
        formValue['id'] = taskToEdit.id
        formValue['isFavorite'] = taskToEdit.isFavorite
        editTask(formValue)

    }
   
  }


  return ( 
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <form
      className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
      onSubmit={(e) => {
         formSubmitted(e);
      }}
    >
      <h2
        className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]"
      >
        Add New Task
      </h2>


      <div className="space-y-9 text-white lg:space-y-10">

        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="title">Title</label>
          <input
            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
            type="text"
            name="title"
            id="title"
            required
            value={formValue.title || (role === "edit" ? taskToEdit?.title : "")}
            onChange={(e) => setFormValue({...formValue, title: e.target.value})}
          />
        </div>

        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
            type="text"
            name="description"
            id="description"
            required
            value={formValue.description || (role === "edit" ? taskToEdit?.description : "")}
            onChange={(e) => setFormValue({...formValue, description: e.target.value})}
          ></textarea>
        </div>

        <div
          className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20"
        >
    
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="tags">Tags</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="tags"
              id="tags"
              required
              value={formValue.tags || (role === "edit" ? taskToEdit?.tags.join(", ") : "")}    
              onChange={(e) => setFormValue({...formValue, tags: e.target.value})}
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="priority">Priority</label>
            <select
              className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
              name="priority"
              id="priority"
              required
                value={formValue.priority || (role === "edit" ? taskToEdit?.priority : "")}        
                onChange={(e) => setFormValue({...formValue, priority: e.target.value})}
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-center lg:mt-20">
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
        >
            {
                role === "add" ? "Create New Task" : "Update Task"
            }
          
        </button>

        <button
          className="rounded bg-red-600 px-4 ml-4 py-2 text-white transition-all hover:opacity-80"
          onClick={handleCloseModal}
        >
          Close
        </button>

      </div>
    </form>
    </div>
  )}        