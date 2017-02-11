# Documentation

> If you've willfully clicked here, chances are you want to build a plugin. This document shows you exactly how to do that.

## What is a plugin?
A plugin is nothing but a combination of JavaScript functions that handles a specific HTTP request. A single plugin can contain/provide as many features as you want it to have. For instance, you can write a CPU plugin that calculates the current CPU usage and returns it back to the clint as a feature and another feature that calculates and returns the temperature.

## Philosophy
To design PiTtrol in a more organized fashion, we've decided that:
1. Plugins should take the form of a package.
2. All built-in features will be implemented as plugins. This ensures plugin API stability and makes contributors feel first-class citizens.

## Getting One's Hands Dirty with Writing a Plugin
Let's walk you through building your first PiTrol plugin.

1. Create a directory under the 'plugins' directory.

> The name of this directory <b>needs</b> to start with a <b>capital letter</b>. There are no technical reasons behind this; we just want to maintain a convention. That said, if you're creating a plugin for your own fork of the project, you can choose to name the directory whatever you want. If you're, however, checking in code into the repository, plugin names that don't follow the convention <b>will be turned down</b>.

2. Redirect into the newly create directory and create your `index.js` file. We'll come back and add some code to this source file later.

> Remember that we treat plugins as packages, so `index.js` is needed.

3. 
