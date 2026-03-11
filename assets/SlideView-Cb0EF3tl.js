const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slide-1-COINQhwi.js","assets/index-BwCg-F0K.js","assets/meta-S95t6V3R.js","assets/runtime-core.esm-bundler-DKAwoo0v.js","assets/index-CSdVCvlt.css"])))=>i.map(i=>d[i]);
import{A as e,C as t,D as n,G as r,_ as i,a,c as o,d as s,f as c,l,o as u,r as d,s as f,v as p,w as m,y as h}from"./runtime-core.esm-bundler-DKAwoo0v.js";import{a as g,i as _,o as v,r as y,s as b,t as x}from"./index-BwCg-F0K.js";import{t as S}from"./_rolldown_dynamic_import_helper-BkPz7ETw.js";var C={"chapter-1/matrix-4.html":{type:`html`,content:`<div class="flex flex-col items-center justify-center h-full">
  <h1 class="text-5xl font-bold mb-6">What is a Limit?</h1>
  <p class="text-2xl text-gray-700 mb-4">
    A limit describes the behavior of a function as its input approaches a particular value.
  </p>
  <div class="mt-8 p-6 bg-gray-100 rounded-lg">
    <code class="text-xl">lim(x → a) f(x) = L</code>
  </div>
  <p class="mt-6 text-lg text-gray-600">
    This means as x gets closer to a, f(x) gets closer to L.
  </p>
</div>
`},"chapter-1/slide-1.vue":{type:`vue`},"chapter-1/slide-2.html":{type:`html`,content:`<div class="flex flex-col items-center justify-center h-full">
  <h1 class="text-5xl font-bold mb-6">What is a Limit?</h1>
  <p class="text-2xl text-gray-700 mb-4">
    A limit describes the behavior of a function as its input approaches a particular value.
  </p>
  <div class="mt-8 p-6 bg-gray-100 rounded-lg">
    <code class="text-xl">lim(x → a) f(x) = L</code>
  </div>
  <p class="mt-6 text-lg text-gray-600">
    This means as x gets closer to a, f(x) gets closer to L.
  </p>
</div>
`},"chapter-1/slide-3.html":{type:`html`,content:`<div class="flex flex-col items-center justify-center h-full">
  <h1 class="text-5xl font-bold mb-6">What is a Limit?</h1>
  <p class="text-2xl text-gray-700 mb-4">
    A limit describes the behavior of a function as its input approaches a particular value.
  </p>
  <div class="mt-8 p-6 bg-gray-100 rounded-lg">
    <code class="text-xl">lim(x → a) f(x) = L</code>
  </div>
  <p class="mt-6 text-lg text-gray-600">
    This means as x gets closer to a, f(x) gets closer to L.
  </p>
</div>
`},"chapter-1/slide-4.md":{type:`md`,content:`<h1>Markdown Slide</h1>
<pre><code class="language-html">&lt;div class=&quot;flex flex-col items-center justify-center h-full&quot;&gt;
  &lt;h1 class=&quot;text-5xl font-bold mb-6&quot;&gt;What is a Limit?&lt;/h1&gt;
  &lt;p class=&quot;text-2xl text-gray-700 mb-4&quot;&gt;
    A limit describes the behavior of a function as its input approaches a particular value.
  &lt;/p&gt;
  &lt;div class=&quot;mt-8 p-6 bg-gray-100 rounded-lg&quot;&gt;
    &lt;code class=&quot;text-xl&quot;&gt;lim(x → a) f(x) = L&lt;/code&gt;
  &lt;/div&gt;
  &lt;p class=&quot;mt-6 text-lg text-gray-600&quot;&gt;
    This means as x gets closer to a, f(x) gets closer to L.
  &lt;/p&gt;
&lt;/div&gt;
</code></pre>
`},"chapter-1/slide-5.html":{type:`html`,content:`\r
<div>\r
    <style>\r
body{font-family:Arial;text-align:center;background:#f0f2f7;}\r
h2{margin-top:10px;}\r
input{padding:5px;margin:4px;width:180px;}\r
button{padding:7px 12px;margin:4px;}\r
#graph{width:1000px;height:650px;margin:auto;background:white;}\r
.panel{background:white;padding:10px;margin:10px;border-radius:5px;}\r
    </style>\r
\r
    <div>\r
        <h2>Ultimate Smart Digital Math Lab V3 Pro+</h2>\r
\r
        <div class="panel">\r
            Function 1: <input id="func1" value="y = x^2 - 3*x + 2"><br>\r
            Function 2: <input id="func2" value="2*x + 1"><br>\r
            Implicit 1: <input id="imp1" value="x^2/9 + y^2/4 - 1"><br>\r
            Implicit 2: <input id="imp2" value="x^2/9 - y^2/4 -1"><br>\r
            Tangent at x = <input id="point" value="1"><br>\r
            <button onclick="draw()">Draw Graph</button>\r
            <button onclick="tangent()">Tangent</button>\r
            <button onclick="normal()">Normal</button>\r
            <button onclick="integral()">Integral Area</button>\r
            <button onclick="clearGraph()">Clear Graph</button>\r
        </div>\r
\r
        <div id="graph"></div>\r
        <div class="panel"><h3 id="result"></h3></div>\r
\r
        <script>\r
// Generate y values for explicit function\r
function generateData(expr){\r
    let x=[], y=[];\r
    for(let i=-10;i<=10;i+=0.05){\r
        x.push(i);\r
        try{y.push(math.evaluate(expr,{x:i}));}\r
        catch(e){y.push(NaN);}\r
    }\r
    return {x:x, y:y};\r
}\r
\r
// Plot implicit equation using contour method\r
function generateImplicit(expr){\r
    let x=[], y=[], step=0.1;\r
    for(let i=-10;i<=10;i+=step){\r
        for(let j=-10;j<=10;j+=step){\r
            let val=math.evaluate(expr,{x:i,y:j});\r
            if(Math.abs(val)<0.05){\r
                x.push(i);\r
                y.push(j);\r
            }\r
        }\r
    }\r
    return {x:x, y:y};\r
}\r
\r
let graphData=[];\r
\r
function draw(){\r
    graphData=[];\r
    let f1=document.getElementById("func1").value;\r
    let f2=document.getElementById("func2").value;\r
    let d1=generateData(f1.split('=')[1]);\r
    let d2=generateData(f2.split('=')[1]);\r
    graphData.push({x:d1.x, y:d1.y, mode:'lines', name:'Function 1'});\r
    graphData.push({x:d2.x, y:d2.y, mode:'lines', name:'Function 2'});\r
\r
    let imp1=document.getElementById("imp1").value;\r
    let imp2=document.getElementById("imp2").value;\r
    let id1=generateImplicit(imp1);\r
    let id2=generateImplicit(imp2);\r
    graphData.push({x:id1.x, y:id1.y, mode:'markers', name:'Implicit 1', marker:{size:3,color:'orange'}});\r
    graphData.push({x:id2.x, y:id2.y, mode:'markers', name:'Implicit 2', marker:{size:3,color:'purple'}});\r
\r
    Plotly.newPlot('graph',graphData,{xaxis:{title:"x"},yaxis:{title:"y"}});\r
    document.getElementById("result").innerHTML="";\r
}\r
\r
function tangent(){\r
    let expr=document.getElementById("func1").value.split('=')[1];\r
    let x0=parseFloat(document.getElementById("point").value);\r
    let slope=math.derivative(expr,'x').evaluate({x:x0});\r
    let y0=math.evaluate(expr,{x:x0});\r
    let xVals=[], yVals=[];\r
    for(let i=-10;i<=10;i+=0.05){xVals.push(i); yVals.push(slope*(i-x0)+y0);}\r
    let tangentLine={x:xVals,y:yVals,mode:'lines',name:'Tangent',line:{dash:'dash',color:'green'}};\r
    Plotly.addTraces('graph',tangentLine);\r
    document.getElementById("result").innerHTML="Tangent slope at x="+x0+" : "+slope.toFixed(3);\r
}\r
\r
function normal(){\r
    let expr=document.getElementById("func1").value.split('=')[1];\r
    let x0=parseFloat(document.getElementById("point").value);\r
    let slope=math.derivative(expr,'x').evaluate({x:x0});\r
    let mn=-1/slope;\r
    let y0=math.evaluate(expr,{x:x0});\r
    let xVals=[], yVals=[];\r
    for(let i=-10;i<=10;i+=0.05){xVals.push(i); yVals.push(mn*(i-x0)+y0);}\r
    let normalLine={x:xVals,y:yVals,mode:'lines',name:'Normal',line:{dash:'dot',color:'red'}};\r
    Plotly.addTraces('graph',normalLine);\r
}\r
\r
function integral(){\r
    let expr=document.getElementById("func1").value.split('=')[1];\r
    let xVals=[], yVals=[];\r
    for(let i=-10;i<=10;i+=0.05){xVals.push(i); yVals.push(math.evaluate(expr,{x:i}));}\r
    let integralArea={x:xVals,y:yVals,mode:'lines',fill:'tozeroy',name:'Integral Area',line:{color:'rgba(200,0,0,0.3)'}};\r
    Plotly.addTraces('graph',integralArea);\r
    document.getElementById("result").innerHTML="Integral area shaded under the curve";\r
}\r
\r
function clearGraph(){Plotly.purge('graph'); graphData=[]; document.getElementById("result").innerHTML="";}\r
        <\/script>\r
    </div>\r
</div>\r
`}},w={class:`slide bg-white`},T={key:0,class:`flex items-center justify-center h-full`},E={key:1,class:`flex items-center justify-center h-full`},D={class:`text-red-500`},O=[`innerHTML`],k=[`innerHTML`],A={class:`absolute bottom-2 right-2 flex items-center gap-2 text-gray-400 opacity-40 hover:opacity-100 focus-within:opacity-100 duration-300`},j=[`disabled`],M=[`disabled`],N=c({__name:`SlideView`,setup(c){let N=v(),P=b(),F=n(null),I=n(``),L=n(``),R=n(!0),z=n(``),B=a(()=>N.params.chapterId),V=a(()=>{let e=parseInt(N.params.slideIndex);return e>0?e-1:0}),H=n(null),U=a(()=>H.value?.slides?.length||0);async function W(){R.value=!0,z.value=``;try{let e=await S(Object.assign({"../../chapters/chapter-1/meta.json":()=>x(()=>import(`./meta-S95t6V3R.js`).then(e=>e.t),[])}),`../../chapters/${B.value}/meta.json`,5);H.value=e.default||e;let t=H.value?.slides;if(!t||V.value>=t.length){z.value=`Slide not found`,R.value=!1;return}let n=t[V.value];if(!n){z.value=`Slide not found`,R.value=!1;return}let r=`${B.value}/${n}`,i=C[r];i?.type===`vue`?(F.value=(await Object.assign({"../../chapters/chapter-1/slide-1.vue":()=>x(()=>import(`./slide-1-COINQhwi.js`),__vite__mapDeps([0,1,2,3,4]))})[`../../chapters/${r}`]()).default,I.value=``,L.value=``):i?.type===`md`?(L.value=i.content||``,I.value=``,F.value=null):i?.type===`html`?(I.value=i.content||``,F.value=null,L.value=``):z.value=`Slide not found`}catch(e){z.value=`Failed to load slide`,console.error(e)}R.value=!1}function G(){V.value<U.value-1&&P.push(`/chapter/${B.value}/${V.value+2}`)}function K(){V.value>0&&P.push(`/chapter/${B.value}/${V.value}`)}function q(e){e.key===`ArrowRight`||e.key===` `?G():e.key===`ArrowLeft`?K():e.key===`Home`?P.push(`/chapter/${B.value}/1`):e.key===`End`&&P.push(`/chapter/${B.value}/${U.value}`)}return m(()=>N.path,W),i(()=>{W(),window.addEventListener(`keydown`,q)}),p(()=>{window.removeEventListener(`keydown`,q)}),(n,i)=>(h(),l(`div`,w,[R.value?(h(),l(`div`,T,[...i[0]||=[u(`span`,{class:`text-gray-500`},`Loading...`,-1)]])):z.value?(h(),l(`div`,E,[u(`span`,D,r(z.value),1)])):(h(),l(d,{key:2},[F.value?(h(),f(t(F.value),{key:0})):I.value?(h(),l(`div`,{key:1,innerHTML:I.value,class:`w-full h-full p-8`},null,8,O)):L.value?(h(),l(`div`,{key:2,innerHTML:L.value,class:`w-full h-full p-8 prose max-w-none`},null,8,k)):o(``,!0)],64)),u(`div`,A,[u(`button`,{onClick:K,disabled:V.value===0,class:`p-2 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed rounded-full hover:bg-blue-200 duration-300 text-black`},[s(e(g),{icon:e(y),size:24,color:`currentColor`,"stroke-width":1.5},null,8,[`icon`])],8,j),u(`span`,null,r(V.value+1)+` / `+r(U.value),1),u(`button`,{onClick:G,disabled:V.value>=U.value-1,class:`p-2 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed rounded-full hover:bg-blue-200 duration-300 text-black`},[s(e(g),{icon:e(_),size:24,color:`currentColor`,"stroke-width":1.5},null,8,[`icon`])],8,M)])]))}});export{N as default};