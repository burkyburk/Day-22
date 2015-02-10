var expect = chai.expect;

describe('max', function()  {
	it('should not allow non-numeric input', function() {
		expect(function() {
			max('a', 1) 
		}).to.throw('The first argument must be a number.');
		expect(function() { max(12, 'b') }).to.throw('The second argument must be a number.');
	});
	it('should return the max', function() {
		expect(max(2, 3).to.equal(3);
		expect(max(-1, 6)).to.equal(6);
		expect(max(0.1, 0.2).to.equal(0.2);
		expect(max(-1, -3)).to.equal(-1);
	});


});



describe('maxOfThree', function() {
	it('should not allow non-numeric input', function() {
		expect(function() {
			maxOfThree('a', 1, 2) 
		}).to.throw('The first argument must be a number.');
		expect(function() { maxOfThree(12, 'b', 2) }).to.throw('The second argument must be a number.');
		expect(function() { maxOfThree(3, 5, 'c') }).to.throw('The third argument must be a number.');
		expect(function() { maxOfThree(3, 5) }).to.throw('The third argument must be a number.');
	});
	it('should return the max', function() {
		expect(maxOfThree(1, 2, 3)).to.equal(3);
		expect(maxOfThree(-1, 6, 4)).to.equal(6);
		expect(maxOfThree(0.1, 0.2, 0)).to.equal(0.2);
		expect(maxOfThree(-1, -2, -3)).to.equal(-1);
	});
});


describe('isVowel', function(char) {
	it('should not allow non-numeric input', function() {
		expect(function() {
			maxOfThree('a', 1, 2) 
		}).to.throw('The first argument must be a number.');
		expect(function() { maxOfThree(12, 'b', 2) }).to.throw('The second argument must be a number.');
		expect(function() { maxOfThree(3, 5, 'c') }).to.throw('The third argument must be a number.');
		expect(function() { maxOfThree(3, 5) }).to.throw('The third argument must be a number.');
	});
	it('should return the max', function() {
		expect(maxOfThree(1, 2, 3)).to.equal(3);
		expect(maxOfThree(-1, 6, 4)).to.equal(6);
		expect(maxOfThree(0.1, 0.2, 0)).to.equal(0.2);
		expect(maxOfThree(-1, -2, -3)).to.equal(-1);
	});
});



describe('isVowel', function() {

	it('Should take 1 argument', function(){
		expect(function() { isVowel() }).to.throw('No arguments were passed.');
		expect(function() { isVowel("p","o","E") }).to.throw('More than one argument was passed.');
	});

	it('The argument should be a string', function(){
		expect(function() { isVowel(7) }).to.throw('The argument is not a string.');
		expect(function() { isVowel(true) }).to.throw('The argument is not a string.');
		expect(function() { isVowel([0,1,2]) }).to.throw('The argument is not a string.');
			});

	it('Argument should be only a single character', function(){
		expect(function() { isVowel("beer") }).to.throw('String is longer than 1 character.');
		expect(function() { isVowel("he") }).to.throw('String is longer than 1 character.');
		expect(function() { isVowel("000") }).to.throw('String is longer than 1 character.');
	});

	it('Should true if character is a vowel, otherwise false', function() {
		expect(isVowel("f")).to.equal(false);
		expect(isVowel("c")).to.equal(false);
		expect(isVowel("a")).to.equal(true);
		expect(isVowel("e")).to.equal(true);
		expect(isVowel("u")).to.equal(true);
		expect(isVowel("O")).to.equal(true);
		expect(isVowel("X")).to.equal(false);
	});
});

describe('rovarspraket', function() {

	it('Should take 1 argument', function(){
		expect(function() { rovarspraket() }).to.throw('No arguments were passed to the function.');
		expect(function() { rovarspraket("I've got worms!", "Our pets heads are falling off!") }).to.throw('More than one argument was passed to the function.');
	});

	it('The argument should be a string', function(){
		expect(function() { rovarspraket(111) }).to.throw('The argument is not a string.');
		expect(function() { rovarspraket(true) }).to.throw('The argument is not a string.');
		expect(function() { rovarspraket([7,4,1]) }).to.throw('The argument is not a string.');
		expect(function() { rovarspraket({obj: yes}) }).to.throw('The argument is not a string.');
	});

	it('Should return the string doubling the consonents and inserting an O in between consonents', function() {
		expect(rovarspraket("beer me")).to.equal("bobeeror mome");
		expect(rovarspraket("fan")).to.equal("fofanon");
		expect(rovarspraket("boogie woogie")).to.equal("boboogogie wowoogogie");
		expect(rovarspraket("I am lost")).to.equal("I amom lolosostot");
	});
});

describe('sum', function() {

	it('Should take 1 argument', function(){
		expect(function() { sum() }).to.throw('No arguments were passed to the function.');
		expect(function() { sum([7,6,7],[4]) }).to.throw('The function should only have 1 argument');
	});

	it('Argument should be an array', function(){
		expect(function() { sum("plant") }).to.throw('The argument is not an array.');
		expect(function() { sum(0) }).to.throw('The argument is not an array.');
		expect(function() { sum(true) }).to.throw('The argument is not an array.');
		expect(function() { sum({obj: yes}) }).to.throw('The argument is not an array.');
	});

	it('Array should contain only numbers', function(){
		expect(function() { sum(["flower"]) }).to.throw('The argument should contain only numbers.');
		expect(function() { sum([{obj: yes}]) }).to.throw('The argument should contain only numbers.');
		expect(function() { sum([7, 8]) }).to.throw('The argument should contain only numbers.');
	});

	it('Should return the total of all numbers in the array', function() {
		expect(sum([6])).to.equal(6);
		expect(sum([7,1])).to.equal(8);
		expect(sum([1,23,10,400])).to.equal(434);
		expect(sum([4231, 9])).to.equal(4240);
		expect(sum([2.1, 6])).to.equal(8.1);
		expect(sum([-5,1])).to.equal(4);
		expect(sum([7.5, 2.5])).to.equal(10);
	});
});

describe('multiply', function() {

	it('Should take 1 argument', function(){
		expect(function() { multiply() }).to.throw('No arguments were passed to the function.');
		expect(function() { multiply([1,2,3],[0]) }).to.throw('The function should only have 1 argument');
	});

	it('Argument should be an array', function(){
		expect(function() { multiply("fan") }).to.throw('The argument is not an array.');
		expect(function() { multiply(7) }).to.throw('The argument is not an array.');
		expect(function() { multiply(true) }).to.throw('The argument is not an array.');
		expect(function() { multiply({obj: yes}) }).to.throw('The argument is not an array.');
	});

	it('Array should contain only numbers', function(){
		expect(function() { multiply(["poop"]) }).to.throw('The argument should contain only numbers.');
		expect(function() { multiply([true, false]) }).to.throw('The argument should contain only numbers.');
		expect(function() { multiply([{obj: yes}]) }).to.throw('The argument should contain only numbers.');
	});

	it('Should multiply all the numbers in the array together', function() {
		expect(multiply([0])).to.equal(0);
		expect(multiply([4,5])).to.equal(20);
		expect(multiply([7,2,0])).to.equal(0);
		expect(multiply([2.5,3])).to.equal(7.5);
		expect(multiply([2,20])).to.equal(40);
	});
});

describe('reverse', function() {

	it('Should take 1 argument', function(){
		expect(function() { reverse() }).to.throw('No arguments were passed to the function.');
		expect(function() { reverse("wonderful","tonight night") }).to.throw('More than one argument was passed to the function.');
	})

	it('The argument should be a string', function(){
		expect(function() { reverse(7) }).to.throw('The argument is not a string.');
		expect(function() { reverse(true) }).to.throw('The argument is not a string.');
		expect(function() { reverse([7,7,7]) }).to.throw('The argument is not a string.');
		expect(function() { reverse({obj: yes}) }).to.throw('The argument is not a string.');
	});

	it('Should return the reversal of the given string', function() {
		expect(reverse("mellow yellow")).to.equal("wolley wollem");
		expect(reverse("stink")).to.equal("knits");
		expect(reverse("jacob burkhart")).to.equal("trahkrub bocaj");
		expect(reverse("one two three")).to.equal("eerht owt eno");
	});
});

describe('findLongestWord', function() {

	it('Should take 1 argument', function(){
		expect(function() { findLongestWord() }).to.throw('No arguments were passed to the function.');
		expect(function() { findLongestWord([7,7,7],[7]) }).to.throw('The function should only have 1 argument');
	});

	it('Argument should be an array', function(){
		expect(function() { findLongestWord("beer") }).to.throw('The argument is not an array.');
		expect(function() { findLongestWord(7) }).to.throw('The argument is not an array.');
		expect(function() { findLongestWord(true) }).to.throw('The argument is not an array.');
		expect(function() { findLongestWord({obj: yes}) }).to.throw('The argument is not an array.');
	});

	it('Array should contain only strings', function(){
		expect(function() { findLongestWord([7,7,13]) }).to.throw('The argument should contain only strings.');
		expect(function() { findLongestWord([true, false]) }).to.throw('The argument should contain only strings.');
		expect(function() { findLongestWord([{obj: yes}]) }).to.throw('The argument should contain only strings.');
	});

	it('Should return the longest word in the array', function() {
		expect(findLongestWord(["black", "gray"])).to.equal("black");
		expect(findLongestWord(["black"])).to.equal("black");
		expect(findLongestWord(["yellow", "blue"])).to.equal("yellow");
		expect(findLongestWord(["pink", "puprle", "red"])).to.equal("gravel");
	});
});

describe('filterLongWords', function() {

	it('Should take 2 argument', function(){
		expect(function() { filterLongWords() }).to.throw('No arguments were passed to the function.');
		expect(function() { filterLongWords([1,2,3],1,5) }).to.throw('The function should have 2 arguments');
	});

	it('First argument should be an array', function(){
		expect(function() { filterLongWords("fan", 7) }).to.throw('The argument is not an array.');
		expect(function() { filterLongWords(7, 7) }).to.throw('The argument is not an array.');
		expect(function() { filterLongWords(true, 7) }).to.throw('The argument is not an array.');
		expect(function() { filterLongWords({obj: yes}).to.throw('The argument is not an array.');
	});

	it('Second argument should be a number'), function(){
		expect(function() { filterLongWords(["fan", "beer"], "yellow")}).to.throw('The second argument is not a number');
		expect(function() { filterLongWords(["yes", "no"], true)}).to.throw('The second argument is not a number');
		expect(function() { filterLongWords(["hello", "goodbye"], [7])}).to.throw('The second argument is not a number');
		expect(function() { filterLongWords(["why", "how"], {obj: yes})}).to.throw('The second argument is not a number');
	});

	it('Second argument should be a positive number'), function() {
		expect(function() { filterLongWords(["fan", "beer"], -1)}).to.throw('The second argument is not a positive number');
	});

	it('The array should contain only strings', function(){
		expect(function() { filterLongWords([7,8], 9) }).to.throw('The array should contain only strings.');
		expect(function() { filterLongWords([true, false], 7) }).to.throw('The array should contain only strings.');
		expect(function() { filterLongWords([{obj: yes}], 7) }).to.throw('The array should contain only strings.');
	});

	it('Should return words longer than integer given', function() {
		expect(filterLongWords(["fan", "beer"], 3)).to.equal("beer");
		expect(filterLongWords(["smell", "armageddon"], 6)).to.equal("armageddon");
		expect(filterLongWords(["peace", "up"], 3)).to.equal("peace");
		expect(filterLongWords(["hey", "joe", "gun", "hand"], 4)).to.equal("hand");
	});
});

describe('charFreq', function() {

	it('Should take 1 argument', function(){
		expect(function() { charFreq() }).to.throw('No arguments were passed to the function.');
		expect(function() { charFreq("spongebob","squarepants") }).to.throw('More than one argument was passed to the function.');
	});

	it('The argument should be a string', function(){
		expect(function() { charFreq(7) }).to.throw('The argument is not a string.');
		expect(function() { charFreq(true) }).to.throw('The argument is not a string.');