#!/usr/bin/env sh
# abort on errors
set -e

# build
yarn generate

# navigate into the build output directory
cd dist

# initialize a new Git repo and deploy
git init
git add -A
git commit -m 'deploy'

# push to the `gh-pages` branch
git push -f git@github.com:Rofak/product-list-with-cart.git gh-pages

cd -
