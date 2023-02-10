---
title: "Git Cheatsheet"
date: 2023-02-09T20:36:45+05:30
draft: false
tags: ["programming", "technology", "terminal"]
---

Git is a version control system, another great invention of Linus Torvalds. This
will be a basic cheatsheet containing common git commands targeted at beginners.
See the links in the [bottom](#advanced-git-cheatsheets) for advanced git 
cheatsheets.

## Common git workflow

To create (initialize) a git repository

```sh
$> git init
```
---

To clone a remote git repository
```sh
$> git clone [remote repo url]
```
---

To see the current status of the working directory
```sh
$> git status
```

To add files \[to the staging area\] for commiting

```sh
$> # to add a single file
$> git add file1.txt
$> # to add multiple files
$> git add file_1.py file_2.py file_3.py file_n.py
$> # to add all files changed
$> git add .
```
---

Once you added files [to staging area] for commiting, next step is to commit. This is how to do it.

```sh
$> git commit -m "commit message para 1" -m "commit message para 2 and so on"
```
---

Imaging you forget to add some changes to your last commit or you want to change 
commit message of previous commit. Add the new changes to the staging area by
`git add` command (if you only want to change the commit message, you can skip
this step), and then amend the previous commit like this.

```sh
$> git commit --amend -m "new message"
$> # or if you don't want to change previous commit message
$> git commit --amend --no-edit
```
---

To push your local commits to the remote repository

```sh
$> git push origin [branch-name]
$> # see below example, where branch name is main
$> git push origin main
```
---

Similarly, to pull the changes from remote repo to your local copy

```sh
$> git pull origin main
$> # or simply, for the current working branch
$> git pull
```

To log all commits

```sh
$> git log
$> # to get a one line summary of each commit
$> git log --oneline
```
---

Find a problem in your new software version? Revert back to old version like this.

```sh
$> git revert <commit-hash>
```

This will revert changes back to the given commit (commit-hash). This will not
delete the old faulty commits. Instead, git will create a new commit that
cancels off the faulty commits.

---

## Useful references

Note: SO is the abbreviation for StackOverflow

* [How to modify a old git commit \[SO\]](https://stackoverflow.com/questions/1186535/how-do-i-modify-a-specific-commit)
* [Upload a local repository to github](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github)
* [Remove a file from git history](https://stackoverflow.com/questions/43762338/how-to-remove-file-from-git-history)
* [Delete specific git commit](https://stackoverflow.com/questions/2938301/remove-specific-commit)

## Advanced git cheatsheets

* [Github's git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/)
* [Gitlab's git cheatsheet](https://about.gitlab.com/images/press/git-cheat-sheet.pdf)
* [git-cheatsheet.com](http://git-cheatsheet.com/)