---
title: Shopify Development
date: '2017-03-22T14:51:00-04:00'
layout: default
categories:
- JavaScript
- PHP
---
Recently I’ve been working on some custom development work for a few Shopify eCommerce sites. My work so far has included plugin apps and theme development.



On the theme development side, Shopify only exposes the front-end view code (HTML, SCSS, and JS) in the theme templates, enhanced with a templating language they call Liquid. The Liquid templating language seems exactly like Twig, which I’ve used countless times in the WordPress theme MVC framework I use. So the transition to Shopify theme development was pretty smooth.



On the one hand, keeping theme development exclusive to front-end code makes a lot of sense from a programming standpoint. It keeps the views ignorant to back-end controller implementation, which is something I strive for in my WordPress theme MVC setup. On the other hand, it can make any extra functionality initially more difficult to implement. In WordPress theme development, it’s almost too easy to add things like content filters, meta fields, and new taxonomies. In Shopify, that sort of functionality is relegated to plugin app development, which can help organize code and pays off in the long-term. Overall I think Shopify takes the right approach to theme development.



On the plugin app development side, Shopify provides a robust API for any functionality additions or modifications you might want to make. A standard Shopify instance is locked down on the hosting they provide, so all apps have to run on your own external server. The app has to either provide its own UI on its own domain that the Shopify admin links out to, or hook into Shopify’s Embedded App SDK to display in a frame within the admin.



I’m wrapping up work on two embedded Shopify apps built in PHP. The first provides extra admin fields to products, so admins can control some custom functionality for product pages. The goal is to provide something like an Advanced Custom Field experience to the Shopify admin. For now, the fields are configured by a developer through a JSON file, so the client admin doesn’t have to bother with creating and implementing fields. I’m using it to create product fields for custom warning messages and minimum order quantities. The second app integrates Shopify orders with Amazon S3 storage. The use-case for the client is to have customers upload images with a customized order, and store those images in an S3 bucket. Right now the app uses Shopify’s CDN as temporary storage for the image as the customer completes the order, and then hooks into Amazon’s PHP SDK to upload the image to the S3 bucket.



I’ve really enjoyed working in Shopify so far. I like the strong separation between back-end functionality and templating. It’s been a nice refresher from the many WordPress projects I’ve had lately.
