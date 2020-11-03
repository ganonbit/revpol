# RevPol README

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## A high-level description of your solution

Utilized React to bootstrap a frontend. Used Chakra-UI to style with speed. Made use of Hooks, Props, and State to manipulate data without any need for db.

## Reasoning behind your technical choices, including architectural

Started with my usual set of eslint/prettier setup files for syntax/linting consistency across any users that may touch the code.

After researching existing libraries on npm for rpn, they all had gotchas or didnt provide the data needed (dividing, float...etc). I decided to find a js solution online and customized it to my needs. original is sourced in the file named `rpnCalculator.js` in the `utils` folder.

Knowing we'd want to build upon the existing code, I abstracted out pieces like path names, added routes via react-router-dom, and separated the rpn logic to its on utils file so any new logic could be added in via new components with ease. For this first version I named things around the use case of rpn logic (eg. RpnCalculator.js), so that it can be known what is used for that vs. what can be reused with more plug-n-play ability. I structured the site around the idea of inheriting props from parent components, especially since no state machine/containers are being used (XState, Redux, ContextAPI...etc).

## Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project

Accessability and security are two big ones for me, but knowing the nature of this test, not much was done for a11y outside of linting rules. And didnt add any auth/cookie security since this is just to be made for internal use.

Knowing this is a first phase with known growing phases, I didnt do more in-depth things like adding redux, cookies, auth, or setting up a centralized SASS/template file and instead of inline styles via Chakra since it is easy to start with and abstract out as needed. Tests were made to test if the components exist, but if I had spent more time on tests, I would have built tests to check button clicks, different inputs with mock data, and possibly thrown in typescript to provide strict typing and prop-validation beyond prop-types.

If I had spent more time on styling, I would have spent more time making a logo style, or spent some time with framer-motion making animations for interactions.

## How to run your code, if applicable

- open terminal of choice and cd into the folder you wish to clone your repo. e.g. `cd projects`.

- git clone repo to local environment via `git@github.com:hyliancoder/revpol.git` or cli `gh repo clone hyliancoder/revpol`.

- change directory into newly pulled git repo via `cd revpol`.

- run command `yarn` to build npm packages.

- once that has completed run `yarn start`

` open [http://localhost:3000](http://localhost:3000) to view it in the browser.
