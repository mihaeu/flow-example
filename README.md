# Flow Example

I'm a big fan of static typing and projects like TypeScript. This is just me trying to figure out how to add flow to a normal JS project using ES6 with tests etc.

## How it works

 - flow checks all files with `// @flow` annotations in the IDE or using the flow `--watch` flag
 - `flow-typed` is used to download type information for libraries like `mocha`
 - `jstransform` or `babel` strip the type annotations so that the code works on normal JS engines

## Problems

 - still need to figure out how to either 
    * make mocha execute JS with flow annotations 
    * or how to make flow check tests which require the transpiled files (which have to be ignored ...)

## License

Copyright (c) 2017 Michael Haeuslmann

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

