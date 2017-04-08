
;(function(){
	function fontSize(){
		var font=document.documentElement.clientWidth/(375/20);

		document.documentElement.style.fontSize=font+'px';
	}
	window.addEventListener('resize',fontSize,false);
	fontSize();
})();




