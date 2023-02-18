import React from 'react';




const About = () => {
    const handleEdit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }



    return (
        <>
            <div className="btn bg-gradient-to-br from-blue-900 to-purple-500 rounded-none">
                <button>Edit Profile</button>
            </div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">About Section!!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleEdit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">University</span>
                                    </label>
                                    <input type="name" name="name" placeholder="University" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="name" name="name" placeholder="Address" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-gradient-to-br from-blue-900 to-purple-500 rounded-none" type="submit" value="Submit" />
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default About;