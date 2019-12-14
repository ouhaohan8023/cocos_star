// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        opy: false,
        map: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.nums = 0;
    },

    start () {

    },

    update: function (dt) {
        // cc.log("The player is " + this.map.x);
        // var anim = this.getComponent(cc.Animation);
        // console.log(anim,111)
        // var animState = anim.play('test');
        // console.log(animState,222)
        // console.log(this.map.x,this.map.y)
        this.node.x = this.map.x
        this.node.y = this.map.y




        // this.node.angle += 100 * dt;
        // // console.log(this.node.angle);
        // this.opy = !this.opy;
        // if (this.opy && this.nums == 21) {
        //     // console.log(111);
        //     this.node.opacity = 128;
        //     this.nums = 0;
        // } else {
        //     this.node.opacity = 50;
        //     this.nums++;
        // }
        // // console.log(this.nums)
        // let size = cc.view.getFrameSize();
        // // console.log(size.width)
        // var halfWidth = size.width/2;
        // if (this.node.x > halfWidth) {
        //     this.node.x = 0 - halfWidth;
        // } else {
        //     this.node.x += 100 * dt;
        // }
        // console.log(this.node.x)

        
    },
});
