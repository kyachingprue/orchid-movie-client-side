import React from 'react';

const SignIn = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/KrRbVN9/pngtree-beautiful-fairy-tale-natural-scenery-for-animation-background-picture-image-2422048.png)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="w-full flex justify-center text-neutral-content text-center">
          <div className="max-w-md">
            <div className="card w-full max-w-sm shrink-0 shadow-2xl border border-spacing-2">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <input type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;