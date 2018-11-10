---
title: JAMStack Part III
date: '2018-10-13T15:07:00-04:00'
layout: default
categories:
- JavaScript
- JAMStack
---
If you haven't read parts I and II of my JAMStack posts yet, make sure you read those first!

I want to dive into some of the more significant benefits I've seen working in JAMStack. I'll be going over performance, low overhead costs, and security.

My current full time work focuses mainly on maximizing SEO for a large number of monetized websites. The majority of the work I've done so far in JAMStack has been converting these sites from WordPress over to JAMStack for performance gains (and subsequently gains in Google ranking). JAMStack is all about cutting the fat from a website. It let's you completely cut out the major performance bottlenecks, like databases and backend logic, that plague other stacks. This also helps reduce the time I spend testing performance, as I can be more focused on front end performance tests. Every site I've converted so far has seen performance increases that would be impossible with any other stack. This report is an example of one site's before and after:

![conversion](/assets/images/conversion.jpg)

Every metric of site performance improved substantially after conversion. Most importantly, it went from an unacceptable 12 second load time (<a href="/the-web-in-developing-nations/">read more about the 10 second threshold for websites</a>) to a blazing 2.1 seconds. For this site, that directly correlates to higher search rankings and more conversions.

I briefly went into hosting costs for JAMStack sites in my last post. Because JAMStack sites ultimately compile down into static HTML files, they are incredibly easy to host compared to sites that need a backend language and databases. Using this blog site as an example, I have a free Algolia account that handles the search functionality, a free Webtask account that handles submissions to my freelance work form, and a free Forestry account that let's me easily write content for this site. I could also easily host this site on Netlify for free (but I like having my own dedicated server for other projects I work on). The only things I have to pay for here are the jdillman.com domain name and email. The reason all of these services are free or very low cost is because JAMStack is all about each part of a site being as focused as possible. You're never using resources or bandwidth you don't need.

One last benefit to JAMStack that should be very apparent is its security. I've seen WordPress sites hacked or compromised hundreds of times, even when they are built by extremely diligent developers. And the target for hacks on these sites in every single instance I've seen is the database. So because there is no database in JAMStack, <em>there's almost nothing left to hack</em>. There's no SQL injection, very few access points to hosting vulnerabilities, and no CMS maintenance to always keep up with. In order to compromise a JAMStack site, a hacker would have to be able access something like GitHub or a server shell. I'm not saying it's completely impossible for this to happen, but it's undeniably safer than a typical WordPress setup.

And with that, I am wrapping up this series of posts on my experience with JAMStack. My bold prediction is JAMStack technology will outpace alternatives like WordPress for custom web development in the next decade. At the very least, I believe all web developers should be keeping their eyes on JAMStack and experimenting with its capabilities.
