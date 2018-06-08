---
title: Easy Digital Downloads
date: '2015-07-15T15:02:00-04:00'
layout: default
categories:
- WordPress
---
I want to express my appreciation for an open source project that recently made my life a lot easier.

A few years ago, I worked with a client to create a website allowing people to purchase sheet music she composed and download them as PDFs. At the time I wasn’t familiar enough with htaccess processes to create protected directories for the PDF files, so I relied on another online service to host the files and purchase info. That service permanently went offline recently, leaving my client’s site inoperable.

Obviously this became an urgent project, and I needed something I could quickly implement out of the box to process the file purchase downloads until I could write my own solution. I found the <a href="https://wordpress.org/plugins/easy-digital-downloads/" target="_blank">Easy Digital Downloads project</a> that integrates with WordPress, and was immediately impressed with the features. I converted the site to WordPress and plugged in Easy Digital Downloads, and had things back up and running within a couple hours.

Now the download files are hosted, maintained, and protected on the client’s server, so we no longer have to worry about a third party service going dark, and I can hook into the plugin and WP Engine to do any customization I need. Plus, the code is minimally invasive to the site. The Easy Digital Download project has saved me a lot of stress and hassle on this project.
