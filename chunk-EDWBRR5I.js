import{$a as x,Ab as h,Bb as _,Da as f,Ha as g,Hb as c,Ma as l,Sa as a,Ua as o,Va as r,Wa as v,Ya as d,_a as s,ab as u,eb as k,xa as p,za as n}from"./chunk-B3XZDLD2.js";function L(t,i){t&1&&(o(0,"div",1)(1,"div",5)(2,"span",6),s(3,"Loading..."),r()()())}function P(t,i){if(t&1&&(o(0,"div",7),s(1),r()),t&2){let e=d();n(),u(" ",e.errorMessage," ")}}function C(t,i){if(t&1&&(o(0,"div",10)(1,"div",11),v(2,"img",12),o(3,"div",13)(4,"h5",14),s(5),r()()()()),t&2){let e=i.$implicit;n(2),a("src",e.image,p)("alt",e.name),n(3),x(e.name)}}function I(t,i){if(t&1&&(o(0,"div",8),l(1,C,6,3,"div",9),r()),t&2){let e=d();n(),a("ngForOf",e.pokemons)}}var y=class t{constructor(i){this.pokemonService=i}pokemons=[];isLoading=!0;errorMessage="";ngOnInit(){this.loadPokemons()}loadPokemons(){this.pokemonService.fetchList("https://tyradex.vercel.app/api/v1/gen/1").then(i=>{this.pokemons=i.map(e=>({id:e.pokedex_id,name:e.name.fr,image:e.sprites.regular})),console.log(this.pokemons),this.isLoading=!1}).catch(i=>{this.errorMessage=i.message,this.isLoading=!1})}static \u0275fac=function(e){return new(e||t)(f(c))};static \u0275cmp=g({type:t,selectors:[["app-pokemon-list"]],features:[k([c])],decls:6,vars:3,consts:[[1,"container","my-4"],[1,"text-center"],["class","text-center",4,"ngIf"],["class","alert alert-danger text-center",4,"ngIf"],["class","row",4,"ngIf"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"],[1,"alert","alert-danger","text-center"],[1,"row"],["class","col-md-4 col-sm-6 col-12 my-2 d-flex flex-column",4,"ngFor","ngForOf"],[1,"col-md-4","col-sm-6","col-12","my-2","d-flex","flex-column"],[1,"card","flex-fill"],[1,"card-img-top",3,"src","alt"],[1,"card-body"],[1,"card-title","text-center"]],template:function(e,m){e&1&&(o(0,"div",0)(1,"h1",1),s(2,"Pok\xE9mon List"),r(),l(3,L,4,0,"div",2)(4,P,2,1,"div",3)(5,I,2,1,"div",4),r()),e&2&&(n(3),a("ngIf",m.isLoading),n(),a("ngIf",m.errorMessage),n(),a("ngIf",!m.isLoading&&!m.errorMessage))},dependencies:[_,h],encapsulation:2})};export{y as PokemonListComponent};
