
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){yepnope({load:['http://www.edgehero.com/edgehero.js/0.1/edgehero-0.1-min.js','http://cdn.edgecommons.org/an/1.0.0/js/min/EdgeCommons.js'],complete:function(){EC.debug("Ready to go!");}});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'bladeGifCube_1'
(function(symbolName){})("openDiasporaChangeCube");
//Edge symbol end:'openDiasporaChangeCube'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'
})(jQuery,AdobeEdge,"EDGE-5899280");
