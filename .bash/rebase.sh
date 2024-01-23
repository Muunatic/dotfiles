#!/bin/bash

git init
git remote add origin $1
git pull --rebase origin $2

# bash rebase.sh <git> <branch>