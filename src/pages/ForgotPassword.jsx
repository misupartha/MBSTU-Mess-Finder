import { useState } from 'react';
import ArrowRightIcon from '../assets/svg/keyboardArrowRightIcon.svg'; // Change import here
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const onChange = (e) => {
        setEmail(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            toast.success('Check your Email for Password Reset');
        } catch (error) {
            toast.error('Could not send Reset Email');
        }
    };

    return (
        <div className='pageContainer'>
            <header>
                <p className="pageHeader">
                    Forgot Password
                </p>
            </header>
            <main>
                <form onSubmit={onSubmit}>
                    <input type="email" className="emailInput" placeholder='Email' id='email' onChange={onChange} value={email} />
                    <Link className='forgotPasswordLink' to='/sign-in'>Sign In</Link>
                    <div className="signInBar">
                        <div className="signInText">Send Reset Link</div>
                        <button type="submit" className='signInButton'> <img src={ArrowRightIcon} alt="Arrow Right" fill='#ffffff' width='34px' height='34px' /></button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default ForgotPassword;
