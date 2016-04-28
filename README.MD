# Jodit WYSIWYG Editor
______________________

Editor and FileBrowser - Jodit. Pure javascript. No libraries! Lightweight:~32kB gzipped.
## Non-commercial free. 
Read [more](http://xdsoft.net/jodit/license.html)
## Download or Buy 
[you can here](http://xdsoft.net/jodit/#download)
______________________

<textarea id="editor" name="editor"></textarea>
<script>
var editor = new Jodit('#editor', {
    uploader: {
        url: '../connector/index.php?action=upload',
        process: function (resp) {
            resp.baseurl = '/jodit/files/';
            return resp;
        }
    },
    filebrowser: {
        ajax: {
            url: '../connector/index.php',
            process: function (resp) {
                resp.baseurl = '/jodit/files/';
                return resp;
            },
        }
    }
});
</script>

## Get Started
## How use
Download last [release](http://xdsoft.net/jodit/#download) or
### INSTALL VIA BOWER
```
bower install jodit
```
### INSTALL VIA NPM
```
npm install jodit
```
Include just two files

```xml
<link type="text/css" rel="stylesheet" href="jodit.min.css">
<script type="text/javascript" src="jodit.min.js"></script>
```
### CDN
```xml
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jodit/2.3.9/jodit.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/jodit/2.3.9/jodit.min.js"></script>
```
### USAGE

And some `<textarea>` element

```xml
<textarea id="editor" name="editor"></textarea>
```
After this, you can init Jodit plugin

```javascript
new Jodit('#editor');
```
## Browser Support
______________________
* Internet Explorer 10+
* Opera 12+
* Safari 6+
* Firefox 42+
* Chrome 48+

## Changelog
______________________
### 2.3.8
Fix connector problem and fix item's style in filebrowser
### 2.3.3
Switched on FontAwesome icons
### 2.3.0
Added copy-paste image file for FireFox
### 2.2.6
Fix copy-paste for FireFox
### 2.2.5
Added copy-paste support by clipboard image. [Try](http://xdsoft.net/jodit) paste print screen.
### 2.2.4
Added the ability in the file browser to obtain data about the file not as a string and as an object with parameters {file: 'name.jpg', thumb: '_thumbs/name.jpg'}
### 2.2.3
Fix conflict between textProcessor and Beatyfier plugins
### 2.2.2
Fix BACKSPACE entering behavior. And fix ie10 support
### 2.2.0
Added [iframe](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.iframe), [iframeStyle](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.iframeStyle), [iframeIncludeJoditStyle](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.iframeIncludeJoditStyle), [iframeCSSLinks](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.iframeCSSLinks), [width](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.width), [height](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.height), [minHeight](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.minHeight).
 `iframe` by default false. When this option is enabled, the editor's content will be placed in an iframe and isolated from the rest of the page.
 `width` and `height` you can set size fot editor
### 2.1.0
Added internationalization. Read more http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.language
### 2.0.9
Added Split mode. Added [useSplitMode](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.useSplitMode) options (default true) Example [here](http://xdsoft.net/jodit/#splitmode)
### 2.0.8
Fix dialog bug
### 2.0.4
Added CodeMirror plugin. Enable by default {@link defaultOptions~codeMirror.|options.codeMirror}
### 2.0.0
We got rid of jQuery
### 1.2.1
Fix bug in filebrowser
### 1.2.0
Fix bug when [selection.insertHTML](http://xdsoft.net/jodit/doc/module-Selection.html#-inner-insertHTML__anchor) dosn't work without focus
### 1.1.0
Fix bug with uploader and filebrowser
### 1.0.6
If source `textarea` has `placeholder` attribute then Jodit use it how placeholder
### 1.0.4
Added About button
### 1.0.1
First release

## Links
______________________
* [Download](http://xdsoft.net/jodit#download)
* [Options](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html)
* [How to create module for Jodit Editor](http://xdsoft.net/jodit/doc/tutorial-how-create-module.html)
* [Uploader options and Drag and Drop files](http://xdsoft.net/jodit/doc/tutorial-uploader-settings.html)
* [Filebrowser](http://xdsoft.net/jodit/doc/tutorial-filebrowser-options.html)
* [ElFinder Integrate](http://xdsoft.net/jodit/doc/tutorial-elfinder-integration.html)
* [Group](https://groups.google.com/forum/#!forum/jodit)
