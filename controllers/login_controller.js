import blog_modal from '../model/blog_intro.js';
// import {join} from 'path';
const myLogin=(req,res)=>{
    // res.sendFile(join(process.cwd(),'view','login.html'));
    res.render('login',{'title':'Login here'});
}

const verify= async(req,res)=>{
    try {
        const {email, password}=req.body;
        const result= await blog_modal.findOne({email:email});
        // console.log(result);
        if(result!=null){
            if(result.email==email && result.password==password){
                res.send(`hey ${result.name} welcome to befirst family
                this is your dashboard.`)
            }
            else{
                res.send('ohh there are some error!');
            }
        }
        else{
            res.send('you are not a registerd user')
        }

        
        
        
        
        
        
    } catch (error) {
        console.log(error);
        
    }
}

const myRegister=(req,res)=>{
    // res.sendFile(join(process.cwd(),'view','registration.html'));
    res.render('registration',{'title':'Login here'});
}



export {myLogin,myRegister, verify};