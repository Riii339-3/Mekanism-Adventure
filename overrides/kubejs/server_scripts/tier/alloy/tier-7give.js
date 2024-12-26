PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism_extras:alloy_spectrum"];
     if (list.includes(ev.item.id),  !ev.hasGameStage("spectrum") ){
    AStages.addStageForPlayer("spectrum",ev.player)
}})