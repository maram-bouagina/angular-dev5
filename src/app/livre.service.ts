import { Injectable } from '@angular/core';
import { Livre } from './model/livre.model';
import { Genre } from './model/genre.model';


@Injectable({
  providedIn: 'root'
})


export class LivreService {
 

 livres : Livre[];
 livre! : Livre;
 genres! : Genre[];
 livresRecherche!: Livre[];

  constructor() {
    this.genres = [ {idgenre : 1, nomgenre : "fantasy"},
      {idgenre : 2, nomgenre : "fantasy-romance"}];
    this.livres = [
      {idlivre : 1,titre : "Eragon", auteur :"Christopher Paolini", nbpages :503 ,  datepublication : new Date("05/08/2003"),genre : {idgenre: 1, nomgenre : "fantasy"}},
      {idlivre : 2,titre :"ACOTAR", auteur : "SARAHj.MAAS",nbpages : 498, datepublication : new Date("05/05/2015"),genre : {idgenre : 2, nomgenre : "fantasy-romance"}},
      {idlivre : 3,titre :"fourth wing", auteur : "REBBECA YARROS", nbpages : 419, datepublication : new Date("02/05/2023"),genre: {idgenre : 1, nomgenre : "fantasy-romance"}}
       ];
    }
  listelivres():Livre[] {
    return this.livres;
  }

  ajouterlivre( l: Livre){
  this.livres.push(l);
  }
  supprimerLivre( liv: Livre){
    //supprimer le produit prod du tableau produits
    const index = this.livres.indexOf(liv, 0);
    if (index > -1) {
    this.livres.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    }
    consulterlivre(id:number): Livre{
      this.livre = this.livres.find(p => p.idlivre == id)!;
      //console.log(this.livre);
      return this.livre;
      
  }
  trierlivres(){
    this.livres = this.livres.sort((n1,n2) => {
    if (n1.idlivre! > n2.idlivre!) {
    return 1;
    }
    if (n1.idlivre! < n2.idlivre!) {
    return -1;
    }
    return 0;
    });
    }
  updatelivre(l:Livre)
    {
    // console.log(l);
    this.supprimerLivre(l);
    this.ajouterlivre(l);
    this.trierlivres();

    }
    listegenres():Genre[] {
      return this.genres;
      }
      consultergenre(id:number): Genre{ 
      return this.genres.find(gen => gen.idgenre == id)!;
      }
      rechercherParGenre(idgenre: number): Livre[]{ 
        this.livresRecherche = []; 
        this.livres.forEach((cur, index) => { 
        if(idgenre == cur.genre.idgenre) { 
        console.log("cur "+cur); 
        this.livresRecherche.push(cur); 
        } 
        }); 
        return this.livresRecherche; 
        }
    
}