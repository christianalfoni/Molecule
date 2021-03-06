Molecule(320, 320, function (game, require) {

    game.assets = require('assets');
    
    // Create sprite
    var sprite = game.assets.sprites.flappy;
    
    // Change friction
    game.physics.friction.x = 0;
    game.physics.friction.y = 0.025;
    
    // Change gravity (pixels per frame)
    game.physics.gravity.x = 0;
    game.physics.gravity.y = 9.78 / 60;
    
    game.init(function () {
    
        // Change sprite position
        sprite.position.x = game.width / 2;
        sprite.position.y = game.width / 2;
        
        // Change sprite anchor
        sprite.anchor.x = sprite.width / 2;
        sprite.anchor.y = sprite.height / 2;
        
        // Add animation with parameters: animation name, animation frames, speed
        sprite.animation.add('fly', [0, 1, 0, 2], 0.5);
        
        // Run animation with parameters: animation name, loop, reverse (loop and reverse parameters are optional) 
        sprite.animation.run('fly');
        
    });
    
    game.update(function () {

        if(sprite.position.y - sprite.anchor.y < 70) {
            game.physics.gravity.y = 9.78 / 60;
        } else if(sprite.position.y + sprite.anchor.y > game.width - 70) {
            game.physics.gravity.y = -9.78 / 60;
        }

    });

});