import mongoose from 'mongoose'

const mongoDbConnect = async (url) => {
   return ( await mongoose.connect(url)
        .then(() => console.log("MongoDb connected"))
        .catch(err => console.log(err))
)
}


export default mongoDbConnect