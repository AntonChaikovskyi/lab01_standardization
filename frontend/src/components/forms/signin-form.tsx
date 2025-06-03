import Input from "@/components/common/input.tsx";

const SignInForm = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-4'>
            <form className='flex flex-col w-full gap-3'>
                <Input placeholder='Enter username' type='text' label='Username' />
                <Input placeholder='Enter email address' type='email' label='Email address' />
                <Input placeholder='Enter your password' type='password' label='Password' />
                <button
                    className="cursor-pointer active:translate-y-[2px] font-[Bicyclette] w-full text-lg py-4 rounded-full shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)]  bg-[#0070f3]  text-white font-light transition duration-200 ease-linear">
                    <div className='flex items-center justify-center w-full'>
                        Login to account
                    </div>
                </button>
            </form>
        </div>
    );
};

export default SignInForm;