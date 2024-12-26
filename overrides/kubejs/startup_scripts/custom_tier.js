
ItemEvents.toolTierRegistry(event => {
    // カスタムツールティアの設定
    event.add('plastic', tier => {
      tier.uses = 256 // 耐久値
      tier.speed = 9.0 // 採掘速度
      tier.attackDamageBonus = 1.0 // 攻撃力ボーナス
      tier.level = 1 // 採掘レベル (ダイヤモンド相当)
      tier.enchantmentValue = 15 // エンチャントの強さ
      tier.repairIngredient = '#forge:plastic' // 修理アイテムを金インゴットに設定
    })
  })