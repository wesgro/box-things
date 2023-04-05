const {
    vanillaExtractPlugin
} = require('@vanilla-extract/esbuild-plugin');

require('esbuild')
    .build({
        platform: "neutral",
        format: "esm",
        entryPoints: ['src/main.tsx'],
        bundle: true,
        plugins: [vanillaExtractPlugin()],
        outfile: 'out.js',
        external: ['react', 'react-dom'], 
        mainFields: ["module"]
    })
    .catch(() => process.exit(1));