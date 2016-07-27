[![Gitter](https://badges.gitter.im/xdan/jodit.svg)](https://gitter.im/xdan/jodit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

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
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jodit/2.3.46/jodit.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/jodit/2.3.46/jodit.min.js"></script>
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
* Latest Chrome (desktop)
* Latest Firefox (desktop only)
* Latest Safari (desktop)
* Latest Opera (webkit)
* Internet Explorer 10
* Microsoft Edge

## Changelog
______________________
### 2.3.46
* Fix critical bug in Safari (window.performance)
* Fix bug when editor can get selection from another place

### 2.3.44
Added [direction](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#direction) option.
The writing direction of the language which is used to create editor content.
Allowed values are: 
* '' (an empty string) – Indicates that content direction will be the same as either the editor UI direction or the page element direction. 
* 'ltr' – Indicates a Left-To-Right text direction (like in English).
* 'rtl' – Indicates a Right-To-Left text direction (like in Arabic).

### 2.3.43
Fix styles bugs

### 2.3.41
When [filebrowser.showFoldersPanel](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#filebrowser) === false show 4 colums in filelist

### 2.3.40
* Added [filebrowser.moveFolder](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#filebrowser) option. Allow/deny move folder
* Added [filebrowser.moveFile](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#filebrowser) option. Allow/deny move file
* Added [filebrowser.showFoldersPanel](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#filebrowser) option. Hide/show folders panel in filebrowser

### 2.3.39
Fix [Filebrowser](http://xdsoft.net/jodit/doc/module-Filebrowser.html) uploader's options bug. 
Previously , you had to either use a general [Uploader](http://xdsoft.net/jodit/doc/module-Uploader.html) module settings , or override them completely
```javascript
var editor = new Jodit('.redactor', {
    filebrowser: {
        uploader: null
    },
    uploader: {
        url: 'uploader.php',
        format: 'json',
    }
});

// or
var editor = new Jodit('.redactor', {
    filebrowser: {
        uploader:  {
            url: 'uploader.php',
            format: 'json',
            filesVariableName: 'fils',
            //... all options from [uploader](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#uploader)
        }
    }
});
```

Now you can just override some of your settings
```javascript
var editor = new Jodit('.redactor', {
    filebrowser: {
        uploader: {
            url: 'uploader2.php',
        }
    },
    uploader: {
        url: 'uploader.php',
    }
});
```

### 2.3.38
* Fix i18n bug
* [useSplitMode](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#usesplitmode) set default false
* Fix toolbar width after fullsize mode
* Fixed [#issue5](https://github.com/xdan/jodit/issues/5)

### 2.3.37
Fast fix
### 2.3.36
* Added plugin `Fullsize`. Now you can change fullsize mode 
```javascript
var editor = new Jodit();
editor.events.fire('toggleFullsize');
editor.events.fire('toggleFullsize', [true]); // fullsize
editor.events.fire('toggleFullsize', [false]); // usual mode
```
* Added [globalFullsize](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#globalFullsize) (default `true`) if true, after `fullsize` - all parents element get `jodit_fullsize_box` class (z-index: 100000 !important;) 
* Fix focus bug
 
### 2.3.35
* Fix placeholder style
* Fix [Dom.css](http://xdsoft.net/jodit/doc/module-Dom.html#~css) then 
```html
<div class="idclass" style="margin-top:20px;"></div>
```
```javascript
Jodit.modules.Dom('.idclass').css('margin-top');//has returned string `20px` 
Jodit.modules.Dom('.idclass').css('margin-top');//now it returns int `20` 
```

### 2.3.33
* Fix placeholder style. Placeholder placed in a separate module [Placeholder](http://xdsoft.net/jodit/doc/module-Placeholder.html)
* Added [showPlaceholder](http://xdsoft.net/jodit/doc/module-Placeholder.html#showplaceholder) option
* Added [useInputsPlaceholder](http://xdsoft.net/jodit/doc/module-Placeholder.html#useinputsplaceholder) option
* Added [placeholder](http://xdsoft.net/jodit/doc/module-Placeholder.html#placeholder) option

### 2.3.32
Added [uploader.data](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#uploader) option. Data to be sent to the server like POST parameters
### 2.3.31
Added [editorCssClass](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#editorcssclass) option - Class name that can be appended to the editor
Fixed internacionalization
### 2.3.30
Added [triggerChangeEvent](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#triggerchangeevent) option
Fix uploader's options - When the uploader is not configured, the editor still displays images upload button
### 2.3.29
Add [Dom.defaultAjaxOptions.async](http://xdsoft.net/jodit/doc/module-Dom.html#.__.defaultAjaxOptions) By default, all requests are sent asynchronously (i.e. this is set to true by default). If you need synchronous requests, set this option to false
### 2.3.28
Added `headers` option in {@link module:FileBrowser|FileBrowser} and {@link module:Uploader|Uploader}. But primarily in {@link module:Dom|Dom}
```javascript
var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    editor = new Jodit("#redactor", {
        uploader: {
            url: '../connector/index.php?action=upload',
            headers: {
                'X-CSRF-Token': token
            }
        },
        filebrowser: {
            ajax: {
                url: '../connector/index.php',
                headers: {
                    'X-CSRF-Token': token
                }
            }
        },
    });
// or replace global options
Jodit.modules.Dom.defaultAjaxOptions.headers = {
    headers: {
        'X-CSRF-Token': token
    }
};
```
```javascript
Jodit.modules.Dom.ajax({
    url: 'data.json',
    headers: {
        'Accept-Language': 'en-US,en;q=0.8,ru;q=0.6,de;q=0.4,ja;q=0.2'
    },
    success: function (resp) {
        console.log(resp)
    }
})
```
### 2.3.27
Fixed [#issues1](https://github.com/xdan/jodit/issues/1)
### 2.3.24
Fix dialog's module when was opened Promt window, after Enter submit the form and the page reloaded. 
Fix connector's bugs
Update [Jodit.i18n](http://xdsoft.net/jodit/doc/module-Jodit.html#.i18n) method. Now it can be used staticly
```javascript
var editor = new Jodit("#redactor", {
     langusage: 'ru' 
});
console.log(editor.i18n('Cancel')) //Отмена;

Jodit.defaultOptions.language = 'ru';
console.log(Jodit.prototype.i18n('Cancel')) //Отмена 

Jodit.lang.cs = {
   Cancel: 'Zrušit'
};
Jodit.defaultOptions.language = 'cs';
console.log(Jodit.prototype.i18n('Cancel')) //Zrušit 

Jodit.lang.cs = {
   'Hello world': 'Hello 1$ Good 2$'
};
Jodit.defaultOptions.language = 'cs';
console.log(Jodit.prototype.i18n('Hello world', 'mr.Perkins', 'day')) //Hello mr.Perkins Good day
```
Fixed [Jodit.destroy](http://xdsoft.net/jodit/doc/module-Jodit.html#.destroy) method
```javascript
var editor = new Jodit('.jodit');
editor.destroy();
```
### 2.3.22
Fix bug when Dialog module was used without Jodit context
```javascript
Jodit.Alert('Hello world!!!');
```
### 2.3.20
Fix dialog's module zIndex manage.
Fix [Dom.css](http://xdsoft.net/jodit/doc/module-Dom.html#~css) method bug. That example has not worked.
```javascript
Jodit.modules.Dom('.someelement').css('z-index', 1000) 
```
### 2.3.19
Fix bug in Uploader module when `http://sitename.net/jodit///files/fg.jpg` was replaced `http:/sitename.net/jodit/files/fg.jpg`
### 2.3.18
Added `afterInsertImage` event - triggered after image was inserted [selection.insertImage](http://xdsoft.net/jodit/doc/module-Selection.html#-insertImage__anchor). 
This method can executed from [Filebrowser](http://xdsoft.net/jodit/doc/module-Filebrowser.html) or [Uploader](http://xdsoft.net/jodit/doc/module-Uploader.html)
```javascript
var editor = new Jodit("#redactor");
editor.events.on('afterInsertImage', function (image) {
    image.className = 'bloghead4';    
});
```
### 2.3.15
Fix bug with inserting table
### 2.3.14
Work with table became faster
### 2.3.12
* Fix filbrowser bug. When a new file is uploaded file list has not been updated
* Added [dialog.zIndex](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.dialog) option
### 2.3.11
Fix toolbar width fot fullsize mode
### 2.3.10
* Fix CodeMirror bug on download XML parser
* Fix CodeMirror bug endless cycle
* Fix overflow behavior in fullsize mode
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
