// Import hooks
import { useState, useEffect } from "react";

// Import router utilities
import { useParams, Link } from "react-router-dom";

export default function TaskDetail() {
  // Get id from URL
  const { id } = useParams();

  // State for task
  const [task, setTask] = useState(null);

  // State for loading
  const [loading, setLoading] = useState(true);

  // Fetch task when id changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Task not found");
        }
        return res.json();
      })
      .then((data) => {
        setTask(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching task:", error);
        setTask(null);
        setLoading(false);
      });
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <p className="p-8 text-gray-500">
        Loading task details...
      </p>
    );
  }

  // Null check
  if (!task) {
    return (
      <p className="p-8 text-red-500">
        Task not found!
      </p>
    );
  }

  return (
    <div className="container mx-auto p-8">
      {/* Back Button */}
      <Link
        to="/tasks"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to Tasks
      </Link>

      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {task.title}
        </h1>

        <div className="space-y-3">
          <p className="text-gray-600">
            <strong>Task ID:</strong> {task.id}
          </p>

          <p className="text-gray-600">
            <strong>User ID:</strong> {task.userId}
          </p>

          <p className="text-gray-600">
            <strong>Status:</strong>{" "}
            <span
              className={
                task.completed
                  ? "text-green-600 font-semibold"
                  : "text-orange-600 font-semibold"
              }
            >
              {task.completed ? "Completed ✓" : "Pending"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

// // TODO: Import useState and useEffect from 'react'

// // TODO: Import useParams and Link from 'react-router-dom'


// export default function TaskDetail() {
//   // TODO: Get the 'id' from URL using useParams()
//   // const { id } = useParams();
  
  
//   // TODO: Create state for 'task' - initial value should be null
  
//   // TODO: Create state for 'loading' - initial value should be true
  

//   // TODO: Create useEffect hook
//   useEffect(() => {
//     // TODO: Fetch single task from API using the id
//     // URL: `https://jsonplaceholder.typicode.com/todos/${id}`
//     // Steps:
//     // 1. Fetch the URL with the id
//     // 2. Convert to JSON
//     // 3. Update task state
//     // 4. Set loading to false
//     // 5. Add error handling
    
//   }, [id]); // Re-run if id changes

//   // TODO: Add loading check
//   // If loading is true, return: <p className="p-8 text-gray-500">Loading task details...</p>
  

//   // TODO: Add null check
//   // If task is null, return: <p className="p-8 text-red-500">Task not found!</p>
  

//   return (
//     <div className="container mx-auto p-8">
//       {/* TODO: Add a back button using Link */}
//       {/* Link to="/tasks" with text "← Back to Tasks" */}
//       {/* className="text-blue-600 hover:underline mb-4 inline-block" */}
      
      
//       <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
//         {/* TODO: Display task.title in h1 */}
//         {/* className="text-2xl font-bold text-gray-800 mb-4" */}
        
        
//         <div className="space-y-3">
//           {/* TODO: Display task.id */}
//           {/* Format: <strong>Task ID:</strong> {task.id} */}
//           {/* Wrap in <p className="text-gray-600"> */}
          
          
//           {/* TODO: Display task.userId */}
//           {/* Format: <strong>User ID:</strong> {task.userId} */}
          
          
//           {/* TODO: Display task status with conditional styling */}
//           {/* Show "Completed ✓" in green if completed */}
//           {/* Show "Pending" in orange if not completed */}
//           <p className="text-gray-600">
//             <strong>Status:</strong>{' '}
//             {/* TODO: Add conditional span here */}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
