import Home from './Components/Pages/Home/NewHome';
import { Routes, Route, Navigate } from 'react-router-dom';
import Course from '../src/Components/Pages/Course/Course';
import Login from '../src/Components/Pages/Auth/NewLogin';
import { useAuthContext } from './Hooks/useAuthContext';
import Quiz from './Components/Pages/Quiz/Quiz';
import Register from './Components/Pages/Auth/NewRegister';
import Attestation from './Components/Pages/Attestation/Attestation';
import QuizError from './Components/Pages/Quiz/QuizError';
import Course2 from './Components/Pages/Course/CoursePartTwo';
import PreQuiz from './Components/Pages/Quiz/PreQuiz';

function App() {
  const { user } = useAuthContext();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/course" />}
        />
        <Route
          path="/course"
          element={user ? <Course /> : <Navigate to="/register" />}
        />
        <Route
          path="/course2"
          element={user ? <Course2 /> : <Navigate to="/register" />}
        />
        <Route
          path="/quiz"
          element={user ? <Quiz /> : <Navigate to="/register" />}
        />
        <Route
          path="/preQuiz"
          element={user ? <PreQuiz /> : <Navigate to="/register" />}
        />
        <Route
          path="/attestation"
          element={user ? <Attestation /> : <Navigate to="/register" />}
        />
        <Route path="/quizError" element={<QuizError />} />
      </Routes>
    </div>
  );
}

export default App;
