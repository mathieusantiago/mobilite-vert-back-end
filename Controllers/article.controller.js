const ArticleModel = require("../models/article.model");
const ObjectID = require("mongoose").Types.ObjectId;

/**
 * @api {get} /api/article/  Get all article
 * @apiName readArticle
 * @apiGroup Article
 * @apiDescription methode API for get all article
 * @apiSuccess {Object} article Object with all article.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   {
 *       "_id": "62e98a8242fdb1c698c16c25",
 *       "profil_name": "Nos essais",
 *       "categories": "Essais par marque",
 *       "article_title": "qzdqzdqzd",
 *       "mainPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469422/tettipxo2ttbyzfustmy.png",
 *       "galleryPicture": [],
 *       "chapo": "<p>qzdzzqdzqd</p>",
 *       "content_article": "<p>dzqdzq</p>",
 *       "content_subarticle": "<p>dzqdzq</p>",
 *       "tags": [
 *           "zqdqz"
 *       ],
 *       "author": [
 *           " 63060fe60a9cbcf6f9baeeff"
 *       ],
 *       "presCategorie": "",
 *       "putInOne": false,
 *       "notDisplayHomepage": false,
 *       "withoutPub": false,
 *       "presTitle": "",
 *       "presChapo": "",
 *       "presArticle": "",
 *       "tilteSeo": "",
 *       "contentSeo": "",
 *       "status": "Publish",
 *       "editing_id": "62aadd63ebc163f0d6e9c69e",
 *       "secondaryPicture": "",
 *       "createdAt": "2022-08-02T20:35:14.365Z",
 *       "updatedAt": "2022-08-02T20:35:14.365Z",
 *       "__v": 0
 *   },
 *   {
 *       "_id": "62e986177b17dfb619687969",
 *       "profil_name": "Nouvelles énergies",
 *       "categories": " Voitures électriques",
 *       "article_title": "LA PEUGEOT e-208 GT OUVRE LA VOIE À L’ÉLECTRIFICATION DE LA MARQUE AU BRÉSIL",
 *       "mainPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469033/kk2jcc5xz0ne6w3rrosh.png",
 *       "galleryPicture": [
 *           {
 *               "_id": "62e97ec250c2d1bcb4836e69",
 *               "urlPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469504/hmu6m6mktewne1o5ujd1.png",
 *               "nom": "Peugeot e208",
 *               "seo": "Photo de l'Interieur Peugeot e208",
 *               "description": "Interieur Peugeot e208",
 *               "createdAt": "2022-08-02T19:45:06.224Z",
 *               "updatedAt": "2022-08-02T19:45:06.224Z",
 *               "__v": 0
 *           },
 *           {
 *               "_id": "62e97e6f50c2d1bcb4836e63",
 *               "urlPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469422/tettipxo2ttbyzfustmy.png",
 *               "nom": "Peugeot e208",
 *               "seo": "Photo prise de recharge de la Peugeot e208",
 *               "description": "prise de recharge de la Peugeot e208",
 *               "createdAt": "2022-08-02T19:43:43.394Z",
 *               "updatedAt": "2022-08-02T19:43:43.394Z",
 *               "__v": 0
 *           },
 *           {
 *               "_id": "62e97e4750c2d1bcb4836e5d",
 *               "urlPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469382/x6wirrpvkjb7qbevklyb.png",
 *               "nom": "Peugeot e208",
 *               "seo": "Photo Peugeot e208 en charge",
 *               "description": "Peugeot e208 en charge",
 *               "createdAt": "2022-08-02T19:43:03.579Z",
 *               "updatedAt": "2022-08-02T19:43:03.579Z",
 *               "__v": 0
 *           },
 *           {
 *               "_id": "62e97dc250c2d1bcb4836e57",
 *               "urlPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469250/eapuwmayaupivwcbgner.png",
 *               "nom": "Peugeot e208",
 *               "seo": "Photo Peugeot e-208 vue de dérière ",
 *               "description": "Peugeot e-208 vue de dérière ",
 *               "createdAt": "2022-08-02T19:40:50.849Z",
 *               "updatedAt": "2022-08-02T19:40:50.849Z",
 *               "__v": 0
 *           },
 *           {
 *               "_id": "62e97d2a50c2d1bcb4836e51",
 *               "urlPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469097/d6yrngpgbug41vk5ud5m.png",
 *               "nom": "Peugeot e208",
 *               "seo": "PhotoLogo E-208 de la Peugeot e-208",
 *               "description": "Logo E-208 de la Peugeot e-208",
 *               "createdAt": "2022-08-02T19:38:18.001Z",
 *               "updatedAt": "2022-08-02T19:38:18.001Z",
 *               "__v": 0
 *           },
 *           {
 *               "_id": "62e97cea50c2d1bcb4836e4b",
 *               "urlPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469033/kk2jcc5xz0ne6w3rrosh.png",
 *               "nom": "Peugeot e208",
 *               "seo": "Photo de la Peugeot e208 de face",
 *               "description": "Peugeot e208 de face",
 *               "createdAt": "2022-08-02T19:37:14.091Z",
 *               "updatedAt": "2022-08-02T19:37:14.091Z",
 *               "__v": 0
 *           }
 *       ],
 *       "chapo": "<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">La marque PEUGEOT vient de d&eacute;marrer la commercialisation sur le march&eacute; br&eacute;silien de la PEUGEOT e-208 GT, sa berline 100% &eacute;lectrique&nbsp;;</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">Les 20 premiers clients se verront offrir une borne de recharge &agrave; domicile &laquo;&nbsp;WEG&nbsp;&raquo;, partenaire certifi&eacute; par la marque au Br&eacute;sil et qualifi&eacute; pour la vente de bornes via le r&eacute;seau des concessionnaires PEUGEOT&nbsp;;</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\"><img src=\"https://media.peugeot.gp/image/66/4/e208-header-desktop.795664.11.jpg?autocrop=1\" alt=\"\" width=\"673\" height=\"342\" /></p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">L'arriv&eacute;e de cette version haut de gamme inaugure le lancement au Br&eacute;sil d'un &eacute;cosyst&egrave;me con&ccedil;u autour des clients acheteurs de v&eacute;hicules &eacute;lectriques&nbsp;;</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">Pour accompagner ce lancement, des partenariats strat&eacute;giques ont &eacute;t&eacute; sign&eacute;s avec divers partenaires et donner corps &agrave; la strat&eacute;gie du &laquo; Move to Electric&nbsp;d&eacute;velopp&eacute;e par PEUGEOT do Brasil.</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">En embrassant l'univers de l'&eacute;lectrification au Br&eacute;sil, PEUGEOT renforce sa position de marque innovante, en phase avec les aspirations et les valeurs nouvelles d'une soci&eacute;t&eacute; en mutation. Avec celles aussi d'un client de plus en plus exigeant, &agrave; l'image de la marque PEUGEOT, dont l&rsquo;engagement est d'atteindre les plus hauts standards d&rsquo;excellence.</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">La preuve ? La tr&egrave;s select revue &laquo; Quatro Rodas &raquo; a class&eacute; la PEUGEOT e-208 GT en t&ecirc;te de son r&eacute;cent comparatif avec ses principales concurrentes du segment B, en arguant de&nbsp;<em style=\"box-sizing: border-box;\">&laquo; son plaisir [de conduire] et de ses performances &eacute;lev&eacute;es, mais aussi de sa convivialit&eacute; en utilisation urbaine, de son niveau de technologie, de ses finitions et de son espace pour les passagers et les bagages.&nbsp;&raquo;</em></p>",
 *       "content_article": "<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\"><strong style=\"box-sizing: border-box; font-weight: bolder; font-family: OpenSans-Semibold;\">PEUGEOT E-208 GT : LA BERLINE IRRESISTIBLE 100% &Eacute;LECTRIQUE</strong></p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">C&rsquo;est dans le cadre prestigieux du&nbsp;<em style=\"box-sizing: border-box;\">&laquo;&nbsp;Museu do Amanha&raquo;,</em>&nbsp;&agrave; Rio de Janeiro,​ que PEUGEOT do Brasil a lanc&eacute; la nouvelle PEUGEOT e-208 GT, sa berline 100% &eacute;lectrique.</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">&nbsp;</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">on&ccedil;ue pour &eacute;crire un nouveau chapitre de la fameuse s&eacute;rie 2, la nouvelle PEUGEOT 208 est une voiture s&eacute;duisante &agrave; tous points de vue. Depuis son lancement en 2020, elle a remport&eacute; plusieurs prix, en Europe comme au Br&eacute;sil, &agrave; l&rsquo;instar du troph&eacute;e Europ&eacute;en&nbsp;<em style=\"box-sizing: border-box;\">&laquo; Car Of The Year&nbsp;&raquo;&nbsp;</em>(COTY), l'une des r&eacute;compenses les plus convoit&eacute;es au monde. Au Br&eacute;sil, dans sa configuration FlexFuel, le site UOL Carros lui a d&eacute;cern&eacute; le prix de&nbsp;<em style=\"box-sizing: border-box;\">&laquo; Meilleure Berline Compacte&nbsp;&raquo;.&nbsp;</em>Au Br&eacute;sil toujours, mais dans sa version 2021, la PEUGEOT 208 a &eacute;t&eacute; &eacute;lue&nbsp;<em style=\"box-sizing: border-box;\">&laquo;&nbsp;Meilleure</em>&nbsp;<em style=\"box-sizing: border-box;\">Voiture Compacte&nbsp;&raquo;</em>&nbsp;lors de la onzi&egrave;me &eacute;dition des CAR AWARDS BRAZIL et s&rsquo;est vue d&eacute;cerner le titre&nbsp;<em style=\"box-sizing: border-box;\">&laquo; Achat de l&rsquo;ann&eacute;e 2021 &raquo;&nbsp;</em>par le magazine Motor Show.</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\"><img src=\"https://media.ouest-france.fr/v1/pictures/MjAyMDAxNTQ0NWY2NTEyZTU4NDk5MzRlZTliM2ZiNjhkODIzYTA?width=1260&height=708&focuspoint=50%2C51&cropresize=1&client_id=bpeditorial&sign=0749d77f16b9c0a68ddb1ba1e44bf72b4a966826f54e3819285a5cc974753466\" alt=\"\" width=\"749\" height=\"422\" /></p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">Prolongeant cette trajectoire prometteuse, PEUGEOT a d&eacute;marr&eacute; la commercialisation au Br&eacute;sil de la PEUGEOT e-208 GT, qui propose une vivacit&eacute; et un plaisir de conduite stimulant gr&acirc;ce &agrave; sa motorisation 100% &eacute;lectrique :</p>\n<ul style=\"box-sizing: border-box; margin: 0px auto; font-family: OpenSans; padding: 0px 40px 10px; display: block; font-size: 0.9rem; max-width: 750px; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">\n<li style=\"box-sizing: border-box; text-align: justify;\">Moteur d&rsquo;une puissance de 100 kW (136 ch.) et d&rsquo;un couple de 260 Nm (disponibles d&egrave;s 0 km/h) pour une r&eacute;activit&eacute; imm&eacute;diate,</li>\n<li style=\"box-sizing: border-box; text-align: justify;\">Silence en roulage et absence de vibrations.</li>\n</ul>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">La nouvelle PEUGEOT e-208 GT propose trois modes de conduite :</p>\n<ul style=\"box-sizing: border-box; margin: 0px auto; font-family: OpenSans; padding: 0px 40px 10px; display: block; font-size: 0.9rem; max-width: 750px; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">\n<li style=\"box-sizing: border-box; text-align: justify;\">&Eacute;co : optimisation de l&rsquo;autonomie,</li>\n<li style=\"box-sizing: border-box; text-align: justify;\">Normal : confort optimal pour une utilisation quotidienne,</li>\n<li style=\"box-sizing: border-box; text-align: justify;\">Sport : priorit&eacute; aux performances et aux sensations, puissance et couple au maximum (0 &agrave; 100 km/h en 8,1s).</li>\n</ul>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">La commande de bo&icirc;te de vitesses automatique EAT8 \"Shift and Park by Wire est intuitive et ergonomique. Elle dispose de cinq modes : P (Park), D (Drive), N (Neutral), R (Reverse) et B Mode. Ce dernier sert &agrave; assurer la r&eacute;g&eacute;n&eacute;ration de la batterie, optimisant l'autonomie du v&eacute;hicule. Le conducteur peut ainsi choisir entre une conduite &laquo; mod&eacute;r&eacute;e &raquo;, pour des sensations proches de celles d'un v&eacute;hicule thermique, ou &laquo; renforc&eacute;e &raquo;, pour une d&eacute;c&eacute;l&eacute;ration command&eacute;e par la p&eacute;dale d'acc&eacute;l&eacute;rateur.</p>",
 *       "content_subarticle": "<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\"><strong style=\"box-sizing: border-box; font-weight: bolder; font-family: OpenSans-Semibold;\">BATTERIE HAUTE PERFORMANCE</strong></p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">La nouvelle PEUGEOT e-208 est &eacute;quip&eacute;e d&rsquo;une batterie de grande capacit&eacute; de 50 kWh permettant d&rsquo;atteindre une autonomie jusqu&rsquo;&agrave; 340 km selon le protocole d&rsquo;homologation WLTP (Worldwide harmonized Light vehicles Test Procedures).</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\"><img src=\"https://www.breezcar.com/img-c/pageimg/4471_W750.jpg\" alt=\"\" width=\"750\" height=\"540\" /></p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Le v&eacute;hicule peut &ecirc;tre recharg&eacute; sur des prises domestiques classiques ou sur des bornes de recharge rapides au moyen d'une prise implant&eacute;e au niveau de la trappe &agrave; carburant.&nbsp;</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">Le syst&egrave;me est compos&eacute; d'une prise de type 2, pour le courant alternatif (CA) et d'une prise CCS-2, pour le courant continu (CC). La recharge d&eacute;bute imm&eacute;diatement apr&egrave;s le branchement du c&acirc;ble et l'utilisateur peut suivre l'&eacute;tat de la recharge gr&acirc;ce aux t&eacute;moins lumineux (blanc = ouverture pour le branchement de la fiche ; vert : clignotant = en charge / fixe = charge termin&eacute;e ; rouge = anomalie/probl&egrave;me de recharge). Pour ouvrir la trappe, il suffit de d&eacute;verrouiller les portes du v&eacute;hicule.&nbsp;</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">Depuis une borne publique d&eacute;di&eacute;e, la r&eacute;gulation thermique de la batterie permet d&rsquo;utiliser des chargeurs 100 kW et d&rsquo;atteindre 80% de la charge en 30 mn. En pratique, cela revient &agrave; r&eacute;cup&eacute;rer environ 270 km d'autonomie.</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">La batterie est garantie 8 ans ou 160 000 km pour 70% de sa capacit&eacute; de charge.</p>",
 *       "tags": [
 *           "Peugeot e-208"
 *       ],
 *       "author": [
 *           " 63060fe60a9cbcf6f9baeeff"
 *       ],
 *       "presCategorie": "Actualité",
 *       "putInOne": true,
 *       "notDisplayHomepage": true,
 *       "withoutPub": true,
 *       "presTitle": "Peugeot e-208 à 150 € par mois sans apport : où est l'embrouille ?",
 *       "presChapo": "La marque PEUGEOT vient de démarrer la commercialisation sur le marché brésilien de la PEUGEOT e-208 GT, sa berline 100% électrique ;",
 *       "presArticle": "<p><span style=\"color: #1a1a1a; font-family: OpenSans; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Les 20 premiers clients se verront offrir une borne de recharge &agrave; domicile &laquo;&nbsp;WEG&nbsp;&raquo;, partenaire certifi&eacute; par la marque au Br&eacute;sil et qualifi&eacute; pour la vente de bornes via le r&eacute;seau des concessionnaires PEUGEOT&nbsp;;</span></p>",
 *       "tilteSeo": "Peugeot e-208 à 150 € par mois sans apport : où est l'embrouille ?",
 *       "contentSeo": "Les 20 premiers clients se verront offrir une borne de recharge à domicile « WEG », partenaire certifié par la marque au Brésil et qualifié pour la vente de bornes via le réseau des concessionnaires PEUGEOT ;",
 *       "status": "Publish",
 *       "editing_id": "62aadd63ebc163f0d6e9c69e",
 *       "secondaryPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469382/x6wirrpvkjb7qbevklyb.png",
 *       "createdAt": "2022-08-02T20:16:23.229Z",
 *       "updatedAt": "2022-08-02T20:16:23.229Z",
 *       "__v": 0
 *   }
 * @apiSampleRequest http://127.0.0.1:5000/api/article
 */
module.exports.readArticle = (req, res) => {
  ArticleModel.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("❌ errors to get article");
    }
  }).sort({ updatedAt: "desc" });
};

/**
 * @api {get} /api/article/:id  Get article by id
 * @apiName getArticleById
 * @apiGroup Article
 * @apiDescription methode API for get all article
 * @apiParam {ObjectId} id  id of article.
 * @apiSuccess {Object} article Object with all article.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   {
 *       "_id": "62e98a8242fdb1c698c16c25",
 *       "profil_name": "Nos essais",
 *       "categories": "Essais par marque",
 *       "article_title": "qzdqzdqzd",
 *       "mainPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469422/tettipxo2ttbyzfustmy.png",
 *       "galleryPicture": [],
 *       "chapo": "<p>qzdzzqdzqd</p>",
 *       "content_article": "<p>dzqdzq</p>",
 *       "content_subarticle": "<p>dzqdzq</p>",
 *       "tags": [
 *           "zqdqz"
 *       ],
 *       "author": [
 *           " 63060fe60a9cbcf6f9baeeff"
 *       ],
 *       "presCategorie": "",
 *       "putInOne": false,
 *       "notDisplayHomepage": false,
 *       "withoutPub": false,
 *       "presTitle": "",
 *       "presChapo": "",
 *       "presArticle": "",
 *       "tilteSeo": "",
 *       "contentSeo": "",
 *       "status": "Publish",
 *       "editing_id": "62aadd63ebc163f0d6e9c69e",
 *       "secondaryPicture": "",
 *       "createdAt": "2022-08-02T20:35:14.365Z",
 *       "updatedAt": "2022-08-02T20:35:14.365Z",
 *       "__v": 0
 *   },
 *   {
 *       "_id": "62e986177b17dfb619687969",
 *       "profil_name": "Nouvelles énergies",
 *       "categories": " Voitures électriques",
 *       "article_title": "LA PEUGEOT e-208 GT OUVRE LA VOIE À L’ÉLECTRIFICATION DE LA MARQUE AU BRÉSIL",
 *       "mainPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469033/kk2jcc5xz0ne6w3rrosh.png",
 *       "galleryPicture": [
 *           {
 *               "_id": "62e97ec250c2d1bcb4836e69",
 *               "urlPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469504/hmu6m6mktewne1o5ujd1.png",
 *               "nom": "Peugeot e208",
 *               "seo": "Photo de l'Interieur Peugeot e208",
 *               "description": "Interieur Peugeot e208",
 *               "createdAt": "2022-08-02T19:45:06.224Z",
 *               "updatedAt": "2022-08-02T19:45:06.224Z",
 *               "__v": 0
 *           },
 *           {
 *               "_id": "62e97e6f50c2d1bcb4836e63",
 *               "urlPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469422/tettipxo2ttbyzfustmy.png",
 *               "nom": "Peugeot e208",
 *               "seo": "Photo prise de recharge de la Peugeot e208",
 *               "description": "prise de recharge de la Peugeot e208",
 *               "createdAt": "2022-08-02T19:43:43.394Z",
 *               "updatedAt": "2022-08-02T19:43:43.394Z",
 *               "__v": 0
 *           },
 *           {
 *               "_id": "62e97e4750c2d1bcb4836e5d",
 *               "urlPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469382/x6wirrpvkjb7qbevklyb.png",
 *               "nom": "Peugeot e208",
 *               "seo": "Photo Peugeot e208 en charge",
 *               "description": "Peugeot e208 en charge",
 *               "createdAt": "2022-08-02T19:43:03.579Z",
 *               "updatedAt": "2022-08-02T19:43:03.579Z",
 *               "__v": 0
 *           },
 *           {
 *               "_id": "62e97dc250c2d1bcb4836e57",
 *               "urlPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469250/eapuwmayaupivwcbgner.png",
 *               "nom": "Peugeot e208",
 *               "seo": "Photo Peugeot e-208 vue de dérière ",
 *               "description": "Peugeot e-208 vue de dérière ",
 *               "createdAt": "2022-08-02T19:40:50.849Z",
 *               "updatedAt": "2022-08-02T19:40:50.849Z",
 *               "__v": 0
 *           },
 *           {
 *               "_id": "62e97d2a50c2d1bcb4836e51",
 *               "urlPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469097/d6yrngpgbug41vk5ud5m.png",
 *               "nom": "Peugeot e208",
 *               "seo": "PhotoLogo E-208 de la Peugeot e-208",
 *               "description": "Logo E-208 de la Peugeot e-208",
 *               "createdAt": "2022-08-02T19:38:18.001Z",
 *               "updatedAt": "2022-08-02T19:38:18.001Z",
 *               "__v": 0
 *           },
 *           {
 *               "_id": "62e97cea50c2d1bcb4836e4b",
 *               "urlPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469033/kk2jcc5xz0ne6w3rrosh.png",
 *               "nom": "Peugeot e208",
 *               "seo": "Photo de la Peugeot e208 de face",
 *               "description": "Peugeot e208 de face",
 *               "createdAt": "2022-08-02T19:37:14.091Z",
 *               "updatedAt": "2022-08-02T19:37:14.091Z",
 *               "__v": 0
 *           }
 *       ],
 *       "chapo": "<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">La marque PEUGEOT vient de d&eacute;marrer la commercialisation sur le march&eacute; br&eacute;silien de la PEUGEOT e-208 GT, sa berline 100% &eacute;lectrique&nbsp;;</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">Les 20 premiers clients se verront offrir une borne de recharge &agrave; domicile &laquo;&nbsp;WEG&nbsp;&raquo;, partenaire certifi&eacute; par la marque au Br&eacute;sil et qualifi&eacute; pour la vente de bornes via le r&eacute;seau des concessionnaires PEUGEOT&nbsp;;</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\"><img src=\"https://media.peugeot.gp/image/66/4/e208-header-desktop.795664.11.jpg?autocrop=1\" alt=\"\" width=\"673\" height=\"342\" /></p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">L'arriv&eacute;e de cette version haut de gamme inaugure le lancement au Br&eacute;sil d'un &eacute;cosyst&egrave;me con&ccedil;u autour des clients acheteurs de v&eacute;hicules &eacute;lectriques&nbsp;;</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">Pour accompagner ce lancement, des partenariats strat&eacute;giques ont &eacute;t&eacute; sign&eacute;s avec divers partenaires et donner corps &agrave; la strat&eacute;gie du &laquo; Move to Electric&nbsp;d&eacute;velopp&eacute;e par PEUGEOT do Brasil.</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">En embrassant l'univers de l'&eacute;lectrification au Br&eacute;sil, PEUGEOT renforce sa position de marque innovante, en phase avec les aspirations et les valeurs nouvelles d'une soci&eacute;t&eacute; en mutation. Avec celles aussi d'un client de plus en plus exigeant, &agrave; l'image de la marque PEUGEOT, dont l&rsquo;engagement est d'atteindre les plus hauts standards d&rsquo;excellence.</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">La preuve ? La tr&egrave;s select revue &laquo; Quatro Rodas &raquo; a class&eacute; la PEUGEOT e-208 GT en t&ecirc;te de son r&eacute;cent comparatif avec ses principales concurrentes du segment B, en arguant de&nbsp;<em style=\"box-sizing: border-box;\">&laquo; son plaisir [de conduire] et de ses performances &eacute;lev&eacute;es, mais aussi de sa convivialit&eacute; en utilisation urbaine, de son niveau de technologie, de ses finitions et de son espace pour les passagers et les bagages.&nbsp;&raquo;</em></p>",
 *       "content_article": "<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\"><strong style=\"box-sizing: border-box; font-weight: bolder; font-family: OpenSans-Semibold;\">PEUGEOT E-208 GT : LA BERLINE IRRESISTIBLE 100% &Eacute;LECTRIQUE</strong></p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">C&rsquo;est dans le cadre prestigieux du&nbsp;<em style=\"box-sizing: border-box;\">&laquo;&nbsp;Museu do Amanha&raquo;,</em>&nbsp;&agrave; Rio de Janeiro,​ que PEUGEOT do Brasil a lanc&eacute; la nouvelle PEUGEOT e-208 GT, sa berline 100% &eacute;lectrique.</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">&nbsp;</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">on&ccedil;ue pour &eacute;crire un nouveau chapitre de la fameuse s&eacute;rie 2, la nouvelle PEUGEOT 208 est une voiture s&eacute;duisante &agrave; tous points de vue. Depuis son lancement en 2020, elle a remport&eacute; plusieurs prix, en Europe comme au Br&eacute;sil, &agrave; l&rsquo;instar du troph&eacute;e Europ&eacute;en&nbsp;<em style=\"box-sizing: border-box;\">&laquo; Car Of The Year&nbsp;&raquo;&nbsp;</em>(COTY), l'une des r&eacute;compenses les plus convoit&eacute;es au monde. Au Br&eacute;sil, dans sa configuration FlexFuel, le site UOL Carros lui a d&eacute;cern&eacute; le prix de&nbsp;<em style=\"box-sizing: border-box;\">&laquo; Meilleure Berline Compacte&nbsp;&raquo;.&nbsp;</em>Au Br&eacute;sil toujours, mais dans sa version 2021, la PEUGEOT 208 a &eacute;t&eacute; &eacute;lue&nbsp;<em style=\"box-sizing: border-box;\">&laquo;&nbsp;Meilleure</em>&nbsp;<em style=\"box-sizing: border-box;\">Voiture Compacte&nbsp;&raquo;</em>&nbsp;lors de la onzi&egrave;me &eacute;dition des CAR AWARDS BRAZIL et s&rsquo;est vue d&eacute;cerner le titre&nbsp;<em style=\"box-sizing: border-box;\">&laquo; Achat de l&rsquo;ann&eacute;e 2021 &raquo;&nbsp;</em>par le magazine Motor Show.</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\"><img src=\"https://media.ouest-france.fr/v1/pictures/MjAyMDAxNTQ0NWY2NTEyZTU4NDk5MzRlZTliM2ZiNjhkODIzYTA?width=1260&height=708&focuspoint=50%2C51&cropresize=1&client_id=bpeditorial&sign=0749d77f16b9c0a68ddb1ba1e44bf72b4a966826f54e3819285a5cc974753466\" alt=\"\" width=\"749\" height=\"422\" /></p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">Prolongeant cette trajectoire prometteuse, PEUGEOT a d&eacute;marr&eacute; la commercialisation au Br&eacute;sil de la PEUGEOT e-208 GT, qui propose une vivacit&eacute; et un plaisir de conduite stimulant gr&acirc;ce &agrave; sa motorisation 100% &eacute;lectrique :</p>\n<ul style=\"box-sizing: border-box; margin: 0px auto; font-family: OpenSans; padding: 0px 40px 10px; display: block; font-size: 0.9rem; max-width: 750px; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">\n<li style=\"box-sizing: border-box; text-align: justify;\">Moteur d&rsquo;une puissance de 100 kW (136 ch.) et d&rsquo;un couple de 260 Nm (disponibles d&egrave;s 0 km/h) pour une r&eacute;activit&eacute; imm&eacute;diate,</li>\n<li style=\"box-sizing: border-box; text-align: justify;\">Silence en roulage et absence de vibrations.</li>\n</ul>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">La nouvelle PEUGEOT e-208 GT propose trois modes de conduite :</p>\n<ul style=\"box-sizing: border-box; margin: 0px auto; font-family: OpenSans; padding: 0px 40px 10px; display: block; font-size: 0.9rem; max-width: 750px; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">\n<li style=\"box-sizing: border-box; text-align: justify;\">&Eacute;co : optimisation de l&rsquo;autonomie,</li>\n<li style=\"box-sizing: border-box; text-align: justify;\">Normal : confort optimal pour une utilisation quotidienne,</li>\n<li style=\"box-sizing: border-box; text-align: justify;\">Sport : priorit&eacute; aux performances et aux sensations, puissance et couple au maximum (0 &agrave; 100 km/h en 8,1s).</li>\n</ul>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">La commande de bo&icirc;te de vitesses automatique EAT8 \"Shift and Park by Wire est intuitive et ergonomique. Elle dispose de cinq modes : P (Park), D (Drive), N (Neutral), R (Reverse) et B Mode. Ce dernier sert &agrave; assurer la r&eacute;g&eacute;n&eacute;ration de la batterie, optimisant l'autonomie du v&eacute;hicule. Le conducteur peut ainsi choisir entre une conduite &laquo; mod&eacute;r&eacute;e &raquo;, pour des sensations proches de celles d'un v&eacute;hicule thermique, ou &laquo; renforc&eacute;e &raquo;, pour une d&eacute;c&eacute;l&eacute;ration command&eacute;e par la p&eacute;dale d'acc&eacute;l&eacute;rateur.</p>",
 *       "content_subarticle": "<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\"><strong style=\"box-sizing: border-box; font-weight: bolder; font-family: OpenSans-Semibold;\">BATTERIE HAUTE PERFORMANCE</strong></p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">La nouvelle PEUGEOT e-208 est &eacute;quip&eacute;e d&rsquo;une batterie de grande capacit&eacute; de 50 kWh permettant d&rsquo;atteindre une autonomie jusqu&rsquo;&agrave; 340 km selon le protocole d&rsquo;homologation WLTP (Worldwide harmonized Light vehicles Test Procedures).</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\"><img src=\"https://www.breezcar.com/img-c/pageimg/4471_W750.jpg\" alt=\"\" width=\"750\" height=\"540\" /></p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Le v&eacute;hicule peut &ecirc;tre recharg&eacute; sur des prises domestiques classiques ou sur des bornes de recharge rapides au moyen d'une prise implant&eacute;e au niveau de la trappe &agrave; carburant.&nbsp;</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">Le syst&egrave;me est compos&eacute; d'une prise de type 2, pour le courant alternatif (CA) et d'une prise CCS-2, pour le courant continu (CC). La recharge d&eacute;bute imm&eacute;diatement apr&egrave;s le branchement du c&acirc;ble et l'utilisateur peut suivre l'&eacute;tat de la recharge gr&acirc;ce aux t&eacute;moins lumineux (blanc = ouverture pour le branchement de la fiche ; vert : clignotant = en charge / fixe = charge termin&eacute;e ; rouge = anomalie/probl&egrave;me de recharge). Pour ouvrir la trappe, il suffit de d&eacute;verrouiller les portes du v&eacute;hicule.&nbsp;</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">Depuis une borne publique d&eacute;di&eacute;e, la r&eacute;gulation thermique de la batterie permet d&rsquo;utiliser des chargeurs 100 kW et d&rsquo;atteindre 80% de la charge en 30 mn. En pratique, cela revient &agrave; r&eacute;cup&eacute;rer environ 270 km d'autonomie.</p>\n<p style=\"box-sizing: border-box; margin: 0px auto 15px; font-family: OpenSans; font-size: 16px; line-height: 25px; display: block; max-width: 750px; clear: both; color: #1a1a1a; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: justify;\">La batterie est garantie 8 ans ou 160 000 km pour 70% de sa capacit&eacute; de charge.</p>",
 *       "tags": [
 *           "Peugeot e-208"
 *       ],
 *       "author": [
 *           " 63060fe60a9cbcf6f9baeeff"
 *       ],
 *       "presCategorie": "Actualité",
 *       "putInOne": true,
 *       "notDisplayHomepage": true,
 *       "withoutPub": true,
 *       "presTitle": "Peugeot e-208 à 150 € par mois sans apport : où est l'embrouille ?",
 *       "presChapo": "La marque PEUGEOT vient de démarrer la commercialisation sur le marché brésilien de la PEUGEOT e-208 GT, sa berline 100% électrique ;",
 *       "presArticle": "<p><span style=\"color: #1a1a1a; font-family: OpenSans; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Les 20 premiers clients se verront offrir une borne de recharge &agrave; domicile &laquo;&nbsp;WEG&nbsp;&raquo;, partenaire certifi&eacute; par la marque au Br&eacute;sil et qualifi&eacute; pour la vente de bornes via le r&eacute;seau des concessionnaires PEUGEOT&nbsp;;</span></p>",
 *       "tilteSeo": "Peugeot e-208 à 150 € par mois sans apport : où est l'embrouille ?",
 *       "contentSeo": "Les 20 premiers clients se verront offrir une borne de recharge à domicile « WEG », partenaire certifié par la marque au Brésil et qualifié pour la vente de bornes via le réseau des concessionnaires PEUGEOT ;",
 *       "status": "Publish",
 *       "editing_id": "62aadd63ebc163f0d6e9c69e",
 *       "secondaryPicture": "https://res.cloudinary.com/montpelliler/image/upload/v1659469382/x6wirrpvkjb7qbevklyb.png",
 *       "createdAt": "2022-08-02T20:16:23.229Z",
 *       "updatedAt": "2022-08-02T20:16:23.229Z",
 *       "__v": 0
 *   }
 * @apiSampleRequest http://127.0.0.1:5000/api/article/:id
 */
module.exports.getArticleById = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send("ID unknow : " + req.params.id);
  }
  ArticleModel.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("ID unknow : " + err);
    }
  }).select("-password");
};

/**
 * @api {post} /api/article/  Create article
 * @apiName createArticle
 * @apiGroup Article
 * @apiDescription methode API for create new article
 * @apiBody {String} profil_name=test1 profil_name of article.
 * @apiBody {String} article_title=test1 article_title of article.
 * @apiBody {String} status=test1 status of article.
 * @apiBody {String} editing_id=test1 editing_id of article.
 * @apiBody {String} chapo_field=test1 chapo_field of article.
 * @apiBody {String} content_article=test1 content_article of article.
 * @apiBody {String} categories=test1 categories of article.
 * @apiBody {String} content_subarticle=test1 content_subarticle of article.
 * @apiBody {String} tags=test1 tags of article.
 * @apiBody {String} presCategorie=test1 presCategorie of article.
 * @apiBody {Boolean} putInOne=test1 putInOne of article.
 * @apiBody {Boolean} notDisplayHomepage=test1 notDisplayHomepage of article.
 * @apiBody {Boolean} withoutPub=test1 withoutPub of article.
 * @apiBody {String} presTitle=test1 presTitle of article.
 * @apiBody {String} presChapo=test1 presChapo of article.
 * @apiBody {String} presArticle=test1 presArticle of article.
 * @apiBody {String} tilteSeo=test1 tilteSeo of article.
 * @apiBody {String} contentSeo=test1 contentSeo of article.
 * @apiBody {String} mainPicture=test1 mainPicture of article.
 * @apiBody {String} galleryPicture=test1 galleryPicture of article.
 * @apiBody {String} secondaryPicture=test1 secondaryPicture of article.
 * 
 * @apiSuccess {Object} article Object with article created.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   {
 *       "_id": ObjectId('63219b24fd2edcda69b76848'),
 *       "filed_name": 'test1',
 *       "chapo_field": 'test1',
 *       "content_field": 'test1',
 *       "createdAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "updatedAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "__v": 0
 *   }
 * @apiSampleRequest http://127.0.0.1:5000/api/article
 */
module.exports.createArticle = async (req, res) => {
  const newArticle = new ArticleModel({
    profil_name: req.body.profil_name, //
    article_title: req.body.article_title, //
    status: req.body.status, //
    editing_id: req.body.editing_id, //
    chapo: req.body.chapo, //
    content_article: req.body.content_article, //
    categories: req.body.categories, //
    content_subarticle: req.body.content_subarticle, //
    tags: req.body.tags, //
    putInOne: req.body.putInOne,
    presCategorie: req.body.presCategorie,
    notDisplayHomepage: req.body.notDisplayHomepage,
    withoutPub: req.body.withoutPub,
    presTitle: req.body.presTitle,
    presChapo: req.body.presChapo,
    presArticle: req.body.presArticle,
    tilteSeo: req.body.tilteSeo,
    contentSeo: req.body.contentSeo,
    mainPicture: req.body.mainPicture,
    galleryPicture: req.body.galleryPicture,
    secondaryPicture: req.body.secondaryPicture,
  });
  try {
    const article = await newArticle.save();
    console.log("📄 article created");
    return res.status(201).json(article);
  } catch (err) {
    console.log("❌ 📄 errors for the created article", err);

    return res.status(400).send(err);
  }
};

/**
 * @api {put} /api/article/:id  Update article
 * @apiName updateArticle
 * @apiGroup Article
 * @apiDescription methode API for update article
 * @apiParam {ObjectId} id  id of article a updated.
 * @apiBody {String} profil_name=test1 profil_name of article.
 * @apiBody {String} article_title=test1 article_title of article.
 * @apiBody {String} status=test1 status of article.
 * @apiBody {String} editing_id=test1 editing_id of article.
 * @apiBody {String} chapo_field=test1 chapo_field of article.
 * @apiBody {String} content_article=test1 content_article of article.
 * @apiBody {String} categories=test1 categories of article.
 * @apiBody {String} content_subarticle=test1 content_subarticle of article.
 * @apiBody {String} tags=test1 tags of article.
 * @apiBody {String} presCategorie=test1 presCategorie of article.
 * @apiBody {Boolean} putInOne=test1 putInOne of article.
 * @apiBody {Boolean} notDisplayHomepage=test1 notDisplayHomepage of article.
 * @apiBody {Boolean} withoutPub=test1 withoutPub of article.
 * @apiBody {String} presTitle=test1 presTitle of article.
 * @apiBody {String} presChapo=test1 presChapo of article.
 * @apiBody {String} presArticle=test1 presArticle of article.
 * @apiBody {String} tilteSeo=test1 tilteSeo of article.
 * @apiBody {String} contentSeo=test1 contentSeo of article.
 * @apiBody {String} mainPicture=test1 mainPicture of article.
 * @apiBody {String} galleryPicture=test1 galleryPicture of article.
 * @apiBody {String} secondaryPicture=test1 secondaryPicture of article.
 * 
 * @apiSuccess {Object} article Object with article created.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   {
 *       "_id": ObjectId('63219b24fd2edcda69b76848'),
 *       "filed_name": 'test1',
 *       "chapo_field": 'test1',
 *       "content_field": 'test1',
 *       "createdAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "updatedAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "__v": 0
 *   }
 * @apiSampleRequest http://127.0.0.1:5000/api/article/:id
 */
module.exports.updateArticle = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(err);
  }
  const updatedRecord = {
    profil_name: req.body.profil_name, //
    article_title: req.body.article_title, //
    status: req.body.status, //
    editing_id: req.body.editing_id, //
    chapo: req.body.chapo, //
    content_article: req.body.content_article, //
    categories: req.body.categories, //
    content_subarticle: req.body.content_subarticle, //
    tags: req.body.tags, //
    putInOne: req.body.putInOne,
    presCategorie: req.body.presCategorie,
    notDisplayHomepage: req.body.notDisplayHomepage,
    withoutPub: req.body.withoutPub,
    presTitle: req.body.presTitle,
    presChapo: req.body.presChapo,
    presArticle: req.body.presArticle,
    tilteSeo: req.body.tilteSeo,
    contentSeo: req.body.contentSeo,
    mainPicture: req.body.mainPicture,
    galleryPicture: req.body.galleryPicture,
    secondaryPicture: req.body.secondaryPicture,
  };
  ArticleModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) {
        console.log("📩 update article");
        return res.send(docs);
      } else {
        console.log("❌ 📄 update article errors");
      }
    }
  );
};

/**
 * @api {delete} /api/article/:id  Delete article
 * @apiName updateArticle
 * @apiGroup Article
 * @apiDescription methode API for delete article
 * @apiParam {ObjectId} id  id of article a deleted.* 
 * @apiSuccess {Object} article Object with article deleted.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   {
 *       "_id": ObjectId('63219b24fd2edcda69b76848'),
 *       "filed_name": 'test1',
 *       "chapo_field": 'test1',
 *       "content_field": 'test1',
 *       "createdAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "updatedAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "__v": 0
 *   }
 * @apiSampleRequest http://127.0.0.1:5000/api/article/:id
 */
module.exports.deleteArticle = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }

  ArticleModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) {
      console.log("❌ article deleted");
      res.send(docs);
    } else {
      console.log("❌ Delete error : " + err);
    }
  });
};


/**
 * @api {get} /api/article/  Get counter article
 * @apiName articleCount
 * @apiGroup Article
 * @apiDescription methode API for get counter article
 * @apiSuccess {Object} article Object with counter article.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   articleCounter: 4
 * @apiSampleRequest http://127.0.0.1:5000/api/article
 */
module.exports.articleCount = (req, res) => {
  ArticleModel.count()
  .then((e)=>{
    res.send({count: e});
  })
};


/**
 * @api {get} /api/article/  Get counter article is pubilsh or draft
 * @apiName articlePublishCount
 * @apiGroup Article
 * @apiDescription methode API for get counter article is pubilsh or draft
 * @apiSuccess {Object} article Object with counter article is pubilsh or draft.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    pubilsharticleCounter: 4
 *    draftarticleCounter: 4
 * }
 * @apiSampleRequest http://127.0.0.1:5000/api/article
 */
module.exports.articlePublishCount = (req, res) => {
  ArticleModel.find((err, docs) => {
    if (!err) {
      let articleCount = {
        publishCount: docs.filter((e)=>{return e.status === "Publish"}).length,
        draftCount: docs.filter((e)=>{return e.status === "Draft"}).length
      }
      res.send(articleCount);
    } else {
      console.log("❌ errors to get article");
    }
  });
};