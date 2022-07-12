import {join} from 'path';
import blog_modal from '../model/blog_intro.js';
const reg_page=(req,res)=>{
    // res.sendFile(join(process.cwd(),'view','registration.html'));
    res.render('registration',{'title':'Register here'});
}

const put_data= async (req,res)=>{
    try{
        // const result= req.body;
        // console.log('form submitted');
        // console.log(result);
        const {name, email, tel, password}= req.body;
        const doc= new blog_modal({
            name:name,
            email:email,
            phone:tel,
            password:password

        })
        const result= await doc.save();
        // console.log(result);
        
        res.redirect('/login');
        
    }
    catch(err){
        console.log(err);
        
    }
}

export {reg_page, put_data};