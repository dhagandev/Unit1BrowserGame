# Just Another Clicker

### Concept
Clicker games are based around the idea of buying items and in turn those items make money. For example, in Cookie Clicker, you buy items like grandmas, cookie farms, factories, and so on. Typically these games include upgrades that make your items more effective. These games tend to be a fairly idle game that are great for casual gamers who can open it up, buy a few items, go off and work on something else, and come back later to find that they have enough money to buy something new.

### Why a Clicker Game?
Clicker games require a good deal of DOM manipulation, specifically event handlers on buttons. To make this project more interesting and have more DOM related practice, I plan on having visuals that update every few seconds. For my clicker, I want to make a battle style clicker. The player would be a hero in which they fight off different enemies to earn gold. The gold they earn can then be used to buy upgrades or hire companions to help defeat enemies more quickly. 

### Win/Lose Logic
Typical clicker games do not directly have the concept of a win or lose. Many clicker game players define a "win" as achieving personal goals such as completing all achievements, earning more than a certain amount of money, having a certain number of companions, etc. 

### Game Link
https://dhagandev.github.io/Unit1BrowserGame/

### How to Play
This game is fairly easy to pick up, even for new players. As a user, you will click to buy companions or upgrades. From there, it is simply the joy of watching "battles" and seeing your money grow.

### Technology Used
* HTML
* CSS
* JavaScript

### Must Haves
* ~~A hero character~~
* ~~One companion that can be bought~~
* ~~Two different types of enemies~~
* ~~Three types of upgrades~~
* Three achievements
* ~~Tracking stats~~
* ~~Player and companions updated based on upgrades~~
* ~~Click handlers~~
* Hover effects
* ~~Scrolling~~

### Stretch Goals
* ~~Players input their name, hero is then named the inputted value~~
* Animations
* Audio
* More enemies
* More companions
* More upgrades
* More achievements
* ~~Responsive design~~

### Hand-written Sketching
(Add image here)

### Screenshots
(Add image here)

### Pseudo-Code Ideas
#### Potential Inherited Class Structures
##### Characters Class
* **Contains:** Image, Name
* **Sub-classes:** Hero, Enemy

##### Hero
* **Contains:** Attack strenth, Attack speed
* **Sub-classes:** Companion

##### Companion
* **Contains:** Quantity, Functions to buy companions, Override attack strength to be attack stength x quantity
* **Sub-classes:** Possibly sub class potential companions (such as wizard or fighter) to be able to preset images for the type of companion and specific base strengths and speeds

##### Enemy
* **Contains:** Health, Coins dropped function
* **Sub-classes:** Different types of enemys to make spawning easier; would have preset images, preset health values, preset coin drops (likely as a range that would be randomly picked from, so one enemy may not always return the same amount of coins), and presets determined health

#### Single Instance Classes
##### Stats 
* **Contains:** Damage done, Money on hand, Total money earned, Number of enemies killed, Upgrades bought, Achievements earned

#### Achievements 
* **Contains:** Map of what has been earned (Key/Value pair being Achievement Name/True/False), Map conditions to earn achievements (Such as killed first enemy)

#### Upgrades
* **Contains:** Map what has been bought (Key/Value pair being Upgrade Name/True/False), Map conditions to buy upgrades, Run functions to update what is being upgraded

**_Might derive a parent class for Achievements and Upgrades if there is enough overlap_**

#### Potential Game Loop Options
1. Initialize information - Game manager class?
	1. Create the Player's Hero from Hero Class
	1. Set statistic values to starting values
1. Randomly generate an enemy - Enemy manager class?
	1. Spawn this enemy on the battlefield position
	1. Create health bar above enemy 
	1. Enemy stays up until enemy health is <= 0
1. Display all information, including Player's Hero and Enemy (Render?)
1. Player (and present companions) attack based on attack speed - Game manager class?
	1. When an attack occurs:
		1. Add to damage dealt.
		1. Remove from enemy health
		1. Check if enemy died
			1. If enemy died, add to monsters killed
			1. If enemy died, add coins to money on hand
			1. If enemy died, add coins to total money earned
		1. Call attack timers again

### Possible Image Sources
* https://rvros.itch.io/
* https://jesse-m.itch.io/skeleton-pack
* https://elthen.itch.io/
* https://opengameart.org/content/noble-ranger
* https://opengameart.org/content/bronze-knight
* https://opengameart.org/content/pink-thief
* https://opengameart.org/content/priest
* https://opengameart.org/content/lpc-wolf-animation

### Biggest Challenges
Due to having a complicated connection of classes, my biggest challenge was determining how to convey the information between all the classes. For the managing classes, it was simple. But once I tried to connect the heirarchical classes in, I ran into some trouble. I had to solve this using a rather hacky solution of forcing the classes to have knowledge of one another. 

My second largest challenge came in the form of responsive design. I began with a mobile first approach and had different layouts in mind for the three main platforms - mobile, ipad, and desktop. Once I had mobile in a good place and had the functionality in, I began scaling it to ipad and desktop. In true development fashion, this led to the entire build breaking. It was a slow process to rebuild the application as it took a significant amount of refactoring. Even now, there are areas that I could refactor to make the code more readable.

### Key Learnings & Take Aways
This is not quite related to writing the code for this program, but my biggest take away is learning to say no to helping others when I am behind on my own work. Quite frankly, this project is not up to where I would like it to be, and I could not finish my minimum requirements. Normally I love helping others out with their code, but when I started falling behind I had to take a step back and reorganize my priorities to focus on my own work. This included changing the priorities of my minimum requirements. I came to realize that I would rather have a game with less, but more polished features than one with several features that are half baked. I opted to put achievements and hover on hold in favor of polishing the other features. 

### Project Continuation
* Add in hovering on desktop.
* Create achievements (code set up, not implemented).
* Add in additional upgrades
* Add in additional companions
* Add in additional enemies
* Improve styling: New font, no basic colors, etc
* Max button report updating with monetary gains/loss
* Audio
* Animations
* Imagery on empty upgrade blocks
* Complex equations to make enemies increasingly more difficult