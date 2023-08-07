# Rock Paper Scissors Lizard Spock
Rock Paper Scissors is a site that allows the user to play vs a computer with a game of different lengths and against an opponent that chooses options randomly.
The site is targeted towards people who enjoy games of chance with no consequences and gives them the ability to choose and decide how long they play for.

![Responsice Mockup](media/love_maths_mockup.png)

## Features 

In this section, you should go over the different parts of your project, and describe each in a sentence or so. You will need to explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

### Existing Features

- __The Rock Paper Scissors Heading__

  - Featured at the top of the page, the Rock paper scissors heading is easy to see for the user. Upon viewing the page, the user will be able to see the name of the game.

![Logo](media/love_maths_logo.png)

- __The Game Area__

  -  This area allows people to select what to play, what the computer has also played, and how long they want to play for.
  - Allowing the player to interact and show effective user design in showing the users actions and giving them control
  - It highlights the move each player and computer made in a round with a graphic and highlighted text for ease of clarity

![Game](media/love_maths_icons.png)

- __The Image Area__

  - This section will show with the help of Javascript, a graphic that updates when the player or computer have selected a choice

![score](media/love_maths_answer.png)


- __The Score Board__

  - This section updates after every round of play
  - It shows the score in highlighted colors for ease of clarity and also explains how, and why you lost/won a round

![Question](media/love_maths_question.png)


For some/all of your features, you may choose to reference the specific project files that implement them.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement

- A score board using local.data that shows how many games you have played and how many you have won. 
- A score submition which allows people to submit their scores to the leaderboard
- A username interface which allows players to be unique
- A multiplayer option which allows players over the internet to play against each other, in delayed or real time.
## Testing 

Initially with the help of a kennyYip coding video (), I wanted to get a scope, of the functions i would need and the code needed to replicate the results. Watching the video I soon realized that a great deal of replication of virtually the same code was needed when trying to find a work around for the Else/If statements. Looking on youtube and google showed me and highlighted several ways to implement this concatenated code.
Originally when I replicated the code in the video, any alterations would cause the images/buttons TO not work and graphic errors where some of the images wouldnt load. I started off by changing the way the computer selected its "choices", originally i got the computer to randomly generate a number between 1/5 and then using math.floor I made a case for each whole number it displayed. e.g Case 0 = Paper etc. this worked but when I was looking for help on youtube I ran across a much cleaner looking version which is the version I use. An array allows for much the same code, but looks and adds, atleast in my opinion readability to the code.

The second thing I approached was the reduction in replication code that happened when trying to figure out who won, allowing both computer and player to select the same options and allowing for 5 options that all have interactivity I used an else/if statement that ended up being 40 lines long, I looked for another option. In the WC3 junior coding page i saw an example of concatenated code which made it smaller and that you could add to. This proved to be great as it made the 40 lines of code with else/ else if/ if statements down to less than twenty and markedly improved readibilty and if I wanted to, it makes it easier to add other options in the future, if we want to expand.

The scoring system was fundamentally simply, with just the text content in a span to be changed but I also wanted the text of what each character in a round selected and why and how they lost. This was shown in a Youtube video(), allowing for screen readers to show and for people who dont have good eyesight to have it explained. 
To further increase clarity I began to highlight each action of the individual characters as seperate colors to increase visual clarit this idea came from my wife.

Upon talking to my mentor,  Jack, he suggested I make an endgame, or highscore that would end the game. This posed two problems for me, with setting up the final score and how to reset the game. Initially I allowed the reset button to be used at any point during the game but then if people had a bad run it allowed them the option to reset the game anyway. I wanted them to play out the round because in the future if/when  we did add a leaderboard stats like that would matter.
Also Upon playing it, i initially broke the game, when reaching the final score and still being able to play rounds without adding to either scores for player or computer, so i decided to disable all buttons except the game select and reset buttons.

Adding button functionality took me the longest, as originally the fix i found used querySelectorAll for all buttons to make their code execute which wouldnt have been a problem if I didnt add more buttons, any change in this identifier to getElementsByClass or getElementsByTagName proved useless and didnt allow the functions to run. Looking online I founf someone with a similar problem on reddit and used his fix by changing the queryselector all and putting in the class name .buttn which then ran perfectly. 

using the event listeners I added all button related and input related functionality last, as the DOM is read from top to bottom. I didnt fully understand how to run WIndow.onload as an attribute so I used the DOM  to my advantage. 

Upon further use, my wife suggested that I make it so people could select how many rounds they want to play, so I modified the winningScore identifier to be impacted by a dropdown list in the html. This was a quick implentation, that took me all of 20 minutes, surprised It worked first time I kept modifying it, but realized that I couldnt change the game once the rounds had started, and this would cause confusion, So I disabled the button until the rounds of play are over. Forcing the user to play out the first game of 5 rounds, before being able to adjust the play.

CSS and HTML took a minimum of my time, I set out to make it simple to look at and therefore simple to understand the game mechanics and how it runs.

### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    Metrics
- There are 11 functions in this file.

- Function with the largest signature take 3 arguments, while the median is 1.

- Largest function has 25 statements in it, while the median is 4.

- The most complex function has a cyclomatic complexity value of 19 while the median is 1.

- 45 warnings
### Unfixed Bugs

The Favicon i used seems to not have loaded, so either the link i have is unusable or I implemented it in the wrong way,
- also the lack of a logo, I couldnt make up my mind, and I thought the text looked cleaner but probably would have gone for an image.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-maths/


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site



