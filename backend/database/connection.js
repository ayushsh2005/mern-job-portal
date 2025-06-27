import mongoose from "mongoose";

export const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JOB_PORTAL_WITH_AUTOMATION"
    }).then(()=>{
        console.log("Connected to the database.")
    }).catch(err=>{
        console.log(`An error occured while connecting to database: ${err}`)
    })
}