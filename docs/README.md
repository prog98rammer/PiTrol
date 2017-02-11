# Documentation

> If you've willfully clicked here, chances are you want to build a plugin. This document shows you exactly how to do that.

## What is a plugin?
A plugin is nothing but a JavaScript function that handles a specific HTTP request.

## Philosophy
To design PiTtrol in a more organized fashion, we've decided that:
1. Plugins should take the form of a package.
2. All built-in features will be implemented as plugins. This ensures plugin API stability and makes contributors feel first-class citizens.

## Getting One's Hands Dirty
Let's walk you through building your first PiTrol plugin.

> We're going to build something slightly harder than a 'hello world' program.

