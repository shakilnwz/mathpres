const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slide-1-C0XSa7bT.js","assets/index-CAWUuUea.js","assets/meta-9aUDHjRd.js","assets/runtime-core.esm-bundler-Bn7wi0D1.js","assets/index-Cb47c93e.css"])))=>i.map(i=>d[i]);
import{C as e,E as t,S as n,W as r,_ as i,a,c as o,f as s,g as c,l,o as u,r as d,s as f,v as p}from"./runtime-core.esm-bundler-Bn7wi0D1.js";import{i as m,r as h,t as g}from"./index-CAWUuUea.js";import{t as _}from"./_rolldown_dynamic_import_helper-BkPz7ETw.js";var v={"chapter-1/slide-1.vue":{type:`vue`},"chapter-1/slide-2.html":{type:`html`,content:`<div class="flex flex-col items-center justify-center h-full">
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
`}},y={class:`slide bg-white`},b={key:0,class:`flex items-center justify-center h-full`},x={key:1,class:`flex items-center justify-center h-full`},S={class:`text-red-500`},C=[`innerHTML`],w=[`innerHTML`],T={class:`absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 text-gray-400`},E=[`disabled`],D=[`disabled`],O=s({__name:`SlideView`,setup(s){let O=h(),k=m(),A=t(null),j=t(``),M=t(``),N=t(!0),P=t(``),F=a(()=>O.params.chapterId),I=a(()=>{let e=parseInt(O.params.slideIndex);return e>0?e-1:0}),L=t(null),R=a(()=>L.value?.slides?.length||0);async function z(){N.value=!0,P.value=``;try{let e=await _(Object.assign({"../../chapters/chapter-1/meta.json":()=>g(()=>import(`./meta-9aUDHjRd.js`).then(e=>e.t),[])}),`../../chapters/${F.value}/meta.json`,5);L.value=e.default||e;let t=L.value?.slides;if(!t||I.value>=t.length){P.value=`Slide not found`,N.value=!1;return}let n=t[I.value];if(!n){P.value=`Slide not found`,N.value=!1;return}let r=`${F.value}/${n}`,i=v[r];i?.type===`vue`?(A.value=(await Object.assign({"../../chapters/chapter-1/slide-1.vue":()=>g(()=>import(`./slide-1-C0XSa7bT.js`),__vite__mapDeps([0,1,2,3,4]))})[`../../chapters/${r}`]()).default,j.value=``,M.value=``):i?.type===`md`?(M.value=i.content||``,j.value=``,A.value=null):i?.type===`html`?(j.value=i.content||``,A.value=null,M.value=``):P.value=`Slide not found`}catch(e){P.value=`Failed to load slide`,console.error(e)}N.value=!1}function B(){I.value<R.value-1&&k.push(`/chapter/${F.value}/${I.value+2}`)}function V(){I.value>0&&k.push(`/chapter/${F.value}/${I.value}`)}function H(e){e.key===`ArrowRight`||e.key===` `?B():e.key===`ArrowLeft`?V():e.key===`Home`?k.push(`/chapter/${F.value}/1`):e.key===`End`&&k.push(`/chapter/${F.value}/${R.value}`)}return e(()=>O.path,z),c(()=>{z(),window.addEventListener(`keydown`,H)}),i(()=>{window.removeEventListener(`keydown`,H)}),(e,t)=>(p(),l(`div`,y,[N.value?(p(),l(`div`,b,[...t[0]||=[u(`span`,{class:`text-gray-500`},`Loading...`,-1)]])):P.value?(p(),l(`div`,x,[u(`span`,S,r(P.value),1)])):(p(),l(d,{key:2},[A.value?(p(),f(n(A.value),{key:0})):j.value?(p(),l(`div`,{key:1,innerHTML:j.value,class:`w-full h-full p-8`},null,8,C)):M.value?(p(),l(`div`,{key:2,innerHTML:M.value,class:`w-full h-full p-8 prose max-w-none`},null,8,w)):o(``,!0)],64)),u(`div`,T,[u(`button`,{onClick:V,disabled:I.value===0,class:`p-2 disabled:opacity-30`},` ← `,8,E),u(`span`,null,r(I.value+1)+` / `+r(R.value),1),u(`button`,{onClick:B,disabled:I.value>=R.value-1,class:`p-2 disabled:opacity-30`},` → `,8,D)])]))}});export{O as default};