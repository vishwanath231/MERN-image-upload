import React from 'react';
import './Upload.css';
import useForm from './useForm';
import validate from './validateInfo';
import Placeholder from './Placeholder.png';
 
const Upload = () => {

    const { handleChange, handleClick, handleImage, handleSubmit, values, error } = useForm(validate);


    return (
        <>
            <div className="container">
                <div className="box">
                    <p className="title">MERN</p>  
                    <form onSubmit={handleSubmit} className="form">
                        <div className="image__container">
                            <img 
                                src={Placeholder} 
                                id="placeholder" 
                                alt="placeholder" 
                                width="200px" 
                                onClick={handleClick}
                            />
                            <label htmlFor="image">Upload Image</label>
                            <input 
                                type="file" 
                                name="photo" 
                                id="image" 
                                accept=".png, .jpg, .jpeg"
                                style={{display: "none"}} 
                                onChange={e => handleImage(e)}
                            />
                            { error.photo && <p>{error.photo}</p> }
                        </div>
                        <div className="form__div">
                            <label htmlFor="username">Author</label>
                            <input 
                                type="text" 
                                id="username"
                                name="username" 
                                value={values.username}
                                onChange={handleChange}
                                placeholder="Will Smith" 
                            />
                            { error.username && <p>{error.username}</p> }
                        </div>
                        <button type="submit">submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Upload;