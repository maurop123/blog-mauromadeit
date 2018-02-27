6:44 Sat Feb 3 2018

# Potential titles

- A month in the life of a digital nomad
- Starting digital nomad life
- First 60 days as a digital nomad
- Tips on getting started as a digital nomad

---

![beautiful Argentine scenery]()

For the last __ days, 

I'm a web developer working for a small startup-like team in a bigger well-established company. What's great about such an arrangement is that you don't have the same life-or-death pressure that keeps you working 24/7 like most startups have, and your boss is likely open-minded enough to consider such an arrangement.

After a while in any new venture, it can be difficult to remember how exactly one got through the trying ramp-up period. Since I'm still very much in the beginning of this, I'm hoping to glean some of the more useful early experiences for practical tip.

This is not only my first month of digital nomad life, but the first time I travel outside my home country (US). With that said, I'll try to filter out most of the obvious tidbits with help from more experienced travellers, but please excuse me if some slip through the cracks.

## What is a digital nomad?

If you haven't heard, a digital nomad is someone that travels while working remote. It's ideal for anyone who wants to travel and can land a gig that will pay them to work while doing so. Programmers, designers, and other professions that are almost entirely handled on a computer have an easier time making such a transition. The theory is that if you can figure out how to keep your employer happy while working remote, then this lifestyle can be sustained indefinitely.

### Why would your boss be against it?

Simply put, they don't know if they can trust you. That's why people are still required to drive to the office every day 9-5, or if your boss lets you skip rush hour traffic, that is ironically created by this very requirement, then it's 10-7.

It's easy to get mad at the system. It's not easy to suck it up and work on changing it with patience and a smile on your face, but that's likely what you're gonna have to do to get what you want in the end. Don't despair!

# It's hard to work while moving

There is no room for forgetting to charge your phone or your battery.

Buy an extra laptop battery and keep it charged to extend your time away from outlets. I didn't get my second battery in time for this trip, but already there are many times I've wished I had.

# Plan ahead and learn from what's passed

Some people plan ahead well, some have a good habit of reviewing the past, and some can remin ever-present in the moment, but few navigate all three well. Being in the moment is natural for me, so I don't know what to say to help with this, but it does seem that constantly facing new situations has a way of bringing one into the moment because of the need to pay attention to surroundings so to avoid trouble and catch opportunities.

As for keeping track of experiences, I've made a habit of keeping a log, sometimes written, but usually in a Google Doc. Whenever I have a chance, I go to the end of it, write the time, the day of the week if it's the first entry of the day, and also the date if it's been a few days since I last tracked it. This structure makes it easy for me to keep chronological track of my experiences without interrupting my stream of consciousness. The exercise itself of explicitly going through an experience helps to notice things about them that I may want to learn from, decide to handle differently, or simply remember fondly.

## Get A Data Plan On Your Mobile

If you plan on relying public hotspots (like coffee shops) or even to get some work done while on the train or bus, realize that it may not always work. Asking the waiter if they have wifi and connecting with your phone before deciding to stay is a good habit, but it's not enough to let you know if the internet works well, or if it'll die within 30 minutes of using it.

A generous data plan and a phone with the mobile hotspot capability will likely come in handy many times. I pay about $25 / month for a plan with 4GB with the option to add data if needed. I haven't gone over 2GB yet, but am currently writing this tip in a house whose wifi unexpectedly died.

**Bonus tip** - Try to convince your travel partner to get a plan with a different provider so that you can get the best coverage of two different companies!

## Setup Offline Workflow

The truth is you won't always have internet. Wouldn't it be great if you can still be productive anyway? I'll describe what I've done to set myself up to work offline as a frontend dev, but hopefully you can still apply some of the general ideas to your own workflow.

The main thing keeping me online as a frontend dev is downloading resources and API calls. The way to setup the first is simple. Just download and save those same resources to a file. Then whenever you're offline, you can comment out the line that goes online to find the resource and add a line to load the static file instead. Or if you really wanna get fancy, you can setup an OFFLINE environment variable to toggle between your online and offline code. That way you won't accidentilly push your offline code to production. Depending on your compiler, this code can also be automatically removed in your production build.

As for API calls, what I did was to copy the data from the response for each API call I use, and save them in static files as well. This is great mock data for unit tests, too. Then I just include this data in my app's offline code. It works surprisingly well. So much so that I sometimes use my offline mode even when I have internet because it's faster than waiting on network requests anyway. Chances are you may already be mostly setup if your big on best practices and follow the principle of developing completely locally.

This all might sound easy, but really, it can take a while to setup, and you can't do it after you've lost connection, so it requires you invest some of your precious online time to do it. The upside is that you can enjoy beautiful country-side vistas while on the train between towns. Like this one!

![beautiful country-side vista]()

## Practice Discipline

As inpiring as the novelty is, it can also be very distracting. The best description I've heard for discipline is that it's not something you've either got or you don't. It is actively deciding to say "No" to distractions until your task is complete. Another version is to not let any excuse keep you from doing what you originally said you'd do. From this perspective, discipline is more like a muscle, and the more you exercise it, the stronger you get at focusing on your goals.

One obvious way I exercise discipline was to avoid distractions while working in public. That meant resisting the reflex to look at each passerby. If you're interested in reading more about changing habits, here's a post I wrote on [the power of "instead"]().

Another way I used this was to get out of bed early every morning. It may not be for everyone, but getting the extra couple of hours to myself in the morning really helped to get ahead in my work to make more time for enjoying the fun things that would come up in the evening. **Bonus tip** - People party at night, everywhere.

## Mastering Communication

### With your boss

Unfortunately, you can't read your boss' face on Slack, so probably the most important thing is to figure out is what your boss *really* cares about. Why? Because when you don't know what he/she is thinking, it helps to keep in mind what the top thing on their list is anyway.

Your boss will also probably want to know when you're going to be online but mostly offline during their working hours. Make sure to overlap at least a couple hours with the rest of your team, but if you can swing it, 4 or more is great, especially to start.

### With your travelling partner(s)

Unless you're travelling with a bunch of other digital nomads, it's gonna take some explicit conversations every now and then with your partner on how to share the days while on the road. You might feel that hunting for hotspots with slow wifi in another country is 10x better than working from the office on that fiber connection, but your partner may not be as interested in the tour de coffee shops.

# Author notes

These notes are not meant to be published. Rather they are meant to help in writing this piece.

- Include a lot of pictures. Should be one of the best parts of writing this kind of post.
- Leave out some good questions. This isn't meant to be a comprehensive post, and it'd be good to leave some material for another if people are interested.
 - How to negotiate a remote work agreement.
