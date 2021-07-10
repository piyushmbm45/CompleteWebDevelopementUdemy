## Learning about all the commands for the unix and Git

- install hyper terminal
- change config files - not able to change from mac
- actually i installed bash using stackover flow in mac os
- CLI and GUI 
- graphical user interface
- command line inteeface
- CLI gives you more power to do things
- GUI hide many complicated things


### Commands to Remember

- playing with command line
    - ls   = list of all files/folders in selected directory
    - ls -a = list of all files/folders in selected directory with hidden files
    - cd  <foldername>/ = change directory ( tab and forward slash completes the folder 😊)
    - cd ~  = back to the root directory
    - sometimes command very long and we need to edit somewhere between
        - press and hold the option(alt) button then move your cursor at any place as you want
    - ctrl + A = move in the begining of the cmd line
    - ctrl + E =  move at the end of the cmd line
    - ctrl + U = clear all the cmd

- creating dirctory and files
    - mkdir <foldername>  = for creating a new folder in selected directory
    - touch <filename.extesion> = create file
    - open <filename.extesion> = open a file in default application
    - open -a <application name>  <filename.extesion>  = open a file in specific application
    - rm <filename.extesion>  = removes the file
    - rm *  = deletes all the files from the directory (🤯 do check working directory before deleting)
    - pwd = print working directory
    - rm -r <foldername>/    = remove folder



## Git command

- to initilize a git repository 
    - git init
        - this creates a hidden folder(.git) in the the working directory

- to see commited files, stage files untracked files
    - git status

    - On branch master
        No commits yet
        Untracked files:
        (use "git add <file>..." to include in what will be committed)
	    chapter1.txt
        nothing added to commit but untracked files present (use "git add" to track)

- to create a stage 
    - git add <filename>
    - this will add the file into stage change

- to commit the changes
    - git commit -m "message"
    - this will commit the file changes
    - Type message in present tense

- working diretory(untracked or unstaged) - stage - commit stage(Local Repo) - 

- to see all commits for file
    - git log
    - all commits with specific id

- to put all files in the staged area or tracked area
    - git add .
    - this will add files into stage

- to see diff between file before and after edit
    - git diff
    - shows the all the difference b/w old file and new file

- to rollback or revert to older file from stage 
    - git checkout <filename>

- to setup local repo to remote repo(github) we need to firstly create repo on git hub website - copy the url of github repo
    - git remote add origin <url>
    - this will initiate the repo to github

- to push the repo to git hub
    - git push -u origin master

- working diretory(untracked or unstaged) - stage - commit stage(Local Repo) - Remote Repo


### gitignore

- it is always advised to not to public cofidential data to github(remote repo)


- .DS_Store (hidden file) saves your icon style, folder style, icon place etc. so add this file to gitignore also

- add files to .gitignore to not to upload remote

### cloning
- cloning a remote repo to loacl repo
    - git clone <github_url>


### Branching

#### In Local repo

- to create a new branch 
    - git branch <name_of_the_branch>

- to check on which branch we are working or how many branches we have
    - git branch
    - "*" mark branch is our working branch

- to switch the branch
    - git checkout <branch_name>

- to merge branches 
    - git merge <branch_name>
    - this will merge code the <branch_name> to working branch
    - after entering - edit box will open to ask you for the name of the merge
    - to quit this type ---> q!


#### Remote Repo

- its a simple process you can easily learn from website



### Forking

- somebody copies our repo to his/her own github account
    - this is not cloning (cloning is for local repo for the same account)

