import {Routes, Route} from 'react-router-dom';
import {Home, Profile, Market, Nft} from "./pages";
import Header from "./components/layout/header.tsx";
import Footer from "./components/layout/footer.tsx";
import {useState} from "react";
import AuthModal from "@/components/other/auth-modal.tsx";
import CookieConsent from "react-cookie-consent";


function App() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                declineButtonText="Refuse"
                cookieName="user_cookie_consent"
                enableDeclineButton
                containerClasses="font-[Bicyclette] bg-black rounded-[30px] p-6 mb-6 mx-4 max-w-3xl fixed bottom-4 z-50 shadow-lg"
                contentClasses="text-white text-base"
                buttonClasses="rounded-[20px] bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                expires={150}
            >
                This website uses cookies to enhance the user experience.
            </CookieConsent>
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
