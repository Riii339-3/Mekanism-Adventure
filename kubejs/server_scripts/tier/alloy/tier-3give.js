PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism:alloy_atomic"];
     if (list.includes(ev.item.id) ){
    AStages.addStageForPlayer("atomic",ev.player)
}})