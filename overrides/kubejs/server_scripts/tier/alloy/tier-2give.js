PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism:alloy_reinforced"];
     if (list.includes(ev.item.id) ,  !ev.hasGameStage("reinforced")){
    AStages.addStageForPlayer("reinforced",ev.player)
}})