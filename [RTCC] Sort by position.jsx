// sort the layers by name
for (var x = 0; x < app.activeDocument.layers.length; x++) {
    for (var y = 0; y < app.activeDocument.layers.length - 1 - x; y++) { // Compare in a non-case sensitive way
    	// check wich top px position has the layer
        var doc1 = app.activeDocument.layers[y].bounds[1];
        var doc2 = app.activeDocument.layers[y + 1].bounds[1];
        // test if the previous and next layer are > or <
        if (parseInt(doc1) < parseInt(doc2)) { app.activeDocument.layers[y].move(app.activeDocument.layers[y+1],
            ElementPlacement.PLACEAFTER)
    } 

}
}

