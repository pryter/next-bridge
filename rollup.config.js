import typescript from 'rollup-plugin-typescript2'
import dts from "rollup-plugin-dts";
import copy from 'rollup-plugin-copy'

export default [
    // ES Modules
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.es.js', format: 'es',
        },
        plugins: [
            typescript(),
            copy({
                targets: [
                    { src: 'plainJs/script', dest: 'dist/' }
                ]
            })
        ],
    },
    {
        input: "src/index.ts",
        output: [{ file: "dist/index.d.ts", format: "es" }],
        plugins: [dts()],
    }
]
