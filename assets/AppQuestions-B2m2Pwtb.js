import{c as n,r as d,j as e,A as p,m as t,W as h,Z as m,C as b,X as y,d as o}from"./index-BF8vdPg0.js";/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],j=n("chevron-down",g);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],v=n("circle-question-mark",f);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]],w=n("signal",k),N=o.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1050;
`,C=o(t.button)`
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
  color: var(--text-primary);
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--neon-shadow);
`,q=o(t.div)`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 380px;
  max-height: 80vh;
  overflow-y: auto;
  
  /* Estilos glassmorphism */
  background: rgba(17, 17, 24, 0.8);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;

  @media (max-width: 576px) {
    width: 90vw;
  }
`,F=[{icon:h,q:"¿Qué hacer si mi internet no funciona?",a:"Primero, reinicia tu router (ONT) desenchufándolo por 30 segundos. Si el problema persiste, contáctanos."},{icon:m,q:"¿Por qué mi velocidad no es la contratada?",a:"Factores como la distancia, dispositivos conectados o pruebas por WiFi (en lugar de cable) pueden afectar. Contáctanos para una revisión."},{icon:w,q:"¿Cómo mejorar mi señal WiFi?",a:"Coloca el router en un lugar central y elevado, lejos de obstrucciones. Considera un extensor de red si tu casa es muy grande."}];function A(){const[s,r]=d.useState(!1),[c,x]=d.useState(null),u=a=>{x(c===a?null:a)};return e.jsxs(N,{children:[e.jsx(p,{children:s&&e.jsxs(q,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},transition:{type:"spring",stiffness:300,damping:25},children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e.jsx("h4",{className:"text-gradient fw-bold mb-0",children:"Preguntas Frecuentes"}),e.jsx(t.button,{onClick:()=>r(!1),className:"btn-close btn-close-white",whileHover:{scale:1.2,rotate:90}})]}),e.jsx("ul",{className:"list-unstyled mb-0",children:F.map((a,i)=>{const l=c===i;return e.jsxs("li",{className:"mb-2",children:[e.jsxs("div",{onClick:()=>u(i),className:"d-flex justify-content-between align-items-center p-3",style:{background:"rgba(0,0,0,0.2)",borderRadius:"8px",cursor:"pointer"},children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(a.icon,{size:20,className:"text-gradient me-2 flex-shrink-0"}),e.jsx("span",{className:"fw-semibold",children:a.q})]}),e.jsx(t.div,{animate:{rotate:l?180:0},children:e.jsx(j,{size:20,className:"text-secondary"})})]}),e.jsx(b,{in:l,children:e.jsx("div",{children:e.jsx("p",{className:"text-secondary p-3 mb-0",style:{background:"rgba(0,0,0,0.1)",borderRadius:"0 0 8px 8px"},children:a.a})})})]},i)})})]})}),e.jsx(C,{onClick:()=>r(!s),whileHover:{scale:1.1},whileTap:{scale:.9},animate:{scale:[1,1.1,1],rotate:[0,10,-10,0]},transition:{repeat:1/0,duration:2,delay:5},children:e.jsx(p,{mode:"wait",children:e.jsx(t.div,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.2},children:s?e.jsx(y,{size:30}):e.jsx(v,{size:30})},s?"x":"help")})})]})}export{A as default};
