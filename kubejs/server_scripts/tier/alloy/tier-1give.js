PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism:alloy_infused"];
     if (list.includes(ev.item.id) ,  !ev.hasGameStage("infused")){
    AStages.addStageForPlayer("infused",ev.player)
}})