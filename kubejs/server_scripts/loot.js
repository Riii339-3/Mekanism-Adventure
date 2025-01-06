LootJS.modifiers((event) => {
    event
        .addLootTableModifier("chests/abandoned_mineshaft")
        .addAlternativesLoot(
            LootEntry.of("mekanism:basic_control_circuit").when((c) => c.randomChance(0.8))
        );
    event
        .addLootTableModifier("chests/pillager_outpost")
        .addAlternativesLoot(
            LootEntry.of("mekanism:advanced_control_circuit").when((c) => c.randomChance(0.7))
        );
});