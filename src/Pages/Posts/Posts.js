import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
//import { BiLike, FcLike } from 'react-icons/fa';
//import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { AiFillLike } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';






const Posts = () => {
    const { user } = useContext(AuthContext);
    const [likeCount, setLikeCount] = useState(0);
    const [loveCount, setLoveCount] = useState(0);





    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        console.log(message);
    }



    return (
        <div className='mx auto h-screen'>
            <div className='flex'>
                {/* <div>
                    <img style={{ height: '40px' }} src={user.photoURL} alt="" />
                </div> */}
                <h2>{user?.displayName}</h2>

            </div>

            <form onSubmit={handlePlaceOrder}>
                <textarea name="message" className="textarea textarea-bordered h-28 w-1/2 mt-4 mx-auto" placeholder="Your Post"></textarea>
                <div className='w-1/2 mt-4 mx-auto bg-gray-200 p-1'>
                    {/* <FaBeer /> */}
                    <div className='flex justify-evenly'>
                        <button onClick={() => setLikeCount(likeCount + 1)}>
                            <AiFillLike size={32} color="sky"/>
                            <span>{likeCount}</span>
                        </button>
                        <button onClick={() => setLoveCount(loveCount + 1)}>
                            <FiHeart size={32} color="red"/>
                            <span>{loveCount}</span>
                        </button>



                    </div>
                </div>
                <div className='text-center mt-6'>
                    <input className='btn bg-gradient-to-br from-blue-900 to-purple-500 rounded-none mt-3 w-1/2' type="submit" value="Post" />
                </div>
            </form>



        </div>
    );
};

export default Posts;