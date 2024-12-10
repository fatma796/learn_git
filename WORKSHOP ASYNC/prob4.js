const chained = async () => {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
};

const firstFunction = async ()=> {
    await new  Promise ( delay => 
setTimeout(delay,1000))
console.log ("First function excuted")}

const secondFunction = async()=> {
    await new  Promise ( delay => 
setTimeout(delay,1000))
console.log ("Second function excuted")}

const thirdFunction = async()=> {
    await new  Promise ( delay => 
setTimeout(delay,1000))
console.log ("Third function excuted")}

console.log(chained())