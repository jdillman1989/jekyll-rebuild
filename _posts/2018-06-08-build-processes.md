---
title: Build Processes
date: '2015-12-18T14:59:00-05:00'
layout: default
categories:
- JavaScript
- SysAdmin
---
If there’s two things every developer loves talking about, it’s tooling and build processes. I’ll start by talking about the build process I’m currently using for my web projects.



Every website and application I develop is versioned in Git, and hosted on either BitBucket or GitHub (though not always on my own personal account). I take advantage of the processing hooks that come with Git as the hub of my build process. I start by setting up a bare headless Git repo on the development server, and adding that repo as a remote on the project’s repo. That way I can quickly, easily, and safely push code up to the server. Then I set up Git’s built-in post-receive hook, where all the magic happens.



In the post-receive hook, I run a shell script to set the work tree of the development server (wherever the live directory is). Then the script does a \`git checkout\` to pull the actual project files into the live directory. So in short, I can use a single Git command to push code to a secure headless repo on the development server, which then runs a script to pass the project files into the live directory. This is a fairly standard setup, but usually there’s a lot more work to do with compiling and compressing. Work that can be automated on the server.



If I have my way on a project, I’m always using Sass and jQuery for styling and scripting. Those two file types both need to be compiled and minified to run and deliver quickly on the web. I use the same post-receive hook to run a \`sass\` command that compiles and minifies my .scss files into pure .css all in one go. Easy enough, but the javascript takes a bit more effort. For that, I use the Node module Gulp. Gulp is simply a javascript file that is meant to run on the server, similar to a shell script, rather than in a client. It’s used to do tons of really amazing work, but for my purposes it’s great for simply minifying javascript and other assets.



With Gulp, I start by writing the gulpfile.js that will hold the minifying script. I use the Gulp Uglify plugin to do this as simply as possible. Part of the reason I use Gulp is because it can handle image compression as well as javascript, so I also use the ImageMin plugin. Once the script is in place for the Uglify and ImageMin processes, I push the Gulp file up to the development server. On the server, I install Node, npm, Gulp, and the two plugins, so that I can start actually running the Gulp file. Then I can simply add the \`gulp\` command to that same post-receive hook, and everything will be up and running smoothly.



The advantage of this build process is that I don’t have to do any manual compiling or minifying, and more importantly, I don’t have to version or push around any compiled or minified files. It keeps my local project repos and my GitHub repos nice and clean. I do usually version the Gulp file, but I think it’s a small price to pay. It takes some initial setup time, but over the course of a project, the overall time saved is well worth it.
