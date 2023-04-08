import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

import esbuild from "esbuild"

async function watch() {
    let ctx = await esbuild.context({
        entryPoints: ["./src/main.tsx"],
        minify: false,
        outfile: 'out.js',
        bundle: true,
        plugins: [vanillaExtractPlugin()],
        loader: { ".ts": "ts", ".tsx": "tsx" },
    });
    await ctx.watch();
    console.log('Watching...');
}
watch();