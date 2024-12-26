PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism_extras:alloy_radiance"];
     if (list.includes(ev.item.id),  !ev.hasGameStage("radiance") ){
    AStages.addStageForPlayer("radiance",ev.player)
}})