import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const SignIn = () => {
    const { login } = useContext(AuthContext)

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            alert("your password are not match")
        } else {
            login(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user)
                    alert("user SignIn successfully")
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-col">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">SignIn TravelGuru!</h1>
                    <p className="py-3">
                        You have an account in TravelGuru? Please Login with your correct Email & Password.
                    </p>
                </div>
                <div className="rounded-md bg-base-100 w-full max-w-sm shadow-xl">
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            {/* Email field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            {/* Password field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                            </div>
                            {/* Confirm pass field*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="confirm" placeholder="Confirm Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success">Sign In</button>
                            </div>
                        </form>
                        <label className="label">

                            <p>Already you have an account? Please <Link className="label-text-alt link link-hover text-blue-700 font-bold" to='/signUp'>Sign Up</Link></p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;