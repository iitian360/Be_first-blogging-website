

const my_blog=(req,res)=>{
    res.render('blog',{'title':'Blogs'});
}

const my_life=(req,res)=>{
    res.send('this is life page')
}
const my_fashion=(req,res)=>{
    res.send('this is fashion page')
}
const my_travel=(req,res)=>{
    res.send('this is travel page')
}
const my_health=(req,res)=>{
    res.send('this is health page')
}
const my_edu=(req,res)=>{
    res.send('this is education page')
}
const my_relation=(req,res)=>{
    res.send('this is relation page')
}
const my_tech=(req,res)=>{
    res.send('this is technology page');
}
const my_art=(req,res)=>{
    res.send('this is art page');
}

export {my_blog,my_edu,my_fashion,my_health,my_life,my_relation,my_travel,my_tech,my_art};