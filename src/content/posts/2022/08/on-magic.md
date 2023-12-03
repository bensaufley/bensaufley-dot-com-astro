---
title: On Magic
date: 2022-08-29T09:00:00-04:00
---

This post isn't specifically about Ruby on Rails, but it's definitely about Ruby on Rails among other things.[ref]Another example that I have limited experience with is Spring in the Java/Kotlin ecosystem, which is _more_ explicit than Rails because of the nature of Java, but still does a number of things at least semi-magically.[/ref] Rails is a very useful tool to bootstrap an MVC application, and to this day I haven't encountered an ORM I like better than ActiveRecord, but I want to talk about one facet of Ruby on Rails' patterns, which stems from the way Ruby works but also shows up in other languages and other tools: "magic."

If you've used Rails, you're familiar with the magic involved, but briefly: without using any code-generation tools[ref]À la [`gqlgen`](https://gqlgen.com/), where files are programmatically created that you would check in like any other code[/ref], Rails will create a massive assortment of methods dynamically at runtime based on the names of your models, controllers, and routes. So if you have a simple CRUD setup for your `User` model, you'll have things like `users_path`, `user_path(id)`, `new_user_path`, etc, and if the `User` model `has_many :posts`, then every instance of `User` will have a `posts` method to retrieve associated records.

To me, "magic" in coding is any scenario where without explicit declaration, an application seems to "just know" how to behave.

<!--more-->

What Rails does is extremely handy to bootstrap a web application where data relationships are straightforward and easily-defined.[ref]And I've found that in most cases, if things don't appear that way at first, it's not a problem with Rails, it's a problem with how I'm thinking about my data.[/ref] So if you need to make a web app with persisted data quickly, Rails can be a great choice. The magic takes care of all the _extra_ stuff and leaves you to focus on building out the business logic and the views quickly and easily.

There's an asterisk to "easily" there, though, and it grows as you start to try to scale your application: if you haven't internalized, mentally, all the great stuff Rails can do for you, bootstrapping is going to be anything but easy. You're going to have every page of the (generally quite good) [Rails Guides] open in a different tab, and you're going to find yourself digging into the (less-helpful) [Rails API Docs] pretty often, and what should be a fast development process is going to slow to a crawl.

I've had this conversation a lot: "it's hard if you don't know it" is a tautology, right? I don't know piano, so of course it'd be nearly impossible for me to try to play "Moonlight Sonata." That's not a problem with the piano, it's a problem with my knowledge base. But unlike piano, code _can be_ self-documenting.[ref]OK, the metaphor starts to fall apart here: there are pianos with light-up keys that could help point you in the right direction, but give me some leeway here.[/ref]

So magic can fail both junior and senior engineers in different ways.

Junior engineers will by definition be newer to any language or framework, and that lack of familiarity will slow them down. But when methods appear "magically," even the smartest IDE will struggle to provide reasonable discoverability that can help mitigate that unfamiliarity.

And there's a second problem for people who are newer to coding: when your application seems to magically "know" a lot of things, it starts to become unclear what it _doesn't_ know—what you need to "tell" it. I will always remember helping a junior engineer debug an issue in Rails, where the error message said "Unknown variable or method `my_collection`." I asked "well, where did you define it?" and the response was, "I didn't know I had to." I've spoken to people who went through a Rails bootcamp and came out the other side still missing a strong understanding of how the computer "knows" anything,[ref]The tl;dr is "it doesn't know anything you don't tell it, but sometimes you've told it in a way that you don't realize"[/ref] which is a foundational issue in a person's education, and for that reason I have recently taken to recommending against Rails as the first foray into coding for newcomers.

Senior engineers should generally not have this second problem, but the first can still be tricky. A senior engineer should be able to easily bootstrap a Rails application with little difficulty, but then you bring in a few more senior engineers, expand the scope of the application (likely a monolith by necessity), and all of a sudden discoverability starts to become a real problem even for veterans, because it's no longer an issue of "what can Rails do" as much as "what can this application do".[ref]I think there's a secondary problem that is not the fault of magic, which is that because Rails is so good for bootstrapping, you can easily end up with a large production application that is somewhat haphazardly built, with new features slapped on quickly, taking the bootstrapping far beyond the first days of the application. Obviously, "a good engineering team does it right from the start," but company pressures to launch and scale tend to take that out of the hands of even the best engineers.[/ref]

As a company and application grow, the collection of models and controllers will expand. There are many reasons the microservices model has become more popular, and one is that it presents an appealing way to break up these concepts and concerns into smaller chunks, requiring less mental overhead when someone ramps up on each service. But that's not a necessary step, and indeed comes with its own pitfalls. Monoliths are fine. I will not make that case here, but I'll just say monoliths are not by definition a problem.

It's just that when the monolith is built on magic, the relationships between data and the way data flows through the application can become quickly obscured. Your IDE may take you from point A to point B, but then stumble when trying to get you through point C to point D. Somewhere in the chain, even the best-documented code will likely pass through the world of magic methods and then it becomes much harder to predict what comes out the other side. Each individual instance of this is surmountable, for a skilled engineer, but a whole codebase founded on invisible code can result in a more difficult ramp-up, a more complex and hard-to-keep-current mental model of the application.

The Ruby and Rails communities have attempted to address some of what I'm talking about here by the introduction of [Sorbet] and then [RBS], which help by adding explicit typing to the dynamically-typed world of Ruby. It's a good first step, and with [`rbs_rails`], which can auto-generate typing for all the magic methods, it can make a strong dent in this problem. I'm excited to see how these tools develop, and I'm a big fan of more explicit typing in any language.

But at the end of the day, removing the magic from Rails would mean making something that isn't Rails anymore. Magic is a double-edged sword. In the end, I tend to choose languages and libraries that have a lot less magic, and will take the hit of slower dev when starting fresh in exchange for better discovery and self-documentation as the application grows.[ref]I'm a big fan of [Go](https://go.dev), which, with its lack of even a lot of simple iterator methods like `map`, is essentially the polar opposite of something like Ruby[/ref]

I think magic is great for bootstrapping and prototyping, but can quickly become a barrier to growth, as increasingly complex applications become a lot harder to manage when dependencies and utilities aren't explicit. I've now worked at multiple companies with legacy Rails monoliths, and it's been a common theme among engineers both junior and senior that, at the very least, it's very hard to get started (or reacquainted, if the dev has been out of the ecosystem for a bit), with a strong reliance on senior engineers with a high [bus factor].

In an industry where the average tenure is supposedly two years, placing so much reliance on company veterans and choosing long ramp-up times for new hires is going to be a sacrifice that I think most companies will _eventually_ have to address, and I can say from experience that that's going to be a large undertaking. Choosing against magic from the start is an investment in the future of an application, and the company.

[rails guides]: https://guides.rubyonrails.org/
[rails api docs]: https://api.rubyonrails.org/
[sorbet]: https://sorbet.org/
[rbs]: https://github.com/ruby/rbs
[`rbs_rails`]: https://github.com/pocke/rbs_rails
[bus factor]: https://en.wikipedia.org/wiki/Bus_factor
