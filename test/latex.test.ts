import { test } from "vitest";
import assert from "assert";
//@ts-ignore
import { initmathjax, rendermath } from "../dist/index.js";
//@ts-ignore
import { latexinput } from "./latexinput.js";
import { html } from "./html.js";
test("latex", async () => {
    const MathJax = await initmathjax();
    const result = await rendermath(MathJax, latexinput, "latex");
    const output = `<mjx-container class="MathJax" jax="CHTML" display="true" style="font-size: 122.3%;"><mjx-math display="true" class="MJX-TEX" style="margin-left: 0px; margin-right: 0px;"><mjx-mrow><mjx-mo class="mjx-n"><mjx-stretchy-v class="mjx-c7B" style="height: 12.412em; vertical-align: -5.956em;"><mjx-beg><mjx-c></mjx-c></mjx-beg><mjx-ext><mjx-c></mjx-c></mjx-ext><mjx-mid><mjx-c></mjx-c></mjx-mid><mjx-ext><mjx-c></mjx-c></mjx-ext><mjx-end><mjx-c></mjx-c></mjx-end><mjx-mark></mjx-mark></mjx-stretchy-v></mjx-mo><mjx-mtable style="min-width: 10.493em;"><mjx-table><mjx-itable><mjx-mtr><mjx-mtd style="text-align: right; padding-right: 0px; padding-bottom: 0.15em;"><mjx-mi class="mjx-n"><mjx-c class="mjx-c2207"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-cD7"></mjx-c></mjx-mo><mjx-texatom space="3" texclass="ORD"><mjx-mover><mjx-over style="padding-bottom: 0.105em; padding-left: 0.409em; margin-bottom: -0.516em;"><mjx-mo class="mjx-n" style="width: 0px; margin-left: -0.25em;"><mjx-c class="mjx-c20D7 TEX-V"></mjx-c></mjx-mo></mjx-over><mjx-base><mjx-texatom texclass="ORD"><mjx-mi class="mjx-b"><mjx-c class="mjx-c1D401 TEX-B"></mjx-c></mjx-mi></mjx-texatom></mjx-base></mjx-mover></mjx-texatom><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D450 TEX-I"></mjx-c></mjx-mi></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac><mjx-mstyle><mjx-mspace style="width: 0.167em;"></mjx-mspace></mjx-mstyle><mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D715"></mjx-c></mjx-mi><mjx-texatom texclass="ORD"><mjx-mover><mjx-over style="padding-bottom: 0.105em; padding-left: 0.378em; margin-bottom: -0.516em;"><mjx-mo class="mjx-n" style="width: 0px; margin-left: -0.25em;"><mjx-c class="mjx-c20D7 TEX-V"></mjx-c></mjx-mo></mjx-over><mjx-base><mjx-texatom texclass="ORD"><mjx-mi class="mjx-b"><mjx-c class="mjx-c1D404 TEX-B"></mjx-c></mjx-mi></mjx-texatom></mjx-base></mjx-mover></mjx-texatom></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D715"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac><mjx-tstrut></mjx-tstrut></mjx-mtd><mjx-mtd style="text-align: left; padding-left: 0px; padding-bottom: 0.15em;"><mjx-mi class="mjx-n"></mjx-mi><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mfrac space="4"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mn class="mjx-n"><mjx-c class="mjx-c34"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D70B TEX-I"></mjx-c></mjx-mi></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D450 TEX-I"></mjx-c></mjx-mi></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac><mjx-texatom texclass="ORD"><mjx-mover><mjx-over style="padding-bottom: 0.105em; padding-left: 0.175em; margin-bottom: -0.516em;"><mjx-mo class="mjx-n" style="width: 0px; margin-left: -0.25em;"><mjx-c class="mjx-c20D7 TEX-V"></mjx-c></mjx-mo></mjx-over><mjx-base><mjx-texatom texclass="ORD"><mjx-mi class="mjx-b"><mjx-c class="mjx-c1D423 TEX-B"></mjx-c></mjx-mi></mjx-texatom></mjx-base></mjx-mover></mjx-texatom><mjx-tstrut></mjx-tstrut></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em; padding-bottom: 0.15em;"><mjx-tstrut></mjx-tstrut></mjx-mtd><mjx-mtd extra="true"></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em; padding-bottom: 0.15em;"><mjx-mi class="mjx-n"><mjx-c class="mjx-c2207"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c22C5"></mjx-c></mjx-mo><mjx-texatom space="3" texclass="ORD"><mjx-mover><mjx-over style="padding-bottom: 0.105em; padding-left: 0.378em; margin-bottom: -0.516em;"><mjx-mo class="mjx-n" style="width: 0px; margin-left: -0.25em;"><mjx-c class="mjx-c20D7 TEX-V"></mjx-c></mjx-mo></mjx-over><mjx-base><mjx-texatom texclass="ORD"><mjx-mi class="mjx-b"><mjx-c class="mjx-c1D404 TEX-B"></mjx-c></mjx-mi></mjx-texatom></mjx-base></mjx-mover></mjx-texatom><mjx-tstrut></mjx-tstrut></mjx-mtd><mjx-mtd style="text-align: left; padding-left: 0px; padding-top: 0.15em; padding-bottom: 0.15em;"><mjx-mi class="mjx-n"></mjx-mi><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="4"><mjx-c class="mjx-c34"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D70B TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D70C TEX-I"></mjx-c></mjx-mi><mjx-tstrut></mjx-tstrut></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em; padding-bottom: 0.15em;"><mjx-tstrut></mjx-tstrut></mjx-mtd><mjx-mtd extra="true"></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em; padding-bottom: 0.15em;"><mjx-mi class="mjx-n"><mjx-c class="mjx-c2207"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-cD7"></mjx-c></mjx-mo><mjx-texatom space="3" texclass="ORD"><mjx-mover><mjx-over style="padding-bottom: 0.105em; padding-left: 0.378em; margin-bottom: -0.516em;"><mjx-mo class="mjx-n" style="width: 0px; margin-left: -0.25em;"><mjx-c class="mjx-c20D7 TEX-V"></mjx-c></mjx-mo></mjx-over><mjx-base><mjx-texatom texclass="ORD"><mjx-mi class="mjx-b"><mjx-c class="mjx-c1D404 TEX-B"></mjx-c></mjx-mi></mjx-texatom></mjx-base></mjx-mover></mjx-texatom><mjx-mstyle><mjx-mspace style="width: 0.167em;"></mjx-mspace></mjx-mstyle><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo><mjx-mstyle><mjx-mspace style="width: 0.167em;"></mjx-mspace></mjx-mstyle><mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D450 TEX-I"></mjx-c></mjx-mi></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac><mjx-mstyle><mjx-mspace style="width: 0.167em;"></mjx-mspace></mjx-mstyle><mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D715"></mjx-c></mjx-mi><mjx-texatom texclass="ORD"><mjx-mover><mjx-over style="padding-bottom: 0.105em; padding-left: 0.409em; margin-bottom: -0.516em;"><mjx-mo class="mjx-n" style="width: 0px; margin-left: -0.25em;"><mjx-c class="mjx-c20D7 TEX-V"></mjx-c></mjx-mo></mjx-over><mjx-base><mjx-texatom texclass="ORD"><mjx-mi class="mjx-b"><mjx-c class="mjx-c1D401 TEX-B"></mjx-c></mjx-mi></mjx-texatom></mjx-base></mjx-mover></mjx-texatom></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D715"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac><mjx-tstrut></mjx-tstrut></mjx-mtd><mjx-mtd style="text-align: left; padding-left: 0px; padding-top: 0.15em; padding-bottom: 0.15em;"><mjx-mi class="mjx-n"></mjx-mi><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-texatom space="4" texclass="ORD"><mjx-mover><mjx-over style="padding-bottom: 0.105em; padding-left: 0.287em; margin-bottom: -0.516em;"><mjx-mo class="mjx-n" style="width: 0px; margin-left: -0.25em;"><mjx-c class="mjx-c20D7 TEX-V"></mjx-c></mjx-mo></mjx-over><mjx-base><mjx-texatom texclass="ORD"><mjx-mn class="mjx-b"><mjx-c class="mjx-c1D7CE TEX-B"></mjx-c></mjx-mn></mjx-texatom></mjx-base></mjx-mover></mjx-texatom><mjx-tstrut></mjx-tstrut></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em; padding-bottom: 0.15em;"><mjx-tstrut></mjx-tstrut></mjx-mtd><mjx-mtd extra="true"></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em;"><mjx-mi class="mjx-n"><mjx-c class="mjx-c2207"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c22C5"></mjx-c></mjx-mo><mjx-texatom space="3" texclass="ORD"><mjx-mover><mjx-over style="padding-bottom: 0.105em; padding-left: 0.409em; margin-bottom: -0.516em;"><mjx-mo class="mjx-n" style="width: 0px; margin-left: -0.25em;"><mjx-c class="mjx-c20D7 TEX-V"></mjx-c></mjx-mo></mjx-over><mjx-base><mjx-texatom texclass="ORD"><mjx-mi class="mjx-b"><mjx-c class="mjx-c1D401 TEX-B"></mjx-c></mjx-mi></mjx-texatom></mjx-base></mjx-mover></mjx-texatom><mjx-tstrut></mjx-tstrut></mjx-mtd><mjx-mtd style="text-align: left; padding-left: 0px; padding-top: 0.15em;"><mjx-mi class="mjx-n"></mjx-mi><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="4"><mjx-c class="mjx-c30"></mjx-c></mjx-mn><mjx-tstrut></mjx-tstrut></mjx-mtd></mjx-mtr></mjx-itable></mjx-table></mjx-mtable><mjx-mo class="mjx-n" style="vertical-align: 0.25em;"></mjx-mo></mjx-mrow></mjx-math></mjx-container>`;
    // console.log(result, "\n", output);
    //@ts-ignore
    // assert.equal(html([result]), html([output]));
    //@ts-ignore
    const aaa = html([
        result.replaceAll(`style="margin-left: 0px; margin-right: 0px;"`, ""),
    ]);
    //@ts-ignore
    const bbb = html([
        output.replaceAll(`style="margin-left: 0px; margin-right: 0px;"`, ""),
    ]);
    // console.log(result, "\n", output);
    // assert.equal(result, output);
    // console.log(JSON.stringify(aaa, null, 4));
    // console.log(JSON.stringify(bbb, null, 4));
    // console.log(aaa, bbb);
    //@ts-ignore
    assert.deepEqual(aaa, bbb);
});
