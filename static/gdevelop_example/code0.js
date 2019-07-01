gdjs.NewSceneCode = {};
gdjs.NewSceneCode.forEachIndex2 = 0;

gdjs.NewSceneCode.forEachObjects2 = [];

gdjs.NewSceneCode.forEachTemporary2 = null;

gdjs.NewSceneCode.forEachTotalCount2 = 0;

gdjs.NewSceneCode.GDPlayerObjects1= [];
gdjs.NewSceneCode.GDPlayerObjects2= [];
gdjs.NewSceneCode.GDPlayerObjects3= [];
gdjs.NewSceneCode.GDGrasPlatformObjects1= [];
gdjs.NewSceneCode.GDGrasPlatformObjects2= [];
gdjs.NewSceneCode.GDGrasPlatformObjects3= [];
gdjs.NewSceneCode.GDSmallBridgeObjects1= [];
gdjs.NewSceneCode.GDSmallBridgeObjects2= [];
gdjs.NewSceneCode.GDSmallBridgeObjects3= [];
gdjs.NewSceneCode.GDCoinObjects1= [];
gdjs.NewSceneCode.GDCoinObjects2= [];
gdjs.NewSceneCode.GDCoinObjects3= [];
gdjs.NewSceneCode.GDBushObjects1= [];
gdjs.NewSceneCode.GDBushObjects2= [];
gdjs.NewSceneCode.GDBushObjects3= [];
gdjs.NewSceneCode.GDCloudObjects1= [];
gdjs.NewSceneCode.GDCloudObjects2= [];
gdjs.NewSceneCode.GDCloudObjects3= [];
gdjs.NewSceneCode.GDScoreObjects1= [];
gdjs.NewSceneCode.GDScoreObjects2= [];
gdjs.NewSceneCode.GDScoreObjects3= [];
gdjs.NewSceneCode.GDSlimeObjects1= [];
gdjs.NewSceneCode.GDSlimeObjects2= [];
gdjs.NewSceneCode.GDSlimeObjects3= [];
gdjs.NewSceneCode.GDLeftObjects1= [];
gdjs.NewSceneCode.GDLeftObjects2= [];
gdjs.NewSceneCode.GDLeftObjects3= [];
gdjs.NewSceneCode.GDRightObjects1= [];
gdjs.NewSceneCode.GDRightObjects2= [];
gdjs.NewSceneCode.GDRightObjects3= [];
gdjs.NewSceneCode.GDCheckpointObjects1= [];
gdjs.NewSceneCode.GDCheckpointObjects2= [];
gdjs.NewSceneCode.GDCheckpointObjects3= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};


gdjs.NewSceneCode.eventsList0x69f66c = function(runtimeScene) {

{

gdjs.NewSceneCode.GDPlayerObjects2.createFrom(gdjs.NewSceneCode.GDPlayerObjects1);


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.NewSceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects2[k] = gdjs.NewSceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects2.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects2[i].setAnimationName("Idle");
}
}}

}


{

/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("Running");
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x69f66c
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.NewSceneCode.GDCoinObjects1});gdjs.NewSceneCode.eventsList0x69b71c = function(runtimeScene) {

}; //End of gdjs.NewSceneCode.eventsList0x69b71c
gdjs.NewSceneCode.eventsList0x69b5d4 = function(runtimeScene) {

{

/* Reuse gdjs.NewSceneCode.GDCoinObjects1 */

for(gdjs.NewSceneCode.forEachIndex2 = 0;gdjs.NewSceneCode.forEachIndex2 < gdjs.NewSceneCode.GDCoinObjects1.length;++gdjs.NewSceneCode.forEachIndex2) {
gdjs.NewSceneCode.GDCoinObjects2.length = 0;


gdjs.NewSceneCode.forEachTemporary2 = gdjs.NewSceneCode.GDCoinObjects1[gdjs.NewSceneCode.forEachIndex2];
gdjs.NewSceneCode.GDCoinObjects2.push(gdjs.NewSceneCode.forEachTemporary2);
if (true) {
{gdjs.evtTools.sound.playSound(runtimeScene, "resources\\coin.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(100);
}{for(var i = 0, len = gdjs.NewSceneCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


}; //End of gdjs.NewSceneCode.eventsList0x69b5d4
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.NewSceneCode.GDSlimeObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.NewSceneCode.GDRightObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.NewSceneCode.GDSlimeObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.NewSceneCode.GDLeftObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.NewSceneCode.GDSlimeObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.NewSceneCode.GDSlimeObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCheckpointObjects1Objects = Hashtable.newFrom({"Checkpoint": gdjs.NewSceneCode.GDCheckpointObjects1});gdjs.NewSceneCode.eventsList0xb3ea0 = function(runtimeScene) {

{


{
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NewSceneCode.GDPlayerObjects1.length !== 0 ? gdjs.NewSceneCode.GDPlayerObjects1[0] : null), false, "", 0);
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x69f66c(runtimeScene);} //End of subevents
}

}


{

gdjs.NewSceneCode.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x69b5d4(runtimeScene);} //End of subevents
}

}


{


{
gdjs.NewSceneCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.NewSceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.NewSceneCode.GDRightObjects1.createFrom(runtimeScene.getObjects("Right"));
gdjs.NewSceneCode.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeObjects1[i].returnVariable(gdjs.NewSceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}}

}


{

gdjs.NewSceneCode.GDLeftObjects1.createFrom(runtimeScene.getObjects("Left"));
gdjs.NewSceneCode.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLeftObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeObjects1[i].returnVariable(gdjs.NewSceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


{

gdjs.NewSceneCode.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDSlimeObjects1[i].getVariableString(gdjs.NewSceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDSlimeObjects1[k] = gdjs.NewSceneCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDSlimeObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeObjects1[i].flipX(false);
}
}}

}


{

gdjs.NewSceneCode.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDSlimeObjects1[i].getVariableString(gdjs.NewSceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDSlimeObjects1[k] = gdjs.NewSceneCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDSlimeObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeObjects1[i].flipX(true);
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
/* Reuse gdjs.NewSceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDLeftObjects1.createFrom(runtimeScene.getObjects("Left"));
gdjs.NewSceneCode.GDRightObjects1.createFrom(runtimeScene.getObjects("Right"));
{for(var i = 0, len = gdjs.NewSceneCode.GDLeftObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDRightObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDRightObjects1[i].hide();
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getVariableString(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getVariableString(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{

gdjs.NewSceneCode.GDCheckpointObjects1.createFrom(runtimeScene.getObjects("Checkpoint"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCheckpointObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDCheckpointObjects1 */
{runtimeScene.getVariables().getFromIndex(1).setNumber((( gdjs.NewSceneCode.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDCheckpointObjects1[0].getPointX("")));
}{runtimeScene.getVariables().getFromIndex(2).setNumber((( gdjs.NewSceneCode.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDCheckpointObjects1[0].getPointY("")));
}}

}


}; //End of gdjs.NewSceneCode.eventsList0xb3ea0


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDPlayerObjects1.length = 0;
gdjs.NewSceneCode.GDPlayerObjects2.length = 0;
gdjs.NewSceneCode.GDPlayerObjects3.length = 0;
gdjs.NewSceneCode.GDGrasPlatformObjects1.length = 0;
gdjs.NewSceneCode.GDGrasPlatformObjects2.length = 0;
gdjs.NewSceneCode.GDGrasPlatformObjects3.length = 0;
gdjs.NewSceneCode.GDSmallBridgeObjects1.length = 0;
gdjs.NewSceneCode.GDSmallBridgeObjects2.length = 0;
gdjs.NewSceneCode.GDSmallBridgeObjects3.length = 0;
gdjs.NewSceneCode.GDCoinObjects1.length = 0;
gdjs.NewSceneCode.GDCoinObjects2.length = 0;
gdjs.NewSceneCode.GDCoinObjects3.length = 0;
gdjs.NewSceneCode.GDBushObjects1.length = 0;
gdjs.NewSceneCode.GDBushObjects2.length = 0;
gdjs.NewSceneCode.GDBushObjects3.length = 0;
gdjs.NewSceneCode.GDCloudObjects1.length = 0;
gdjs.NewSceneCode.GDCloudObjects2.length = 0;
gdjs.NewSceneCode.GDCloudObjects3.length = 0;
gdjs.NewSceneCode.GDScoreObjects1.length = 0;
gdjs.NewSceneCode.GDScoreObjects2.length = 0;
gdjs.NewSceneCode.GDScoreObjects3.length = 0;
gdjs.NewSceneCode.GDSlimeObjects1.length = 0;
gdjs.NewSceneCode.GDSlimeObjects2.length = 0;
gdjs.NewSceneCode.GDSlimeObjects3.length = 0;
gdjs.NewSceneCode.GDLeftObjects1.length = 0;
gdjs.NewSceneCode.GDLeftObjects2.length = 0;
gdjs.NewSceneCode.GDLeftObjects3.length = 0;
gdjs.NewSceneCode.GDRightObjects1.length = 0;
gdjs.NewSceneCode.GDRightObjects2.length = 0;
gdjs.NewSceneCode.GDRightObjects3.length = 0;
gdjs.NewSceneCode.GDCheckpointObjects1.length = 0;
gdjs.NewSceneCode.GDCheckpointObjects2.length = 0;
gdjs.NewSceneCode.GDCheckpointObjects3.length = 0;

gdjs.NewSceneCode.eventsList0xb3ea0(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
