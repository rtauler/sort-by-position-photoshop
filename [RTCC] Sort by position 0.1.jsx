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

	layersArray.sort();

	for (i = 0; i < layers.length; i++){
		layersArray[i].move(layers[i], ElementPlacement.PLACEBEFORE);
		layers[i].name = originalNames[i];
	}
}
