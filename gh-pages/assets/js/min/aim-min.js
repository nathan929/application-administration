function sticky_relocate(){var t=$(window).scrollTop(),e=$("#sidebar-stick").offset().top;t>e?$(".sidebar").addClass("stick"):$(".sidebar").removeClass("stick")}$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip({animated:"fade",placement:"top",container:"body"})}),$(function(){$(window).scroll(sticky_relocate),sticky_relocate()}),$(".navbar-toggle").click(function(){$("body").toggleClass("mobile-menu-active",1e3)}),$(".current-page").click(function(){$(".dropdown-area ul").toggleClass("closed",1e3)});var currentTallest=0,currentRowStart=0,rowDivs=new Array,$el,topPosition=0;$(".application-item").each(function(){if($el=$(this),topPosition=$el.position().top,currentRowStart!=topPosition){for(currentDiv=0;currentDiv<rowDivs.length;currentDiv++)rowDivs[currentDiv].height(currentTallest);rowDivs.length=0,currentRowStart=topPosition,currentTallest=$el.height(),rowDivs.push($el)}else rowDivs.push($el),currentTallest=currentTallest<$el.height()?$el.height():currentTallest;for(currentDiv=0;currentDiv<rowDivs.length;currentDiv++)rowDivs[currentDiv].height(currentTallest)});