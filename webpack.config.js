module.exports = {
    resolve: {
        fallback: { "querystring": require.resolve("querystring-es3") },
        fallback: { "https": require.resolve("https-browserify") }
    }
}