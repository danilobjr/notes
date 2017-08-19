# Notes

An app to organize your notes in a beautiful way and learn React + Redux + Typescript

## Getting Started

### Setup

1. Start creating a basic project using next.js and typescript.
2. Then install UI Kit:

    `yarn add -E jsc-react-ui`

    _Note: All you'll need related to UI is present in this lib. Also, `jsc-react-ui` already have built-in typescript definitions. You can see some docs [here]()._

### Workflow

We'll use Github Workflow. Take a look at this post to get familiar.

Basically:

1. Clone the repo
2. In main repo page, click on Projects tab and move a card to WIP column
3. Create a new branch with same name of the issue (example: issue-1)
4. Do the right thing (try to commit small things)
5. Push your branch
6. Create a Pull Request in main repo page in Github (remember to request a review of a team member)
7. Go to Projects tab again and move card from step 2 to Review column
8. Wait PR to be approved and merged to master (if approve delayed, start to implement a new issue in a new branch from master - Go to step 2)
9. Checkout master branch
10. Pull merged commits
11. Remove your local branch created in step 2
