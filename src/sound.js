Molecule.module('Molecule.Sound', function (require, p) {

	function Sound() {
		this.sound = null;
	};
	
	Sound.prototype.play = function(_loop) {
		_loop = _loop || false;
		if(this.sound.currentTime === this.sound.duration) {
			this.stop();
		}
		this.sound.loop = _loop;
		this.sound.play();
	};
	
	Sound.prototype.pause = function() {
		this.sound.pause();
	};
	
	Sound.prototype.stop = function() {
		this.sound.pause();
		this.sound.currentTime = 0;
	};
	
	return Sound;

});