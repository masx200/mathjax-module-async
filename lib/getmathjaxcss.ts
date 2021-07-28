import { mathjaxbase } from "./mathjaxurl.js";
export function getmathjaxcss() {
    return `@charset "utf-8";

    mjx-mtext {
        display: inline-block;
        text-align: left;
    }
    
    mjx-mfenced {
        display: inline-block;
        text-align: left;
    }
    
    mjx-msqrt {
        display: inline-block;
        text-align: left;
    }
    
    mjx-root {
        display: inline-block;
        white-space: nowrap;
    }
    
    mjx-surd {
        display: inline-block;
        vertical-align: top;
    }
    
    mjx-sqrt {
        display: inline-block;
        padding-top: 0.07em;
    }
    
    mjx-sqrt > mjx-box {
        border-top: 0.07em solid;
    }
    
    mjx-sqrt.mjx-tall > mjx-box {
        padding-left: 0.3em;
        margin-left: -0.3em;
    }
    
    mjx-c.mjx-c1D44E.TEX-I::before {
        padding: 0.441em 0.529em 0.01em 0px;
        content: "a";
    }
    
    mjx-c.mjx-c2062::before {
        padding: 0px;
        content: "";
    }
    
    mjx-c.mjx-c1D465.TEX-I::before {
        padding: 0.442em 0.572em 0.011em 0px;
        content: "x";
    }
    
    mjx-c.mjx-c32::before {
        padding: 0.666em 0.5em 0px 0px;
        content: "2";
    }
    
    mjx-c.mjx-c2B::before {
        padding: 0.583em 0.778em 0.082em 0px;
        content: "+";
    }
    
    mjx-c.mjx-c1D44F.TEX-I::before {
        padding: 0.694em 0.429em 0.011em 0px;
        content: "b";
    }
    
    mjx-c.mjx-c1D450.TEX-I::before {
        padding: 0.442em 0.433em 0.011em 0px;
        content: "c";
    }
    
    mjx-c.mjx-c3D::before {
        padding: 0.583em 0.778em 0.082em 0px;
        content: "=";
    }
    
    mjx-c.mjx-c30::before {
        padding: 0.666em 0.5em 0.022em 0px;
        content: "0";
    }
    
    mjx-c.mjx-c2212::before {
        padding: 0.583em 0.778em 0.082em 0px;
        content: "−";
    }
    
    mjx-c.mjx-c2064::before {
        padding: 0px;
        content: "";
    }
    
    mjx-c.mjx-c44::before {
        padding: 0.683em 0.764em 0px 0px;
        content: "D";
    }
    
    mjx-c.mjx-c69::before {
        padding: 0.669em 0.278em 0px 0px;
        content: "i";
    }
    
    mjx-c.mjx-c76::before {
        padding: 0.431em 0.528em 0.011em 0px;
        content: "v";
    }
    
    mjx-c.mjx-c64::before {
        padding: 0.694em 0.556em 0.011em 0px;
        content: "d";
    }
    
    mjx-c.mjx-c65::before {
        padding: 0.448em 0.444em 0.011em 0px;
        content: "e";
    }
    
    mjx-c.mjx-c20::before {
        padding: 0px 0.25em 0px 0px;
        content: " ";
    }
    
    mjx-c.mjx-c6F::before {
        padding: 0.448em 0.5em 0.01em 0px;
        content: "o";
    }
    
    mjx-c.mjx-c75::before {
        padding: 0.442em 0.556em 0.011em 0px;
        content: "u";
    }
    
    mjx-c.mjx-c74::before {
        padding: 0.615em 0.389em 0.01em 0px;
        content: "t";
    }
    
    mjx-c.mjx-c6C::before {
        padding: 0.694em 0.278em 0px 0px;
        content: "l";
    }
    
    mjx-c.mjx-c61::before {
        padding: 0.448em 0.5em 0.011em 0px;
        content: "a";
    }
    
    mjx-c.mjx-c6E::before {
        padding: 0.442em 0.556em 0px 0px;
        content: "n";
    }
    
    mjx-c.mjx-c67::before {
        padding: 0.453em 0.5em 0.206em 0px;
        content: "g";
    }
    
    mjx-c.mjx-c63::before {
        padding: 0.448em 0.444em 0.011em 0px;
        content: "c";
    }
    
    mjx-c.mjx-c66::before {
        padding: 0.705em 0.372em 0px 0px;
        content: "f";
    }
    
    mjx-c.mjx-c2E::before {
        padding: 0.12em 0.278em 0px 0px;
        content: ".";
    }
    
    mjx-c.mjx-c28.TEX-S1::before {
        padding: 0.85em 0.458em 0.349em 0px;
        content: "(";
    }
    
    mjx-c.mjx-c29.TEX-S1::before {
        padding: 0.85em 0.458em 0.349em 0px;
        content: ")";
    }
    
    mjx-c.mjx-c28::before {
        padding: 0.75em 0.389em 0.25em 0px;
        content: "(";
    }
    
    mjx-c.mjx-c34::before {
        padding: 0.677em 0.5em 0px 0px;
        content: "4";
    }
    
    mjx-c.mjx-c29::before {
        padding: 0.75em 0.389em 0.25em 0px;
        content: ")";
    }
    
    mjx-c.mjx-c43::before {
        padding: 0.705em 0.722em 0.021em 0px;
        content: "C";
    }
    
    mjx-c.mjx-c6D::before {
        padding: 0.442em 0.833em 0px 0px;
        content: "m";
    }
    
    mjx-c.mjx-c70::before {
        padding: 0.442em 0.556em 0.194em 0px;
        content: "p";
    }
    
    mjx-c.mjx-c68::before {
        padding: 0.694em 0.556em 0px 0px;
        content: "h";
    }
    
    mjx-c.mjx-c73::before {
        padding: 0.448em 0.394em 0.011em 0px;
        content: "s";
    }
    
    mjx-c.mjx-c71::before {
        padding: 0.442em 0.528em 0.194em 0px;
        content: "q";
    }
    
    mjx-c.mjx-c72::before {
        padding: 0.442em 0.392em 0px 0px;
        content: "r";
    }
    
    mjx-c.mjx-c28.TEX-S2::before {
        padding: 1.15em 0.597em 0.649em 0px;
        content: "(";
    }
    
    mjx-c.mjx-c29.TEX-S2::before {
        padding: 1.15em 0.597em 0.649em 0px;
        content: ")";
    }
    
    mjx-c.mjx-c221A.TEX-S2::before {
        padding: 1.15em 1.02em 0.65em 0px;
        content: "√";
    }
    
    mjx-c.mjx-cB1::before {
        padding: 0.666em 0.778em 0px 0px;
        content: "±";
    }
    
    mjx-c.mjx-c7B::before {
        padding: 0.75em 0.5em 0.25em 0px;
        content: "{";
    }
    
    mjx-c.mjx-c1D436.TEX-I::before {
        padding: 0.705em 0.76em 0.022em 0px;
        content: "C";
    }
    
    mjx-c.mjx-c7D::before {
        padding: 0.75em 0.5em 0.25em 0px;
        content: "}";
    }
    
    mjx-c.mjx-c54::before {
        padding: 0.677em 0.722em 0px 0px;
        content: "T";
    }
    
    mjx-c.mjx-c27::before {
        padding: 0.694em 0.278em 0px 0px;
        content: "'";
    }
    
    mjx-c.mjx-c78::before {
        padding: 0.431em 0.528em 0px 0px;
        content: "x";
    }
    
    mjx-c.mjx-c221A::before {
        padding: 0.8em 0.853em 0.2em 0px;
        content: "√";
    }
    
    mjx-mtable {
        display: inline-block;
        text-align: center;
        vertical-align: 0.25em;
        position: relative;
        box-sizing: border-box;
        border-spacing: 0px;
        border-collapse: collapse;
    }
    
    mjx-mstyle[size="s"] mjx-mtable {
        vertical-align: 0.354em;
    }
    
    mjx-labels {
        position: absolute;
        left: 0px;
        top: 0px;
    }
    
    mjx-table {
        display: inline-block;
        vertical-align: -0.5ex;
        box-sizing: border-box;
    }
    
    mjx-table > mjx-itable {
        vertical-align: middle;
        text-align: left;
        box-sizing: border-box;
    }
    
    mjx-labels > mjx-itable {
        position: absolute;
        top: 0px;
    }
    
    mjx-mtable[justify="left"] {
        text-align: left;
    }
    
    mjx-mtable[justify="right"] {
        text-align: right;
    }
    
    mjx-mtable[justify="left"][side="left"] {
        padding-right: 0px !important;
    }
    
    mjx-mtable[justify="left"][side="right"] {
        padding-left: 0px !important;
    }
    
    mjx-mtable[justify="right"][side="left"] {
        padding-right: 0px !important;
    }
    
    mjx-mtable[justify="right"][side="right"] {
        padding-left: 0px !important;
    }
    
    mjx-mtable[align] {
        vertical-align: baseline;
    }
    
    mjx-mtable[align="top"] > mjx-table {
        vertical-align: top;
    }
    
    mjx-mtable[align="bottom"] > mjx-table {
        vertical-align: bottom;
    }
    
    mjx-mtable[side="right"] mjx-labels {
        min-width: 100%;
    }
    
    mjx-mtr {
        display: table-row;
        text-align: left;
    }
    
    mjx-mtr[rowalign="top"] > mjx-mtd {
        vertical-align: top;
    }
    
    mjx-mtr[rowalign="center"] > mjx-mtd {
        vertical-align: middle;
    }
    
    mjx-mtr[rowalign="bottom"] > mjx-mtd {
        vertical-align: bottom;
    }
    
    mjx-mtr[rowalign="baseline"] > mjx-mtd {
        vertical-align: baseline;
    }
    
    mjx-mtr[rowalign="axis"] > mjx-mtd {
        vertical-align: 0.25em;
    }
    
    mjx-mtd {
        display: table-cell;
        text-align: center;
        padding: 0.215em 0.4em;
    }
    
    mjx-mtd:first-child {
        padding-left: 0px;
    }
    
    mjx-mtd:last-child {
        padding-right: 0px;
    }
    
    mjx-mtable > * > mjx-itable > :first-child > mjx-mtd {
        padding-top: 0px;
    }
    
    mjx-mtable > * > mjx-itable > :last-child > mjx-mtd {
        padding-bottom: 0px;
    }
    
    mjx-tstrut {
        display: inline-block;
        height: 1em;
        vertical-align: -0.25em;
    }
    
    mjx-labels[align="left"] > mjx-mtr > mjx-mtd {
        text-align: left;
    }
    
    mjx-labels[align="right"] > mjx-mtr > mjx-mtd {
        text-align: right;
    }
    
    mjx-mtd[extra] {
        padding: 0px;
    }
    
    mjx-mtd[rowalign="top"] {
        vertical-align: top;
    }
    
    mjx-mtd[rowalign="center"] {
        vertical-align: middle;
    }
    
    mjx-mtd[rowalign="bottom"] {
        vertical-align: bottom;
    }
    
    mjx-mtd[rowalign="baseline"] {
        vertical-align: baseline;
    }
    
    mjx-mtd[rowalign="axis"] {
        vertical-align: 0.25em;
    }
    
    mjx-texatom {
        display: inline-block;
        text-align: left;
    }
    
    mjx-mover {
        display: inline-block;
        text-align: left;
    }
    
    mjx-mover:not([limits="false"]) {
        padding-top: 0.1em;
    }
    
    mjx-mover:not([limits="false"]) > * {
        display: block;
        text-align: left;
    }
    
    mjx-mspace {
        display: inline-block;
        text-align: left;
    }
    
    mjx-stretchy-v.mjx-c7B mjx-beg mjx-c::before {
        content: "⎧";
        padding: 0.899em 0.889em 0.01em 0px;
    }
    
    mjx-stretchy-v.mjx-c7B mjx-ext mjx-c::before {
        content: "⎪";
        width: 0.889em;
    }
    
    mjx-stretchy-v.mjx-c7B mjx-end mjx-c::before {
        content: "⎩";
        padding: 0.01em 0.889em 0.899em 0px;
    }
    
    mjx-stretchy-v.mjx-c7B mjx-mid mjx-c::before {
        content: "⎨";
        padding: 1.16em 0.889em 0.66em 0px;
    }
    
    mjx-stretchy-v.mjx-c7B > mjx-mid {
        margin-top: -0.91em;
        margin-bottom: -0.91em;
    }
    
    mjx-stretchy-v.mjx-c7B > mjx-end {
        margin-top: -0.909em;
    }
    
    mjx-stretchy-v.mjx-c7B > mjx-ext {
        height: 50%;
        border-top-width: 0.879em;
        border-bottom-width: 0.879em;
    }
    
    mjx-c.mjx-c2207::before {
        padding: 0.683em 0.833em 0.033em 0px;
        content: "∇";
    }
    
    mjx-c.mjx-cD7::before {
        padding: 0.491em 0.778em 0px 0px;
        content: "×";
    }
    
    mjx-c.mjx-c20D7.TEX-V::before {
        padding: 0.714em 0.5em 0px 0px;
        content: "→";
    }
    
    mjx-c.mjx-c1D401.TEX-B::before {
        padding: 0.686em 0.818em 0px 0px;
        content: "B";
    }
    
    mjx-c.mjx-c2212::before {
        padding: 0.583em 0.778em 0.082em 0px;
        content: "−";
    }
    
    mjx-c.mjx-c31::before {
        padding: 0.666em 0.5em 0px 0px;
        content: "1";
    }
    
    mjx-c.mjx-c1D450.TEX-I::before {
        padding: 0.442em 0.433em 0.011em 0px;
        content: "c";
    }
    
    mjx-c.mjx-c1D715::before {
        padding: 0.715em 0.566em 0.022em 0px;
        content: "∂";
    }
    
    mjx-c.mjx-c1D404.TEX-B::before {
        padding: 0.68em 0.756em 0px 0px;
        content: "E";
    }
    
    mjx-c.mjx-c1D461.TEX-I::before {
        padding: 0.626em 0.361em 0.011em 0px;
        content: "t";
    }
    
    mjx-c.mjx-c3D::before {
        padding: 0.583em 0.778em 0.082em 0px;
        content: "=";
    }
    
    mjx-c.mjx-c34::before {
        padding: 0.677em 0.5em 0px 0px;
        content: "4";
    }
    
    mjx-c.mjx-c1D70B.TEX-I::before {
        padding: 0.431em 0.57em 0.011em 0px;
        content: "π";
    }
    
    mjx-c.mjx-c1D423.TEX-B::before {
        padding: 0.695em 0.351em 0.2em 0px;
        content: "j";
    }
    
    mjx-c.mjx-c22C5::before {
        padding: 0.31em 0.278em 0px 0px;
        content: "⋅";
    }
    
    mjx-c.mjx-c1D70C.TEX-I::before {
        padding: 0.442em 0.517em 0.216em 0px;
        content: "ρ";
    }
    
    mjx-c.mjx-c2B::before {
        padding: 0.583em 0.778em 0.082em 0px;
        content: "+";
    }
    
    mjx-c.mjx-c1D7CE.TEX-B::before {
        padding: 0.654em 0.575em 0.01em 0px;
        content: "0";
    }
    
    mjx-c.mjx-c30::before {
        padding: 0.666em 0.5em 0.022em 0px;
        content: "0";
    }
    
    mjx-math {
        display: inline-block;
        text-align: left;
        line-height: 0;
        text-indent: 0px;
        font-style: normal;
        font-weight: normal;
        font-size: 100%;
        letter-spacing: normal;
        overflow-wrap: normal;
        word-spacing: normal;
        white-space: nowrap;
        direction: ltr;
        padding: 1px 0px;
    }
    
    mjx-container[jax="CHTML"][display="true"] {
        display: block;
        text-align: center;
        margin: 1em 0px;
    }
    
    mjx-container[jax="CHTML"][display="true"][width="full"] {
        display: flex;
    }
    
    mjx-container[jax="CHTML"][display="true"] mjx-math {
        padding: 0px;
    }
    
    mjx-container[jax="CHTML"][justify="left"] {
        text-align: left;
    }
    
    mjx-container[jax="CHTML"][justify="right"] {
        text-align: right;
    }
    
    mjx-mrow {
        display: inline-block;
        text-align: left;
    }
    
    mjx-munderover {
        display: inline-block;
        text-align: left;
    }
    
    mjx-munderover:not([limits="false"]) {
        padding-top: 0.1em;
    }
    
    mjx-munderover:not([limits="false"]) > * {
        display: block;
    }
    
    mjx-msubsup {
        display: inline-block;
        text-align: left;
    }
    
    mjx-script {
        display: inline-block;
        padding-right: 0.05em;
        padding-left: 0.033em;
    }
    
    mjx-script > * {
        display: block;
    }
    
    mjx-mi {
        display: inline-block;
        text-align: left;
    }
    
    mjx-c {
        display: inline-block;
    }
    
    mjx-utext {
        display: inline-block;
        padding: 0.75em 0px 0.2em;
    }
    
    mjx-mo {
        display: inline-block;
        text-align: left;
    }
    
    mjx-stretchy-h {
        display: inline-table;
        width: 100%;
    }
    
    mjx-stretchy-h > * {
        display: table-cell;
        width: 0px;
    }
    
    mjx-stretchy-h > * > mjx-c {
        display: inline-block;
        transform: scaleX(1);
    }
    
    mjx-stretchy-h > * > mjx-c::before {
        display: inline-block;
        width: initial;
    }
    
    mjx-stretchy-h > mjx-ext {
        overflow: clip visible;
        width: 100%;
    }
    
    mjx-stretchy-h > mjx-ext > mjx-c::before {
        transform: scaleX(500);
    }
    
    mjx-stretchy-h > mjx-ext > mjx-c {
        width: 0px;
    }
    
    mjx-stretchy-h > mjx-beg > mjx-c {
        margin-right: -0.1em;
    }
    
    mjx-stretchy-h > mjx-end > mjx-c {
        margin-left: -0.1em;
    }
    
    mjx-stretchy-v {
        display: inline-block;
    }
    
    mjx-stretchy-v > * {
        display: block;
    }
    
    mjx-stretchy-v > mjx-beg {
        height: 0px;
    }
    
    mjx-stretchy-v > mjx-end > mjx-c {
        display: block;
    }
    
    mjx-stretchy-v > * > mjx-c {
        transform: scaleY(1);
        transform-origin: left center;
        overflow: hidden;
    }
    
    mjx-stretchy-v > mjx-ext {
        display: block;
        height: 100%;
        box-sizing: border-box;
        border: 0px solid transparent;
        overflow: visible clip;
    }
    
    mjx-stretchy-v > mjx-ext > mjx-c::before {
        width: initial;
        box-sizing: border-box;
    }
    
    mjx-stretchy-v > mjx-ext > mjx-c {
        transform: scaleY(500) translateY(0.075em);
        overflow: visible;
    }
    
    mjx-mark {
        display: inline-block;
        height: 0px;
    }
    
    mjx-mn {
        display: inline-block;
        text-align: left;
    }
    
    mjx-msup {
        display: inline-block;
        text-align: left;
    }
    
    mjx-mfrac {
        display: inline-block;
        text-align: left;
    }
    
    mjx-frac {
        display: inline-block;
        vertical-align: 0.17em;
        padding: 0px 0.22em;
    }
    
    mjx-frac[type="d"] {
        vertical-align: 0.04em;
    }
    
    mjx-frac[delims] {
        padding: 0px 0.1em;
    }
    
    mjx-frac[atop] {
        padding: 0px 0.12em;
    }
    
    mjx-frac[atop][delims] {
        padding: 0px;
    }
    
    mjx-dtable {
        display: inline-table;
        width: 100%;
    }
    
    mjx-dtable > * {
        font-size: 2000%;
    }
    
    mjx-dbox {
        display: block;
        font-size: 5%;
    }
    
    mjx-num {
        display: block;
        text-align: center;
    }
    
    mjx-den {
        display: block;
        text-align: center;
    }
    
    mjx-mfrac[bevelled] > mjx-num {
        display: inline-block;
    }
    
    mjx-mfrac[bevelled] > mjx-den {
        display: inline-block;
    }
    
    mjx-den[align="right"],
    mjx-num[align="right"] {
        text-align: right;
    }
    
    mjx-den[align="left"],
    mjx-num[align="left"] {
        text-align: left;
    }
    
    mjx-nstrut {
        display: inline-block;
        height: 0.054em;
        width: 0px;
        vertical-align: -0.054em;
    }
    
    mjx-nstrut[type="d"] {
        height: 0.217em;
        vertical-align: -0.217em;
    }
    
    mjx-dstrut {
        display: inline-block;
        height: 0.505em;
        width: 0px;
    }
    
    mjx-dstrut[type="d"] {
        height: 0.726em;
    }
    
    mjx-line {
        display: block;
        box-sizing: border-box;
        min-height: 1px;
        height: 0.06em;
        border-top: 0.06em solid;
        margin: 0.06em -0.1em;
        overflow: hidden;
    }
    
    mjx-line[type="d"] {
        margin: 0.18em -0.1em;
    }
    
    mjx-c.mjx-c1D45B.TEX-I::before {
        padding: 0.442em 0.6em 0.011em 0px;
        content: "n";
    }
    
    mjx-c.mjx-c2211.TEX-S2::before {
        padding: 0.95em 1.444em 0.45em 0px;
        content: "∑";
    }
    
    mjx-c.mjx-c1D456.TEX-I::before {
        padding: 0.661em 0.345em 0.011em 0px;
        content: "i";
    }
    
    mjx-c.mjx-c3D::before {
        padding: 0.583em 0.778em 0.082em 0px;
        content: "=";
    }
    
    mjx-c.mjx-c31::before {
        padding: 0.666em 0.5em 0px 0px;
        content: "1";
    }
    
    mjx-c.mjx-c33::before {
        padding: 0.665em 0.5em 0.022em 0px;
        content: "3";
    }
    
    mjx-c.mjx-c28.TEX-S3::before {
        padding: 1.45em 0.736em 0.949em 0px;
        content: "(";
    }
    
    mjx-c.mjx-c28::before {
        padding: 0.75em 0.389em 0.25em 0px;
        content: "(";
    }
    
    mjx-c.mjx-c2B::before {
        padding: 0.583em 0.778em 0.082em 0px;
        content: "+";
    }
    
    mjx-c.mjx-c29::before {
        padding: 0.75em 0.389em 0.25em 0px;
        content: ")";
    }
    
    mjx-c.mjx-c32::before {
        padding: 0.666em 0.5em 0px 0px;
        content: "2";
    }
    
    mjx-c.mjx-c29.TEX-S3::before {
        padding: 1.45em 0.736em 0.949em 0px;
        content: ")";
    }
    
    mjx-container[jax="CHTML"] {
        line-height: 0;
    }
    
    mjx-container [space="1"] {
        margin-left: 0.111em;
    }
    
    mjx-container [space="2"] {
        margin-left: 0.167em;
    }
    
    mjx-container [space="3"] {
        margin-left: 0.222em;
    }
    
    mjx-container [space="4"] {
        margin-left: 0.278em;
    }
    
    mjx-container [space="5"] {
        margin-left: 0.333em;
    }
    
    mjx-container [rspace="1"] {
        margin-right: 0.111em;
    }
    
    mjx-container [rspace="2"] {
        margin-right: 0.167em;
    }
    
    mjx-container [rspace="3"] {
        margin-right: 0.222em;
    }
    
    mjx-container [rspace="4"] {
        margin-right: 0.278em;
    }
    
    mjx-container [rspace="5"] {
        margin-right: 0.333em;
    }
    
    mjx-container [size="s"] {
        font-size: 70.7%;
    }
    
    mjx-container [size="ss"] {
        font-size: 50%;
    }
    
    mjx-container [size="Tn"] {
        font-size: 60%;
    }
    
    mjx-container [size="sm"] {
        font-size: 85%;
    }
    
    mjx-container [size="lg"] {
        font-size: 120%;
    }
    
    mjx-container [size="Lg"] {
        font-size: 144%;
    }
    
    mjx-container [size="LG"] {
        font-size: 173%;
    }
    
    mjx-container [size="hg"] {
        font-size: 207%;
    }
    
    mjx-container [size="HG"] {
        font-size: 249%;
    }
    
    mjx-container [width="full"] {
        width: 100%;
    }
    
    mjx-box {
        display: inline-block;
    }
    
    mjx-block {
        display: block;
    }
    
    mjx-itable {
        display: inline-table;
    }
    
    mjx-row {
        display: table-row;
    }
    
    mjx-row > * {
        display: table-cell;
    }
    
    mjx-mtext {
        display: inline-block;
    }
    
    mjx-mstyle {
        display: inline-block;
    }
    
    mjx-merror {
        display: inline-block;
        color: red;
        background-color: yellow;
    }
    
    mjx-mphantom {
        visibility: hidden;
    }
    
    mjx-c::before {
        display: block;
        width: 0px;
    }
    
    .MJX-TEX {
        font-family: MJXZERO, MJXTEX;
    }
    
    .TEX-B {
        font-family: MJXZERO, MJXTEX-B;
    }
    
    .TEX-I {
        font-family: MJXZERO, MJXTEX-I;
    }
    
    .TEX-MI {
        font-family: MJXZERO, MJXTEX-MI;
    }
    
    .TEX-BI {
        font-family: MJXZERO, MJXTEX-BI;
    }
    
    .TEX-S1 {
        font-family: MJXZERO, MJXTEX-S1;
    }
    
    .TEX-S2 {
        font-family: MJXZERO, MJXTEX-S2;
    }
    
    .TEX-S3 {
        font-family: MJXZERO, MJXTEX-S3;
    }
    
    .TEX-S4 {
        font-family: MJXZERO, MJXTEX-S4;
    }
    
    .TEX-A {
        font-family: MJXZERO, MJXTEX-A;
    }
    
    .TEX-C {
        font-family: MJXZERO, MJXTEX-C;
    }
    
    .TEX-CB {
        font-family: MJXZERO, MJXTEX-CB;
    }
    
    .TEX-FR {
        font-family: MJXZERO, MJXTEX-FR;
    }
    
    .TEX-FRB {
        font-family: MJXZERO, MJXTEX-FRB;
    }
    
    .TEX-SS {
        font-family: MJXZERO, MJXTEX-SS;
    }
    
    .TEX-SSB {
        font-family: MJXZERO, MJXTEX-SSB;
    }
    
    .TEX-SSI {
        font-family: MJXZERO, MJXTEX-SSI;
    }
    
    .TEX-SC {
        font-family: MJXZERO, MJXTEX-SC;
    }
    
    .TEX-T {
        font-family: MJXZERO, MJXTEX-T;
    }
    
    .TEX-V {
        font-family: MJXZERO, MJXTEX-V;
    }
    
    .TEX-VB {
        font-family: MJXZERO, MJXTEX-VB;
    }
    
    mjx-stretchy-v mjx-c,
    mjx-stretchy-h mjx-c {
        font-family: MJXZERO, MJXTEX-S1, MJXTEX-S4, MJXTEX, MJXTEX-A !important;
    }
    
    @font-face {
        font-family: MJXZERO;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Zero.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-B;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Main-Bold.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-I;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-MI;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Main-Italic.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-BI;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Math-BoldItalic.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-S1;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Size1-Regular.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-S2;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Size2-Regular.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-S3;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Size3-Regular.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-S4;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Size4-Regular.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-A;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_AMS-Regular.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-C;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Regular.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-CB;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Bold.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-FR;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Fraktur-Regular.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-FRB;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Fraktur-Bold.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-SS;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_SansSerif-Regular.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-SSB;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_SansSerif-Bold.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-SSI;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_SansSerif-Italic.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-SC;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Script-Regular.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-T;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Typewriter-Regular.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-V;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Vector-Regular.woff")
            format("woff");
    }
    
    @font-face {
        font-family: MJXTEX-VB;
        src: url("${mathjaxbase}/output/chtml/fonts/woff-v2/MathJax_Vector-Bold.woff")
            format("woff");
    }
    `;
}
