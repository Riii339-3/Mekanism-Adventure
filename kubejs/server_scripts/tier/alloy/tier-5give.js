PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism_extras:alloy_thermonuclear"];
     if (list.includes(ev.item.id) ,  !ev.hasGameStage("thermonuclear")){
    AStages.addStageForPlayer("thermonuclear",ev.player)
}})