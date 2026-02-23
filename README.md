# SET08801 - Web Technologies Coursework

## Introduction

The aim of this assignment is to create a fun website, showcasing my proficiency in HTML, CSS and JavaScript. Personally, I have a little experience with these languages and web development in general but have not done this for a few years.

In the spirit of the assignment, I will be aiming to code everything from scratch and avoiding the use of any frameworks or no standard APIs.

> Insert previously written introduction section here: On another machine but not committed.

This report details the first stages of the assignment and will deal with explaining and expanding on my idea and the initial development of the website with HTM and CSS. The JavaScript elements will be discussed but final execution may differ from what is defined here.

## Website Layout Overview

As per the prompt shared in the introduction, this website will consist of seventeen pages as it currently stands. The homepage will serve as an introduction and access point to the game with the subsequent pages providing the game map.

I decided to split the game map into 16 separate pages with navigation through hyperlinks as I believe this is a good method of showcasing HTML proficiency. The other option would have involved a single page with the entire game executed via DOM manipulation with JavaScript, however I felt hyperlink navigation better suited the requirements of the assignment. As well as the standard DOM manipulation for the interactive events in certain rooms/pages and for defeat/death or victory conditions.

The homepage will have a single link to the entrance of the game and from there each page will link to its adjacent rooms/pages. As the layout is in a grid, edge cases will only contain relevant navigation options. For example, you will not be able to travel west from a room/page on the left edge of the grid.

> Figure One - Site Map

