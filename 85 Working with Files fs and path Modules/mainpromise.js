import fs from "fs/promises"

let a = await fs.readFile("M2.txt")

let b = await fs.appendFile("M2.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)