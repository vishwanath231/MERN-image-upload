
const validateInfo = (values) => {

    let errors = {};

    if (!values.username) {
        errors.username = "Usename required."
    }

    if (!values.photo) {
        errors.photo = "Image required."
    }else if(!values.photo.name.match(/.(jpg|jpeg|png)$/i)) {
        errors.photo = "File type is not supported."
    }

    return errors;
}

export default validateInfo;
