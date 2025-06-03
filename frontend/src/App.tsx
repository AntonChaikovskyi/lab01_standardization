import {Routes, Route} from 'react-router-dom';
import {Home, Profile, Market, Nft} from "./pages";
import Header from "./components/layout/header.tsx";
import Footer from "./components/layout/footer.tsx";
import {useState} from "react";
import AuthModal from "@/components/other/auth-modal.tsx";


function App() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
            <Header onOpenDialog={() => setIsDialogOpen(true)}/>
            <AuthModal open={isDialogOpen} onOpenChange={setIsDialogOpen} />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/nft" element={<Nft/>}/>
                <Route path="/rankings" element={<Market/>}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App
