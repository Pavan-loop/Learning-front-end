var myFriends = ['Thejas','Dheeraj','Nagarjun','Suma']
console.log(myFriends)

// accessing element in the array 
console.log(myFriends[2])
console.log(myFriends[0])

// altering element in the array
myFriends[1] = 'kavya'
console.log(myFriends)

myFriends[4] = 'Rohit'
console.log(myFriends) // as you can see it does'nt pop any error but it simply add the element 

// adding element into the array
myFriends[myFriends.length] = 'Dheeraj'
console.log(myFriends)

myFriends.push('Poorvik')
console.log(myFriends)

// removing element from the array
myFriends.pop() // it will delete the last element
console.log(myFriends)

// advanced technique 

// adding element in the specific area.

myFriends.splice(2,0,'pai','lakshmi')
// fist parameter will take at what index we want to add the element.
// second parameter will take how many element want to be deleted before adding from... in this case position 2
// the next parameters are the element to be added
console.log(myFriends)

// removing element in the specific location.

myFriends.splice(2,1);
// first element will take at what index we want to remove the element.
// select parameter will take how many element to be removed.
console.log(myFriends)

// concatinating two arrays.
myAnimeFriends = ['madara','sukuna','itachi','sasuke','levi']
console.log(myAnimeFriends)
var myAllFriends = myFriends.concat(myAnimeFriends)
console.log(myAllFriends)

// sorting elements in ascending and decending order

myAllFriends.sort()
console.log(myAllFriends)
myAllFriends.reverse()
console.log(myAllFriends)