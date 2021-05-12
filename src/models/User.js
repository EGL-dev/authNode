import {Schema,model, version} from 'mongoose';
import bcrypt, { hash } from 'bcryptjs';

const userSchema  = new Schema({
    username:{
        type:String,
        unique:true 
    },
    email:{
        type:String,
        unique:true
    },
    pass : {
        type:String,
        required:true 
    }, 
    roles : [{
        ref:"Rol",
        type: Schema.Types.ObjectId
    }]
},{
   timestamps:true,
   versionKey:false
})       


userSchema.statics.encryptPassword = async(pass)=>{
     const salt=await bcrypt.genSalt(10);
     return await bcrypt.hash(pass,salt);


}


userSchema.statics.comparePassword = async(pass, receivedPassword)=>{

    return await bcrypt.compare(pass,receivedPassword);
}

export default model('User', userSchema);