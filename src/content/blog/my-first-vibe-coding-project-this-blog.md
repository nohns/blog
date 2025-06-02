---
title: "My First Vibe-Coding Project: This Blog"
description: "For trying out the vibe-coding experience, I needed a green-field project for doing it..."
date: 2025-06-02
tags: ["vibecoding", "AI"]
---

Until now, I have done all my frontend projects _manually_ as React SPA's or Next.js applications.
By manual, I'm referring to a no-AI workflow.
I have had a scepticism for using AI to build entire applications, out a fear of technical debt.
Things like UI code/logic being duplicated multiple places and an overall unmaintainable code base.
Don't get me wrong, I _do_ use AI for my day-to-day work, but more in the form of a friend that knows a little about a lot of things...
and, I always try to confirm that the claims made by the often overconfident chatbot is actually legit.
Testing it either in code or by asking qualified follow up questions.
If the conversation goes around in loops, immediately loose confidence in its answers.

But there is a first for everything, so in this blog post I will talk about my first vibe-coding journey.
What could possibly be more suited for an AI, than a blog site that it has probably been done a million times before,
and lots of open source code backing it up.
At the same time, I had an empty domain, _nohns.dk_, which just displaying a placeholder page, so I figured that I needed to do something about that.

For the curious, the site is written with [Astro](https://astro.build/), and the final source code is available on my [Github](https://github.com/nohns/blog).

## Starting Out

I started out with some simple requirements for the site:

- Blog posts should be written as simple Markdown files.
- Site should sport a dark terminal-inspired UI design, with ASCII art and beautifully rendered blog posts.
- Not too many fancy pancy features or disturbing UI elements.

In my mind, I was thinking of using a framework like [Astro](https://astro.build/), which I knew supported markdown as a content source.
Initially, I tried using a web service called [Zapi](https://heyzapi.com), for _vibing out_ the entire website.
I found it in a [Reddit post](https://www.reddit.com/r/astrojs/comments/1k5ui5x/astro_vibe_coding/) which piqued my interest.
It went well enough, until the actual coding part.
The chat with the AI agent, stopped working and failed prompts continued to eat up all my free credits.
At the same time, I also realized that I would be unable to actually export the website, to run on my own server without paying for the subscription, which was a no-go for me.

But, not everything was lost. Zapi generated a PRD (product requirement definition),
which outlined all lot of features that I did not think about initially.

## Enter the Cursor IDE

Cursor, is the new hot IDE on the block.
It fully embraces putting the AI in the driver seat, while delegating the programmer to the passenger seat, to tell directions.
Naturally, I got started by downloading the IDE, created a project folder and pasted the PRD from Zapi into a README.
Then, in the chat window I enabled agent mode and instructed it to follow the requirements outlined in the README.
I didn't pick any specific LLM, for it to use, but simply chose _auto_, as I wanted to do what Cursor thought was best.
A couple of prompts in, I got a half broken website. All files generated from the AI.
Or rather, the AI generated the commands to run, which scaffolded the Astro project.

Impressive, but I still head to take the wheel from the AI at times, where it seemed lost.
This was especially for runtime errors happening when running the UI.

Also, not all the requirements of the PRD has been completed.
It did not create functionalify for exposing RSS feeds for instance

Many times, I ended up fixing things manually as it was easier that instructing the AI of how I wanted to position a specific group of elements in relation to some other elements.

## Takeaways

- _Documentation reading seems more and more obsolete._
  But dont be fooled, documentation _writing_ is still very much necessary.
  It's very clear when an AI does not know what it's talking about. That is often when no online documentation is available.
  This also makes it very unknowledgeable about how proprietary code works, i.e what almost everybody writes at work.
  But when an AI gets to read the documentation, it becomes very powerful.
  Especially, when it is able to point at exactly where it has read it.

- _Context window size seems to be an issue still._

- _Frontenders have a hard time ahead._

- _Use AI, but do it right._

<div class="prose prose-invert ...">
  <Content />
</div>
