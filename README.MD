# Jodit is the best WYSIWYG editor
Jodit is awesome and usefully wysiwyg editor with filebrowser. [Documentation](http://xdsoft.net/jodit/doc/)
## How use
Download last [release](http://xdsoft.net/jodit/#pricing) or install
### by bower
```
bower install jodit
```
### by npm
```
npm install jodit
```
After include a few file in your page
```xml
<script type="text/javascript" src="jquery.min.js"></script>
<link type="text/css" rel="stylesheet" href="jquery.jodit.min.css">
<script type="text/javascript" src="jquery.jodit.min.js"></script>
```
And some `<textarea>` element

```xml
<textarea id="editor" name="editor"></textarea>
```
After this, you can init Jodit plugin

```javascript
$(function () {
    $('#editor').jodit();
});
```
### Result
![ScreenShot](https://raw.github.com/xdan/jodit/master/screen.jpg)

## Use FileBrowser
For using filebrowser you need use some serverside script. For example [Official PHP connector](https://github.com/xdan/jodit-connectors)
## Links
* [Demo](http://xdsoft.net/jodit/)
* [Download](http://xdsoft.net/jodit#download)
* [Options](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html)
* [How to create module for Jodit Editor](http://xdsoft.net/jodit/doc/tutorial-how-create-module.html)
* [Uploader options and Drag and Drop files](http://xdsoft.net/jodit/doc/tutorial-uploader-settings.html)
* [Filebrowser](http://xdsoft.net/jodit/doc/tutorial-filebrowser-options.html)
* [ElFinder Integrate](http://xdsoft.net/jodit/doc/tutorial-elfinder-integration.html)