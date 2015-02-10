var expect = chai.expect;

describe('max', function() {

	it('Should take 2 arguments', function(){
		expect(function() { max() }).to.throw('No arguments were passed to the function.');
		expect(function() { max(1) }).to.throw('Only 1 argument was passed to the function.');
		expect(function() { max(0,1,2) }).to.throw('The function should only have 2 arguments.');
	});

	it('Both arguments should be numbers', function(){
		expect(function() { max("beer", 1) }).to.throw('The first argument is not a number.');
		expect(function() { max(1, "whiskey") }).to.throw('The second argument is not a number.');
		expect(function() { max(true, 1) }).to.throw('The first argument is not a number.');
		expect(function() { max(10, [0,1,2]) }).to.throw('The second argument is not a number.');
		expect(function() { max(50, {obj: "yes"}) }).to.throw('The second argument is not a number.');
		expect(function() { max(0, false) }).to.throw('The second argument is not a number.');
	});

	it('Should return the largest number', function() {
		expect(max(4,5)).to.equal(5);
		expect(max(0,7)).to.equal(7);
		expect(max(10,11)).to.equal(11);
		expect(max(-6,-7)).to.equal(-6);
		expect(max(1.5,1)).to.equal(1.5);
		expect(max(0, 0.5)).to.equal(0.5);
	});
});

describe('maxOfThree', function() {

	it('Should take 3 arguments', function(){
		expect(function() { maxOfThree() }).to.throw('No arguments were passed to the function.');
		expect(function() { maxOfThree(1) }).to.throw('Only one argument was passed to the function.');
		expect(function() { maxOfThree(1,5) }).to.throw('Only two arguments were passed to the function.');
		expect(function() { maxOfThree(1,2,3,4) }).to.throw('The function should only have 3 arguments.');
	});

	it('All the arguments should be numbers', function(){
		expect(function() { maxOfThree("beer", 1, 2) }).to.throw('The first argument is not a number.');
		expect(function() { maxOfThree(1, "beer", 1) }).to.throw('The second argument is not a number.');
		expect(function() { maxOfThree(1, 2, "beer") }).to.throw('The third argument is not a number.');

	});

	it('Should return the largest number', function() {
		expect(maxOfThree(1,2,3)).to.equal(3);
		expect(maxOfThree(0,10,1.5)).to.equal(10);
		expect(maxOfThree(-10,-5,-1)).to.equal(-1);
		expect(maxOfThree(50,0,0)).to.equal(50);
		expect(maxOfThree(5,5,5)).to.equal(5);
		expect(maxOfThree(-1,1,-50)).to.equal(1);
	});
});

describe('isVowel', function() {

	it('Should take 1 argument', function(){
		expect(function() { isVowel() }).to.throw('No arguments were passed to the function.');
		expect(function() { isVowel("c","E","A") }).to.throw('More than one argument was passed to the function.');
	});

	it('The argument should be a string', function(){
		expect(function() { isVowel(2) }).to.throw('The argument is not a string.');
		expect(function() { isVowel(true) }).to.throw('The argument is not a string.');
		expect(function() { isVowel([1,2,3]) }).to.throw('The argument is not a string.');
		expect(function() { isVowel({obj: 2}) }).to.throw('The argument is not a string.');
	});

	it('Argument should be only a single character', function(){
		expect(function() { isVowel("beer") }).to.throw('String is longer than 1 character.');
		expect(function() { isVowel("ha") }).to.throw('String is longer than 1 character.');
		expect(function() { isVowel("12345") }).to.throw('String is longer than 1 character.');
	});

	it('Should true if character is a vowel, otherwise false', function() {
		expect(isVowel("C")).to.equal(false);
		expect(isVowel("c")).to.equal(false);
		expect(isVowel("A")).to.equal(true);
		expect(isVowel("a")).to.equal(true);
		expect(isVowel("e")).to.equal(true);
		expect(isVowel("Y")).to.equal(false);
		expect(isVowel("O")).to.equal(true);
		expect(isVowel("X")).to.equal(false);
	});
});

describe('rovarspraket', function() {

	it('Should take 1 argument', function(){
		expect(function() { rovarspraket() }).to.throw('No arguments were passed to the function.');
		expect(function() { rovarspraket("cereal","milk") }).to.throw('More than one argument was passed to the function.');
	});

	it('The argument should be a string', function(){
		expect(function() { rovarspraket(2) }).to.throw('The argument is not a string.');
		expect(function() { rovarspraket(true) }).to.throw('The argument is not a string.');
		expect(function() { rovarspraket([1,2,3]) }).to.throw('The argument is not a string.');
		expect(function() { rovarspraket({obj: 1}) }).to.throw('The argument is not a string.');
	});

	it('Should return the string doubling the consenents and inserting an O in between', function() {
		expect(rovarspraket("party time")).to.equal("poparortotyoy totimome");
		expect(rovarspraket("fun")).to.equal("fofunon");
		expect(rovarspraket("beer whiskey")).to.equal("bobeeror wowhohisoskokeyoy");
		expect(rovarspraket("hey you")).to.equal("hoheyoy yoyou");
	});
});

describe('sum', function() {

	it('Should take 1 argument', function(){
		expect(function() { sum() }).to.throw('No arguments were passed to the function.');
		expect(function() { sum([1,2,3],[1]) }).to.throw('The function should only have 1 argument');
	});

	it('Argument should be an array', function(){
		expect(function() { sum("dog") }).to.throw('The argument is not an array.');
		expect(function() { sum(1) }).to.throw('The argument is not an array.');
		expect(function() { sum(true) }).to.throw('The argument is not an array.');
		expect(function() { sum({obj: 5}) }).to.throw('The argument is not an array.');
	});

	it('Array should contain only numbers', function(){
		expect(function() { sum(["dog"]) }).to.throw('The argument should contain only numbers.');
		expect(function() { sum([true, false]) }).to.throw('The argument should contain only numbers.');
		expect(function() { sum([{obj: 5}]) }).to.throw('The argument should contain only numbers.');
	});

	it('Should return the total of all numbers in the array', function() {
		expect(sum([1])).to.equal(1);
		expect(sum([5,5])).to.equal(10);
		expect(sum([10,100,10,100])).to.equal(220);
		expect(sum([1000, 1])).to.equal(1001);
		expect(sum([1.5, 1.5])).to.equal(3);
		expect(sum([5.4, 5])).to.equal(10.4);
		expect(sum([-1,1])).to.equal(0);
	});
});

describe('multiply', function() {

	it('Should take 1 argument', function(){
		expect(function() { multiply() }).to.throw('No arguments were passed to the function.');
		expect(function() { multiply([1,2,3],[1]) }).to.throw('The function should only have 1 argument');
	});

	it('Argument should be an array', function(){
		expect(function() { multiply("beer") }).to.throw('The argument is not an array.');
		expect(function() { multiply(1) }).to.throw('The argument is not an array.');
		expect(function() { multiply(true) }).to.throw('The argument is not an array.');
		expect(function() { multiply({obj: 5}) }).to.throw('The argument is not an array.');
	});

	it('Array should contain only numbers', function(){
		expect(function() { multiply(["beer"]) }).to.throw('The argument should contain only numbers.');
		expect(function() { multiply([true, false]) }).to.throw('The argument should contain only numbers.');
		expect(function() { multiply([{obj: 5}]) }).to.throw('The argument should contain only numbers.');
	});

	it('Should multiply all the numbers in the array together', function() {
		expect(multiply([2,3])).to.equal(6);
		expect(multiply([2,3,3])).to.equal(18);
		expect(multiply([2,2.5])).to.equal(5);
		expect(multiply([1,1,1,1,1])).to.equal(1);
	});
});

describe('reverse', function() {

	it('Should take 1 argument', function(){
		expect(function() { reverse() }).to.throw('No arguments were passed to the function.');
		expect(function() { reverse("uh oh","vomit") }).to.throw('More than one argument was passed to the function.');
	});

	it('The argument should be a string', function(){
		expect(function() { reverse(2) }).to.throw('The argument is not a string.');
		expect(function() { reverse(true) }).to.throw('The argument is not a string.');
		expect(function() { reverse([1,2,3]) }).to.throw('The argument is not a string.');
		expect(function() { reverse({obj: 1}) }).to.throw('The argument is not a string.');
	});

	it('Should return the reversal of the given string', function() {
		expect(reverse("beer me")).to.equal("em reeb");
		expect(reverse("beer")).to.equal("reeb");
		expect(reverse("whiskey beer")).to.equal("reeb yeksihw");
		expect(reverse("i drink beer")).to.equal("reeb knird i");
	});
});

describe('findLongestWord', function() {

	it('Should take 1 argument', function(){
		expect(function() { findLongestWord() }).to.throw('No arguments were passed to the function.');
		expect(function() { findLongestWord([1,2,3],[1]) }).to.throw('The function should only have 1 argument');
	});

	it('Argument should be an array', function(){
		expect(function() { findLongestWord("beer") }).to.throw('The argument is not an array.');
		expect(function() { findLongestWord(1) }).to.throw('The argument is not an array.');
		expect(function() { findLongestWord(true) }).to.throw('The argument is not an array.');
		expect(function() { findLongestWord({obj: 5}) }).to.throw('The argument is not an array.');
	});

	it('Array should contain only strings', function(){
		expect(function() { findLongestWord([1,2,3]) }).to.throw('The argument should contain only strings.');
		expect(function() { findLongestWord([true, false]) }).to.throw('The argument should contain only strings.');
		expect(function() { findLongestWord([{obj: 5}]) }).to.throw('The argument should contain only strings.');
	});

	it('Should return the longest word in the array', function() {
		expect(findLongestWord(["beer", "whiskey"])).to.equal(7);
		expect(findLongestWord(["beer"])).to.equal(4);
		expect(findLongestWord(["beer", "beer"])).to.equal(4);
		expect(findLongestWord(["vodka", "chardonnay"])).to.equal(10);
		
	});
});

describe('filterLongWords', function() {

	it('Should take 2 argument', function(){
		expect(function() { filterLongWords() }).to.throw('No arguments were passed to the function.');
		expect(function() { filterLongWords(["beer","whiskey"]) }).to.throw('The function should have 2 arguments.');
		expect(function() { filterLongWords(["beer"],1,5) }).to.throw('The function should have 2 arguments');
	});

	it('First argument should be an array', function(){
		expect(function() { filterLongWords("beer", 1) }).to.throw('The first argument is not an array.');
		expect(function() { filterLongWords(1, 5) }).to.throw('The first argument is not an array.');
		expect(function() { filterLongWords(true, 3) }).to.throw('The first argument is not an array.');
		expect(function() { filterLongWords({obj: 5}, 10) }).to.throw('The first argument is not an array.');
	});

	it('Second argument should be a number', function(){
		expect(function() { filterLongWords(["beer", "whiskey"], true)}).to.throw('The second argument is not a number');
		expect(function() { filterLongWords(["beer", "whiskey"], [1])}).to.throw('The second argument is not a number');
		expect(function() { filterLongWords(["beer", "whiskey"], {obj: 6})}).to.throw('The second argument is not a number');
	});

	it('Second argument should be a positive number', function() {
		expect(function() { filterLongWords(["beer", "whiskey"], -5)}).to.throw('The second argument is not a positive number');
	});

	it('The array should contain only strings', function(){
		expect(function() { filterLongWords([1,2,3], 10) }).to.throw('The array should contain only strings.');
		expect(function() { filterLongWords([true, false], 5) }).to.throw('The array should contain only strings.');
		expect(function() { filterLongWords([{obj: 5}], 3) }).to.throw('The array should contain only strings.');
	});

	it('Should return words longer than the parameter given', function() {
		expect(filterLongWords(["beer", "whiskey"], 5)).to.eql(["whiskey"]);
		
		
	});
});

describe('charFreq', function() {

	it('Should take 1 argument', function(){
		expect(function() { charFreq() }).to.throw('No arguments were passed to the function.');
		expect(function() { charFreq("beer me","please") }).to.throw('More than one argument was passed to the function.');
	});

	it('The argument should be a string', function(){
		expect(function() { charFreq(2) }).to.throw('The argument is not a string.');
		expect(function() { charFreq(true) }).to.throw('The argument is not a string.');
		expect(function() { charFreq([1,2,3]) }).to.throw('The argument is not a string.');
		expect(function() { charFreq({obj: 5}) }).to.throw('The argument is not a string.');
	});

	it('Should return an object containing the frequency of each character in the given string', function() {
		expect(charFreq("aaaAA")).to.eql({a:3, A:2});
		expect(charFreq("cacaca")).to.eql({a:3, c:3});
		expect(charFreq("aabbccddee")).to.eql({a:2,b:2,c:2,d:2,e:2});
		expect(charFreq("aa bb ee gg aa")).to.eql({a:4,b:2,e:2,g:2});
	});
});

// Assignment two, completing missing code

var FILL_ME_IN;
describe("About Arrays", function() {

    //We shall contemplate truth by testing reality, via spec expectations.
    it("should create arrays", function() {
        var emptyArray = [];
        expect(typeof(emptyArray)).to.equal('object');
        expect(emptyArray.length).to.equal(0);

        var multiTypeArray = [0, 1, "two",
            function() {
                return 3;
            }, {
                value1: 4,
                value2: 5
            },
            [6, 7]
        ];
        expect(multiTypeArray[0]).to.equal(0);
        expect(multiTypeArray[2]).to.equal("two");
        expect(multiTypeArray[3]()).to.equal(3);
        expect(multiTypeArray[4].value1).to.equal(4);
        expect(multiTypeArray[4]["value2"]).to.equal(5);
        expect(multiTypeArray[5][0]).to.equal(6,7);
    });

    it("should understand array literals", function() {
        var array = [];
        expect(array.toString()).to.equal("");

        array[0] = 1;
        expect(array.toString()).to.equal("1");

        array[1] = 2;
        expect(array).to.eql([1, 2]);

        array.push(3);
        expect(array).to.eql([1,2,3]);
    });

    it("should understand array length", function() {
        var fourNumberArray = [1, 2, 3, 4];

        expect(fourNumberArray.length).to.equal(4);
        fourNumberArray.push(5, 6);
        expect(fourNumberArray.length).to.equal(6);

        var tenEmptyElementArray = new Array(10);
        expect(tenEmptyElementArray.length).to.equal(10);

        tenEmptyElementArray.length = 5;
        expect(tenEmptyElementArray.length).to.equal(5);
    });

    it("should slice arrays", function() {
        var array = ["peanut", "butter", "and", "jelly"];

        expect(array.slice(0, 1).toString()).to.equal("peanut");
        expect(array.slice(0, 2).toString()).to.equal("peanut,butter");
        expect(array.slice(2, 2).toString()).to.equal("");
        expect(array.slice(2, 20).toString()).to.equal("and,jelly");
        expect(array.slice(3, 0).toString()).to.equal("");
        expect(array.slice(3, 100).toString()).to.equal("jelly");
        expect(array.slice(5, 1).toString()).to.equal("");
    });

    it("should know array references", function() {
        var array = ["zero", "one", "two", "three", "four", "five"];

        function passedByReference(refArray) {
            refArray[1] = "changed in function";
        }
        passedByReference(array);
        expect(array[1]).to.equal("changed in function");

        var assignedArray = array;
        assignedArray[5] = "changed in assignedArray";
        expect(array[5]).to.equal("changed in assignedArray");

        var copyOfArray = array.slice();
        copyOfArray[3] = "changed in copyOfArray";
        expect(array[3]).to.equal("three");
    });

    it("should push and pop", function() {
        var array = [1, 2];
        array.push(3);

        expect(array.toString()).to.equal("1,2,3");

        var poppedValue = array.pop();
        expect(poppedValue).to.equal(3);
        expect(array.toString()).to.equal("1,2");
    });

    it("should know about shifting arrays", function() {
        var array = [1, 2];

        array.unshift(3);
        expect(array.toString()).to.equal("3,1,2");

        var shiftedValue = array.shift();
        expect(shiftedValue).to.equal(3);
        expect(array.toString()).to.equal("1,2");
    });
});

