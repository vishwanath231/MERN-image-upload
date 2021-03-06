import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const useForm = (validate) => {

    const [error, setError] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [values, setValues] = useState({
        username: '',
        photo: ''
    })


    const handleClick = () => {
        document.getElementById('image').click();
    }

    const handleImage = (e) => {
        if (e.target.files[0]) {
            const reader = new FileReader();

            reader.addEventListener("load", (e) => {
                document.getElementById("placeholder").setAttribute('src', e.target.result)
            })

            reader.readAsDataURL(e.target.files[0]);
        };

        setValues({
            ...values,
            photo: e.target.files[0]
        })
    }


    const handleChange = (e) => {
        
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }
    
    
    
    const histroy = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setError(validate(values));
        setIsSubmitting(true)
        
        if (Object.keys(error).length === 0 && isSubmitting) {
            
            const formData = new FormData();
            
            formData.append('username', values.username);
            formData.append('photo', values.photo);
            
            axios.post('/api/v1/upload/new', formData)
            .then((res) => {
                histroy.push("/");
                // setValues({
                    //     username: "",
                //     photo: ""
                // }); 
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }


    return { handleChange, handleClick, handleImage, handleSubmit, values, error };
}

export default useForm;
