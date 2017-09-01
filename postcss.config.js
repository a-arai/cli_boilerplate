module.exports = (ctx) => ({
    map: ctx.options.map,
    plugins: [
        require('postcss-import')(),
        require('postcss-nested')(),
        require('postcss-cssnext')({
            warnForDuplicates:false
        }),
        require('cssnano')()
    ]
})