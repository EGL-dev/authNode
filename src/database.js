import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/api-tkn",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true

})
    .then(db=>console.log('Db is connect'))
    .catch(error=> console.log(error))