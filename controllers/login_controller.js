// import {join} from 'path';
const myLogin=(req,res)=>{
    // res.sendFile(join(process.cwd(),'view','login.html'));
    res.render('login',{'title':'Login here'});
}

const myRegister=(req,res)=>{
    // res.sendFile(join(process.cwd(),'view','registration.html'));
    res.render('registration',{'title':'Login here'});
}

export {myLogin,myRegister};