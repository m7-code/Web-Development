
const fs =require("fs")
//console.log(fs)

console.log("starting")
//fs.writeFileSync("m.txt", "M is a good boy")

fs.writeFile("M2.txt", "M2 is a good boy2", ()=>{
    console.log("done")
    fs.readFile("M2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("M2.txt", "robo", (e, d)=>{
    console.log(d)
})
console.log("end")