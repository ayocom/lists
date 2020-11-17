let nums = [12, 1, 2, 3, 4, 5, 7, 9]

//biggest number
let biggest = 0
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i+1]) {
        biggest = nums[i]
    }
    for (let j = nums.length; j >= 0; j--) {
        if (nums[j] > biggest) {
            biggest = nums[j]
        }
    }
}
console.log(biggest)

//average
let avg = 0
let total = 0
for (let i = 0; i < nums.length; i++) {
    total += nums[i]
    avg = total/nums.length
}

console.log(avg)

//odds in list
let odds = 0
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
        odds += 1
    }
}
console.log(odds)

//animals
let animals = ['Elephant', 'Lion', '*Monkey', 'Giraffe']

for (let i = 0; i < animals.length; i++) {
    if (animals[i].startsWith('*')) {
        favorite = animals[i]
    }
}

console.log(favorite)

//temps
let temps = [32, 50, 77, 95] 

let celsius = temps.map(temp => {
    return (temp - 32) * (5/9)
})
console.log(celsius)

//index / 5
let integers = [2, 4, 10, 5]

for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 5 === 0) {
        console.log(i)
        i = integers.length + 1
    }
}

//vowels in a word
let word = "apple"
let vowels = 0
for (let i = 0; i < word.length; i++) {
    if (word[i] === 'a') {
        vowels++
    }
}
console.log(vowels)

// reverse a word
let reverse = ""
for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i]
}
console.log(reverse)
// palindrome?
if (reverse === word) {
    console.log('Palindrome')
}

//distance from biggest # to smallest #
let smallest = 0
for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i+1]) {
        smallest = nums[i]
    }
    for (let j = nums.length; j >= 0; j--) {
        if (nums[j] < smallest) {
            smallest = nums[j]
        }
    }
}
let distance = biggest - smallest
console.log(smallest)
console.log( `${distance}`)
//reverse each individual word in a sentence