//objeto para representar um pufe1
const pufe = {
    cor: "marrom",
    material: "couro",
    estilo: "clássico",
    tamanho: "grande",
    confortavel: true,
    descricao: function() {
      return "Um pufe " + this.cor + " de couro, estilo " + this.estilo + ", tamanho " + this.tamanho + ".";
    }
  };
  
 console.log("Cor:", pufe.cor);
  console.log("Material:", pufe.material);
  console.log("Confortável?", pufe.confortavel);
  
  console.log(pufe.descricao());
  

  // objeto para representar um pufe com apoio
const pufeComApoio = {
    cor: "marrom",
    material: "couro",
    estilo: "clássico",
    tamanho: "grande",
    confortavel: true,
    apoio: true,
    descricao: function() {
      var temApoio = this.apoio ? "com apoio" : "sem apoio";
      return "Um pufe " + this.cor + " de couro, estilo " + this.estilo + ", tamanho " + this.tamanho + ", " + temApoio + ".";
    }
  };
  
  console.log("Cor:", pufeComApoio.cor);
  console.log("Material:", pufeComApoio.material);
  console.log("Confortável?", pufeComApoio.confortavel);
  console.log("Apoio?", pufeComApoio.apoio);
  
  console.log(pufeComApoio.descricao());
  
  // objeto para representar um vaso decorativo
const vasoDecorativo = {
    cor: "branco",
    material: "cerâmica",
    estilo: "moderno",
    altura: "30cm",
    largura: "20cm",
    descricao: function() {
      return "Um vaso decorativo " + this.cor + " de " + this.material + ", estilo " + this.estilo + ", com altura de " + this.altura + " e largura de " + this.largura + ".";
    }
  };
  
  console.log("Cor:", vasoDecorativo.cor);
  console.log("Material:", vasoDecorativo.material);
  console.log("Estilo:", vasoDecorativo.estilo);
  console.log("Altura:", vasoDecorativo.altura);
  console.log("Largura:", vasoDecorativo.largura);
  
  
  console.log(vasoDecorativo.descricao());
  