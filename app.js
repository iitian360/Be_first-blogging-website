import express from 'express';
import home from './routes/home.js';
import contact from './routes/contact.js';
import login from './routes/login.js';
import register from './routes/registration.js';
import blogs from './routes/blog.js';
import about_ from './routes/about.js';
import {join} from 'path';
import under_construction from './middleware/uc-middleware.js';
const app=express();
// here we use express.static function so that 
// the data in public folder is to be use statically.

app.use(express.static(join(process.cwd(),'public')));
// application level middleware

app.use('/about', under_construction);
// app.use('/contact', under_construction);

// we can also use virtual path as given below to make our path unique
// app.use('/static', express.static(join(process.cwd(),'public')));
// this will work if we add /static on our path

// ** if you want to serve only a specific file from public folder eg css
// app.use('/css', express.static(join(process.cwd(),'public/css')));

const port=process.env.PORT||3000;

app.set('views','./view');

app.set('view engine','ejs');

// loading routes
app.use('/',home);
app.use('/contact', contact);
app.use('/login', login);
app.use('/registration', register);
app.use('/blog', blogs);
app.use('/about', about_);



app.listen(port,()=>{
    console.log(`the server is running at port: http://localhost:${port}`);
    
})