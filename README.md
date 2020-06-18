# Create default layers in document

This script for Adobe InDesign creates default layers based on the defined settings.

## Skript settings

The layer names, colors and their order can be changed in the _layerObjArray object: Line 57–61

```javascript
const _layerObjArray = [
	{ "defaultName":_layerLabel+" 1",	"userName":"Background",	"color":UIColors.BLUE },
	{ "defaultName":_layerLabel+" 2",	"userName":"Graphic", 		"color":UIColors.LIGHT_BLUE },
	{ "defaultName":_layerLabel+" 3",	"userName":"Text",			"color":UIColors.RED },
	{ "defaultName":_layerLabel+" 4",	"userName":"Foreground",	"color":UIColors.GREEN },
	{ "defaultName":_layerLabel+" 5",	"userName":"Guides",			"color":UIColors.CYAN }	
];
```

### Default layer name: "defaultName"

Layer name assigned by InDesign. The script detects this name and can rename the layer.

### Layer name of user: "userName"

Displayed name of the layer in the layer panel after running the script.

### Available layer colors: "color"

UIColors.BLACK
UIColors.BLUE
UIColors.BRICK_RED
UIColors.BROWN
UIColors.BURGUNDY
UIColors.CHARCOAL
UIColors.CUTE_TEAL
UIColors.CYAN
UIColors.DARK_BLUE
UIColors.DARK_GREEN
UIColors.FIESTA
UIColors.GOLD
UIColors.GRASS_GREEN
UIColors.GRAY
UIColors.GREEN
UIColors.GRID_BLUE
UIColors.GRID_GREEN
UIColors.GRID_ORANGE
UIColors.LAVENDER
UIColors.LIGHT_BLUE
UIColors.LIGHT_GRAY
UIColors.LIGHT_OLIVE
UIColors.LIPSTICK
UIColors.MAGENTA
UIColors.OCHRE
UIColors.OLIVE_GREEN
UIColors.ORANGE
UIColors.PEACH
UIColors.PINK
UIColors.PURPLE
UIColors.RED
UIColors.SULPHUR
UIColors.TAN
UIColors.TEAL
UIColors.VIOLET
UIColors.WHITE
UIColors.YELLOW

### Add layer to settings 

```javascript
const _layerObjArray = [
	{ "defaultName":_layerLabel+" 1",	"userName":"Background",	"color":UIColors.BLUE },
	{ "defaultName":_layerLabel+" 2",	"userName":"Graphic", 		"color":UIColors.LIGHT_BLUE },
	{ "defaultName":_layerLabel+" 3",	"userName":"Text",			"color":UIColors.RED },
	{ "defaultName":_layerLabel+" 4",	"userName":"Foreground",	"color":UIColors.GREEN },
	{ "defaultName":_layerLabel+" 5",	"userName":"Guides",			"color":UIColors.CYAN },
	{ "defaultName":_layerLabel+" 6",	"userName":"Added layer",	"color":UIColors.VIOLET }
];
```

### Remove layer from settings 

```javascript
const _layerObjArray = [
	{ "defaultName":_layerLabel+" 1",	"userName":"Background",	"color":UIColors.BLUE },
	{ "defaultName":_layerLabel+" 2",	"userName":"Graphic", 		"color":UIColors.LIGHT_BLUE },
	{ "defaultName":_layerLabel+" 3",	"userName":"Text",			"color":UIColors.RED },
	{ "defaultName":_layerLabel+" 4",	"userName":"Foreground",	"color":UIColors.GREEN }
];
```


## License

[MIT](http://www.opensource.org/licenses/mit-license.php)
