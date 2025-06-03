import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {useState} from "react";
import SignInForm from "@/components/forms/signin-form.tsx";
import SignupForm from "@/components/forms/signup-form.tsx";
import {HeroArm} from "@/assets/icons/hero.tsx";

type AuthModalProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

const AuthModal = ({open, onOpenChange}: AuthModalProps) => {
    const [currentSection, setCurrentSection] = useState<'signIn' | 'signUp'>('signIn')

    const handlePress = () => {
        setCurrentSection(prevState => prevState === 'signUp' ? 'signIn' : 'signUp')
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <h1 className='text-[var(--w3m-accent)] text-9xl font-[UniqueFont]'>{currentSection === 'signUp' ? 'Create account' : 'Login'}</h1>
                {currentSection === 'signIn' && <SignInForm/>}
                {currentSection === 'signUp' && <SignupForm/>}
                <div className='flex gap-1 py-2 '>
                    <p className='font-[Bicyclette] text-white'>{currentSection === 'signUp' ? 'Already have account?' : "Haven't account?"}</p>
                    <p onClick={handlePress}
                       className='font-[Bicyclette] text-[var(--w3m-accent)] cursor-pointer'>{currentSection === 'signUp' ? 'Login to account' : "Create account"}</p>
                </div>

            </DialogContent>
        </Dialog>
    );
};

export default AuthModal;