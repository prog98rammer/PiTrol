# Documentation

> If you've willfully clicked here, chances are you want to build a plugin. This document shows you exactly how to do that.

## What is a plugin?
A plugin is nothing but a JavaScript function that handles a specific HTTP request.

## Philosophy
To design PiTtrol in a more organized fashion, we've decided that:
1. Plugins should take the form of a package.
2. All built-in features will be implemented as plugins. This ensures plugin API stability and makes contributors feel first-class citizens.

## Getting One's Hands Dirty with Writing a Plugin
Let's walk you through building your first PiTrol plugin.

> We're going to build something slightly more sophisticated than a 'hello world' program.

1. Create a directory under the 'plugins' directory.

> The name of this directory <b>needs</b> to start with a <b>capital letter</b>. There are no technical reasons behind this; we just want to maintain a convention. That said, if you're creating a plugin for your own fork of the project, you can choose to name the directory whatever you want. If you're, however, checking in code into the repository, plugin names that don't follow the convention <b>will be turned down</b>.

