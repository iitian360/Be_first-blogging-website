import mongoose from 'mongoose';

const connect_DB= async (data_url)=>{
    try{
        await mongoose.connect(data_url);
        console.log('connection created');
        
    }
    catch{
        console.log('not connected!');
        
    }
}

export default connect_DB;