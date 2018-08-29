## Overall notes

Each of these applications will be held to a more rigorous standard than normal. Your design should be solid, and the application should appear to be complete with nothing partially done. You can use a CSS framework, but you will likely write your own CSS code as well.

You can use classes or not as you please -- your group should discuss the problem and decide what makes the most sense.

## Option 1: Quiz app

This application is one of those online personality quizzes like "What Character From The Canterbury Tales Are You?" In these quizzes, you are presented with 10 questions, one after the other, and at the end you get some result calculated from your answers. Usually, each answer for a question adds some number to a score for each of the possible results.

At the end of the quiz, you should have the option to take it again.

Your team will have to invent your own quiz questions and results.

### Bonus steps

* Add multiple quizzes to take.
* Use [json-server](https://github.com/typicode/json-server) to store the quizzes and pull them in via Ajax.

## Option 2: Flashcard app

This application should let you create a deck of flashcards, edit that deck, and run through the deck, showing you a random card at a time.

If you need a primer on how flashcards work: they have a front and a back. The front is a question or prompt; the back is the correct answer. When you use them for study, you look at the front of a random card, decide on your answer, then flip the card to see how you did.

When going through the deck, you should be able to mark if you got the answer right or wrong, and the number of times presented, answered correctly, and answered incorrectly should be recorded.

For this project, you will use [json-server](https://github.com/typicode/json-server) for your API. Remember that json-server does not auto-assign IDs, so you will need to assign IDs yourself. There are many NPM packages to create unique ids. One to look at is [shortid](https://www.npmjs.com/package/shortid).

### Bonus steps

* Use CSS animations to make the cards flip over.
* Add the ability to create multiple decks of cards and use them independently.
* Use the number of times a card has been answered incorrectly compared to total times used to weight often-incorrect cards to show up more often. Consider the [Leitner system](https://en.wikipedia.org/wiki/Leitner_system) as a way to handle this.

### Notes

* This is hard because it has a lot of back-and-forth requests to the server and it has multiple "screens" -- that is, your web application will look quite different depending on what you're doing.
* An application with multiple screens that you can move between without reloading pages is called a *single-page app*. Two articles that could help you wrap your head around this concept are [Build a Single-Page App Without a Framework](https://www.sitepoint.com/single-page-app-without-framework/) and [Reactive UI's with VanillaJS](https://css-tricks.com/reactive-uis-vanillajs-part-1-pure-functional-style/).
* This is fun because you get to make something you might actually use for the rest of the course.

## Option 3: Sliding 15 Puzzle

This application will get a random photo from [Unsplash](https://unsplash.com/) using its API ([directions](https://unsplash.com/documentation#get-a-random-photo)) and then use it to make a [15 puzzle](https://unsplash.com/documentation#get-a-random-photo) ([play a 15-puzzle online](https://ruwix.com/online-puzzle-simulators/sliding-15-puzzle/)). Keep track of the number of moves made while playing the game. When the game is complete, show the entire image.

### Notes

* It might be easier to start by using one image you have locally.
* It might be easier to test this out by starting with an 8-puzzle (that is, a 3x3 puzzle with one piece missing.)
* The easiest way to do this will be to use a `<canvas>` element, but knowing which square is clicked is hard. Check out [this Stack Overflow answer](https://stackoverflow.com/questions/9880279/how-do-i-add-a-simple-onclick-event-handler-to-a-canvas-element#9880302) for some tips.
* The Unsplash API needs an API key to work. You can store this key in an environment variable [using a .env file](https://parceljs.org/env.html). Do not commit this file. To access it in your code, use `process.env.envVarName` where `envVarName` is the name of your environment variable.
