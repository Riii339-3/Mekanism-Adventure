PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism:alloy_reinforced"];
     if (list.includes(ev.item.id) ){
    AStages.addStageForPlayer("reinforced",ev.player)
}})