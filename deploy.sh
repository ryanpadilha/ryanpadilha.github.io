#!/usr/bin/env bash
#
# Copy Jekyll site to S3 bucket
#
####################################
#
# Custom vars
#
s3_bucket="s3://ryanpadilha.com.br/"
distribution_id=E1XURO2RK025Q0
####################################

set -e # halt script on error
set -v # echo on

tempfile=$(mktemp)

echo "Building site..."
JEKYLL_ENV=production bundle exec jekyll build

echo "Removing .html extension"
find _site/ -type f ! -iname 'index.html' -iname '*.html' -print0 | while read -d $'\0' f; do mv "$f" "${f%.html}"; done

echo "Copying files to server..."
aws s3 sync _site/ $(s3_bucket) --size-only --exclude "*" --include "*.*" --delete | tee -a $(tempfile)
echo "Copying files with content type..."
aws s3 sync _site/ $(s3_bucket) --size-only --content-type text/html --exclude "*.*" --delete | tee -a $(tempfile)
#invalidate only modified files
grep "upload\|deleted" $(tempfile) | sed -e "s|.*upload.*to $(s3_bucket)|/|" | sed -e "s|.*delete: $(s3_bucket)|/|" | sed -e 's/index.html//' | sed -e 's/\(.*\).html/\1/' | tr '\n' ' ' | xargs aws cloudfront create-invalidation --distribution-id $(distribution_id) --paths
