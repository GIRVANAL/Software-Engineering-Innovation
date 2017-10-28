# Git Workflow

***
**Creator: Wu Zhiwen**

**Student ID:516030910115**
***

##Overview

This document describes the git workflow.

##Body

###What

####1.What's a Git Workflow?

A **Git Workflow** is a recipe or recommendation for how to use Git to accomplish work in a consistent and
productive manner.

####2.What's a successful Git Workflow?

When evaluating a workflow for your team, it's most important that you consider your team’s culture. You want the workflow to enhance the effectiveness of your team and not be a burden that limits productivity. Some things to **consider** when evaluating a Git workflow are:

* Does this workflow scale with team size?

* Is it easy to undo mistakes and errors with this workflow?

* Does this workflow impose any new unnecessary cognitive overhead to the team?

###The category of workflow
####1.Centralized Workflow

![Centralized Workflow](https://wac-cdn.atlassian.com/dam/jcr:0869c664-5bc1-4bf2-bef0-12f3814b3187/01.svg?cdnVersion=ht)

The Centralized Workflow is a great Git workflow for teams transitioning from SVN. Like Subversion, the Centralized Workflow uses a central repository to serve as the single point-of-entry for all changes to the project. Instead of **trunk**, the default development branch is called **master** and all changes are committed into this branch. This workflow doesn’t require any other branches besides master.

####2.Feature branching Workflow

Feature Branching is a logical extension of Centralized Workflow. 

The core idea behind the Feature Branch Workflow is that all feature development should take place in a dedicated branch instead of the master branch. This encapsulation makes it easy for multiple developers to work on a particular feature without disturbing the main codebase. It also means the master branch should never contain broken code, which is a huge advantage for continuous integration environments. 

####3.Gitflow Workflow

The Gitflow Workflow was first published in a highly regarded 2010 blog post from Vincent Driessen at nvie. The Gitflow Workflow defines a strict branching model designed around the project release. This workflow doesn’t add any new concepts or commands beyond what’s required for the Feature Branch Workflow. Instead, it assigns very specific roles to different branches and defines how and when they should interact. 

####4.Forking Workflow

The Forking Workflow is fundamentally different than the other workflows discussed in this tutorial. Instead of using a single server-side repository to act as the “central” codebase, it gives every developer a server-side repository. This means that each contributor has not one, but two Git repositories: a private local one and a public server-side one. 

###How

####How the Centralized Workflow work

Developers start by cloning the central repository. In their own local copies of the project, they edit files and commit changes as they would with SVN; however, these new commits are stored locally - they’re completely isolated from the central repository. This lets developers defer synchronizing upstream until they’re at a convenient break point.

To publish changes to the official project, developers "push" their local master branch to the central repository. This is the equivalent of svn commit, except that it adds all of the local commits that aren’t already in the central master branch.

#####Initialize the central repository

![](https://wac-cdn.atlassian.com/dam/jcr:f03a0fbd-a880-477f-aa32-33340383ce07/02%20(3)

First, someone needs to create the central repository on a server. If it’s a new project, you can initialize an empty repository. Otherwise, you’ll need to import an existing Git or SVN repository.

Central repositories should always be bare repositories (they shouldn’t have a working directory), which can be created as follows:

`ssh user@host git init --bare /path/to/repo.git`

Be sure to use a valid SSH username for user, the domain or IP address of your server for host, and the location where you'd like to store your repo for /path/to/repo.git. Note that the .git extension is conventionally appended to the repository name to indicate that it’s a bare repository.

#####Hosted central repositories

Central repositories are often created through 3rd party Git hosting services like [Bitbucket Cloud](https://bitbucket.org/product) or [Bitbucket Server](https://bitbucket.org/product/enterprise). The process of initializing a bare repository discussed above is handled for you by the hosting service. The hosting service will then provide an address for the central repository to access from your local repository.

#####Clone the central repository

Next, each developer creates a local copy of the entire project. This is accomplished via the **git clone** command:

`git clone ssh://user@host/path/to/repo.git`

When you clone a repository, Git automatically adds a shortcut called **origin** that points back to the “parent” repository, under the assumption that you'll want to interact with it further on down the road. 

#####Make changes and commit

Once the repository is cloned locally, a developer can make changes using the standard Git commit process: edit, stage, and commit. If you’re not familiar with the staging area, it’s a way to prepare a commit without having to include every change in the working directory. This lets you create highly focused commits, even if you’ve made a lot of local changes.

	git status # View the state of the repo
	git add <some-file> # Stage a file
	git commit # Commit a file</some-file>

Remember that since these commands create local commits, John can repeat this process as many times as he wants without worrying about what’s going on in the central repository. This can be very useful for large features that need to be broken down into simpler, more atomic chunks.

#####Push new commits to central repository

Once the local repository has new changes committed. These change will need to be pushed to share with other developers on the project.

	git push origin master

This command will push the new committed changes to the central repository. When pushing changes to the central repository, it is possible that updates from another developer have been previously pushed that contain code which conflict with the intended push updates. Git will output a message indicating this conflict. In this situation, **git pull** will first need to be executed. This conflict scenario will be expanded on in the following section.

#####Managing conflicts

The central repository represents the official project, so its commit history should be treated as sacred and immutable. If a developer’s local commits diverge from the central repository, Git will refuse to push their changes because this would overwrite official commits.

![](https://wac-cdn.atlassian.com/dam/jcr:d06191e3-994e-453a-8ea9-a2e93374e53e/03%20(4)

Before the developer can publish their feature, they need to fetch the updated central commits and rebase their changes on top of them. This is like saying, “I want to add my changes to what everyone else has already done.” The result is a perfectly linear history, just like in traditional SVN workflows.

If local changes directly conflict with upstream commits, Git will pause the rebasing process and give you a chance to manually resolve the conflicts. The nice thing about Git is that it uses the same **git status** and **git add** commands for both generating commits and resolving merge conflicts. This makes it easy for new developers to manage their own merges. Plus, if they get themselves into trouble, Git makes it very easy to abort the entire rebase and try again (or go find help).

##Reference

[深入理解学习Git工作流](https://segmentfault.com/a/1190000002918123#articleHeader6)

[Comparing Workflows](https://www.atlassian.com/git/tutorials/comparing-workflows)
