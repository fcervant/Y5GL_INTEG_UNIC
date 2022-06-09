sap.ui.define(["sap/ui/test/Opa5","sap/ui/test/actions/Press","sap/ui/test/matchers/I18NText","./Common"],function(e,t,o,n){"use strict";var i="ObjectNotFound",s="NotFound";e.createPageObjects({onTheNotFoundPage:{baseClass:n,actions:{iPressTheObjectNotFoundShowWorklistLink:function(){return this.waitFor({id:"link",viewName:i,actions:new t,errorMessage:"Did not find the link on the "+i+" page"})},iPressTheNotFoundShowWorklistLink:function(){return this.waitFor({id:"link",viewName:s,actions:new t,errorMessage:"Did not find the link on the "+s+" page"})}},assertions:{iShouldSeeObjectNotFound:function(){return this.waitFor({id:"page",viewName:i,matchers:[new o({key:"objectTitle",propertyName:"title"}),new o({key:"noObjectFoundText",propertyName:"text"})],success:function(t){e.assert.ok(true,"The 'Object not found' text and title are displayed")},errorMessage:"Did not display the 'Object not found' page"})},iShouldSeeResourceNotFound:function(){return this.waitFor({id:"page",viewName:s,matchers:[new o({key:"notFoundTitle",propertyName:"title"}),new o({key:"notFoundText",propertyName:"text"})],success:function(t){e.assert.ok(true,"The 'Object not found' text and title are displayed")},errorMessage:"Did not display the 'Object not found' page"})}}}})});