(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"home_1\" id=\"home_1\">\n      <footer class=\"index\" id=\"index\">\n        <div>\n          scroll\n        </div>\n        <div class=\"divider\" id=\"divider\"></div>\n        <div>\n          01\n        </div>\n      </footer>\n      <div class=\"container\">\n        <h1 class=\"title\" id=\"title\">\n          <div class=\"default\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":14,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n          </div>\n          <div class=\"responsive\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title_res") || (depth0 != null ? lookupProperty(depth0,"title_res") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title_res","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":27}}}) : helper))) != null ? stack1 : "")
    + "\n          </div>\n        </h1>\n      </div>\n      <div class=\"imagen\">\n        <img src=\"img/background.png\" alt=\"\" />\n      </div>\n    </section>\n    <section class=\"home_2\" id=\"home_2\">\n      <footer class=\"index\" id=\"index\">\n        <div>\n          Workflow\n        </div>\n        <div class=\"divider\" id=\"divider\"></div>\n        <div>\n          02\n        </div>\n      </footer>\n\n      <div class=\"container\">\n        <h1 class=\"def\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"h1") || (depth0 != null ? lookupProperty(depth0,"h1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"h1","hash":{},"data":data,"loc":{"start":{"line":38,"column":12},"end":{"line":38,"column":20}}}) : helper))) != null ? stack1 : "")
    + "\n        </h1>\n        <h1 class=\"res\">    \n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"h1r") || (depth0 != null ? lookupProperty(depth0,"h1r") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"h1r","hash":{},"data":data,"loc":{"start":{"line":41,"column":12},"end":{"line":41,"column":21}}}) : helper))) != null ? stack1 : "")
    + "\n        </h1>\n        <h2 class=\"def\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"h2") || (depth0 != null ? lookupProperty(depth0,"h2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"h2","hash":{},"data":data,"loc":{"start":{"line":44,"column":12},"end":{"line":44,"column":20}}}) : helper))) != null ? stack1 : "")
    + "\n        </h2>\n        <h2 class=\"res\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"h2r") || (depth0 != null ? lookupProperty(depth0,"h2r") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"h2r","hash":{},"data":data,"loc":{"start":{"line":47,"column":12},"end":{"line":47,"column":21}}}) : helper))) != null ? stack1 : "")
    + "\n        </h2>\n        <div class=\"container_btn\">\n          <div class=\"readme\">\n            <div class=\"img\">\n              <img src=\"img/mappingImg.svg\" alt=\"\" />\n              <h4>\n                  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"readme_1_h4") || (depth0 != null ? lookupProperty(depth0,"readme_1_h4") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"readme_1_h4","hash":{},"data":data,"loc":{"start":{"line":54,"column":18},"end":{"line":54,"column":35}}}) : helper))) != null ? stack1 : "")
    + "\n              </h4>\n              <p>\n                  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"readme_1_p") || (depth0 != null ? lookupProperty(depth0,"readme_1_p") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"readme_1_p","hash":{},"data":data,"loc":{"start":{"line":57,"column":18},"end":{"line":57,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\n              </p>\n            </div>\n          </div>\n          <div class=\"readme\">\n            <div class=\"img\">\n            <img src=\"img/estrategiaImg.svg\" alt=\"\" />\n            <h4>\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"readme_2_h4") || (depth0 != null ? lookupProperty(depth0,"readme_2_h4") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"readme_2_h4","hash":{},"data":data,"loc":{"start":{"line":65,"column":16},"end":{"line":65,"column":33}}}) : helper))) != null ? stack1 : "")
    + "\n            </h4>\n              <p>\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"readme_2_p") || (depth0 != null ? lookupProperty(depth0,"readme_2_p") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"readme_2_p","hash":{},"data":data,"loc":{"start":{"line":68,"column":16},"end":{"line":68,"column":32}}}) : helper))) != null ? stack1 : "")
    + "\n              </p>\n            </div>\n          </div>\n          <div class=\"readme\">\n            <div class=\"img\">\n              <img src=\"img/ejecucionImg.svg\" alt=\"\" />\n              <h4>\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"readme_3_h4") || (depth0 != null ? lookupProperty(depth0,"readme_3_h4") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"readme_3_h4","hash":{},"data":data,"loc":{"start":{"line":76,"column":16},"end":{"line":76,"column":33}}}) : helper))) != null ? stack1 : "")
    + "\n              </h4>\n              <p>\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"readme_3_p") || (depth0 != null ? lookupProperty(depth0,"readme_3_p") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"readme_3_p","hash":{},"data":data,"loc":{"start":{"line":79,"column":16},"end":{"line":79,"column":32}}}) : helper))) != null ? stack1 : "")
    + "\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>";
},"useData":true});
})();
