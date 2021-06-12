rsync -r src/ docs/
rsync build/contracts/* docs/
git add .
git commit -m "Compile asset for Github Pages"
git push -u orgin2 master
