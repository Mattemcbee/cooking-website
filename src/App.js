import { Routes, Route } from 'react-router-dom';
// import ContactPage from './pages/ContactPage';
// import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
// import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import './App.css';
import HomePage from './pages/HomePage';
import MealsDirectoryPage from './pages/MealsDirectory';
import MealsDetail from './features/meals/MealsDetails';
import MealDetailPage from './pages/MealDetailPage';
import AddRecipePage from './pages/AddRecipePage';


function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='addrecipe' element={<AddRecipePage />} />

                {/* <Route path='directory' element={<MealsDirectoryPage />} />  */}
                {/* <Route path='meal' element={<MealDetailPage />} /> */}
                <Route
                    path='/:mealId'
                    element={<MealDetailPage />}
                />
            </Routes>
            <Footer /> 
        </div>
    );
}

export default App;