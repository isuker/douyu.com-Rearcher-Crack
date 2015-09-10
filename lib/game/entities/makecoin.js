/**
 * Created by xiawe_000 on 2015/7/14 0014.
 */
/*
 This entity gives damage (through ig.Entity's receiveDamage() method) to
 the entity that is passed as the first argument to the triggeredBy() method.

 I.e. you can connect an EntityTrigger to an EntityHurt to give damage to the
 entity that activated the trigger.


 Keys for Weltmeister:

 damage
 Damage to give to the entity that triggered this entity.
 Default: 10
 */

ig.module(
    'game.entities.makecoin'
)
    .requires(
    'impact.entity',
    'game.entities.coin'
)
    .defines(function () {

        EntityMakecoin = ig.Entity.extend({
            _wmDrawBox: true,
            _wmBoxColor: 'rgba(255, 0, 0, 0.7)',

            size: {x: 32, y: 32},
            damage: 10,

            triggeredBy: function (entity, trigger) {
                ig.game.spawnEntity(EntityCoin, this.pos.x, this.pos.y, {flip: this.flip});
            },

            update: function () {
            }
        });

    });