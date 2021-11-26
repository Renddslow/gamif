# gamif

> A library for processing achievements for [Read:Advent's](https://readadvent.com) gamification.

**Please note this library was created with a very specific use-case; [see below for an explanation](#but-why-tho).

## Install

```
$ yarn add gamif
```


## Usage

```js

```


## API

## But Why Tho?

[Read:Advent's](https://github.com/Renddslow/advent-reader) reader code base uses [Unified](https://unifiedjs.com/) to process Bible source files. Unified is strictly an ESM package, so consequently, Read:Advent also became ESM. However, Read:Advent is also in TypeScript, and inorder to write unit tests around this specific functionality, ts-node needed to be employed. 

_But_ when I tried the [steps they describe](https://www.npmjs.com/package/ts-node#native-ecmascript-modules-1), it just broke. So instead of spending a ton of time futzing with a build and test system, I spun this out to its own package. For that reason, this is very unlikely to be helpful or useable by anyone else. You're more than welcome to mine the codebase to see if there are any ideas you'd like to emulate.
