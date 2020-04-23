/* DESCRIPTION: Create default layers */ 

/*
  
    + Adobe InDesign Version: CS6+
    + Autor: Roland Dreger 
    + Datum: 20. Mai 2016
    
    + Zuletzt aktualisiert: 20. April 2020
		

		Note:
		The layer names, colors and their order can be changed in the _layerObjArray.
		(Line 43–47)

    
		+ Freies Script fuer private und kommerzielle Nutzung 
		  (Creativ Commons Lizenz: Roland Dreger, CC BY 3.0 AT). 
    + Verwendung auf eigene Gefahr.
    
		+ Free Script for private and commercial use 
		  (Creativ Commons Licence: Roland Dreger, CC BY 3.0 AT). 
    + Use at your own risk.
    
*/


__main(); 
 

function __main() { 
  
  if(app.documents.length === 0) { 
		alert(localize({ 
			en:"A document must be open to execute the script!",
			de:"F\u00FCr die Ausf\u00FChrung des Skriptes ist ein ge\u00F6ffnetes Dokument erforderlich!" 
		}));
		return; 
	}
	
	const _layerLabel = localize({ "en":"Layer", "de":"Ebene", "fr":"Calque", "it": "Livello", "es":"Capa", "pt":"Camada", "hu":"Réteg", "nl":"Laag", "ru":"слой" });
	const _layerObjArray = [
		{ "defaultName":_layerLabel+" 1",	"userName":"Background",	"color":UIColors.BLUE },
		{ "defaultName":_layerLabel+" 2",	"userName":"Graphic", 		"color":UIColors.LIGHT_BLUE },
		{ "defaultName":_layerLabel+" 3",	"userName":"Text",			"color":UIColors.RED },
		{ "defaultName":_layerLabel+" 4",	"userName":"Foreground",	"color":UIColors.GREEN },
		{ "defaultName":_layerLabel+" 5",	"userName":"Guides",			"color":UIColors.CYAN }	
	];
	
	var _doc;
	var _defaultLayer;
	var _userLayer;
	
	var i;
	

	_doc = app.documents.firstItem();
	if(!_doc.isValid) {
		return false;
	}

	for(i=0; i<_layerObjArray.length; i+=1) {
		
		_defaultLayer = _doc.layers.itemByName(_layerObjArray[i]["defaultName"]);
		_userLayer = _doc.layers.itemByName(_layerObjArray[i]["userName"]);
		
		if(!_defaultLayer.isValid && !_userLayer.isValid) {
			_userLayer = _doc.layers.add();
			_userLayer.name = _layerObjArray[i]["userName"];
		} 
		else if (_defaultLayer.isValid && !_userLayer.isValid) {
			_userLayer = _defaultLayer;
			_userLayer.name = _layerObjArray[i]["userName"];
		}
		
		_userLayer.layerColor = _layerObjArray[i].color;
		_userLayer.move(LocationOptions.AT_BEGINNING);
	}
	
  return true;
} /* END function __main */