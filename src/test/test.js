// Declaration of assertions
var expect = require('chai').expect;

// Declare the javascript code to test
var bowlingGame = require('../js/main');

describe('Unit tests for Bowling score', () => {
	it('if the player scores 0 in each bowl', () => {
    var scores = bowlingGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		expect(scores).to.equal(0);
  });
  it('if the player scores 2 in each bowl', () => {
    var scores = bowlingGame([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
		expect(scores).to.equal(40);
  });

  it('if the player scores strike in each bowl', () => {
    var scores = bowlingGame([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
    expect(scores).to.equal(300);
  });
  it('if the player scores strike in each bowl except the last one', () => {
    var scores = bowlingGame([10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 1]);
		expect(scores).to.equal(245);
  });
  it('if the player scores spare in each bowl', () => {
    var scores = bowlingGame([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);
    expect(scores).to.equal(150);
  });
  it('if the player scores spare in each bowl except the last one', () => {
    var scores = bowlingGame([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2]);
    expect(scores).to.equal(142);
  });
  it('if the player scores spare in each bowl, and scores strike in the last bowl', () => {
    var scores = bowlingGame([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 3]);
    expect(scores).to.equal(158);
  }); 
  it('if player scores 0 in each round and scores strike in the last round', () => {
    var scores = bowlingGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 5, 3]);
    expect(scores).to.equal(18);
  });
  it('if player scores 0 in each round and scores strike in the last round following a strike', () => {
    var scores = bowlingGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
    expect(scores).to.equal(30);
  }); 
  it('if player scores strike and spare following one another', () => {
    var scores = bowlingGame([10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5]);
    expect(scores).to.equal(210);
  }); 
});