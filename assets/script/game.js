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
        sleepPrefab: {
            default: null,
            type: cc.Prefab
        },
        map2: {
            default: null,
            type: cc.Node
        }
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
    },

   onLoad: function () {
        // 生成一个新的星星
        this.spawnNewStar();
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
    },

    spawnNewStar: function() {
        
        var newStar = cc.instantiate(this.sleepPrefab);
        // console.log(this.node.children)
        this.node.addChild(newStar,1,"sleep");
        // console.log(this.node.children,this.node.children.map2)
        
    },


    update (dt) {
        var a = this.node.getChildByName("sleep");
        a.x = this.map2.x
        a.y = this.map2.y
        // console.log(this.map2.x,this.map2.y);
    },
});
