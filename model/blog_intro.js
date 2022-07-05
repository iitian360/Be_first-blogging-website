import mongoose from "mongoose";
// creating a schema for data//
const blog_schema= mongoose.Schema({
    tag:{type:String, require:true},
    author:{type:String, require:true},
    publish:{type:Date, default:Date.now},
    adult_content:{type:Boolean}
})

// creating a collection

const blog_modal=mongoose.model('blog',blog_schema);
//*** */  inserting data//
//*** */ this is the code for creating a data//

// const creat_data=async(tag,auth,adlt)=>{
//      try{
//         const blog= new blog_modal({
//             tag:tag,
//             author:auth,
//             adult_content:adlt
            
//         })
//       const result=  await blog.save();
//       console.log(result);
      
//      }
//      catch(error){
//         console.log(error);
        
//      }
// }



// here I am going to retrive the data//

const blog_data= async ()=>{
    const data= await blog_modal.find();
    // console.log(data);
    data.forEach(
        (item)=> console.log(
            item.tag
        )
        
    );
}

export  {blog_data};