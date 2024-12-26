ServerEvents.tags('block', event => {
    // 例: 本棚を職業ブロックに設定
    event.add('minecraft:job_site', 'mekanism:steel_casing');
  });
MoreJSEvents.villagerTrades((event) => {
    /**
     * Adds a trade to the given profession.
     * - `profession`: The profession to add the trade to.
     * - `level`: The level, the villager needs to offer the trade.
     * - `input`: The input items for the trade. You can use a single item or an array with two items.
     * - `output`: The output items for the trade.
     */
    const trade1 = event.addTrade("kubejs:scientist", 1, [TradeItem.of("#forge:ingots/steel", 6, 6)], "minecraft:emerald");
    const trade2 = event.addTrade("kubejs:scientist", 1, [TradeItem.of("#forge:ingots/osmium", 8, 8)], "minecraft:emerald");
    const trade3 = event.addTrade("kubejs:scientist", 1, [TradeItem.of("minecraft:book", 1, 1)], "energizedpower:energized_power_book");

    // For 1.19+ only:
    // If you want to use random selected price ranges, you can use `TradeItem.of(item, min, max)` for input and outputs
    // event.addTrade("farmer", 1, ["minecraft:diamond", TradeItem.of("minecraft:apple", 10, 19)], "minecraft:acacia_sapling");


    // `addTrade` return the trade to set optional data.
    // trade.maxUses(number); // Sets the maximum amount of uses for the trade.
    // trade.villagerExperience(number); // Sets the amount of villager experience the trade gives.
    // trade.priceMultiplier(number); // Sets the price multiplier for the trade.
    // trade.transform((offer, entity, random) => { ... }); // Transforms the offer when it's generated.
});