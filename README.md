# Pirum Website
## About
Pirum is a website written by Team 3 from the 2018 CS146 Web Design course. This Readme file contains documentation on how to get started developing for it.

### Important Links
- Pirum's [GitHub Pages Website](https://team3146.github.io/Pirum-Website/src/index.html)

## Documentation
For future reference, `<thing1 | thing2 | thing3>` mean you can type either `thing1`, `thing2`, or `thing3` as an option.
### Tooling Docs
#### Git
Command | Description
--- | ---
`git status` | checks the status of your local files
`git < add ǀ rm > < filename ǀ * ǀ . >` | Adds a specified filename, or anything it can add (if `*` or `.` are used) to be committed.
`git commit -m "<commit message>"` | Commits changes to local branch
`git push <name of repository> master` | Pushes current changes to the remote repository (`<name of repository>` is typically "origin")
`git pull <name of repository> master` | Pulls content from the remote repository and merges the changes to local branch
`git remote < add ǀ remove > <name of repository> <link to repository>` | Adds or removes a remote repository. Please note that the link is only used if adding a repository.

### Site Docs
#### CSS Selectors
Selector | Description
---|---
`.header` | Targets all headers
`.footer` | Targets all footers
`.content-container` | Targets the elements that have content inside of them.
`.content-text` | Any text-based content. NOTE: refers to the content itself, not the container that holds it.
`.content-interactive` | Targets any embedded / interactive content. NOTE: refers to the content itself, not the container that holds it.
`.content-mediagrid` | Targets any grid of items, whether they be pictures, other kinds of content, etc.
`.content-area` | Targets areas that can hold content containers. 
