PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism:basic_control_circuit"];
    let pattern = 'iron'
     if (list.includes(ev.item.id) ,  !ev.hasGameStage("basic")){
    AStages.addStageForPlayer("basic",ev.player)
}})