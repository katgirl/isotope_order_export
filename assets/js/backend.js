var IsotopeExport={initializeToolsMenu:function(){var a=document.getElements("#tl_buttons .isotope-export");if(!(a.length<1)){a.each(function(a){a.previousSibling.nodeValue=""}),document.getElement("a.header_isotope-export").addEvent("click",function(a){return document.id("isotopetoolsmenu").setStyle("display","block"),!1}).setStyle("display","inline");new Element("div",{id:"isotopetoolsmenu",styles:{top:$$("a.header_isotope-export")[0].getPosition().y+22}}).adopt(a).inject(document.id(document.body)).setStyle("left",$$("a.header_isotope-export")[0].getPosition().x-7);document.id(document.body).addEvent("click",function(){document.id("isotopetoolsmenu").setStyle("display","none")})}},initializeToolsButton:function(){document.getElements("#tl_listing .isotope-tools, .tl_listing .isotope-tools").addClass("invisible"),document.getElements("a.isotope-contextmenu").each(function(a){a.getNext("a.isotope-tools")&&a.removeClass("invisible").addEvent("click",function(b){$defined(document.id("isotope-contextmenu"))&&document.id("isotope-contextmenu").destroy();var c=new Element("div",{id:"isotope-contextmenu",styles:{top:a.getPosition().y+22,display:"block"}});return a.getAllNext("a.isotope-tools").each(function(a){var b=a.getFirst("img");new Element("a",{href:a.get("href"),title:a.get("title"),html:a.get("html")+" "+b.get("alt")}).inject(c)}),c.inject(document.id(document.body)),c.setStyle("left",a.getPosition().x-c.getSize().x/2),!1})}),document.id(document.body).addEvent("click",function(a){$defined(document.id("isotope-contextmenu"))&&!a.target.getParent("#isotope-contextmenu")&&document.id("isotope-contextmenu").destroy()})}};window.addEvent("domready",function(){IsotopeExport.initializeToolsMenu(),IsotopeExport.initializeToolsButton()}).addEvent("structure",function(){IsotopeExport.initializeToolsButton()});