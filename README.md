<div align="center">
  <p>~ Presenting ~</p>
  <p>with support from the <a href="https://www.cmu.edu/cfa/studio/index.html">Studio for Creative Inquiry at CMU</a>, <a href="https://glitch.com/@handsfreejs">Glitch.com</a>, the <a href="https://youtu.be/CJDpF4xUieY?t=58">School of AI</a> and you!</p>
  <br>
  <p><img src="https://i.imgur.com/i0f4HyA.gif" alt="handsfree.js"></p>
  <br>
  <h1><a href="https://handsfree.js.org">Handsfree.js.org</a></h1>
  <p>The site for our wrapper library around web-based computer vision models for the purpose of interacting with the web handsfree</p>
  <p>
    <img class="mr-1" src="https://img.shields.io/github/release-pre/handsfreejs/handsfree.svg"> <img class="mr-1" src="https://img.shields.io/github/last-commit/handsfreejs/handsfree.svg">
    <img src="https://img.shields.io/github/repo-size/handsfreejs/handsfree.svg">
  </p>
  <p>
    <img class="mr-1" src="https://img.shields.io/github/issues-raw/handsfreejs/handsfree.svg"> <img src="https://img.shields.io/github/issues-pr-raw/handsfreejs/handsfree.svg">
  </p>
  <p>Powered by:</p>
  <p><a href="https://github.com/jeeliz/jeelizWeboji"><img width=100 src="https://jeeliz.com/wp-content/uploads/2018/01/LOGO_JEELIZ_BLUE.png"></a></p>
</div>

<br>
<br>
<br>

> # About this Repo
>
> This repo represents our site, [handsfree.js.org](https://handsfree.js.org). If you're looking for the library, it's located at [https://github.com/handsfreejs/handsfree](https://github.com/handsfreejs/handsfree)

<br>
<br>
<br>

# Local Development

To run this project locally you'll need [NodeJS](https://nodejs.org/en/download/) and the [Yarn package manager](https://yarnpkg.com/en/docs/install#windows-stable).

After downloading this project repo, you'll then need to install dependencies by running `yarn` in the project's root directory. Then you'll have the following commands available:

```bash
# Start a local dev environment on localhost:8080
yarn start

# Build for production into /dist/demos/
yarn build

# Deploy to handsfree.js.org
yarn deploy

# Create handsfree.js in /dist/handsfreejs/
yarn bundle
```

Assuming you haven't downloaded this repository yet, the following are the steps you should do in order:

1. Download this repository: `git clone https://github.com/handsfreejs/handsfree.js.org.git`
2. Install dependencies: `cd handsfree.js.org && yarn`
3. Run the development server: `yarn start`

If you don't have git, you can also just [download and unzip our latest archive](https://github.com/handsfreejs/handsfree/archive/master.zip). You'll still need to install dependencies by running `yarn` in the unzipped directory.

## Deploy Script

Running `yarn deploy` will commit everything inside of `/dist/demos` to the `gh-pages` branch of the repository set in `package.json > deploy.repo` using the `package.json > deploy.url` custom domain. This lets you quickly deploy this repository to GitHub Pages!

<br>
<br>
<br>

# License & Attributions

This repo is available for free and commercial use under [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html).

## Art

- [Monkey logo adaption](https://www.designevo.com/apps/logo/?name=cute-monkey-and-interesting-gaming)

<br>
<br>
<br>

# Special Thanks

A very special thanks goes out to [@Golan](https://twitter.com/golan) for inviting me out to his studio, [The STUDIO for Creative Inquiry at Carnegie Mellon](http://studioforcreativeinquiry.org/) during the [Spring of 2019](https://www.flickr.com/photos/creativeinquiry/albums/72157703188612302). It was during this residency that I was encouraged to begin integrating Handsfree.js into different libraries and where I had a chance to use Handsfree.js with a real UR5 robot!

Another special thanks goes out to [@AnilDash](https://twitter.com/anildash) for sponsoring me during Winter 2018. Also a thank you to [The School of AI](https://twitter.com/SchoolOfAIOffic) for the [2018 Fellowship](https://www.youtube.com/watch?v=CJDpF4xUieY&t=58). And a very special thanks to [Jess Holbrook](https://twitter.com/jessscon) from Google Pair for driving all the way (way) out to meet me and helping kickstart this all with a new computer!

Thanks also to everyone who's supported me on Patreon, GoFundMe, and through Twitter over the months (and almost years!). And thanks everyone else for believing in this project 👋
