import React, { useContext } from 'react';
import { AuthContext } from './components/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

  const { createUser } = useContext(AuthContext)

  const handleSignUp = event => {
    event.preventDefault()

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then(result => {
        console.log(result.user)
        const createAt = result.user.metadata.creationTime;
        const newUser = { name, email, createAt }
        fetch('http://localhost:5000/movies', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.insertedId) {
              Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
            }
          })
      })
      .catch(error => {
        console.log('ERROR This Pages', error)
      })

  }
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/prhCgpN/75-750368-m.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <div className="card w-full max-w-full border border-spacing-3 shrink-0 shadow-2xl">
              <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">UserName</span>
                  </label>
                  <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;