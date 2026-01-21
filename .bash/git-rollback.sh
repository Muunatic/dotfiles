#!/bin/bash

git reset --hard $1
git push --force-with-lease

# bash git-rollback.sh <sha>