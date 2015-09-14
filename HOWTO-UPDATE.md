# How to update

## Updating pdfjs-dist dependencies and build new assets

- check the newest pdfjs-dist version number
- replace this number in package.json (version) and bower.json (version, devDependencies[pdfjs-dist])
- run bower install
- run grunt

## Updating pdfjs-dist-ugly bower package

- run git add .
- run git commit -m "bump up pdfjs-dist version to [new version number]"
- run git tag -a v[new version number] -m 'version [new version number]'
- run git push origin master
- run git push --tags
