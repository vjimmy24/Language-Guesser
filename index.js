import {franc} from 'franc'
import langs from 'langs'
import colors from 'colors'

const input = process.argv[2];

const langCode = franc(input)
const convertedLang = langs.where("3", langCode);
// console.log(`The language is ${convert.name}.`)

if (langCode === 'und') {
    console.log('The phrase you entered could not be understood, please try again'.red)
}
else {
    console.log(convertedLang.name.green)
} 


