import{u as n,j as e}from"./index-61a336ce.js";function o({item:a}){const s=n();function t(){s(`/poke-api/details/${a.name}`)}return e.jsxs("article",{onClick:t,className:"bg-gray-700 cursor-pointer p-2 rounded-lg",children:[e.jsx("img",{className:"m-auto hover:scale-125 transition-all",width:200,src:a.sprites.front_default}),e.jsx("h2",{className:"text-center font-bold",children:a.name})]})}export{o as default};