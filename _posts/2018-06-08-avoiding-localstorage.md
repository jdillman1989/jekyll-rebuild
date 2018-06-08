---
layout: default
title: Avoiding localStorage
date: '2015-01-23T15:05:00-05:00'
---
I’ve worked on a few sites now that made use of localStorage in javascript. I try not to rely on writing cookies when it comes to site functionality because it increases page weight and it can be a little shady. Cookies are notorious for storing and accessing personal information on more malicious sites. For this reason, many people disable cookie storage. If core functionality of a site relies on localStorage, that means these people will simply not be able to use it, or their experience will be brutally interrupted by an alert. I don’t think a site’s functionality should be the responsibility of the client side.



I actually considered using localStorage on this blog for awhile, in regard to the day/night mode button. Night mode is a great UX element, but it’s a little tricky to keep it consistent throughout a user’s complete visit to a site or app. I could have simply relied on a cookie to store a user’s preference, and carried that data throughout their session.



What I decided to do instead is to set a location.hash value, and run a script based on that value. So if a user clicks the night mode setting, a nightMode function will run that changes the page styles, adds a #night to the URL, and adds the #night to all links on the page. The script can then pick up the #night hash value and run the nightMode function on page load.



It might not be the most elegant solution, but it solves the issue of carrying user preference throughout a session, and it works with bookmarks. I think it’s worth avoiding the downsides of using a cookie.
