import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
import {build} from 'esbuild'

build({ platform: "browser",

        entryPoints: ['src/main.tsx'],
        bundle: true,
        plugins: [vanillaExtractPlugin()],
        outfile: 'out.js',
    mainFields: ["module"]
}).catch(() => process.exit(1));
