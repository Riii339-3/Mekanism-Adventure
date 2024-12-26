PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism_extras:alloy_shining"];
     if (list.includes(ev.item.id) ){
    AStages.addStageForPlayer("shining",ev.player)
}})