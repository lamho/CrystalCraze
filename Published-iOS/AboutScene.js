//
// MainScene class
//
var AboutScene = function(){};

AboutScene.prototype.onDidLoadFromCCB = function()
{
	this.rootNode.animationManager.setCompletedAnimationCallback(this, this.onAnimationComplete);
};

AboutScene.prototype.onPressDone = function()
{
	gAudioEngine.playEffect("sounds/click.caf");

	this.pressedDone = true;
	this.rootNode.animationManager.runAnimationsForSequenceNamed("Outro");
};

AboutScene.prototype.onAnimationComplete = function()
{
	if (this.pressedDone)
	{
		this.rootNode.getParent().removeChild(this.rootNode, true);
	}
};
