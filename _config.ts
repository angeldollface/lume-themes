import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import esbuild from "lume/plugins/esbuild.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";

const site = lume();

site.use(
    codeHighlight(
        {
            options: {
                classPrefix: "syntax-",
            },
        }
    )
);
site.use(sass());
site.copy('assets');

export default site;