import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";


const SignUp = () => {
    const { signUp, updateUser, error, setError } = useContext(AuthContext);

    const handleSignUp = event => {
        // stop default reload
        event.preventDefault();
        setError("")
        // get input field data
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const newUser = { email, password, }
        console.log(newUser, confirm)

        // password validation
        setError("")
        if (!(/(?=.*?[A-Z])/).test(password)) {
            setError("At least one upper case English letter")
            return
        }
        else if (!(/(?=.*?[a-z])/).test(password)) {
            setError("At least one lower case English letter,")
            return
        }
        else if (!(/(?=.*?[0-9])/).test(password)) {
            setError("At least one digit")
            return
        }
        else if (!(/(?=.*?[#?!@$%^&*-])/).test(password)) {
            setError("At least one special character")
            return
        }
        else if (!(/.{8,}/).test(password)) {
            setError("Minimum eight in length")
            return
        }

        else if (password !== confirm) {
            return setError('Your password does not match')
        }
        else {
            signUp(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user)
                    alert("User created successfully")
                    updateUser(name, photoURL)
                        .then(result => {
                            console.log(result.user)
                        })
                        .catch(error => { console.error(error) })
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
                    <h1 className="text-2xl font-bold">SignUP TravelGuru!</h1>
                    <p className="py-3">
                        You have an account in TravelGuru? Please Login with your correct Email & Password.
                    </p>
                </div>
                <div className="rounded-md bg-base-100 w-full max-w-sm shadow-xl">
                    <div className="card-body">
                        <form onSubmit={handleSignUp}>

                            {/* Name field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Full Name" className="input input-bordered" required />
                            </div>
                            {/* Photo url field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name="photoURL" placeholder="Your Photo URL" className="input input-bordered" required />
                            </div>
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
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirm" placeholder="Confirm Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success">Sign UP</button>
                            </div>
                            <label className="label">
                                <p className="label-text-alt text-red-700">{error}</p>
                            </label>
                        </form>
                        <div className="divider">OR</div>
                        <GoogleLogin />
                        <label className="label">
                            <p>Already you have an account? Please <Link className="label-text-alt link link-hover text-blue-700 font-bold" to='/signIn'>Sign In</Link></p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;