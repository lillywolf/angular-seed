
function UIHelper() {
	this.color1 = "#DCF0F2";
	this.color2 = "#D9F7FF";
	this.color3 = "#9CD9E8";
}

UIHelper.prototype.drawSkinnyDiagonals = function(containerId) {
	var containerWidth = $('#' + containerId).width();
	UIHelper.prototype.drawDiagonals(containerId, 4, 0, 0, containerWidth, containerWidth, 0, null, this.color1, this.color2, 0, true);
}

UIHelper.prototype.drawFatDiagonals = function(containerId) {
	var containerHeight = $('#' + containerId).height();
	UIHelper.prototype.drawDiagonals(containerId, 22, 16, 0, containerHeight, 0, 300, 0, this.color3, this.color2, 0, false);
}

UIHelper.prototype.drawDiagonals = function(containerId, ySpacing, yWidth, startY, endY, startX, heightRange, minHeight, firstColor, secondColor, pColor, right) {
	var c = $("#" + containerId)[0];			
	var ctx = c.getContext("2d");	
	if (ySpacing == 0 && yWidth == 0) { return; }
	while (startY < endY) {
		UIHelper.prototype.drawDiagonal(ctx, startX, startY, yWidth, heightRange, minHeight, (pColor > Math.random() ? secondColor : firstColor), right);
		startY = startY + yWidth + ySpacing;
	}
}

UIHelper.prototype.watchClipRect = function(containerId) {
	$(window).on('scroll resize', function() {
		adJustContentClipping(containerId);
	});
}

function adJustContentClipping(containerId) {
	var scrollTop = $(window).scrollTop();
	var containerWidth = $("#" + containerId).width();
	var innerHeight = $("#" + containerId).children().first().height();
	var rect = 'rect(' + scrollTop.toString() + 'px, ' + containerWidth.toString() + 'px, ' + innerHeight.toString() + 'px, 0px)';
	$("#" + containerId).css('clip', rect);
}

UIHelper.prototype.drawDiagonal = function(ctx, startX, startY, thickness, heightRange, minHeight, fillColor, right) {		
	var diagonalLength = (minHeight != null ? minHeight : startY) + Math.random() * heightRange;		
	ctx.beginPath();
	ctx.lineWidth = "1";		
	ctx.strokeStyle = fillColor;
	ctx.fillStyle = fillColor;
	ctx.beginPath();
	ctx.moveTo(startX, startY);	
	ctx.lineTo(startX + (right ? -diagonalLength : diagonalLength), startY - diagonalLength);
	ctx.lineTo(startX + (right ? -diagonalLength : diagonalLength), startY - diagonalLength + thickness);
	ctx.lineTo(startX, startY + thickness);
	ctx.lineTo(startX, startY);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
}

UIHelper.prototype.resizeContainer = function(innerId, outerId) {
	$('#' + innerId).resize(function() {
		$('#' + outerId).height($('#' + innerId).height());
	});
}