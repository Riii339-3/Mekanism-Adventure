PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["minecraft:iron_ingot"];
     if (list.includes(ev.item.id) ){
    AStages.addStageForPlayer("iron",ev.player)
}})