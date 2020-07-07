// lorem text
const text = [
  "I'm baby drinking vinegar tousled cold-pressed keffiyeh. Viral readymade slow-carb tbh 8-bit. Freegan man braid vaporware pop-up, tote bag air plant +1 poutine mumblecore fixie jianbing. Succulents man braid trust fund irony. Pop-up single-origin coffee DIY, literally lomo microdosing tumblr. Sriracha lumbersexual hexagon jianbing subway tile fixie aesthetic adaptogen palo santo offal hoodie portland pickled post-ironic.",
  "8-bit edison bulb skateboard bicycle rights meditation, banh mi pitchfork la croix dreamcatcher bitters. Seitan ugh actually, gentrify pork belly street art gochujang kickstarter tattooed leggings. Jianbing fingerstache iceland blue bottle raw denim. Hot chicken lomo keffiyeh chillwave, food truck yuccie bitters franzen vinyl hella etsy echo park ennui. Cliche narwhal cloud bread polaroid sriracha bitters +1 everyday carry.",
  "Health goth drinking vinegar kale chips helvetica. Lomo subway tile photo booth, butcher ugh franzen migas raclette asymmetrical deep v small batch everyday carry listicle DIY yuccie. Etsy mustache austin freegan offal bicycle rights. Intelligentsia microdosing hoodie lumbersexual keytar adaptogen kinfolk stumptown iPhone marfa. Lomo iPhone gentrify scenester gastropub, food truck disrupt live-edge affogato +1 wayfarers. YOLO kitsch fixie, irony bespoke cronut food truck kale chips paleo lomo art party. Intelligentsia umami banjo VHS small batch, sustainable tbh pabst truffaut plaid.",
  "Master cleanse marfa tbh leggings. La croix quinoa twee raclette kogi mumblecore. La croix humblebrag disrupt thundercats af lo-fi master cleanse stumptown organic street art bicycle rights slow-carb. Truffaut migas succulents la croix, vape single-origin coffee glossier iPhone mlkshk brooklyn lumbersexual hella street art tacos slow-carb. Meggings pork belly hell of, live-edge keffiyeh banjo enamel pin jianbing air plant glossier migas.",
  "Hell of locavore tumblr master cleanse live-edge bicycle rights cronut. Biodiesel humblebrag green juice, ennui fingerstache tacos letterpress activated charcoal stumptown lyft heirloom air plant pop-up pabst. Tbh squid williamsburg pork belly, drinking vinegar paleo cliche microdosing migas heirloom poutine. Iceland wolf artisan fashion axe kitsch blog +1 palo santo fixie freegan quinoa biodiesel actually wayfarers flannel.",
  "90's vice four loko +1 pop-up twee single-origin coffee echo park craft beer wayfarers freegan vape hoodie truffaut sartorial. Cray kinfolk offal woke squid. Cray kickstarter yuccie thundercats keytar disrupt tacos church-key. Scenester mumblecore intelligentsia, forage franzen YOLO deep v marfa live-edge ramps hammock echo park.",
  "Farm-to-table you probably haven't heard of them irony ugh bicycle rights, iPhone before they sold out paleo quinoa etsy synth. Mlkshk mustache lumbersexual locavore tofu aesthetic. Poke la croix asymmetrical vegan tofu affogato chia semiotics distillery taxidermy microdosing intelligentsia street art fingerstache literally. 3 wolf moon pinterest before they sold out microdosing, cliche fam kitsch. VHS shoreditch keffiyeh stumptown tote bag kale chips lumbersexual +1 waistcoat pop-up vape thundercats.",
  "Banjo salvia intelligentsia freegan austin man braid ramps artisan. Cronut cornhole sriracha edison bulb cliche wayfarers everyday carry selvage iPhone vegan live-edge crucifix yr hoodie affogato. Chillwave palo santo la croix hammock chambray. Tacos occupy affogato prism mustache adaptogen brooklyn deep v 3 wolf moon narwhal chillwave bespoke sartorial chartreuse yuccie. Beard bicycle rights meh normcore shabby chic hammock mixtape.",
  "Succulents taxidermy skateboard chia artisan. Four dollar toast crucifix ethical cornhole yr. Mixtape snackwave authentic messenger bag green juice locavore lo-fi literally skateboard kinfolk gentrify everyday carry polaroid mumblecore. Ethical helvetica cornhole yuccie craft beer.",
  "Pug four loko jianbing stumptown photo booth gentrify thundercats copper mug VHS letterpress ethical. Lo-fi raclette mixtape heirloom tote bag chambray enamel pin hoodie occupy pug polaroid palo santo. Paleo fixie trust fund, sustainable snackwave letterpress readymade. Photo booth tote bag normcore post-ironic letterpress, selfies deep v food truck. Coloring book tbh helvetica heirloom, waistcoat kale chips tattooed brunch.",
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);
  
  // empty
  // < 0
  // number > 10

if (isNaN(value) || value <= 0 || value > 10) {
  result.innerHTML = `<p class="result">${text[random]}</p>`
} else {
  let tempText = text.slice(0, value);
  tempText = tempText.map((paragraph) => {
    return `<p class="result">${paragraph}</p>`
  }).join("");
  result.innerHTML = tempText;
}
});
