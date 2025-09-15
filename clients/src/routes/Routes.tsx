import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';


const AppRoutes = () => {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<Register />} />
     </Routes>
    </Router>
  )
}

export default AppRoutes;
