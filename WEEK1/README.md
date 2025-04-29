> 🔆 **CHEATSHEET:** [**Git Cheat Sheet**](https://education.github.com/git-cheat-sheet-education.pdf)


Below is a concise guide to the core Git commands every user should have in their toolkit. We start with setup and repository creation, move through everyday workflows (snapshotting, branching, merging), cover collaboration with remotes, and finish with inspection and undoing history. Each section includes multiple commands along with links to authoritative documentation for deeper exploration.

## Setup and Configuration

Before you begin, tell Git who you are and learn how to get help:
- **`git config --global user.name "Your Name"`** and **`git config --global user.email "you@example.com"`**  
  Set your identity for all commits on your machine  ([Basic Git Commands | Atlassian Git Tutorial](https://www.atlassian.com/git/glossary?utm_source=chatgpt.com)).  
- **`git config --list`**  
  Review all your Git configuration settings  ([Basic Git Commands | Atlassian Git Tutorial](https://www.atlassian.com/git/glossary?utm_source=chatgpt.com)).  
- **`git help <command>`** or **`git <command> --help`**  
  Bring up detailed usage information for any Git command  ([Reference - Git](https://git-scm.com/docs?utm_source=chatgpt.com)).

## Creating and Cloning Repositories

Get started with a brand-new project or copy an existing one:
- **`git init [<directory>]`**  
  Create a new Git repository in the specified folder (or current directory)  ([Reference - Git](https://git-scm.com/docs?utm_source=chatgpt.com)).  
- **`git clone <repo-url>`**  
  Download an existing repository (and its entire history) from a remote server  ([10 Git Commands Every Developer Should Know - freeCodeCamp](https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/?utm_source=chatgpt.com)).

## Basic Snapshotting

The core workflow in Git is “edit → stage → commit”:
- **`git status`**  
  See which files are staged, unstaged, or untracked  ([10 Git Commands Every Developer Should Know - freeCodeCamp](https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/?utm_source=chatgpt.com)).  
- **`git add <file>`** or **`git add .`**  
  Stage individual files or all changes for the next commit  ([10 Git Commands Every Developer Should Know - freeCodeCamp](https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/?utm_source=chatgpt.com)).  
- **`git commit -m "Descriptive message"`**  
  Record staged changes permanently in the repo’s history  ([10 Git Commands Every Developer Should Know - freeCodeCamp](https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/?utm_source=chatgpt.com)).

## Branching and Merging

Isolate features or fixes in parallel lines of development:
- **`git branch`**  
  List all local branches  ([10 Git Commands Every Developer Should Know - freeCodeCamp](https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/?utm_source=chatgpt.com)).  
- **`git branch <name>`**  
  Create a new branch called `<name>`  ([10 Git Commands Every Developer Should Know - freeCodeCamp](https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/?utm_source=chatgpt.com)).  
- **`git checkout <branch>`** or **`git switch <branch>`**  
  Switch your working directory to the specified branch  ([Common Git commands - GitLab Docs](https://docs.gitlab.com/topics/git/commands/?utm_source=chatgpt.com)).  
- **`git merge <branch>`**  
  Incorporate changes from `<branch>` into your current branch  ([Common Git commands - GitLab Docs](https://docs.gitlab.com/topics/git/commands/?utm_source=chatgpt.com)).

## Collaborating with Remotes

Work with shared repositories on servers like GitHub, GitLab, Bitbucket:
- **`git remote -v`**  
  List the short names and URLs of your remotes  ([Basic Git Commands | Atlassian Git Tutorial](https://www.atlassian.com/git/glossary?utm_source=chatgpt.com)).  
- **`git fetch [<remote>]`**  
  Download new commits and data from the remote, but don’t merge  ([Learn the Basics of Git in Under 10 Minutes - freeCodeCamp](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/?utm_source=chatgpt.com)).  
- **`git pull [<remote> [<branch>]]`**  
  Fetch from remote and immediately merge into your current branch  ([Learn the Basics of Git in Under 10 Minutes - freeCodeCamp](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/?utm_source=chatgpt.com)).  
- **`git push [<remote>] <branch>`**  
  Upload your local branch commits to the remote repository  ([10 Git Commands Every Developer Should Know - freeCodeCamp](https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/?utm_source=chatgpt.com)).

## Inspection and History

Understand what’s happened in your project:
- **`git log`**  
  View a scrollable history of commits  ([Common Git commands - GitLab Docs](https://docs.gitlab.com/topics/git/commands/?utm_source=chatgpt.com)).  
- **`git diff [<commit> [<commit>]]`**  
  Show line-by-line changes between commits or between working directory and index  ([Common Git commands - GitLab Docs](https://docs.gitlab.com/topics/git/commands/?utm_source=chatgpt.com)).  
- **`git show <object>`**  
  Display information about any object (commit, tag, blob)  ([Common Git commands - GitLab Docs](https://docs.gitlab.com/topics/git/commands/?utm_source=chatgpt.com)).

## Undoing and Stashing

Fix mistakes or temporarily shelve work in progress:
- **`git reset [--soft|--mixed|--hard] <commit>`**  
  Move the current branch tip to `<commit>` and optionally reset index/working tree  ([git Documentation - Git](https://git-scm.com/docs/git?utm_source=chatgpt.com)).  
- **`git revert <commit>`**  
  Create a new commit that undoes the changes introduced by `<commit>`  ([git Documentation - Git](https://git-scm.com/docs/git?utm_source=chatgpt.com)).  
- **`git stash`**  
  Save uncommitted changes on a stack and revert to a clean working directory  ([Common Git commands - GitLab Docs](https://docs.gitlab.com/topics/git/commands/?utm_source=chatgpt.com)).  
- **`git stash pop`**  
  Re-apply the most recent stashed changes and remove them from the stash stack  ([Common Git commands - GitLab Docs](https://docs.gitlab.com/topics/git/commands/?utm_source=chatgpt.com)).

---

This set of commands covers the vast majority of day-to-day Git operations. As you grow more comfortable, explore advanced topics like rebasing (`git rebase`), submodules, hooks, and the plumbing commands under `git` itself. For full reference, see the official Git documentation at git-scm.com.