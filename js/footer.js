(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"footer\">\n        <div class=\"container_1\">\n            <div class=\"subtitle\"><span>W - World</span>Consulting.</div>\n            <h3 class=\"text-footer\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text_1") || (depth0 != null ? lookupProperty(depth0,"text_1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text_1","hash":{},"data":data,"loc":{"start":{"line":4,"column":36},"end":{"line":4,"column":48}}}) : helper))) != null ? stack1 : "")
    + "<br>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text_2") || (depth0 != null ? lookupProperty(depth0,"text_2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text_2","hash":{},"data":data,"loc":{"start":{"line":4,"column":52},"end":{"line":4,"column":64}}}) : helper))) != null ? stack1 : "")
    + "</h3>\n        </div>\n        <div class=\"container_2\">\n            <form action=\"\" class=\"formulario\">\n                <div class=\"input_container\">\n                    <input type=\"text\" name=\"nombre\" id=\"nombre\" placeholder=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":9,"column":78},"end":{"line":9,"column":88}}}) : helper))) != null ? stack1 : "")
    + "\">\n                    <input type=\"email\" name=\"email\" id=\"email\" placeholder=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"mail") || (depth0 != null ? lookupProperty(depth0,"mail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mail","hash":{},"data":data,"loc":{"start":{"line":10,"column":77},"end":{"line":10,"column":87}}}) : helper))) != null ? stack1 : "")
    + "\">\n                </div>\n                <textarea name=\"\" id=\"\" cols=\"30\" placeholder=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"mensaje") || (depth0 != null ? lookupProperty(depth0,"mensaje") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mensaje","hash":{},"data":data,"loc":{"start":{"line":12,"column":63},"end":{"line":12,"column":76}}}) : helper))) != null ? stack1 : "")
    + "\"></textarea>\n            </form>\n        </div>\n        <div class=\"redes-footer\">\n            <img src=\"img/footer_persona.png\" alt=\"\" class=\"logo\" />\n            <div class=\"redes\">\n                <a>walter@wwclatam.com</a>\n                <a>Instagram</a>\n                <a href=\"https://www.linkedin.com/company/w-world-consulting\">Linkedin</a>\n            </div>\n        </div>\n    </div>";
},"useData":true});
})();
