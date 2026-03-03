// TODO: Import necessary components from react-router-dom
// You need: BrowserRouter, Routes, Route
import{ BrowserRouter, Routes, Route } from 'react-router-dom';

// TODO: Import your components
// You need: Navbar, Home, Tasks, TaskDetail
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import TaskDetail from './pages/TaskDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
//     // TODO: Wrap everything in BrowserRouter
//     <div className="min-h-screen bg-gray-50">
//       {/* TODO: Add Navbar component here */}
      
//       {/* TODO: Create Routes wrapper */}
//         {/* TODO: Add Route for Home page - path should be "/" */}
        
//         {/* TODO: Add Route for Tasks page - path should be "/tasks" */}
        
//         {/* TODO: Add Route for TaskDetail page - path should be "/tasks/:id" */}
//         {/* Note: :id is a URL parameter that will be dynamic */}
//       {/* TODO: Close Routes */}
//     </div>
//     // TODO: Close BrowserRouter
//   );
// }

// export default App;