import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
// import Conversation from './components/Conversation';
import FAQ from './pages/FAQ';
import Error from './pages/Error';
import Landing from './pages/Landing';

function App() {
    return (
        <Routes>
            <Route index element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="faq" element={<FAQ />} />
            {/* <Route path="conversation" element={<Conversation numTokens={10} />} /> */}
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default App;
