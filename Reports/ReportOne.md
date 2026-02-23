# SET08801 - Report One
By David Watkin (40803890)

## Introduction

The aim of this assignment is to create a fun website, showcasing my proficiency in HTML, CSS and JavaScript. Personally, I have a little experience with these languages and web development in general but have not done this for a few years.

In the spirit of the assignment, I will be aiming to code everything from scratch and avoiding the use of any frameworks or no standard APIs.

Having recently been working through The C# Player's Guide by RB Whitaker, I immediately decided what my website would be. In the C# Players guide, one of the coding exercises is to make a dungeon crawler loosely based on the 1973 game Hunt the Rumpus by Gregory Yob. I decided this type of game would be a perfect fit for this assignment.

Unfortunately, although I knew what I wanted to create and how I was going to implement it on a technical scale, I am not a particularly imaginative or creative person. Therefore I decided to enlist the use of ChatGPT to assist with the creative content of the website using the following prompt:

> During the following interaction I do not want you to provide any code snippets or blocks for the implementation of what is discussed. The output should be conceptual ideas only. If the idea requires none standard features of a programming language you should identify the feature to me for further research independently.

> The languages concerned with this discussion are HTML, CSS and JavaScript. I want to create a small website which will be a dungeon crawler type game based on Find the Rumpus. The dungeon will contain 16 rooms, a four by four grids, with each room being a operate HTML page. Navigation will be via hyperlinks on each page with North, South, East and West directions. Directions to rooms outside the grid will not be available options, for instance the bottom left corner will only have North and West as options. The control of navigation and senses to adjacent rooms will be manually handled in the HTML document, not dynamically done with JavaScript. Only the interactions within rooms will be coded with JavaScript.

> The theme will be about the World Wide Web and the languages used to implement it, HTML, CSS and JavaScript. I would like you to provide a background story and overall objective based on the theme. I would like content for each room type (not all rooms need to be occupied), maybe some sort of event or a monster fight or any other idea you have as long as it is possible to implement in JavaScript as a beginner. I plan on using session Storage for items or player states that can be tracked throughout the game.

> Please provide detailed flavor text for the various rooms, including a few varieties for empty rooms and a good introduction page explaining the story and what the user needs to do.

> Also provide a suggested layout that would make the game challenging but not impossible.


This took more than a few tweaks and revisions to get something I was happy with. The full answer provided by ChatGPT is included at the end of this report for full Transparency regarding AI usage in the execution of this assignment.

This report details the first stages of the assignment and will deal with explaining and expanding on my idea and the plan for the initial development of the website with HTML and CSS. The JavaScript elements will be discussed but final execution may differ from what is defined here.

## Website Layout Overview

As per the prompt shared in the introduction, this website will consist of seventeen pages as it currently stands. The homepage will serve as an introduction and access point to the game with the subsequent pages providing the game map.

I decided to split the game map into 16 separate pages with navigation through hyperlinks as I believe this is a good method of showcasing HTML proficiency. The other option would have involved a single page with the entire game executed via DOM manipulation with JavaScript; however, I felt hyperlink navigation better suited the requirements of the assignment. As well as the standard DOM manipulation for the interactive events in certain rooms/pages and for defeat/death or victory conditions.

The homepage will have a single link to the entrance of the game and from there each page will link to its adjacent rooms/pages. As the layout is in a grid, edge cases will only contain relevant navigation options. For example, you will not be able to travel west from a room/page on the left edge of the grid.

> Figure One - Site Map

## Homepage Layout Overview

The homepage will be a simple single column page with 3 rows. A header block, main content block and a navigation block. These will be top aligned with whitespace below the navigation when additional vertical space is available. When resized the blocks will shrink up till a lower limit which will be defined at build stage, at which point side scrolling will come into play. There will also be a maximum width defined to account for widescreen monitors and keep the content in the centre of the screen and easily readable without head turning.

The intention is a responsive design viewable on a range of devices, from and ultrawide desktop to a mobile screen.

> Figure Two - Homepage Wireframe at various resolutions

## Dungeon Room Layout Overview



## Initial JavaScript Requirements

As per the introduction, this report details the first stages of the assignment and will deal with explaining and expanding on my idea and the initial development of the website with HTML and CSS. However, to plan and execute the idea, I am required to think ahead and ensure what I would like to achieve is possible.

Once I had decided on the multipage website arrangement being driven via hyperlinks, I soon realised that although this simplifies the JavaScript element of the assignment a bit (although there should still be more than enough to demonstrate proficiency), it creates its own issue. For my website to work, it will need to hold data relating to player and game status. I was not sure how this was handled but some google investigation led me to the localStorage and sessionStorage JavaScript APIs. I have not defined the usage of these APIs yet, only confirmed their existence and investigated what each provides. Based on my research it would seem sessionStorage best suits my use case as there is no requirement to save status throughout multiple sessions due to the games small size.

## Reference Materials
