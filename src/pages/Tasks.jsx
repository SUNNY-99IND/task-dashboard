// Import hooks
import { useState, useEffect } from "react";

// Import Link
import { Link } from "react-router-dom";

// Import TaskCard
import TaskCard from "../components/TaskCard";

export default function Tasks() {
  // State for tasks
  const [tasks, setTasks] = useState([]);

  // State for loading
  const [loading, setLoading] = useState(true);

  // Fetch tasks on mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Your Tasks
      </h1>

      {loading ? (
        <p className="text-gray-500">Loading tasks...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <Link key={task.id} to={`/tasks/${task.id}`}>
              <TaskCard task={task} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// // TODO: Import useState and useEffect from 'react'

// // TODO: Import Link from 'react-router-dom'

// // TODO: Import TaskCard component from '../components/TaskCard'


// export default function Tasks() {
//   // TODO: Create state for 'tasks' - initial value should be empty array []
  
//   // TODO: Create state for 'loading' - initial value should be true
  

//   // TODO: Create useEffect hook
//   useEffect(() => {
//     // TODO: Fetch data from 'https://jsonplaceholder.typicode.com/todos?_limit=10'
//     // This API returns an array of 10 task objects
//     // Steps:
//     // 1. Use fetch() to get data
//     // 2. Convert response to JSON
//     // 3. Update tasks state with the data
//     // 4. Set loading to false
//     // 5. Add error handling with .catch()
    
//   }, []);

//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Tasks</h1>
      
//       {/* TODO: Add conditional rendering */}
//       {/* If loading, show: <p className="text-gray-500">Loading tasks...</p> */}
//       {/* If not loading, show the grid below */}
      
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {/* TODO: Map over tasks array */}
//           {/* For each task: */}
//           {/* 1. Wrap in a Link component with to={`/tasks/${task.id}`} */}
//           {/* 2. Don't forget to add key={task.id} to the Link */}
//           {/* 3. Inside Link, render <TaskCard task={task} /> */}
          
//         </div>
      
//     </div>
//   );
// }