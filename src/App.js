import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './pages/contact_us/ContactUs';
import Review from './pages/review_message/Review';
import News from './pages/news/News';

import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './redux/Store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/review-message" element={<Review />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
