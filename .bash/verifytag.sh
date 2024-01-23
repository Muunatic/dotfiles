#!/bin/bash

git tag -s $1
git tag -v $1
git push --tags

# bash verifytag.sh <tag>