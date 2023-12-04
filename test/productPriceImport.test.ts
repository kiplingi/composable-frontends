test('Product price component import', async () => {
    const cmp = await import('../components/product/ProductPrice1.vue')
    expect(cmp).toBeDefined()
})
