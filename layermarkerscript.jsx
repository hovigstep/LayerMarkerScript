//Layer Marker Script

var theComp= app.project.activeItem; //This variable is the active sellected Itemal
if (theComp==null || (theComp instanceof CompItem)==false){
    alert("You must have a layer with markes sellected"); //Errorcheck to have a layer checked
}
else{
    var theLayer= theComp.selectedLayers[0]; //This is the selected layer
    if (theLayer==null){
        alert("You must have a layer with markes sellected"); //Errorcheck to have a layer checked
    }
    else{
        var numMarkers=theLayer.property("Marker").numKeys; //gives back the number of markers
        if(numMarkers==0){
            alert("You must have a layer with markes sellected"); //Errorcheck to have a layer checked
        }
        else{
            var startLayer= prompt("First layer to start with","1");// prompts to ask from which layer to start
            if(isNaN(startLayer)){
                alert("you must give this script a number not text");
            }else{
            layerstomarkers();
            }
        }
    }
}


//Function to do the work
function layerstomarkers(){

app.beginUndoGroup("Layers to markers"); //This an Un-Do to undo all changes at once

for (i=1;i<=numMarkers;i++){
    theComp.layer((startLayer-1)+i).startTime= theLayer.marker.keyTime(i);
}

app.endUndoGroup();

}
