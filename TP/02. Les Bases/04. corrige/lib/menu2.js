
var pagesdisponibles = [
    [" Accueil", "index.htm", "Bienvenue sur " + projet["nom"]],
    [" Recherche", "recherche.htm", "Votre recherche de BD"],
    [" Commande", "commande.htm", "Votre panier"],
    [" Contact", "contact.htm", "Contactez-nous"]
];


function affichePageMenu(page_selectionnee) {
    var html = "";
    for (i = 0; i < pagesdisponibles.length; i++) {
        page = pagesdisponibles[i];
        html += '<a href="' +page [1]+'">' +page [0] +'</a>';
    }
    

document.write(html);


}
;
function affichePageMenu(selectionne)
	{
		var menuHtml = new String();
		var i = new Number();
		menuHtml += "<div id=\"menu\"><ul>";
		for (i = 0; i < pagesDisponibles.length; i++)
		{
			if(pagesDisponibles[i][1] == selectionne)
					cssSelect = " class=\"select\"";
			else	cssSelect = "";
			menuHtml += "<li"+cssSelect+"><a href=\""+pagesDisponibles[i][1]+"\" title=\""+pagesDisponibles[i][0]+"\">"+pagesDisponibles[i][0]+"</a></li>";
		}
		menuHtml += "</ul></div>";
		document.write(menuHtml);
	}		
	
