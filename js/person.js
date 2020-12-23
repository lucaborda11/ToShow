(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['person'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<body>\n    <section class=\"personContainer\">\n\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"img") || (depth0 != null ? lookupProperty(depth0,"img") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":17}}}) : helper))) != null ? stack1 : "")
    + "\n\n        <div class=\"text\">\n            <p class=\"position\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"position") || (depth0 != null ? lookupProperty(depth0,"position") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data,"loc":{"start":{"line":7,"column":32},"end":{"line":7,"column":46}}}) : helper))) != null ? stack1 : "")
    + "</p>\n            <h4 class=\"personName\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"personName") || (depth0 != null ? lookupProperty(depth0,"personName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"personName","hash":{},"data":data,"loc":{"start":{"line":8,"column":35},"end":{"line":8,"column":51}}}) : helper))) != null ? stack1 : "")
    + "</h4>\n            <article class=\"description\">\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":10,"column":33}}}) : helper))) != null ? stack1 : "")
    + " \n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description_more") || (depth0 != null ? lookupProperty(depth0,"description_more") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description_more","hash":{},"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":11,"column":38}}}) : helper))) != null ? stack1 : "")
    + " \n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"read_more") || (depth0 != null ? lookupProperty(depth0,"read_more") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"read_more","hash":{},"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":12,"column":31}}}) : helper))) != null ? stack1 : "")
    + " \n            </article>\n            <div class=\"redes\">\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"redes") || (depth0 != null ? lookupProperty(depth0,"redes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"redes","hash":{},"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":15,"column":27}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n    </section>\n</body>\n</html>";
},"useData":true});
})();
