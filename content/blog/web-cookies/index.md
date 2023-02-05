---
title: "What are Web Cookies?"
date: 2023-02-05T18:53:19+05:30
draft: false
tags: ["technology"]
---

Here's a quick read.

Cookies are small text files websites set on your browser when you visit them. 
These files hold pieces of labeled data such as username and password.

Here's an example of a cookie file.

```sh
username="some random username"
password="super complex password"
last_login=1675604361
```

When you close the website and revisit the site again, that site can 
read the cookie file it stored earlier and apply settings you set earlier.

Web browsers have an important security feature which prevents websites from 
reading cookies set by other websites. This means that a cookie set by instagram
is not visible to youtube when you visit youtube. Youtube only sees the cookies
it set. 

Some common uses of cookies are,

1. Save settings such as theme preferences.
2. Save account login credentials.
3. Analyze website usage behaviour.
4. Track you across websites to target ads.

Last 2 points are important here. Websites do this by setting a cookie with
an identifier that can uniquely identify you. For example, `uid=i_354a543`.
By reading this unique identifier, website knows that the user who liked a cooking
video yesterday is the same user who's visiting the site now.

Advertising companies like google and facebook take this tracking to the next
level. They provide small \[javascript\] programs to web developers which 
developers can put in their websites to get features like facebook share button
or google analytics. 

These small programs are called "pixels", tracking pixels to be specific. 
They place cookies to identify users. 

For example, think you visit `tutorialspoint.com` and they used facebook pixel
to provide a facebook share button. Facebook pixel can't see cookies set by
`tutorialspoint.com` but it can see the user identification cookie it set when 
you visited facebook. So now facebook know you've visited `tutorialspoint.com` and
read a article about `C++`.

Then facebook can serve you relavent ads.

## Why website alert users that they use cookies?

"Web Cookie" is something that only web developers knew about 5 years ago, but 
now everybody have seen that word. That is because websites now put pop-up alerts 
saying that they use cookies.

Why websites annoy users this way? Why can't they use cookies silently without
telling the user? Is there any technical requirement?

Of course not. There's no any technical requirement. Web developers can use 
cookies without telling the user, ...but, doing that might be illegal. 

I took almost 3 paragraphs to explain how advertising companies use
cookies to invade users' privacy and show people targetted ads.  Privacy is a
human right and advertisers violate that right through online surveillance.
Cookies are a major technology advertisers using to track people.  So EU
intervened.

I'm not a lawyer. I don't know much, but I know about 3 regulations that affects
usage of web cookies.

1. General Data Protection Regulation (GDPR)
2. ePrivacy Directive
3. ePrivacy Regulation

To comply with those regulations, websites should inform users about how they
use cookies and should take users consent before placing cookies in users' 
browsers. 

That's how annoying cookie pop-ups came in.

In this website you don't see any cookie pop-ups. That's because I don't use
any cookies. I don't have any analytics or tracking here.

EU regulations did not solve the online tracking problem. It only littered
web with annoying cookies. Thanking to those pop-ups, everyone now know something
called web cookies exist.

<div class="hr"></div>

P.S Websites don't save passwords in cookies for authentication. They use
something called authentication tokens.

<div class="hr"></div>

Here are some useful references.

[https://gdpr.eu/cookies/](https://gdpr.eu/cookies/) \
[https://gdpr.eu/what-is-gdpr/](https://gdpr.eu/what-is-gdpr/)