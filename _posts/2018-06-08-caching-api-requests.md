---
title: Caching API Requests
date: '2018-02-21T14:47:00-05:00'
categories:
- PHP
- WordPress
---
I recently helped to complete development work on a pretty unique web application. The organization had an idea to create a place for people find out about the accessibility of many different business locations. Their hope is help people with physical disabilities better plan out any business or errands they have ahead of time, so they can choose the most accessible locations. They also believe this will help push demand for businesses to become more handicap accessible.

The solution our team came up with was to create a site based around Google Maps API, and provide an interface for users to submit reviews for individual locations. Users can search for a location on the site using the same functionality as Google Maps. Once they’ve selected a location, they can see the average ratings for that location’s facilities (parking, access, bathrooms, tables, mobility, and an overall score). They can also see what other people have written about the business in terms of its accessibility.

My role in the project was to make sure the site and server could perform well under a large user load. The original version of the site quickly ran into problems hitting request limits on the Maps API, and general slowness from poor database design. My contribution was to cache the Maps data into the WordPress database, and integrate some other custom tables into WordPress.

I added logic to the site so that whenever a user selects a location that has never been clicked on before, WordPress creates a post in a ‘locations’ custom post type. The location name, map ID string, address, phone number, website, and images are all saved to the post’s meta. So whenever that location is selected in the future, the data can be pulled quickly from the local database rather than called from an external API. Each locations post also includes meta for when its data was last pulled from the API. If it has been two weeks since it was pulled from the API, the next time a user selects it, it will update its data from Google. I also added functionality for the comment ratings meta to be cached into the location post, so it no longer has to be calculated on each view.

This project stood out from my typical development work because of its unique challenges. You can see the current version of the site <a href="https://johnnyspass.com" target="_blank">here</a>.
