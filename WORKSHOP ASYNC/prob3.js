const awaitCall =async ()=>{
try{
const res= await fetchData()
console.log("Data Received :" ,res.data)
}
catch(err){
    console.error("error in fetching", err)
}
}
awaitCall()