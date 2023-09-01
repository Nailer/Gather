import { auth, googleProvider } from "../Config/FirebaseConfig"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import Head from './Head'
import "./order.css"
import Footer from './Footer'

export default function Order() {

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider );
        } catch (err) {
            console.error(err)
        }
    }


    const signIn = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err)
        }
    };

    const logOut = async () => {
        try{
            await signOut(auth);
        } catch (err) {
            console.error(err)
        }
    };

  return (
    <div>
        <Head />
        <div className="sign">
            <div className="now">
                <h2>Log In Now For Free</h2>
            </div>
            <form action="">
                <div className="email">
                    <div className="emailDiv">
                        <span>Email:</span>
                        <input type="email" placeholder='Enter your email' required />
                    </div>

                    <div className="emailDiv">
                        <span>Password:</span>
                        <input type="password" placeholder='Enter your password' required />
                    </div>

                    <div className="emailDivv">
                        <input type="submit" value="Log In" />
                    </div>

                    <div className="or">
                        <h3>OR</h3>
                    </div>

                    <div className="emailDivv">
                        <button onClick={signInWithGoogle}>Sign Up With Google</button>
                    </div>
                </div>
            </form>
        </div>
        <Footer />
    </div>
  )
}
