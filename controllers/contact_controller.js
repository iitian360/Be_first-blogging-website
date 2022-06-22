const contact_me=(req,res)=>{
    res.render('contact',{'title':'Contact me'});
}
const phone=(req,res)=>{
    res.send('this is my phone number')
}

export {contact_me,phone};