# SET08801 - Report Two
By David Watkin (40803890)

Website: [https://dwatkin-dev.github.io/SET08801/](https://dwatkin-dev.github.io/SET08801/)

## Introduction

To recap, the aim of this assignment was to create a fun and engaging website that demonstrated my proficiency in HTML, CSS, and JavaScript. Although I had some prior experience with these languages, I had not used them in several years, so this assignment served as a good refresher in front‑end development.

As I stated in report One, I committed to coding the entire project from scratch, avoiding frameworks, libraries, and non‑standard APIs. I felt this was the best approach based on the brief provided and would be the best way to showcase my abilities.

Now that the assignment is complete and the website is fully functional, this report will outline the development process, highlight where the final implementation diverged from my initial plan, and reflect on the challenges, improvements, and achievements that shaped the project. It will also consider what I would enhance or expand upon if given more time and the benefit of hindsight.

## Differences Between Initial Plan and Final Implementation

The core idea of the website and main site map I had in mind have stayed consistent throughout the project. However, the design of the individual pages did change somewhat. At the time of Report One I had already drastically changed the layouts from what I had originally shown in my wireframes. However, as development continued, I ended up with a layout closer to my original wireframes.

I found my new layout design at Report One stage, wasn't really performing on certain devices/screen sizes. It looked great on my large widescreen PC monitor, but when accessed on my laptop, scrolling was required to see all the information, and it looked terrible on mobile devices.

I ended up compacting everything slightly and arranged the sections of the site with the aim of all the pertinent information being easily accessible to the user and the navigation remaining in the same place for each page.

I think this leads to a cleaner look overall and navigating between pages is a lot smoother when everything stays in the same place.

The website is not as responsive as it should probably be in this day and age, but it is workable on all devices I tried.

As far as the inner workings of the website, I had a rough idea of the types of rooms/challenges I wanted to provide the players but there was nothing firm defined as to how they would function and what exactly the cause and effect of each room would be. I ended up making these decisions as I added the JavaScript functionality to each room and I think it has turned out to be a reasonably challenging game but not unsolvable, especially with the use of a pen and paper or a good memory.

Overall, I think I stuck with my original plan more closely than I expected too.

## Features to Add or Improve With More Time

As it stands, the website works and meets all the requirements I originally planned. That said, there is always room for improvement. I treat this as a version 1.0 and hopefully in the future I will have time to revisit and expand upon the idea with more content and features.

Now the game map is fixed, to counter this I added instant death threats throughout the game. Going forward a variable map might be more interesting, however the game balance would need to be tweaked to suit this style, so the game remained solvable and enjoyable.

Visually the website could use some more work, I think. I am in no way a designer and not very artistically inclined so it would be good to get an outside opinion and advice on improvements I could make and maybe make the whole thing a little less text heavy and more visually pleasing.

I would definitely like to work on the website’s responsiveness. The vast majority of users are mobile based these days and I would love the game to work a little more smoothly on the small screen.

Overall, my code could use some refactoring and the whole thing could be tidied up. Some items felt a bit shoehorned in as I was completing the JS but this directly stems from the fact I had no real plan on the functionality of every page until I came to code that particular page.

The last major thing I would improve/change is my choice to make 16 separate pages for the 16 rooms. This choice meant that every time I needed to make a change to the HTML, I had to change it 16 times. Going forward I would stick with the 16 pages (As I said in Report One, I think this approach is in the best spirit of the assignment), but I would automate the generation of common page aspects using JS.

## Challenges Faced and Achievements Made

There were definitely challenges in the making of this site. Mostly around the JavaScript elements but also the CSS. I wanted the website to be as visually appealing as I could manage and this led to me delving into CSS animations. This was fun to learn and, although my particular usage is low level, shows the power CSS has.

On the JavaScript side, I stated in Report One that I wanted to use sessionStorage as I have done a quick search on retaining state across the site, so it was a nice surprise that this particular topic came up in the course material as I went on. I think my implementation of the sessionStorage, although simple, was effective.

The biggest learning was modules in JavaScript. I had never come across these before but made coding a lot simpler and less repetitive. Allowing a more modular approach to how I coded each page. I think this is a very powerful feature and something I will be using going forward.

The biggest challenge I had with this whole site was the resetting of my sessionStorage on death. This stemmed from an initial design decision of using hyperlinks styled into buttons for my site navigation. If I had used buttons this would have allowed more control over the flow of the program but as I used hyperlinks my rest code was racing against the GET request and failing to fire the majority of the time.

To fix this I was looking at a complete rewrite of every page to swap hyperlinks for buttons until a web search put me onto the `e.preventDefault();` which allowed me to hold the GET request until the sessionStorage had been reset and then resume.

## Conclusion

I really enjoyed this project, and it has made me want to delve back into web development. Wed Dev was how I first got into programming, but I stopped a long time ago as I decided I wanted to concentrate on desktop apps and games in C# and I wrote off HTML, CSS and JavaScript as not real languages and a bit basic.

JavaScript in particular I never really gave a chance too, but I will be striving to learn more going forward.
