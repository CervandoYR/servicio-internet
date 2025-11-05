import{c as i,j as e,m as r}from"./index-B2OFY7Yg.js";import{d as s}from"./styled-components.browser.esm-CxNtY2QX.js";/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],p=i("arrow-right",c),d=s(r.button)`
  position: relative;
  padding: 0.8rem 1.8rem;
  padding-right: 4rem; /* Espacio para el icono */
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;

  /* El 'glow' de fondo */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
    filter: blur(15px);
    opacity: 0.7;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  /* El icono */
  .icon-wrapper {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  /* Animaciones de Hover */
  &:hover {
    &::before {
      opacity: 1;
    }
    .icon-wrapper {
      transform: translateY(-50%) rotate(45deg);
    }
  }
`,g=({children:t,onClick:o,type:a="button",className:n=""})=>e.jsxs(d,{onClick:o,type:a,className:n,whileHover:{scale:1.05},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:17},children:[t,e.jsx(r.div,{className:"icon-wrapper",children:e.jsx(p,{size:20,color:"var(--text-primary)"})})]});export{g as A};
