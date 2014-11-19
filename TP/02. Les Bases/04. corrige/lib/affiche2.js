var projet=new Array;
            projet["nom"]=new String("BDPhilia");
            projet["auteur"]=new String("Nad");
            projet["copy"]=new String("&copy; 2009 Geodis");
            
//          ["nom"]    = "BDPhilia";
//          ["auteur"] = "votre nom";
//	    ["copy"]   = "&copy; 2009 votre entreprise";   
    function affichePageBandeauHaut()
    {
            htmlData = "<div id=\"bandeau\">&nbsp;</div>";
            document.write(htmlData);
    }
//            &nbsp : pour ajouter 1 espace
    function affichePageTitre(selectionne)
	{
		var i = new Number();
		for (i = 0; i < pagesDisponibles.length; i++)
		if(pagesDisponibles[i][1] == selectionne)
		document.write("<div id=\"titre\"><h1>"+pagesDisponibles[i][2]+"</h1></div>");
	}
	function affichePagePied()
	{
		var piedHtml = new String();
		piedHtml += "<div id=\"pied\">";
		piedHtml += "<span>"+projet["copy"]+" - ";
		piedHtml += "Réalisé par "+projet["auteur"]+"</span></div>";
		document.write(piedHtml);
	}
	