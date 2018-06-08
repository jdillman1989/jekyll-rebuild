---
title: AJAX SVG Map WordPress Plugin
date: '2014-09-03T15:07:00-04:00'
layout: default
categories:
- JavaScript
- PHP
- WordPress
---
I’ve been working on an interactive map WordPress plugin on and off since last September. It’s been an awesome learning experience.

**What it is:**

* A world map graphic rendered on the page using HTML5’s SVG element
* Clickable regions on the map
* An infographic rendered on the page using HTML5’s canvas element

**What it does:**

When a visitor clicks on a region of the map graphic, the infographic is populated with the data corresponding to the clicked region. It also loads a post on the page with text content about that region. This all happens through one AJAX call, so no page reload necessary!

I’ve had a few interesting iterations of how the map functions. I’ve had it loading a few of the most recent posts from a category associated with the clicked region. I’ve had it loading a single post’s content up to the Read More tag, and then including a button to the full post. For my current needs, I’m just loading up the full content of a single post corresponding to the clicked region.

There’s still a good chunk of work left before I’d call it finished. I’m working on getting as many options integrated into the Admin as possible. Right now I only have the infographic’s data values and post selection available in an admin screen. Eventually I also hope to give users control over how post content is displayed, and how regions are grouped together, but these options will be more of a challenge.

I’m currently using <a href="https://jqvmap.com" target="_blank">JQVMaps</a> and <a href="https://github.com/FVANCOP/ChartNew.js/" target="_blank">NewChart.js</a> for the plugin.

A long term goal would be to include all of JQVMap’s API, so users could control what type of map they want. I also haven’t worked toward including all of NewChart.js’ API options yet. It’s as if the more progress I make on this project, the bigger it becomes. But the bigger it gets, the more enthusiasm I have to work on it.

<a href="https://github.com/jdillman1989/interactive_map_wordpress" target="_blank">Here’s a link to the current WIP.</a>
