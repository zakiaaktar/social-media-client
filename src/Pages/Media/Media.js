import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MediaRow from './MediaRow';

const Media = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState({});



    useEffect(() => {
        fetch(`https://social-media-server-sage.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])


    

    return (
        <div className='h-screen'>
            <h2>Post Details</h2>
            {
                orders.map(order => <MediaRow
                key={order._id}
                order={order}
                ></MediaRow>)
            }
        </div>
    );
};

export default Media;