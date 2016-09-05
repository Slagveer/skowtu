import angular from 'angular';
import angularMeteor from 'angular-meteor';
//import * as PIXI from '/client/compatibility/pixi.min.js';

import template from './cartoon.html';

class CartoonCtrl {

    constructor($scope) {
        $scope.viewModel(this);
        this.renderer = PIXI.autoDetectRenderer(800, 600);
        this.stage = new PIXI.Container();
        var graphics = new PIXI.Graphics();

        document.body.appendChild(this.renderer.view);console.log(document.body)
        this.stage.interactive = true;


        // set a fill and line style
        graphics.beginFill(0xFF3300);
        graphics.lineStyle(4, 0xffd900, 1);

        // draw a shape
        graphics.moveTo(50,50);
        graphics.lineTo(250, 50);
        graphics.lineTo(100, 100);
        graphics.lineTo(50, 50);
        graphics.endFill();

        // set a fill and a line style again and draw a rectangle
        graphics.lineStyle(2, 0x0000FF, 1);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(50, 250, 120, 120);

        this.stage.addChild(graphics);

        // run the render loop
        this.animate();
    }
    animate() {console.log(this.renderer)
        this.renderer.render(this.stage);
        requestAnimationFrame( this.animate );
    }

}

export default angular.module('cartoon', [
    angularMeteor
])
    .component('cartoon', {
        templateUrl: 'imports/components/cartoon/cartoon.html',
        controller: CartoonCtrl
    });