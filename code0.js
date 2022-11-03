gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDWizardMaleObjects1= [];
gdjs.Untitled_32sceneCode.GDWizardMaleObjects2= [];
gdjs.Untitled_32sceneCode.GDForestBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDForestBackgroundObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDWizardMaleObjects1Objects = Hashtable.newFrom({"WizardMale": gdjs.Untitled_32sceneCode.GDWizardMaleObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDForestBackgroundObjects1Objects = Hashtable.newFrom({"ForestBackground": gdjs.Untitled_32sceneCode.GDForestBackgroundObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ForestBackground"), gdjs.Untitled_32sceneCode.GDForestBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("WizardMale"), gdjs.Untitled_32sceneCode.GDWizardMaleObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDWizardMaleObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDForestBackgroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDWizardMaleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWizardMaleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDForestBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDForestBackgroundObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
