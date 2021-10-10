import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css';

const Card = () => {


    const [datas, setDatas] = useState([]);

    useEffect(() => {
        
        axios.get('/api/v1/upload')
        .then((res) => {
            setDatas(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
        
    },[])


    const handelRemove = (id) => {

        axios.delete(`/api/v1/upload/${id}`)
        .then(() => {
            setDatas(datas.filter((val) => {
                return val._id !== id
            }));
        })
        .catch((err) => {
            console.log(err);
        })
    }


    return (
        <>
            <div className="card__container">
                {
                    !datas.length ? (
                        <div className="loading">
                            <img src="image/spinner.gif" alt="" />
                        </div>
                    ) : (
                        <div className="card__box">
                            {
                                datas.map((val, index) => (
                                    <div className="card" key={index}>
                                        <img src={`image/upload/${val.photo}`} alt=""  />
                                        <p>{val.username}</p>
                                        <span onClick={(e) => handelRemove(val._id)} >Delete</span>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Card;
