const timer =(ms)=>{
    return new  Promise ((delay)=> setTimeout(delay,ms))
}
const itearteWithAsynAwait =async (arr)=>{
for (const value of arr ){
    console.log(value)
    await timer(2000)
}
}
itearteWithAsynAwait(["yassine","oussayma","hedi","amine"])