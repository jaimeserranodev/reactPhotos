import SearchAppBar from './components/Header/Header';
import LabelBottomNavigation from './components/Footer/Footer';
import BasicSelect from './components/SortBy/SortBy';
import Home from './components/Home/Home';
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import { store } from './store/store';
import { Provider } from 'react-redux';
import FavoriteList from './components/favoriteList/favoriteList';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter basename="/reactPhotos">
      <Provider store={store}>
        <div className="App">
          <SearchAppBar />
          
          <BasicSelect />
            <div>
              <Routes>
                  <Route path="/reactPhotos" element={<Home/>} />
                  <Route path="Home" element={<Home />} />
                  <Route path="/favoriteList" element={<FavoriteList />} />
              </Routes>
            </div>
          <LabelBottomNavigation />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;