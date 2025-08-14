gdjs.Level_321Code = {};
gdjs.Level_321Code.localVariables = [];
gdjs.Level_321Code.GDD_9595pad_9595left2Objects3_1final = [];

gdjs.Level_321Code.GDD_9595pad_9595right2Objects3_1final = [];

gdjs.Level_321Code.GDDown_9595ArrowObjects2_1final = [];

gdjs.Level_321Code.GDDuckObjects3_1final = [];

gdjs.Level_321Code.GDUp_9595Arrow2Objects3_1final = [];

gdjs.Level_321Code.GDDuckObjects1= [];
gdjs.Level_321Code.GDDuckObjects2= [];
gdjs.Level_321Code.GDDuckObjects3= [];
gdjs.Level_321Code.GDDuckObjects4= [];
gdjs.Level_321Code.GDBlockObjects1= [];
gdjs.Level_321Code.GDBlockObjects2= [];
gdjs.Level_321Code.GDBlockObjects3= [];
gdjs.Level_321Code.GDBlockObjects4= [];
gdjs.Level_321Code.GDKeyObjectObjects1= [];
gdjs.Level_321Code.GDKeyObjectObjects2= [];
gdjs.Level_321Code.GDKeyObjectObjects3= [];
gdjs.Level_321Code.GDKeyObjectObjects4= [];
gdjs.Level_321Code.GDDoorObjects1= [];
gdjs.Level_321Code.GDDoorObjects2= [];
gdjs.Level_321Code.GDDoorObjects3= [];
gdjs.Level_321Code.GDDoorObjects4= [];
gdjs.Level_321Code.GDSpikeObjects1= [];
gdjs.Level_321Code.GDSpikeObjects2= [];
gdjs.Level_321Code.GDSpikeObjects3= [];
gdjs.Level_321Code.GDSpikeObjects4= [];
gdjs.Level_321Code.GDDuckArtworkObjects1= [];
gdjs.Level_321Code.GDDuckArtworkObjects2= [];
gdjs.Level_321Code.GDDuckArtworkObjects3= [];
gdjs.Level_321Code.GDDuckArtworkObjects4= [];
gdjs.Level_321Code.GDSparkleParticleObjects1= [];
gdjs.Level_321Code.GDSparkleParticleObjects2= [];
gdjs.Level_321Code.GDSparkleParticleObjects3= [];
gdjs.Level_321Code.GDSparkleParticleObjects4= [];
gdjs.Level_321Code.GDCloudsObjects1= [];
gdjs.Level_321Code.GDCloudsObjects2= [];
gdjs.Level_321Code.GDCloudsObjects3= [];
gdjs.Level_321Code.GDCloudsObjects4= [];
gdjs.Level_321Code.GDDownButtonObjects1= [];
gdjs.Level_321Code.GDDownButtonObjects2= [];
gdjs.Level_321Code.GDDownButtonObjects3= [];
gdjs.Level_321Code.GDDownButtonObjects4= [];
gdjs.Level_321Code.GDTilemapObjects1= [];
gdjs.Level_321Code.GDTilemapObjects2= [];
gdjs.Level_321Code.GDTilemapObjects3= [];
gdjs.Level_321Code.GDTilemapObjects4= [];
gdjs.Level_321Code.GDUp_9595Arrow2Objects1= [];
gdjs.Level_321Code.GDUp_9595Arrow2Objects2= [];
gdjs.Level_321Code.GDUp_9595Arrow2Objects3= [];
gdjs.Level_321Code.GDUp_9595Arrow2Objects4= [];
gdjs.Level_321Code.GDD_9595pad_9595right2Objects1= [];
gdjs.Level_321Code.GDD_9595pad_9595right2Objects2= [];
gdjs.Level_321Code.GDD_9595pad_9595right2Objects3= [];
gdjs.Level_321Code.GDD_9595pad_9595right2Objects4= [];
gdjs.Level_321Code.GDD_9595pad_9595left2Objects1= [];
gdjs.Level_321Code.GDD_9595pad_9595left2Objects2= [];
gdjs.Level_321Code.GDD_9595pad_9595left2Objects3= [];
gdjs.Level_321Code.GDD_9595pad_9595left2Objects4= [];
gdjs.Level_321Code.GDDown_9595ArrowObjects1= [];
gdjs.Level_321Code.GDDown_9595ArrowObjects2= [];
gdjs.Level_321Code.GDDown_9595ArrowObjects3= [];
gdjs.Level_321Code.GDDown_9595ArrowObjects4= [];


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckObjects3[i].hide();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDDuckObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDDuckObjects3[k] = gdjs.Level_321Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDuckObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDDuckObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDDuckObjects3[k] = gdjs.Level_321Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDuckObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12598660);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_321Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].getBehavior("Animation").setAnimationName("Walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDDuckObjects3.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDDuckObjects3[k] = gdjs.Level_321Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDuckObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12599852);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_321Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_321Code.GDDownButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects2);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_321Code.GDDuckArtworkObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects2[i].setPosition((( gdjs.Level_321Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDDuckObjects2[0].getPointX("")),(( gdjs.Level_321Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDDuckObjects2[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDownButtonObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDownButtonObjects2[i].setPosition((( gdjs.Level_321Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDDuckObjects2[0].getPointX("")) - 32,(( gdjs.Level_321Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDDuckObjects2[0].getPointY("")) - 150);
}
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDD_95959595pad_95959595right2Objects4Objects = Hashtable.newFrom({"D_pad_right2": gdjs.Level_321Code.GDD_9595pad_9595right2Objects4});
gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDD_95959595pad_95959595left2Objects4Objects = Hashtable.newFrom({"D_pad_left2": gdjs.Level_321Code.GDD_9595pad_9595left2Objects4});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDUp_95959595Arrow2Objects4Objects = Hashtable.newFrom({"Up_Arrow2": gdjs.Level_321Code.GDUp_9595Arrow2Objects4});
gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.Level_321Code.GDUp_9595Arrow2Objects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_321Code.GDUp_9595Arrow2Objects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Up_Arrow2"), gdjs.Level_321Code.GDUp_9595Arrow2Objects4);
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDUp_95959595Arrow2Objects4Objects, runtimeScene, true, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_321Code.GDUp_9595Arrow2Objects4.length; j < jLen ; ++j) {
        if ( gdjs.Level_321Code.GDUp_9595Arrow2Objects3_1final.indexOf(gdjs.Level_321Code.GDUp_9595Arrow2Objects4[j]) === -1 )
            gdjs.Level_321Code.GDUp_9595Arrow2Objects3_1final.push(gdjs.Level_321Code.GDUp_9595Arrow2Objects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDUp_9595Arrow2Objects3_1final, gdjs.Level_321Code.GDUp_9595Arrow2Objects3);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12608220);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDDuckObjects3 */
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_321Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].getBehavior("Resizable").setHeight(55);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].getBehavior("Resizable").setWidth(70);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].getBehavior("Tween").addObjectWidthTween2("Squash Jump", 64, "linear", 0.08, false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].getBehavior("Tween").addObjectHeightTween2("Stretch Jump", 64, "linear", 0.08, false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckObjects3[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


};gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.Level_321Code.GDD_9595pad_9595right2Objects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_321Code.GDD_9595pad_9595right2Objects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("D_pad_right2"), gdjs.Level_321Code.GDD_9595pad_9595right2Objects4);
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDD_95959595pad_95959595right2Objects4Objects, runtimeScene, true, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_321Code.GDD_9595pad_9595right2Objects4.length; j < jLen ; ++j) {
        if ( gdjs.Level_321Code.GDD_9595pad_9595right2Objects3_1final.indexOf(gdjs.Level_321Code.GDD_9595pad_9595right2Objects4[j]) === -1 )
            gdjs.Level_321Code.GDD_9595pad_9595right2Objects3_1final.push(gdjs.Level_321Code.GDD_9595pad_9595right2Objects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDD_9595pad_9595right2Objects3_1final, gdjs.Level_321Code.GDD_9595pad_9595right2Objects3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_321Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{ //Subevents
gdjs.Level_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Level_321Code.GDD_9595pad_9595left2Objects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_321Code.GDD_9595pad_9595left2Objects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("D_pad_left2"), gdjs.Level_321Code.GDD_9595pad_9595left2Objects4);
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDD_95959595pad_95959595left2Objects4Objects, runtimeScene, true, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_321Code.GDD_9595pad_9595left2Objects4.length; j < jLen ; ++j) {
        if ( gdjs.Level_321Code.GDD_9595pad_9595left2Objects3_1final.indexOf(gdjs.Level_321Code.GDD_9595pad_9595left2Objects4[j]) === -1 )
            gdjs.Level_321Code.GDD_9595pad_9595left2Objects3_1final.push(gdjs.Level_321Code.GDD_9595pad_9595left2Objects4[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDD_9595pad_9595left2Objects3_1final, gdjs.Level_321Code.GDD_9595pad_9595left2Objects3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_321Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{



}


{

gdjs.Level_321Code.GDDuckObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_321Code.GDDuckObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects4);
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDDuckObjects4.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDuckObjects4[i].getBehavior("PlatformerObject").canJump() ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDDuckObjects4[k] = gdjs.Level_321Code.GDDuckObjects4[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDuckObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_321Code.GDDuckObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Level_321Code.GDDuckObjects3_1final.indexOf(gdjs.Level_321Code.GDDuckObjects4[j]) === -1 )
            gdjs.Level_321Code.GDDuckObjects3_1final.push(gdjs.Level_321Code.GDDuckObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects4);
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDDuckObjects4.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDuckObjects4[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDDuckObjects4[k] = gdjs.Level_321Code.GDDuckObjects4[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDuckObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_321Code.GDDuckObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Level_321Code.GDDuckObjects3_1final.indexOf(gdjs.Level_321Code.GDDuckObjects4[j]) === -1 )
            gdjs.Level_321Code.GDDuckObjects3_1final.push(gdjs.Level_321Code.GDDuckObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDDuckObjects3_1final, gdjs.Level_321Code.GDDuckObjects3);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_321Code.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDDuckObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDuckObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDDuckObjects2[k] = gdjs.Level_321Code.GDDuckObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDuckObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() != 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_321Code.GDDuckObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSpikeObjects2Objects = Hashtable.newFrom({"Spike": gdjs.Level_321Code.GDSpikeObjects2});
gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects2);
gdjs.copyArray(runtimeScene.getObjects("Spike"), gdjs.Level_321Code.GDSpikeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDuckObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSpikeObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Quack.mp3", false, 30, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


};gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDDuckObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDuckObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDDuckObjects2[k] = gdjs.Level_321Code.GDDuckObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDuckObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12614948);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_321Code.GDDuckArtworkObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects2[i].getBehavior("Resizable").setHeight(50);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects2[i].getBehavior("Resizable").setWidth(100);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects2[i].getBehavior("Tween").addObjectHeightTween2("Stretch", 64, "linear", 0.08, false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects2[i].getBehavior("Tween").addObjectWidthTween2("Squash", 64, "linear", 0.08, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDDuckObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDuckObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDDuckObjects1[k] = gdjs.Level_321Code.GDDuckObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDuckObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12616772);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_321Code.GDDuckArtworkObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects1[i].getBehavior("Tween").addObjectHeightTween2("Stretch Air", 75, "linear", 0.08, false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects1[i].getBehavior("Tween").addObjectWidthTween2("Squash Air", 50, "linear", 0.08, false);
}
}}

}


};gdjs.Level_321Code.eventsList6 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList0(runtimeScene);
}


{


gdjs.Level_321Code.eventsList3(runtimeScene);
}


{


gdjs.Level_321Code.eventsList4(runtimeScene);
}


{


gdjs.Level_321Code.eventsList5(runtimeScene);
}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_321Code.GDDuckObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDKeyObjectObjects2Objects = Hashtable.newFrom({"KeyObject": gdjs.Level_321Code.GDKeyObjectObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSparkleParticleObjects2Objects = Hashtable.newFrom({"SparkleParticle": gdjs.Level_321Code.GDSparkleParticleObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_321Code.GDDuckObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level_321Code.GDDoorObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_321Code.GDDuckObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level_321Code.GDDoorObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDown_95959595ArrowObjects3Objects = Hashtable.newFrom({"Down_Arrow": gdjs.Level_321Code.GDDown_9595ArrowObjects3});
gdjs.Level_321Code.eventsList7 = function(runtimeScene) {

{



}


{



}


{

gdjs.Level_321Code.GDDown_9595ArrowObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_321Code.GDDown_9595ArrowObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Down_Arrow"), gdjs.Level_321Code.GDDown_9595ArrowObjects3);
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDown_95959595ArrowObjects3Objects, runtimeScene, true, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_321Code.GDDown_9595ArrowObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Level_321Code.GDDown_9595ArrowObjects2_1final.indexOf(gdjs.Level_321Code.GDDown_9595ArrowObjects3[j]) === -1 )
            gdjs.Level_321Code.GDDown_9595ArrowObjects2_1final.push(gdjs.Level_321Code.GDDown_9595ArrowObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDDown_9595ArrowObjects2_1final, gdjs.Level_321Code.GDDown_9595ArrowObjects2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), false);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDuckObjects1Objects = Hashtable.newFrom({"Duck": gdjs.Level_321Code.GDDuckObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_321Code.GDDoorObjects1});
gdjs.Level_321Code.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects2);
gdjs.copyArray(runtimeScene.getObjects("KeyObject"), gdjs.Level_321Code.GDKeyObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDuckObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDKeyObjectObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDKeyObjectObjects2 */
gdjs.Level_321Code.GDSparkleParticleObjects2.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSparkleParticleObjects2Objects, (( gdjs.Level_321Code.GDKeyObjectObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDKeyObjectObjects2[0].getPointX("Center")), (( gdjs.Level_321Code.GDKeyObjectObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDKeyObjectObjects2[0].getPointY("Center")), "Player");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Key.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.Level_321Code.GDKeyObjectObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDKeyObjectObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_321Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDuckObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDoorObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDDoorObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDDoorObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDoorObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock.wav", false, 50, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_321Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDuckObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDoorObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDDoorObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDoorObjects2[i].getBehavior("Animation").getAnimationName() == "Unlocked" ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDDoorObjects2[k] = gdjs.Level_321Code.GDDoorObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDoorObjects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_321Code.GDDownButtonObjects2);
/* Reuse gdjs.Level_321Code.GDDuckObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDDownButtonObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDownButtonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDownButtonObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDownButtonObjects2[i].setPosition((( gdjs.Level_321Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDDuckObjects2[0].getPointX("")) - 32,(( gdjs.Level_321Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDDuckObjects2[0].getPointY("")) - 150);
}
}
{ //Subevents
gdjs.Level_321Code.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_321Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDuckObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDoorObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12625100);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_321Code.GDDownButtonObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDDownButtonObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDownButtonObjects1[i].hide();
}
}}

}


};gdjs.Level_321Code.eventsList9 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList6(runtimeScene);
}


{


gdjs.Level_321Code.eventsList8(runtimeScene);
}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDDuckObjects1.length = 0;
gdjs.Level_321Code.GDDuckObjects2.length = 0;
gdjs.Level_321Code.GDDuckObjects3.length = 0;
gdjs.Level_321Code.GDDuckObjects4.length = 0;
gdjs.Level_321Code.GDBlockObjects1.length = 0;
gdjs.Level_321Code.GDBlockObjects2.length = 0;
gdjs.Level_321Code.GDBlockObjects3.length = 0;
gdjs.Level_321Code.GDBlockObjects4.length = 0;
gdjs.Level_321Code.GDKeyObjectObjects1.length = 0;
gdjs.Level_321Code.GDKeyObjectObjects2.length = 0;
gdjs.Level_321Code.GDKeyObjectObjects3.length = 0;
gdjs.Level_321Code.GDKeyObjectObjects4.length = 0;
gdjs.Level_321Code.GDDoorObjects1.length = 0;
gdjs.Level_321Code.GDDoorObjects2.length = 0;
gdjs.Level_321Code.GDDoorObjects3.length = 0;
gdjs.Level_321Code.GDDoorObjects4.length = 0;
gdjs.Level_321Code.GDSpikeObjects1.length = 0;
gdjs.Level_321Code.GDSpikeObjects2.length = 0;
gdjs.Level_321Code.GDSpikeObjects3.length = 0;
gdjs.Level_321Code.GDSpikeObjects4.length = 0;
gdjs.Level_321Code.GDDuckArtworkObjects1.length = 0;
gdjs.Level_321Code.GDDuckArtworkObjects2.length = 0;
gdjs.Level_321Code.GDDuckArtworkObjects3.length = 0;
gdjs.Level_321Code.GDDuckArtworkObjects4.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects1.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects2.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects3.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects4.length = 0;
gdjs.Level_321Code.GDCloudsObjects1.length = 0;
gdjs.Level_321Code.GDCloudsObjects2.length = 0;
gdjs.Level_321Code.GDCloudsObjects3.length = 0;
gdjs.Level_321Code.GDCloudsObjects4.length = 0;
gdjs.Level_321Code.GDDownButtonObjects1.length = 0;
gdjs.Level_321Code.GDDownButtonObjects2.length = 0;
gdjs.Level_321Code.GDDownButtonObjects3.length = 0;
gdjs.Level_321Code.GDDownButtonObjects4.length = 0;
gdjs.Level_321Code.GDTilemapObjects1.length = 0;
gdjs.Level_321Code.GDTilemapObjects2.length = 0;
gdjs.Level_321Code.GDTilemapObjects3.length = 0;
gdjs.Level_321Code.GDTilemapObjects4.length = 0;
gdjs.Level_321Code.GDUp_9595Arrow2Objects1.length = 0;
gdjs.Level_321Code.GDUp_9595Arrow2Objects2.length = 0;
gdjs.Level_321Code.GDUp_9595Arrow2Objects3.length = 0;
gdjs.Level_321Code.GDUp_9595Arrow2Objects4.length = 0;
gdjs.Level_321Code.GDD_9595pad_9595right2Objects1.length = 0;
gdjs.Level_321Code.GDD_9595pad_9595right2Objects2.length = 0;
gdjs.Level_321Code.GDD_9595pad_9595right2Objects3.length = 0;
gdjs.Level_321Code.GDD_9595pad_9595right2Objects4.length = 0;
gdjs.Level_321Code.GDD_9595pad_9595left2Objects1.length = 0;
gdjs.Level_321Code.GDD_9595pad_9595left2Objects2.length = 0;
gdjs.Level_321Code.GDD_9595pad_9595left2Objects3.length = 0;
gdjs.Level_321Code.GDD_9595pad_9595left2Objects4.length = 0;
gdjs.Level_321Code.GDDown_9595ArrowObjects1.length = 0;
gdjs.Level_321Code.GDDown_9595ArrowObjects2.length = 0;
gdjs.Level_321Code.GDDown_9595ArrowObjects3.length = 0;
gdjs.Level_321Code.GDDown_9595ArrowObjects4.length = 0;

gdjs.Level_321Code.eventsList9(runtimeScene);
gdjs.Level_321Code.GDDuckObjects1.length = 0;
gdjs.Level_321Code.GDDuckObjects2.length = 0;
gdjs.Level_321Code.GDDuckObjects3.length = 0;
gdjs.Level_321Code.GDDuckObjects4.length = 0;
gdjs.Level_321Code.GDBlockObjects1.length = 0;
gdjs.Level_321Code.GDBlockObjects2.length = 0;
gdjs.Level_321Code.GDBlockObjects3.length = 0;
gdjs.Level_321Code.GDBlockObjects4.length = 0;
gdjs.Level_321Code.GDKeyObjectObjects1.length = 0;
gdjs.Level_321Code.GDKeyObjectObjects2.length = 0;
gdjs.Level_321Code.GDKeyObjectObjects3.length = 0;
gdjs.Level_321Code.GDKeyObjectObjects4.length = 0;
gdjs.Level_321Code.GDDoorObjects1.length = 0;
gdjs.Level_321Code.GDDoorObjects2.length = 0;
gdjs.Level_321Code.GDDoorObjects3.length = 0;
gdjs.Level_321Code.GDDoorObjects4.length = 0;
gdjs.Level_321Code.GDSpikeObjects1.length = 0;
gdjs.Level_321Code.GDSpikeObjects2.length = 0;
gdjs.Level_321Code.GDSpikeObjects3.length = 0;
gdjs.Level_321Code.GDSpikeObjects4.length = 0;
gdjs.Level_321Code.GDDuckArtworkObjects1.length = 0;
gdjs.Level_321Code.GDDuckArtworkObjects2.length = 0;
gdjs.Level_321Code.GDDuckArtworkObjects3.length = 0;
gdjs.Level_321Code.GDDuckArtworkObjects4.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects1.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects2.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects3.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects4.length = 0;
gdjs.Level_321Code.GDCloudsObjects1.length = 0;
gdjs.Level_321Code.GDCloudsObjects2.length = 0;
gdjs.Level_321Code.GDCloudsObjects3.length = 0;
gdjs.Level_321Code.GDCloudsObjects4.length = 0;
gdjs.Level_321Code.GDDownButtonObjects1.length = 0;
gdjs.Level_321Code.GDDownButtonObjects2.length = 0;
gdjs.Level_321Code.GDDownButtonObjects3.length = 0;
gdjs.Level_321Code.GDDownButtonObjects4.length = 0;
gdjs.Level_321Code.GDTilemapObjects1.length = 0;
gdjs.Level_321Code.GDTilemapObjects2.length = 0;
gdjs.Level_321Code.GDTilemapObjects3.length = 0;
gdjs.Level_321Code.GDTilemapObjects4.length = 0;
gdjs.Level_321Code.GDUp_9595Arrow2Objects1.length = 0;
gdjs.Level_321Code.GDUp_9595Arrow2Objects2.length = 0;
gdjs.Level_321Code.GDUp_9595Arrow2Objects3.length = 0;
gdjs.Level_321Code.GDUp_9595Arrow2Objects4.length = 0;
gdjs.Level_321Code.GDD_9595pad_9595right2Objects1.length = 0;
gdjs.Level_321Code.GDD_9595pad_9595right2Objects2.length = 0;
gdjs.Level_321Code.GDD_9595pad_9595right2Objects3.length = 0;
gdjs.Level_321Code.GDD_9595pad_9595right2Objects4.length = 0;
gdjs.Level_321Code.GDD_9595pad_9595left2Objects1.length = 0;
gdjs.Level_321Code.GDD_9595pad_9595left2Objects2.length = 0;
gdjs.Level_321Code.GDD_9595pad_9595left2Objects3.length = 0;
gdjs.Level_321Code.GDD_9595pad_9595left2Objects4.length = 0;
gdjs.Level_321Code.GDDown_9595ArrowObjects1.length = 0;
gdjs.Level_321Code.GDDown_9595ArrowObjects2.length = 0;
gdjs.Level_321Code.GDDown_9595ArrowObjects3.length = 0;
gdjs.Level_321Code.GDDown_9595ArrowObjects4.length = 0;


return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
