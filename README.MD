[![Gitter](https://badges.gitter.im/xdan/jodit.svg)](https://gitter.im/xdan/jodit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# Jodit WYSIWYG Editor

Editor and FileBrowser - Jodit. Pure javascript. No libraries! Lightweight:~32kB gzipped.
## Non-commercial free. 
Read [more](http://xdsoft.net/jodit/license.html)
## Download or Buy 
[you can here](http://xdsoft.net/jodit/#download)

## Extensions
* [Jodit Joomla editor](http://xdsoft.net/jodit/release/joomla.zip)
* [Jodit Yii2](https://github.com/worstinme/yii2-jodit)


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
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jodit/2.5.29/jodit.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/jodit/2.5.29/jodit.min.js"></script>
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

### Build bought PRO or OEM version

```
npm install
npm run build
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
### 2.5.29
Fix Splitmode autohaight
![Autoheight in Split mode Jodit](http://xdsoft.net/jodit/stuf/split-mode.jpg)
Fix syncronize code in TableProcessor module

### 2.5.28
Fix bug in Dialog.Confirm
```javascript
Jodit.Confirm("Are you shure?", "Confirm", function (success) {
    if (success) {
        alert("Agree");
    }
});
```

### 2.5.27
* Fixed IE11's bug [http://xdsoft.net/jodit/doc/module-Jodit.html#comment-2866837441](http://xdsoft.net/jodit/doc/module-Jodit.html#comment-2866837441)
* Added [textIcons](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#texticons) options - Use text instead of icons. In IE9 it is default - true [Example](http://xdsoft.net/jodit/#example-text-icons)
```javascript
var editor = new Jodit("#example2_0", {
    textIcons: true,
    removeButtons: [
        "hr",
        "ol",
        "about",
        "italic",
        "format",
        "fullsize",
        "justify"
    ]
});
```
![Text icons](http://xdsoft.net/jodit/stuf/texticons.jpg)
![Text icons in filebrowser](http://xdsoft.net/jodit/stuf/texticons-filebrowser.jpg)

### 2.5.26
Dom Module is now compatible with jQuery objects
```javascript
var a = jQuery("<a href="#link">Link</a>");
jodit.modules.Dom('.selector').append(a);
jodit.modules.Dom(jQuery("#someid")).val();
jodit.modules.Dom("#someid").val();
```
But you must remember that Jodit.modules.Dom! = JQuery

### 2.5.23
* Added `expand button` In filebrowser  
* Added [fullsize](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#dialog) and [fullsizeButton](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#dialog) options

### 2.5.20
* Fix [Dom.prev](http://xdsoft.net/jodit/doc/module-Dom.html#prev) method
* Added navigation and select in preview
![Navigation and select buttons](http://xdsoft.net/jodit/stuf/preview_navigation.jpg)
* Added [showSelectButtonInPreview](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#filebrowser) and [showPreviewNavigation](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#filebrowser)

### 2.5.19
Added [cleanHTML.allowTags](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#cleanhtml) option.
```javascript
var editor = Jodit('#editor', {
    allowTags: 'p,a[href],table,tr,td, img[src=1.png]' // allow only <p>,<a>,<table>,<tr>,<td>,<img> tags and for <a> allow only `href` attribute and <img> allow only `src` atrribute == '1.png'
});
editor.val('Sorry! <strong>Goodby</strong> <span>mr.</span> <a style="color:red" href="http://xsoft.net">Freeman</a>');
console.log(editor.val()); //Sorry! <a href="http://xsoft.net">Freeman</a>
```

Or you can use PlainObject. This code equivalent to the top
```javascript
var editor = Jodit('#editor', {
    allowTags: {
        p: true,
        a: {
            href: true
        },
        table: true,
        tr: true,
        td: true,
        img: {
            src: '1.png'
        }
    }
});
```


### 2.5.18
Fixed bug in Image plugin

### 2.5.17
Fixed bug in JJE

### 2.5.16
* Fixed a few styles

### 2.5.15
* Fixed `package.json`

### 2.5.13
* Added in FileBrowser [sort](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#filebrowser) options
* Jodit.Promt and Jodit.Alert by default set focus to OK button
```javascript
Jodit.Promt('Enter your name', function (name) {
    if (!name.length) {
        Jodit.Alert('You need enter 3 chars');
        return false;
    }
    //... some logic
});
```
* Fix `$config` bug in [JJE](http://xdsoft.net/jodit/release/joomla.zip)
* Added a few options in JJE plugin

### 2.5.12
Added edit button in Image Properties Dialog
![Edit button](http://xdsoft.net/jodit/stuf/editbutton.jpg)

### 2.5.11
* Added file info in filebrowser
![Filebrowser file info](http://xdsoft.net/jodit/stuf/filebrowsernames.jpg)
* Added [showFileName,showFileSize,showFileChangeTime](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#filebrowser)

### 2.5.1
* Dom module was rewrited and was fixed  afew bugs
* In [OEM and Pro](http://xdsoft.net/jodit/#download) added [Image Editor module](http://xdsoft.net/jodit/doc/module-ImageEditor.html) resize and crop image.  You can try [here](http://xdsoft.net/jodit/)
![Crop Image](http://xdsoft.net/jodit/stuf/crop.jpg)
![Resize Image](http://xdsoft.net/jodit/stuf/resize.jpg)

### 2.4.22
* Added contextmenu module.
* Added context menu in FileBrowser
* Added preview in FilwBrowser

### 2.4.21
* Fixed TableProcessor's bugs. In a situation did not appear resizer cells and the resizer throughout the table. 

### 2.4.20
* Fixed z-index Popap
* Fixed behavior of selection table cells

### 2.4.17
Fixed copy-paste html behavior

### 2.4.16
Fixed bug on after type `Enter`

### 2.4.15
Fixed bug with insert `OL` tag and Fixed Dom module work with Text node

### 2.4.12
Added [toolbarButtonSize](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#toolbarbuttonsize) Size of icons in the toolbar (can be "small", "middle", "large")
```javascript
var editor  = new  Jodit("#editor", {
    toolbarButtonSize: "small"   
});
```
### 2.4.10
* Added [node.create](http://xdsoft.net/jodit/doc/module-Node.html#create) method
```javascript
var editor = new Jodit('.jodit'),
    node = editor.node.create('text', 'Hellow world');
editor.selection.insertNode(node);
```
* Added [link](http://xdsoft.net/jodit/doc/module-link.html) plugin. And its options
  * [processPastedLink](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#link) Wrap inserted link in `<a href="link">link</a>`
  * [openLinkDialogAfterPost](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#link) Open Link dialog after post 
  * [removeLinkAfterFormat](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#link) When the button is pressed to clean format, if it was done on the link is removed like command `unlink` 
* Replace format icon

### 2.4.8
Fixed Base icons [issue](https://gist.github.com/leonderijke/c5cf7c5b2e424c0061d2)

### 2.4.6
Fast Fixed in JJE
Fixed a lot of bugs in Jodit

### 2.4.1
* Fixed a lot of bugs in Dom module
* Fixed a lot of bugs in TableProcessor module
* Replace PNG icon on SVG sprite
* Added new module Icons
* Added theme `Dark`
* Fixed bug Popap's module
* Divide one less file by modules 

### 2.3.59
* Added [Cookie](http://xdsoft.net/jodit/doc/module-Cookie.html) module
* Added [saveModeInCookie](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#savemodeincookie) if it is true that the current mode is saved in a cookie , and is restored after a reload of the page
* In Joomla Jodit Editor(JJE) added corresponding option saveModeInCookie [Download Jodit Joomla editor](http://xdsoft.net/jodit/release/joomla.zip)

### 2.3.57
* Fixed issue with `input[type=checkbox]` and [Dom.attr](http://xdsoft.net/jodit/doc/module-Dom.html#attr) method
* Release Joomla Jodit Editor (JJE) [Download JJE](http://xdsoft.net/jodit/release/joomla.zip)

### 2.3.53
* Added option [cleanHTML.cleanOnPaste](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#cleanhtml) The plugin [cleanHTML](http://xdsoft.net/jodit/doc/module-cleanHTML.html) automatically cleans up content from Microsoft Word and other HTML sources to ensure clean, compliant content that matches the look and feel of the site.
* Added [beforePaste](http://xdsoft.net/jodit/doc/module-Jodit.html#~event:beforePaste),[processPaste](http://xdsoft.net/jodit/doc/module-Jodit.html#~event:processPaste),[afterPaste](http://xdsoft.net/jodit/doc/module-Jodit.html#~event:afterPaste) events

### 2.3.49
Added [iframeBaseUrl](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#iframebaseurl) option - Base URL where the root directory for [iframe](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#iframe) mode

### 2.3.48
Added [spellcheck](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#spellcheck) option specifies whether the editor is to have its spelling and grammar checked or not

### 2.3.47
Added [removeEmptyBlocks](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#removeemptyblocks) option - Remove empty blocks

```javascript
var editor = new Jodit('#editor', {
   removeEmptyBlocks: false
});
editor.val(' ');// add space in editor
console.log(editor.val()); //<p>&nbsp;</p>

editor.options.removeEmptyBlocks = true;
editor.val(' ');
console.log(editor.val()); //''
```

### 2.3.46
* Fixed critical bug in Safari (window.performance)
* Fixed bug when editor can get selection from another place

### 2.3.44
Added [direction](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#direction) option.
The writing direction of the language which is used to create editor content.
Allowed values are: 
* '' (an empty string) – Indicates that content direction will be the same as either the editor UI direction or the page element direction. 
* 'ltr' – Indicates a Left-To-Right text direction (like in English).
* 'rtl' – Indicates a Right-To-Left text direction (like in Arabic).

### 2.3.43
Fixed styles bugs

### 2.3.41
When [filebrowser.showFoldersPanel](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#filebrowser) === false show 4 colums in filelist

### 2.3.40
* Added [filebrowser.moveFolder](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#filebrowser) option. Allow/deny move folder
* Added [filebrowser.moveFile](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#filebrowser) option. Allow/deny move file
* Added [filebrowser.showFoldersPanel](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#filebrowser) option. Hide/show folders panel in filebrowser

### 2.3.39
Fixed [Filebrowser](http://xdsoft.net/jodit/doc/module-Filebrowser.html) uploader's options bug. 
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
* Fixed i18n bug
* [useSplitMode](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#usesplitmode) set default false
* Fixed toolbar width after fullsize mode
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
* Fixed focus bug
 
### 2.3.35
* Fixed placeholder style
* Fixed [Dom.css](http://xdsoft.net/jodit/doc/module-Dom.html#~css) then 
```html
<div class="idclass" style="margin-top:20px;"></div>
```
```javascript
Jodit.modules.Dom('.idclass').css('margin-top');//has returned string `20px` 
Jodit.modules.Dom('.idclass').css('margin-top');//now it returns int `20` 
```

### 2.3.33
* Fixed placeholder style. Placeholder placed in a separate module [Placeholder](http://xdsoft.net/jodit/doc/module-Placeholder.html)
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
Fixed uploader's options - When the uploader is not configured, the editor still displays images upload button
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
Fixed dialog's module when was opened Promt window, after Enter submit the form and the page reloaded. 
Fixed connector's bugs
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
Fixed bug when Dialog module was used without Jodit context
```javascript
Jodit.Alert('Hello world!!!');
```
### 2.3.20
Fixed dialog's module zIndex manage.
Fixed [Dom.css](http://xdsoft.net/jodit/doc/module-Dom.html#~css) method bug. That example has not worked.
```javascript
Jodit.modules.Dom('.someelement').css('z-index', 1000) 
```
### 2.3.19
Fixed bug in Uploader module when `http://sitename.net/jodit///files/fg.jpg` was replaced `http:/sitename.net/jodit/files/fg.jpg`
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
Fixed bug with inserting table
### 2.3.14
Work with table became faster
### 2.3.12
* Fixed filbrowser bug. When a new file is uploaded file list has not been updated
* Added [dialog.zIndex](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.dialog) option

### 2.3.11
Fixed toolbar width fot fullsize mode

### 2.3.10
* Fixed CodeMirror bug on download XML parser
* Fixed CodeMirror bug endless cycle
* Fixed overflow behavior in fullsize mode

### 2.3.8
Fixed connector problem and Fixed item's style in filebrowser
### 2.3.3
Switched on FontAwesome icons
### 2.3.0
Added copy-paste image file for FireFox
### 2.2.6
Fixed copy-paste for FireFox
### 2.2.5
Added copy-paste support by clipboard image. [Try](http://xdsoft.net/jodit) paste print screen.
### 2.2.4
Added the ability in the file browser to obtain data about the file not as a string and as an object with parameters {file: 'name.jpg', thumb: '_thumbs/name.jpg'}
### 2.2.3
Fixed conflict between textProcessor and Beatyfier plugins
### 2.2.2
Fixed BACKSPACE entering behavior. And Fixed ie10 support
### 2.2.0
Added [iframe](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.iframe), [iframeStyle](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.iframeStyle), [iframeIncludeJoditStyle](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.iframeIncludeJoditStyle), [iframeCSSLinks](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.iframeCSSLinks), [width](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.width), [height](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.height), [minHeight](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.minHeight).
 `iframe` by default false. When this option is enabled, the editor's content will be placed in an iframe and isolated from the rest of the page.
 `width` and `height` you can set size fot editor
### 2.1.0
Added internationalization. Read more http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.language
### 2.0.9
Added Split mode. Added [useSplitMode](http://xdsoft.net/jodit/doc/Jodit.defaultOptions.html#.useSplitMode) options (default true) Example [here](http://xdsoft.net/jodit/#splitmode)
### 2.0.8
Fixed dialog bug
### 2.0.4
Added CodeMirror plugin. Enable by default {@link defaultOptions~codeMirror.|options.codeMirror}
### 2.0.0
We got rid of jQuery
### 1.2.1
Fixed bug in filebrowser
### 1.2.0
Fixed bug when [selection.insertHTML](http://xdsoft.net/jodit/doc/module-Selection.html#-inner-insertHTML__anchor) dosn't work without focus
### 1.1.0
Fixed bug with uploader and filebrowser
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
