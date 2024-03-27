import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headers from './components/Pages/Header.jsx';
import HomePage from './components/HomePage.jsx';
import Navbar from './components/Navbar.jsx';
import Login from './components/Pages/Auth/Login.jsx';
import Dashboard from './components/Pages/Dashboard.jsx';
import Register from './components/Pages/Auth/Register.jsx';
import NutritionTracking from './components/Pages/NutritionTracking.jsx';
import ProtectedRoute from './components/Routes/ProtectedRoute.jsx';
import Footer from "./components/Footer.jsx";
import ContactUS from './components/Pages/Contact.jsx';
import About from './components/Pages/About.jsx';
import Settings from "./components/Pages/Settings.jsx";
import WorkoutPlan from "./components/Pages/WorkoutPlan.jsx";
import GoalSetting from "./components/Pages/GoalSetting.jsx";

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        
        

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="headers" element={<Headers />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="goalsetting" element={<GoalSetting />} />
          <Route path="/register" element={<Register />} />
         <Route path="/nutrition"  element= {<NutritionTracking />} />
          {/* <Route path="/nutrition" element={<NutritionTracking />} /> */}
          <Route path="/contacts" element={<ContactUS />} />
          <Route path="/about" element={<About />} />
          <Route path="/workoutplan" element={<WorkoutPlan />} />
          
          <Route path="/dashboard" element={<ProtectedRoute Component={Dashboard} />} />
          <Route path="/settings"  element= {<Settings />} />
        </Routes>
        
        <Footer />
      </Router>
    </>
  )
}
export default App;