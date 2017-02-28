//@include "/Applications/Adobe Photoshop CC 2017/Presets/Scripts/SelectedLayers.jsx"


var layers = getSelectedLayers(app.activeDocument);
var originalNames = [];
var layersArray = [];

app.activeDocument.suspendHistory("Sort Layers by Position", "sortLayers();" );

function sortLayers(){
	for (i = 0; i < layers.length; i++){
		originalNames.push(layers[i].name);
		layers[i].name = layers[i].bounds[1];
		layersArray.push(layers[i]);    
	}

	alert(layersArray);

	layersArray.sort(function(a,b) {
		return parseInt(a.name,10)-parseInt(b.name,10);
	});

	alert(layersArray);

	for (i = 0; i < layers.length; i++){
		layersArray[i].move(layers[i], ElementPlacement.PLACEBEFORE);
	layers[i].name = originalNames[i];

	}
}

