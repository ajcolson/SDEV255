import * as fs from "fs"
import { say } from "cowsay"

const words = [
  "foo",
  "bar",
  "baz"
]

fs.writeFile(`words.txt`, words.join(`, `), ()=>{
  console.log("File written.")
})

console.log(say({text: words.join(`, `)}))
