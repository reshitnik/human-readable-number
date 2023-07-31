module.exports = function toReadable (number) {
    const units = ["", "one","two", "three", "four", "five", "six", "seven", "eight","nine","ten","eleven","twelve" ,"thirteen","fourteen","fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["twenty","thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundred = ["", "hundred", "hundred", "hundred", "hundred","hundred", "hundred","hundred","hundred","hundred"];
    if (number=== 0) {
        return "zero";
    } else if (number % 100 < 20){
        return `${units[Math.floor(number/100)]} ${hundred[Math.floor(number/100)]} ${units[number % 100]}`.trim();
    } else if (number % 100 > 19) {
        return `${units[Math.floor(number/100)]} ${hundred[Math.floor(number/100)]} ${tens[((number%100)-(number%10))/10-2]} ${units[(number%10)]}`.trim()};

}


