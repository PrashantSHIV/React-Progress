import { useState } from "react"

export function ToDoApp(){
    
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('');

    function AddTask(e){
        e.preventDefault()
        if (task!= ''){
            let new_tasks = tasks.slice();
            new_tasks.unshift(task)
            setTasks(new_tasks)
            setTask('')
        }
    }
    function deleteTask(key){
        let change_tasks = tasks.slice()
        change_tasks.splice(key,1)
        setTasks(change_tasks)
    }
    function check(e){
        let span = e.target.parentNode;
        span.classList.toggle('select')
    }

    return <section className="text-white p-4 w-full" >
        <form>
        <h1 className="text-3xl font-black">To Do App</h1>
            <input value={task} onChange={(e)=> setTask(e.target.value)} className="py-3 px-4 w-100 rounded bg-zinc-700 text-xl mr-1 mt-4 outline-none" type="text" placeholder="Task" />
            <button className="py-3 px-4 text-xl rounded bg-emerald-500" onClick={(e)=> AddTask(e)}>Add</button>
        </form>
        <hr className="mt-4"/>
        <h1 className="text-2xl my-3">Tasks: </h1>
        <div className="flex gap-3 flex-wrap">
            {tasks.length > 0? tasks.map((task,id)=>
                    <div key={id} className="task text-xl flex gap-3 w-100 justify-between border-1 border-amber-300 rounded-md px-4 py-3 bg-zinc-800 items-center">                
                        <span><input onClick={(e)=> check(e)} type="checkbox" className="mr-4"/>{task}</span>
                        <button className="bg-red-500 px-3 rounded-md" onClick={()=> deleteTask(id)}>X</button>
                    </div>
                ): <h1>No task yet.</h1>
            }
        </div>
    </section>
}