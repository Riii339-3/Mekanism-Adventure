PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism:alloy_infused"];
     if (list.includes(ev.item.id) ){
    AStages.addStageForPlayer("infused",ev.player)
}})