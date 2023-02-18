import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const EditModal = () => {
    const { user } = useContext(AuthContext);



    const handleEditing = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const university = form.university.value;
        const address = form.address.value;


        const editing = {
            name,
            email,
            university,
            address

        }

    }



    return (
        <>
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="text-lg font-bold">Congratulations random Internet user!</h3> */}
                    <form onSubmit={handleEditing} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered" />

                       
                       
                        <input name="university" type="text" placeholder="University" className="input w-full input-bordered" />
                        <input name="address" type="text" placeholder="Adddress" className="input w-full input-bordered" />

                        <br />
                        <input className='w-full max-w-xs btn btn-primary' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditModal;