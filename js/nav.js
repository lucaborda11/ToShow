(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nav'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"redes_container\">\n            <div><a href=\"index.html\"><img src=\"img/isoNav.svg\"/></a></div>\n            <nav id=\"redes\" class=\"redes\">\n                <a class=\"ig\" id=\"ig\">instagram</a>\n                <a href=\"https://www.linkedin.com/company/w-world-consulting\" target=\"_blank\" class=\"ld\" id=\"ld\">linkedin</a>\n                <select name=\"\" id=\"language\" class=\"language\" onchange=\"reloadPage()\">\n                    <option value=\"en\">English 🇺🇸</option>\n                    <option value=\"es\">Español 🇪🇸</option>\n                </select>\n            </nav>\n        </div>\n\n        <div class=\"main_container\">\n            <h6 class=\"subtitle\"><a href=\"index.html\">W - World<span class=\"bold\">Consulting.</span></a></h6>\n            <nav class=\"main_nav\" id=\"main_nav\">\n                <a class=\"home\" id=\"home\" href=\"index.html\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"home") || (depth0 != null ? lookupProperty(depth0,"home") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data,"loc":{"start":{"line":16,"column":60},"end":{"line":16,"column":70}}}) : helper))) != null ? stack1 : "")
    + "</a>\n                <a class=\"mision\" id=\"mision\" href=\"mission.html\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"mision") || (depth0 != null ? lookupProperty(depth0,"mision") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mision","hash":{},"data":data,"loc":{"start":{"line":17,"column":66},"end":{"line":17,"column":78}}}) : helper))) != null ? stack1 : "")
    + "</a>\n                <a class=\"approach\" id=\"approach\" href=\"approach.html\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"approach") || (depth0 != null ? lookupProperty(depth0,"approach") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"approach","hash":{},"data":data,"loc":{"start":{"line":18,"column":71},"end":{"line":18,"column":85}}}) : helper))) != null ? stack1 : "")
    + "</a>\n                <a class=\"team\" id=\"team\" href=\"team.html\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"team") || (depth0 != null ? lookupProperty(depth0,"team") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"team","hash":{},"data":data,"loc":{"start":{"line":19,"column":59},"end":{"line":19,"column":69}}}) : helper))) != null ? stack1 : "")
    + "</a>\n                <a class=\"cases\" id=\"cases\" href=\"cases.html\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"cases") || (depth0 != null ? lookupProperty(depth0,"cases") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cases","hash":{},"data":data,"loc":{"start":{"line":20,"column":62},"end":{"line":20,"column":73}}}) : helper))) != null ? stack1 : "")
    + "</a>\n            </nav>\n        </div>";
},"useData":true});
})();
