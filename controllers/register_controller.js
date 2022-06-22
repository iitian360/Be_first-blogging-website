import {join} from 'path';
const reg_page=(req,res)=>{
    // res.sendFile(join(process.cwd(),'view','registration.html'));
    res.render('registration',{'title':'Register here'});
}

export {reg_page};