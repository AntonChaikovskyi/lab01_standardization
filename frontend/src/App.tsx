import {Routes, Route} from 'react-router-dom';
import {Home, Profile, Rankings, Nft} from "./pages";
import Header from "./components/layout/header.tsx";
import Footer from "./components/layout/footer.tsx";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/nft" element={<Nft/>}/>
                <Route path="/rankings" element={<Rankings/>}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App
