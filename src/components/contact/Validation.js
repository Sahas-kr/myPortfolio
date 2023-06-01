export default  function Validation(values){
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]$/;

    if(values.name === ''){
        errors.name = 'Please enter your name'
        
    }else{
        console.log(values.name);
    }

    if(values.email === ''){
        errors.email = 'Please enter your email id'
    }
    else if(!email_pattern.test(values.email)){
        errors.email = 'Enter valid email';
    }
    if(values.subject === ''){
        errors.subject = 'Please enter the subject'
    }
    if(values.message === ''){
        errors.message = 'Please enter the message'
    }

    return errors;
}

