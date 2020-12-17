(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['team'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"teamText\">\n        <article>\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"team_text_1") || (depth0 != null ? lookupProperty(depth0,"team_text_1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"team_text_1","hash":{},"data":data,"loc":{"start":{"line":3,"column":12},"end":{"line":3,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\n        </article>\n        <br>\n        <br>\n        <p>ALDP Program Boston Scientific.</p>\n        <p>Executive Commitee Boston Scientific, 2014</p>\n        <img src=\"img/teamImg1.png\" alt=\"\">\n        <br>\n        <br>\n        <article>\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"team_text_2") || (depth0 != null ? lookupProperty(depth0,"team_text_2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"team_text_2","hash":{},"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\n        </article>\n        <br>\n        <br>\n        <p>Mike Mahoney | CEO de Boston Scientific</p>\n        <p>Ortíz | Presidente Latam de Boston Scientific</p>\n        <img src=\"img/teamImg.png\" alt=\"\">\n      </div>  ";
},"useData":true});
})();
