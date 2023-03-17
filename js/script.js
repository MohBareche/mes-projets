const map = L.mapbox
  .map("mapDIV", null, {
    zoomControl: false,
    rotate: true,
    touchRotate: true,
    rotateControl: {
      closeOnZeroBearing: false,
    },
    bearing: 45,
  })
  .setView([45.60187729035522, -73.63153768308611], 14)
const zoomHome = L.Control.zoomHome().addTo(map)
// L.mapbox.accessToken =
//   "pk.eyJ1IjoibWJhcmVjaGUiLCJhIjoiY2pkbHpqZjQ3MGVibzJycWhka203dDNtYiJ9.GLpfZW2gcYULhuIa6vwgFw";

L.mapbox.accessToken = "pk.eyJ1IjoiYWJlbmZhdHRvdW0iLCJhIjoiY2ozY3l6MWV5MDAwZjMybnc0NmdhNDBpeSJ9.oYZEToeffGVafaQRotTLVg"

const Light = L.mapbox.styleLayer("mapbox://styles/mapbox/light-v10").addTo(map)
const Streets = L.mapbox.styleLayer("mapbox://styles/mapbox/streets-v11")
const Outdoors = L.mapbox.styleLayer("mapbox://styles/mapbox/outdoors-v11")
const Satellite = L.mapbox.styleLayer("mapbox://styles/mapbox/satellite-v9")

const googleStreets = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
})

const googleSat = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
})

const googleHybrid = L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
})

const googleTerrain = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
})

const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
})

const esriTile = L.esri.basemapLayer("Streets")

// create the geocoding control and add it to the map
// const searchControl = L.esri.Geocoding.geosearch({
//   providers: [
//     L.esri.Geocoding.arcgisOnlineProvider({
//       // API Key to be passed to the ArcGIS Online Geocoding Service
//       apikey:
//         "LPZI_RPSn5QOwul999v_YVinHGRcnhPhKoANjt-c4iQY51JqeKingfBg2gQWcbSQwp0oiO0xXR8z-qKvudiD8bTqcdUjxEj4mLHZKBavH0hs6sCw3DgeVGSyStkKqw89dfS51TihBWLex2mtVulwQ01thCWV_dAzhBZMR14rW8g4TBmiLdva61ychvVcfzUneCcNC5frVB4zCZUxRGbeNHF61KZ1vC73M5gl6eIF9lc.",
//     }),
//   ],
// });

// create an empty layer group to store the results and add it to the map
const results = L.layerGroup().addTo(map);
// L.easyPrint({
//   sizeModes: ["Current", "A4Landscape", "A4Portrait", ""],
//   filename: "Ma carte",
//   exportOnly: true,
//   hideControlContainer: true,
// }).addTo(map);

// listen for the results event and add every result to the map
const travIcon = L.icon({
  iconUrl: "../img/trav.png",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
})

const dosDaneIcon1104 = L.icon({
  iconUrl: "../img/speed_bump_1104.svg",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

const dosDaneIcon1104Nar = L.icon({
  iconUrl: "../img/speed_bump_1104_nar.svg",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

const dosDaneIcon1093Nar = L.icon({
  iconUrl: "../img/speed_bump_1093_nar.svg",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

const dosDaneIcon1096Nar = L.icon({
  iconUrl: "../img/speed_bump_1096_nar.svg",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

const dosDaneIcon1105 = L.icon({
  iconUrl: "../img/speed_bump_1105.svg",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

const dosDaneIcon1108 = L.icon({
  iconUrl: "../img/speed_bump_1108.svg",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

const dosDaneIcon1106 = L.icon({
  iconUrl: "../img/speed_bump_1106.svg",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

const dosDaneIcon1106_Ok = L.icon({
  iconUrl: "../img/speed_bump_1106_OK.svg",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

const iconBRV = L.icon({
  iconUrl: "../img/brv1.jpg",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

const icon_APA_1104 = L.icon({
  iconUrl: "../img/arbre1.png",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

const icon_APA_1108 = L.icon({
  iconUrl: "../img/arbre2.jpg",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

const icon_Fosse = L.icon({
  iconUrl: "../img/traverse_fosse.png",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

const icon_Saillie = L.icon({
  iconUrl: "../img/traverse_saillie.png",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

/* ************************************************************************************************************************************************ */
//   C1096
const C1096_Layer = L.geoJson(C1096, {
  pointToLayer: function (feature, latlng) {
    if (feature.properties.Plan == 2) {
      return L.marker(latlng, { icon: dosDaneIcon1096Nar })
    }
  },
  onEachFeature: function (feature, layer) {
    if (layer instanceof L.Polyline) {
      layer.setStyle({
        color: "#1fddd0",
        weight: 5,
      })
    }

    if (feature.properties.Plan == "N/A") {
      layer.bindPopup(`
           <p style='margin:0; padding:0; color:#4ef54a; background-color: black; padding:0 5px; border-radius:5px'><strong>Contrat : </strong> ${feature.properties.Contrat}</p>
           <p style='margin:0; padding:0'><strong>Plan : </strong> Aucun </p>
           <p style='margin:0; padding:0'><strong>Devis : </strong> <a href="./data/2022/1096/1096_Cahier des charges.pdf" target="_blank">${feature.properties.Devis}</a></p>
	   <p style='margin:0; padding:0'><strong>Début Travaux : </strong> ${feature.properties.Debut}</p>
	   <p style='margin:0; padding:0'><strong>Fin Travaux : </strong> ${feature.properties.Fin}</p>
         `)
    }
    if (feature.properties.Plan !== "N/A") {
      layer.bindPopup(`
           <p style='margin:0; padding:0; color:#4ef54a; background-color: black; padding:0 5px; border-radius:5px'><strong>Contrat : </strong> ${feature.properties.Contrat}</p>
           <p style='margin:0; padding:0'><strong>Plan : </strong> <a href="./data/2022/1096/1096-${feature.properties.Plan}.pdf" target="_blank">${feature.properties.Plan}</a></p>
           <p style='margin:0; padding:0'><strong>Devis : </strong> <a href="./data/2022/1096/1096_Cahier des charges.pdf" target="_blank">${feature.properties.Devis}</a></p>
	   <p style='margin:0; padding:0'><strong>Début Travaux : </strong> ${feature.properties.Debut}</p>
	   <p style='margin:0; padding:0'><strong>Fin Travaux : </strong> ${feature.properties.Fin}</p>
         `)
    }

    if (layer instanceof L.Marker) {
      layer.bindPopup(`
          <p style='margin:0; padding:0; color:#4ef54a; background-color: black; padding:0 5px; border-radius:5px'><strong>Contrat : </strong> ${feature.properties.Contrat}</p>
          <p style='margin:0; padding:0'><strong>Plan : </strong> <a href="./data/2022/1096/1096-2.pdf" target="_blank">2</a></p>
          <p style='margin:0; padding:0'><strong>Détail : </strong> <a href="./data/2022/1096/1096-3.pdf" target="_blank">${feature.properties.Détail}</a></p>
          <p style='margin:0; padding:0'><strong>Devis : </strong> <a href="./data/2022/1096/1096_Cahier des charges.pdf" target="_blank">${feature.properties.Devis}</a></p>
	  <p style='margin:0; padding:0'><strong>Début Travaux : </strong> ${feature.properties.Debut}</p>
	  <p style='margin:0; padding:0'><strong>Fin Travaux : </strong> ${feature.properties.Fin}</p>
       `)
    }

    layer.on("click", function () {
      this.openPopup()
    })
  },
})

/* ***************************************************************************************************************************************************** */
//   C1093
const C1093_Layer = L.geoJson(C1093, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: dosDaneIcon1093Nar })
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(`
            <p style='margin:0; padding:0; color:#f5df4a; background-color: black; padding:0 5px; border-radius:5px'><strong>Contrat : </strong> ${feature.properties.Contrat}</p>
            <p style='margin:0; padding:0'><strong>Plan : </strong> <a href="./data/2022/1093/1093-${feature.properties.Plan}.pdf" target="_blank">${feature.properties.Plan}</a></p>
            <p style='margin:0; padding:0'><strong>Devis : </strong> <a href="./data/2022/1093/1093_AO.pdf" target="_blank">${feature.properties.Devis}</a></p>
            <p style='margin:0; padding:0'><strong>Début Travaux : </strong> ${feature.properties.Debut}</p>
	    <p style='margin:0; padding:0'><strong>Fin Travaux : </strong> ${feature.properties.Fin}</p>
	    `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
})

/* ***************************************************************************************************************************************************** */
//   C1104
const C1104_Layer = L.geoJson(C1104, {
  pointToLayer: function (feature, latlng) {
    if (feature.properties.Plan == 1 || feature.properties.Plan == 2) {
      return L.marker(latlng, { icon: dosDaneIcon1104Nar })
    }
    return L.marker(latlng, { icon: dosDaneIcon1104 })
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(`
            <p style='margin:0; padding:0; color:#4ef54a; background-color: black; padding:0 5px; border-radius:5px'><strong>Contrat : </strong> ${feature.properties.Contrat}</p>
            <p style='margin:0; padding:0'><strong>Plan : </strong> <a href="./data/2022/1104/1104-${feature.properties.Plan}.pdf" target="_blank">${feature.properties.Plan}</a></p>
            <p style='margin:0; padding:0'><strong>Devis : </strong> <a href="./data/2022/1104/1104_Cahier_Charges .pdf" target="_blank">${feature.properties.Devis}</a></p>
	    <p style='margin:0; padding:0'><strong>Début Travaux : </strong> ${feature.properties.Debut}</p>
	    <p style='margin:0; padding:0'><strong>Fin Travaux : </strong> ${feature.properties.Fin}</p>
            `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
})

/* ***************************************************************************************************************************************************** */
//   C1105
const C1105_Layer = L.geoJson(C1105, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: dosDaneIcon1105 })
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(`
            <p style='margin:0; padding:0; color:#f5df4a; background-color: black; padding:0 5px; border-radius:5px'><strong>Contrat : </strong> ${feature.properties.Contrat}</p>
            <p style='margin:0; padding:0'><strong>Plan : </strong> <a href="./data/2022/1105/1105-${feature.properties.Plan}.pdf" target="_blank">${feature.properties.Plan}</a></p>
            <p style='margin:0; padding:0'><strong>Devis : </strong> <a href="./data/2022/1105/1105_Cahier_Charges .pdf" target="_blank">${feature.properties.Devis}</a></p>
	    <p style='margin:0; padding:0'><strong>Début Travaux : </strong> ${feature.properties.Debut}</p>
	    <p style='margin:0; padding:0'><strong>Fin Travaux : </strong> ${feature.properties.Fin}</p>
            `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
})

/* ***************************************************************************************************************************************************** */
//   C1108
const C1108_Layer = L.geoJson(C1108, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: dosDaneIcon1108 })
  },
  onEachFeature: function (feature, layer) {
    if (layer instanceof L.Polyline) {
      layer.setStyle({
        color: "#3388ff",
        weight: 5,
      })
    }
    layer.bindPopup(`
        <p style='margin:0; padding:0; color:#f5df4a; background-color: black; padding:0 5px; border-radius:5px'><strong>Contrat : </strong> ${feature.properties.Contrat}</p>
        <p style='margin:0; padding:0'><strong>Plan : </strong> <a href="./data/2022/1108/1108-${feature.properties.Plan}.pdf" target="_blank">${feature.properties.Plan}</a></p>
        <p style='margin:0; padding:0'><strong>Devis : </strong> <a href="./data/2022/1108/1108_Cahier des charges .pdf" target="_blank">${feature.properties.Devis}</a></p>
	      <p style='margin:0; padding:0'><strong>Début Travaux : </strong> ${feature.properties.Debut}</p>
	      <p style='margin:0; padding:0'><strong>Fin Travaux : </strong> ${feature.properties.Fin}</p>
      `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
})

/* ***************************************************************************************************************************************************** */
//   C1106
const C1106_Layer = L.geoJson(C1106, {
  pointToLayer: function (feature, latlng) {
    if (feature.properties.status === "Terminé") return L.marker(latlng, { icon: dosDaneIcon1106_Ok })
    if (feature.properties.status === "Non") return L.marker(latlng, { icon: dosDaneIcon1106 })
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(`
    <p style='margin:0; padding:0; color:#f5df4a; background-color: black; padding:0 5px; border-radius:5px; text-align:center'><strong>Contrat : </strong> ${
      feature.properties.Contrat
    }</p>
    <table class="table1">
    <caption><h5>Identification et documents</h5></caption>
					<tr>
						<th># Dos-d'âne</th>
						<td>${feature.properties.Numero}</td>
            </tr>
            <tr>
						<th>Devis</th>
						<td><a href="./data/2022/1106/1106_Cahier_Charges.pdf" target="_blank">${feature.properties.Devis}</a></td>
					</tr>
					<tr>
						<th>Début travaux</th>
						<td>${feature.properties.Debut}</td>
					</tr>
					<tr>
						<th>Fin travaux</th>
						<td>${feature.properties.Fin}</td>
            </tr>
            <tr>
						<th>Status</th>
						<td>${feature.properties.status}</td>
            <tr>
            </table>
            <br>
            <table class="table2">
            <caption><h5>Coordonnées du centre de dos-d'âne</h5></caption>
            <tr>
						<th colspan="2">NAD83 MTM Zone 8</th>
						<td><strong>X </strong>${feature.properties.X}</td>
						<td><strong>Y </strong>${feature.properties.Y}</td>
					</tr>
					<tr>
						<th colspan="2">WGS 84 (GPS)</th>
						<td><strong>Latitude </strong>${feature.geometry.coordinates[1].toFixed(7)}	</td>
						<td><strong>Longitude </strong>${feature.geometry.coordinates[0].toFixed(7)}</td>
					</tr>
          </table>
          `)

    layer.on("click", function () {
      this.openPopup()
    })
  },
})

/* ***************************************************************************************************************************************************** */
//   FOSSES ET SAILLIES
const fossesSailliesLayer = L.geoJson(fossesSaillies, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: icon_Fosse })
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(`
   	<div>
         <p style='text-align:center;margin:0; padding:0; color:#4ef54a; background-color: black; padding:0 5px; border-radius:5px'><strong>Nom :</strong> ${feature.properties.Nom}</p>
	 <p style='margin:0; padding:0;'><strong>Année:</strong> ${feature.properties.Année}</p>
	 <p style='margin:0; padding:0;'><strong>Description :</strong> ${feature.properties.Description}</p>
	 <p style='margin:0; padding:0;'><strong>Nom plan :</strong> ${feature.properties.NomPlan}</p>
	 <p style='margin:0; padding:0;'><strong>Plan :</strong><a target="_blank" href=${feature.properties.Lien}> Cliquez-ici</a></p>
	 <p style='margin:0; padding:0;'><strong>Date d'entrée :</strong> ${feature.properties.DateSaisie}</p>
        </div>
    `)

    layer.on("click", function () {
      this.openPopup()
    })
  },
})

/* ***************************************************************************************************************************************************** */
/* @OTHER - RENSEIGNEMENTS CHAUSSÉES 2023*/
			function getColor(EPAISSEUR_CHAUSSEE) {
				return EPAISSEUR_CHAUSSEE == 80
				    ? "#AAA"
				    : EPAISSEUR_CHAUSSEE == 100
				    ? "#00F"
				    : EPAISSEUR_CHAUSSEE == 140
				    ? "#0F0"
				    : EPAISSEUR_CHAUSSEE == 150
				    ? "#41A5E1"
				    : EPAISSEUR_CHAUSSEE == 200
				    ? "#FF0"
				    : EPAISSEUR_CHAUSSEE == 225
				    ? "#F00"
				    : EPAISSEUR_CHAUSSEE == 240
				    ? "#F37900"
				    : "#000"
            		}
                    const chausseeLayer = L.geoJSON(chaussee, {
			    
                        style: function (feature) {
                            return {
                                weight: 2,
                                color: getColor(feature.properties.EPAISSEUR_CHAUSSEE),
                                opacity: 1,
                            }
                        },

                        onEachFeature: function (feature, layer) {
                            // Créer une table HTML pour la popup
                            var popupContent = "<table>"

                            popupContent += `<tr style="background-color:silver; font-weight: bold;"><td>ID_TRC </td><td>${feature.properties.ID_TRC}</td></tr>`
                            popupContent += "<tr><td>Sur </td><td>" + feature.properties["GEOBASE_V.SUR"] + "</td></tr>"
                            popupContent += "<tr><td>De </td><td>" + feature.properties["GEOBASE_V.DE"] + "</td></tr>"
                            popupContent += "<tr><td>À </td><td>" + feature.properties["GEOBASE_V.A"] + "</td></tr>"
                            popupContent += "<tr><td>Matériaux </td><td>" + feature.properties["MATERIAUCHAUSSEE_REF"] + "</td></tr>"
                            popupContent += "<tr><td>Type fondation </td><td>" + feature.properties["TYPEFONDATION_REF"] + "</td></tr>"
                            popupContent += "<tr><td>Superficie (m²)</td><td>" + feature.properties["VOI_CHAUSSEE_JMAP_V.SUPERFICIE"] + "</td></tr>"
                            popupContent += "<tr><td>Longueur estimée (m)</td><td>" + feature.properties["VOI_CHAUSSEE_JMAP_V.LONGUEURESTIMEE"] + "</td></tr>"
                            popupContent += "<tr><td>Largeur estimée (m)</td><td>" + feature.properties["VOI_CHAUSSEE_JMAP_V.LARGEURESTIMEE"] + "</td></tr>"
                            popupContent += "<tr><td>Épaisseur chaussée (mm)</td><td>" + feature.properties["EPAISSEUR_CHAUSSEE"] + "</td></tr>"

                            popupContent += "</table>"
                            // Ajouter la popup à la couche de données
                            layer.bindPopup(popupContent)
                        },
                    })

/* ***************************************************************************************************************************************************** */
/* @2023 - CORPO ESP */
const C_ESP_Layer = L.geoJson(esp, {
  onEachFeature: function (feature, layer) {
    if (layer instanceof L.Polyline) {
      layer.setStyle({
        color: "#f50d12",
        weight: 6,
      })
    }
    layer.bindPopup(`
        <p class='corpo-title'>Projet : ${feature.properties.type}</p>
        <p style='margin:0; padding:0; color:#0d12f5;'><strong>Initiateur : </strong>${feature.properties.Initiateur}</p>
        <p style='margin:0; padding:0; color:#0d12f5;'><strong># AGIR : </strong>${feature.properties.AGIR}</a></p>
	      <p style='margin:0; padding:0; color:#0d12f5;'><strong>Description : </strong> Remplacement des entrées de service en plomb</p>
      `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
}).addTo(map)
/* ***************************************************************************************************************************************************** */
/* @2023 - CORPO PCPR-PRCPR */
const C_PCPR_Layer = L.geoJson(pcpr, {
  onEachFeature: function (feature, layer) {
    if (layer instanceof L.Polyline) {
      layer.setStyle({
        color: "#504C43",
        weight: 4,
      })
    }
    layer.bindPopup(`
      <p class='corpo-title'>Projet : ${feature.properties.type}</p>
      <p style='margin:0; padding:0; color:#0d12f5;'><strong>Initiateur : </strong>${feature.properties.Initiateur}</p>
      <p style='margin:0; padding:0; color:#0d12f5;'><strong># AGIR : </strong>${feature.properties.AGIR}</a></p>
      <p style='margin:0; padding:0; color:#0d12f5;'><strong>Description : </strong> PCPR/PRCPR - Programme Complémentaire par Planage-Revêtement</p>
    `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
}).addTo(map)
/* ***************************************************************************************************************************************************** */
/* @2023 - CORPO REHAB AQ */
const C_RAQ_Layer = L.geoJson(rehabaq, {
  onEachFeature: function (feature, layer) {
    if (layer instanceof L.Polyline) {
      layer.setStyle({
        color: "#3388ff",
        weight: 6,
      })
    }
    layer.bindPopup(`
      <p class='corpo-title'>Projet : ${feature.properties.type}</p>
      <p style='margin:0; padding:0; color:#0d12f5;'><strong>Initiateur : </strong>${feature.properties.Initiateur}</p>
      <p style='margin:0; padding:0; color:#0d12f5;'><strong># AGIR : </strong>${feature.properties.AGIR}</a></p>
      <p style='margin:0; padding:0; color:#0d12f5;'><strong>Description : </strong> Réhabilitation Aqueduc</p>
    `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
}).addTo(map)
/* ***************************************************************************************************************************************************** */
/* @2023 - CORPO REHAB EG */
const C_REG_Layer = L.geoJson(rehabeg, {
  onEachFeature: function (feature, layer) {
    if (layer instanceof L.Polyline) {
      layer.setStyle({
        color: "#964b00",
        weight: 6,
      })
    }
    layer.bindPopup(`
      <p class='corpo-title'>Projet : ${feature.properties.type}</p>
      <p style='margin:0; padding:0; color:#0d12f5;'><strong>Initiateur : </strong>${feature.properties.Initiateur}</p>
      <p style='margin:0; padding:0; color:#0d12f5;'><strong># AGIR : </strong>${feature.properties.AGIR}</a></p>
      <p style='margin:0; padding:0; color:#0d12f5;'><strong>Description : </strong> Réhabilitation Égout</p>
    `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
}).addTo(map)
/* ***************************************************************************************************************************************************** */
/* @2023 - CORPO BRV */
const C_BRV_Layer = L.geoJson(brv, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: iconBRV })
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(`
        <p class='corpo-title'>Projet : ${feature.properties.type}</p>
        <p style='margin:0; padding:0; color:#0d12f5;'><strong>Initiateur : </strong>${feature.properties.Initiateur}</p>
        <p style='margin:0; padding:0; color:#0d12f5;'><strong># AGIR : </strong>${feature.properties.AGIR}</a></p>
        <p style='margin:0; padding:0; color:#0d12f5;'><strong>Description : </strong> Borne de recharge pour véhicules électriques</p>
	    `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
}).addTo(map)
/* ***************************************************************************************************************************************************** */
/* @2023 - CORPO ÉCLAIRAGE */
const C_ECL_Layer = L.geoJson(eclairage, {
  onEachFeature: function (feature, layer) {
    if (layer instanceof L.Polyline) {
      layer.setStyle({
        color: "#810081",
        weight: 6,
      })
    }
    layer.bindPopup(`
      <p class='corpo-title'>Projet : ${feature.properties.type}</p>
      <p style='margin:0; padding:0; color:#0d12f5;'><strong>Initiateur : </strong>${feature.properties.Initiateur}</p>
      <p style='margin:0; padding:0; color:#0d12f5;'><strong># AGIR : </strong>${feature.properties.AGIR}</a></p>
      <p style='margin:0; padding:0; color:#0d12f5;'><strong>Description : </strong> Travaux d'éclairage </p>
    `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
}).addTo(map)

/* ***************************************************************************************************************************************************** */
/* @2023 - ARROND. PRR Lapierre */
const C_PRR_Layer = L.geoJson(prr, {
  onEachFeature: function (feature, layer) {
    if (layer instanceof L.Polyline) {
      layer.setStyle({
        color: "red",
        weight: 10,
      })
    }
    layer.bindPopup(`
      <p class='arrond-title'>Projet : ${feature.properties.type}</p>
      <p style='margin:0; padding:0; color:green;'><strong>Initiateur : </strong>${feature.properties.Initiateur}</p>
      <p style='margin:0; padding:0; color:green;'><strong># AGIR : </strong>${feature.properties.AGIR}</a></p>
      <p style='margin:0; padding:0; color:green;'><strong>Description : </strong> Travaux de réaménagement Avenue Lapierre</p>
    `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
}).addTo(map)
/* ***************************************************************************************************************************************************** */
/* @2023 - ARROND. Place Pierre */
const C_PlacePierre_Layer = L.geoJson(place_pierre, {
  onEachFeature: function (feature, layer) {
    if (layer instanceof L.Polyline) {
      layer.setStyle({
        color: "green",
        weight: 6,
      })
    }
    layer.bindPopup(`
      <p class='arrond-title'>Projet : ${feature.properties.type}</p>
      <p style='margin:0; padding:0; color:green;'><strong>Initiateur : </strong>${feature.properties.Initiateur}</p>
      <p style='margin:0; padding:0; color:green;'><strong># AGIR : </strong>${feature.properties.AGIR}</a></p>
      <p style='margin:0; padding:0; color:green;'><strong>Description : </strong> ${feature.properties.Description}</p>
    `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
}).addTo(map)
/* ***************************************************************************************************************************************************** */
/* @2023 - ARROND. PAVÉ ALVÉOLÉ RUELLE VERTE */
const C_PaveRV_Layer = L.geoJson(paveRV, {
  onEachFeature: function (feature, layer) {
    if (layer instanceof L.Polyline) {
      layer.setStyle({
        color: "#89BC81",
        weight: 6,
      })
    }
    layer.bindPopup(`
      <p class='arrond-title'>Projet : ${feature.properties.type}</p>
      <p style='margin:0; padding:0; color:green;'><strong>Initiateur : </strong>${feature.properties.Initiateur}</p>
      <p style='margin:0; padding:0; color:green;'><strong># AGIR : </strong>${feature.properties.AGIR}</a></p>
      <p style='margin:0; padding:0; color:green;'><strong>Description : </strong> ${feature.properties.Description}</p>
    `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
}).addTo(map)
/* ***************************************************************************************************************************************************** */
/* @2023 - ARROND. AMÉNAGEMENT PLACE ARCHEVÊQUE */
const C_PlaceArchev_Layer = L.geoJson(place_Archev, {
  onEachFeature: function (feature, layer) {
    if (layer instanceof L.Polygon) {
      layer.setStyle({
        color: "#FCC330",
        weight: 6,
      })
    }
    layer.bindPopup(`
      <p class='arrond-title'>Projet : ${feature.properties.type}</p>
      <p style='margin:0; padding:0; color:green;'><strong>Initiateur : </strong>${feature.properties.Initiateur}</p>
      <p style='margin:0; padding:0; color:green;'><strong># AGIR : </strong>${feature.properties.AGIR}</a></p>
      <p style='margin:0; padding:0; color:green;'><strong>Description : </strong> ${feature.properties.Description}</p>
    `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
}).addTo(map)
/* ***************************************************************************************************************************************************** */
/* @2023 - ARROND. INSTALLATION CLÔTURE PARC OSCAR */
const C_Cloture_Layer = L.geoJson(cloture, {
  onEachFeature: function (feature, layer) {
    if (layer instanceof L.Polyline) {
      layer.setStyle({
        color: "#30FCB6",
        weight: 6,
      })
    }
    layer.bindPopup(`
      <p class='arrond-title'>Projet : ${feature.properties.type}</p>
      <p style='margin:0; padding:0; color:green;'><strong>Initiateur : </strong>${feature.properties.Initiateur}</p>
      <p style='margin:0; padding:0; color:green;'><strong># AGIR : </strong>${feature.properties.AGIR}</a></p>
      <p style='margin:0; padding:0; color:green;'><strong>Description : </strong> ${feature.properties.Description}</p>
    `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
}).addTo(map)
/* ***************************************************************************************************************************************************** */
/* @2023 - ARROND. SAILLIES 1104 */
const C_Saillie_1104_Layer = L.geoJson(saillie_1104, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: icon_APA_1104 })
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(`
      <p class='arrond-title'>Projet : ${feature.properties.type}</p>
      <p style='margin:0; padding:0; color:green;'><strong>Initiateur : </strong>${feature.properties.Initiateur}</p>
      <p style='margin:0; padding:0; color:green;'><strong># AGIR : </strong>${feature.properties.AGIR}</a></p>
      <p style='margin:0; padding:0; color:green;'><strong>Description : </strong> ${feature.properties.Description}</p>
    `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
}).addTo(map)
/* ***************************************************************************************************************************************************** */
/* @2023 - ARROND. SAILLIES 1104 */
const C_Foret_Layer = L.geoJson(foret, {
  onEachFeature: function (feature, layer) {
    if (layer instanceof L.Polyline) {
      layer.setStyle({
        color: "#20b2aa",
        weight: 6,
      })
    }
    layer.bindPopup(`
      <p class='arrond-title'>Projet : ${feature.properties.type}</p>
      <p style='margin:0; padding:0; color:green;'><strong>Initiateur : </strong>${feature.properties.Initiateur}</p>
      <p style='margin:0; padding:0; color:green;'><strong># AGIR : </strong>${feature.properties.AGIR}</a></p>
      <p style='margin:0; padding:0; color:green;'><strong>Description : </strong> ${feature.properties.Description}</p>
    `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
}).addTo(map)
/* ***************************************************************************************************************************************************** */
/* @2023 - ARROND. SAILLIES 1104 */
const C_Saillie_1108_Layer = L.geoJson(saillie_1108, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: icon_APA_1108 })
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(`
      <p class='arrond-title'>Projet : ${feature.properties.type}</p>
      <p style='margin:0; padding:0; color:green;'><strong>Initiateur : </strong>${feature.properties.Initiateur}</p>
      <p style='margin:0; padding:0; color:green;'><strong># AGIR : </strong>${feature.properties.AGIR}</a></p>
      <p style='margin:0; padding:0; color:green;'><strong>Description : </strong> ${feature.properties.Description}</p>
    `)
    layer.on("click", function () {
      this.openPopup()
    })
  },
}).addTo(map)
/* ***************************************************************************************************************************************************** */

//   Inspecteurs cadre bati
function getColorInspection(feature) {
  switch (feature) {
    case "1":
      return "#BCFFF7"
    case "2":
      return "#FFBCFE"
    case "3":
      return "#adeab8"
    case "4":
      return "#eaadc1"
    case "5":
      return "#abb29b"
    case "6":
      return "#b09bc7"
  }
}
function styleInspection(feature) {
  return {
    color: "#807f89",
    fillColor: getColorInspection(feature.properties.Secteur),
    opacity: 1,
    fillOpacity: 0.8,
  }
}
const inspectionLayer = L.geoJson(inspection, {
  style: styleInspection,
  onEachFeature: function (feature, layer) {
    layer.bindPopup(`
        <p style='width:300px; margin:0; padding:0;'><strong>Secteur : </strong>${feature.properties.Secteur}</p>
        <p style='width:300px; margin:0; padding:0'><strong>Inspecteur :</strong> ${feature.properties.Inspecteur}</p>
        <p style='width:300px; margin:0; padding:0'><strong>Courriel :</strong><a target="_blank" href="mailto:${feature.properties.Courriel}"> ${feature.properties.Courriel}</a></p>
        <p style='width:300px; margin:0; padding:0'><strong>Téléphone :</strong>514 328-4000 Poste ${feature.properties.Poste}</p>
	      <p style='width:300px; margin:0; padding:0'><strong>Cellulaire :</strong> ${feature.properties.Cell} </p>
      `)
    layer.on("mouseover", function () {
      this.setStyle({
        fillOpacity: 0.4,
        opacity: 1,
      })
    })
    layer.on("mouseout", function () {
      this.setStyle({
        fillOpacity: 0.6,
        opacity: 1,
      })
    })
  },
})

/* ***************************************************************************************************************************************************** */
// Secteurs Collectes
function getColorCollectes(feature) {
  switch (feature) {
    case 1:
      return "#704709"
    case 2:
      return "#0B7A75"
    case 3:
      return "#940043"
    case 4:
      return "#9004e0"
  }
}
function styleCollectes(feature) {
  return {
    color: getColorCollectes(feature.properties.Secteur),
    fillColor: getColorCollectes(feature.properties.Secteur),
    opacity: 1,
    fillOpacity: 0.4,
  }
}
const collectesLayer = L.geoJson(collectes, {
  style: styleCollectes,
  onEachFeature: function (feature, layer) {
    layer.bindPopup(`
        <p style='margin:0; padding:0;'><strong>Secteur : </strong>${feature.properties.Secteur}</p>
        <p style='margin:0; padding:0'><strong>Recyclage :</strong> ${feature.properties.Recyclage}</p>
        <p style='margin:0; padding:0'><strong>Ordures ménagères :</strong> ${feature.properties.OrduresMenageres}</p>
        <p style='margin:0; padding:0'><strong>Résidus alimentaires :</strong> ${feature.properties.ResidusAlimentaires}</p>
	      <p style='margin:0; padding:0'><strong>Encombrants :</strong> ${feature.properties.Encombrants}</p>
	      <p style='margin:0; padding:0'><strong>Résidus verts :</strong> ${feature.properties.ResidusVerts}</p>
	      <p style='margin:0; padding:0'><strong>9 Logements + :</strong> ${feature.properties.NeufLogements}</p>
      `)
    layer.on("mouseover", function () {
      this.setStyle({
        fillOpacity: 0.2,
        opacity: 1,
      })
    })
    layer.on("mouseout", function () {
      this.setStyle({
        fillOpacity: 0.4,
        opacity: 1,
      })
    })
  },
})

/* ***************************************************************************************************************************************************** */
// Secteurs Arboriculture
function getColorArbo(feature) {
  switch (feature) {
    case "Secteur 1":
      return "#FFED6F"
    case "Secteur 2":
      return "#CCEBC5"
    case "Secteur 3":
      return "#BC80BD"
    case "Secteur 4":
      return "#D9D9D9"
    case "Secteur 5":
      return "#FCCDE5"
    case "Secteur 6":
      return "#80B1D3"
    case "Secteur 7":
      return "#FDB462"
    case "Secteur 8":
      return "#B3DE69"
    case "Secteur 9":
      return "#FB8072"
    case "Secteur 10":
      return "#BEBADA"
    case "Secteur 11":
      return "#FFFFB3"
    case "Secteur 12":
      return "#8DD3C7"
  }
}
function styleArbo(feature) {
  return {
    color: getColorArbo(feature.properties.name),
    fillColor: getColorArbo(feature.properties.name),
    opacity: 1,
    fillOpacity: 0.4,
  }
}
const sectArboLayer = L.geoJson(sect_arbo, {
  style: styleArbo,
  onEachFeature: function (feature, layer) {
    layer.bindPopup(`
        <p style='margin:0; padding:0;'><strong>Secteur : </strong>${feature.properties.name}</p>
      `)
    layer.on("mouseover", function () {
      this.setStyle({
        fillOpacity: 0.2,
        opacity: 1,
      })
    })
    layer.on("mouseout", function () {
      this.setStyle({
        fillOpacity: 0.4,
        opacity: 1,
      })
    })
  },
})

/* ***************************************************************************************************************************************************** */
//   Ruelles vertes
// const ruellesVertesLayer = L.geoJson(ruelles_vertes, {
//   onEachFeature: function (feature, layer) {
//     layer.setStyle({ color: "green" });
//     layer.bindPopup(`
//             <p style='margin:0; padding:0;'><strong>Ruelle verte</strong></p>
//             `);
//     layer.on("mouseover", function () {
//       this.openPopup();
//     });
//     layer.on("mouseout", function () {
//       this.closePopup();
//     });
//   },
// });

/* ***************************************************************************************************************************************************** */
//   Axe_mob2021
// const axeMobLayer = L.geoJson(axe_mob2021, {
//   onEachFeature: function (feature, layer) {
//     layer.setStyle({ color: "blue" });
//     layer.bindPopup(`
//             <p style='margin:0; padding:0;'><strong>Axe de mobilité 2021</strong></p>
//             `);
//     layer.on("mouseover", function () {
//       this.openPopup();
//     });
//     layer.on("mouseout", function () {
//       this.closePopup();
//     });
//   },
// });

/* ***************************************************************************************************************************************************** */
//   Axe_sensible2021
// const axeSensibleLayer = L.geoJson(axe_sensible2021, {
//   onEachFeature: function (feature, layer) {
//     layer.setStyle({ color: "red" });
//     layer.bindPopup(`
//             <p style='margin:0; padding:0;'><strong>Axe sensible 2021</strong></p>
//             `);
//     layer.on("mouseover", function () {
//       this.openPopup();
//     });
//     layer.on("mouseout", function () {
//       this.closePopup();
//     });
//   },
// });

/* ***************************************************************************************************************************************************** */
//   Patrimoine
// const patrimoineLayer = L.geoJson(patrimoine, {
//   onEachFeature: function (feature, layer) {
//     layer.setStyle({
//       fillColor: "magenta",
//       color: "magenta",
//       opacity: 1,
//       fillOpacity: 0.2,
//     });
//     layer.bindPopup(`
//             <p style='margin:0; padding:0;'><strong>Patrimoine</strong></p>
//             `);
//     layer.on("mouseover", function () {
//       this.setStyle({
//         color: "red",
//         fillColor: "red",
//         opacity: 1,
//         fillOpacity: 0.2,
//       });
//       this.openPopup();
//     });
//     layer.on("mouseout", function () {
//       this.setStyle({
//         color: "magenta",
//         fillColor: "magenta",
//         opacity: 1,
//         fillOpacity: 0.2,
//       });
//       this.closePopup();
//     });
//   },
// });

/* ***************************************************************************************************************************************************** */
//   Arrondissements

// function styleArrondissements(feature) {
//   return {
//     color: getColorArrondissements(feature.properties.name),
//     fillColor: getColorArrondissements(feature.properties.name),
//     opacity: 1,
//     fillOpacity: 0.7,
//   };
// }
const arrondLayer = L.geoJson(limites_arr, {
  style: {
    weight: 2,
    opacity: 0.8,
    color: "black",
    dashArray: "5",
    fillOpacity: 0,
    fill: false,
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(`
            <p style='margin:0; padding:0;'>Limites Arrondissement ${feature.properties.name}</p>
          `)
  },
}).addTo(map)
/* ***************************************************************************************************************************************************** */

//   Arrondissements
function getColorArrondissements(feature) {
  switch (feature) {
    case "AHU":
      return "#33658a"
    case "ANJ":
      return "#f6ae2d"
    case "CDN":
      return "#488b49"
    case "IBI":
      return "#639a88"
    case "LAC":
      return "#F71E37"
    case "LAS":
      return "#087E8B"
    case "LSO":
      return "#8b635c"
    case "MHM":
      return "#60594d"
    case "MTN":
      return "#6c4b5e"
    case "OUT":
      return "#040663"
    case "PLA":
      return "#C799A6"
    case "PRF":
      return "#2E294E"
    case "RDP":
      return "#C17767"
    case "RPP":
      return "#17C3B2"
    case "STL":
      return "#296EB4"
    case "VER":
      return "#754668"
    case "VIM":
      return "#587D71"
    case "VSE":
      return "#E15A97"
    case "VSL":
      return "#861388"
  }
}
function styleArrondissements(feature) {
  return {
    color: getColorArrondissements(feature.properties.name),
    fillColor: getColorArrondissements(feature.properties.name),
    opacity: 1,
    fillOpacity: 0.7,
  }
}
const arrondissementsLayer = L.geoJson(arrondissements, {
  style: styleArrondissements,
  onEachFeature: function (feature, layer) {
    layer.bindPopup(`
            <p style='margin:0; padding:0;'><strong>Code: </strong>${feature.properties.name}</p>
            <p style='margin:0; padding:0'><strong>Description:</strong> ${feature.properties.description}</p>
            `)

    layer.on("mouseover", function () {
      this.setStyle({
        fillOpacity: 0.3,
        opacity: 1,
      })
    })
    layer.on("mouseout", function () {
      this.setStyle({
        fillOpacity: 0.7,
        opacity: 1,
      })
    })
  },
})

/* ***************************************************************************************************************************************************** */
//   Inspecteurs AGIR-CM
// function getColorInspecteursCM(feature) {
//   switch (feature) {
//     case "A":
//       return "#704709";
//     case "B":
//       return "red";
//     case "C":
//       return "#940043";
//     case "D":
//       return "#9004e0";
//     case "E":
//       return "#0B7A75";
//     case "F":
//       return "#147ec9";
//     case "G":
//       return "black";
//     case "H":
//       return "#8cc720";
//   }
// }
// function styleInspecteursCM(feature) {
//   return {
//     color: getColorInspecteursCM(feature.properties.Secteur),
//     fillColor: getColorInspecteursCM(feature.properties.Secteur),
//     opacity: 1,
//     fillOpacity: 0.4,
//   };
// }
// const inspecteursLayer = L.geoJson(arrondissements, {
//   style: styleArrondissements,
//   onEachFeature: function (feature, layer) {
//     layer.bindPopup(`
//             <p style='margin:0; padding:0;'><strong>Arrond. : </strong>${feature.properties.name}</p>
//             <p style='margin:0; padding:0;'><strong>Secteur : </strong>${feature.properties.Secteur}</p>
//             <p style='margin:0; padding:0'><strong>Inspecteur :</strong> ${feature.properties.Inspecteur}</p>
//             <p style='margin:0; padding:0'><strong>Courriel :</strong> ${feature.properties.Email}</p>
//             <p style='margin:0; padding:0'><strong>Téléphone :</strong> ${feature.properties.Téléph}</p>
//             `);
//     layer.on("mouseover", function () {
//       this.setStyle({
//         fillOpacity: 0.2,
//         opacity: 1,
//       });
//     });
//     layer.on("mouseout", function () {
//       this.setStyle({
//         fillOpacity: 0.4,
//         opacity: 1,
//       });
//     });
//   },
// });

/* ***************************************************************************************************************************************************** */
//   Horticulteurs
// function getColorHorticulteurs(feature) {
//   switch (feature) {
//     case "A":
//       return "#704709";
//     case "B":
//       return "red";
//     case "C":
//       return "#940043";
//     case "D":
//       return "#9004e0";
//     case "E":
//       return "#0B7A75";
//     case "F":
//       return "#147ec9";
//     case "G":
//       return "black";
//     case "H":
//       return "#8cc720";
//   }
// }
// function styleHorticulteurs(feature) {
//   return {
//     color: getColorHorticulteurs(feature.properties.Secteur),
//     fillColor: getColorHorticulteurs(feature.properties.Secteur),
//     opacity: 1,
//     fillOpacity: 0.4,
//   };
// }
// const horticulteursLayer = L.geoJson(arrondissements, {
//   style: styleHorticulteurs,
//   onEachFeature: function (feature, layer) {
//     if (feature.properties.Horticulteur2 !== "") {
//       layer.bindPopup(`
//             <p style='margin:0; padding:0;'><strong>Arrond. : </strong>${feature.properties.name}</p>
//             <p style='margin:0; padding:0'><strong>Horticulteur 1 :</strong> ${feature.properties.Horticulteur1}</p>
//             <p style='margin:0; padding:0'><strong>Courriel :</strong> ${feature.properties.Courriel1}</p>
//             <p style='margin:0; padding:0'><strong>Téléphone :</strong> ${feature.properties.Téléphone1}</p>
//             <br>
//             <p style='margin:0; padding:0'><strong>Horticulteur 2 :</strong> ${feature.properties.Horticulteur2}</p>
//             <p style='margin:0; padding:0'><strong>Courriel :</strong> ${feature.properties.Courriel2}</p>
//             <p style='margin:0; padding:0'><strong>Téléphone :</strong> ${feature.properties.Téléphone2}</p>
//             `);
//     } else {
//       layer.bindPopup(`
//             <p style='margin:0; padding:0;'><strong>Arrond. : </strong>${feature.properties.name}</p>
//             <p style='margin:0; padding:0'><strong>Horticulteur :</strong> ${feature.properties.Horticulteur1}</p>
//             <p style='margin:0; padding:0'><strong>Courriel :</strong> ${feature.properties.Courriel1}</p>
//             <p style='margin:0; padding:0'><strong>Téléphone :</strong> ${feature.properties.Téléphone1}</p>
//       `);
//     }
//     layer.on("mouseover", function () {
//       this.setStyle({
//         fillOpacity: 0.2,
//         opacity: 1,
//       });
//     });
//     layer.on("mouseout", function () {
//       this.setStyle({
//         fillOpacity: 0.4,
//         opacity: 1,
//       });
//     });
//   },
// });

/* ***************************************************************************************************************************************************** */
//    Secteurs AGIR
// function getColorSecteurs(feature) {
//   switch (feature) {
//     case 1:
//       return "orange";
//     case 2:
//       return "#92d14d";
//     case 3:
//       return "#4293f5";
//     case 4:
//       return "yellow";
//   }
// }
// function styleSecteurs(feature) {
//   return {
//     color: getColorSecteurs(feature.properties.Secteur),
//     fillColor: getColorSecteurs(feature.properties.Secteur),
//     opacity: 1,
//     fillOpacity: 0.7,
//   };
// }
// const secteursAgirLayer = L.geoJson(secteurs_agir, {
//   style: styleSecteurs,
//   onEachFeature: function (feature, layer) {
//     layer.bindPopup(`
//             <p style='margin:0; padding:0'><strong>Arrond. : </strong>${feature.properties.NOM_ARRON}</p>
//             <p style='margin:0; padding:0'><strong>Secteur : </strong> ${feature.properties.Secteur}</p>
//             <p style='margin:0; padding:0'><strong>Ing. : </strong> ${feature.properties.Contact.Ing}</p>
//             <p style='margin:0; padding:0'><strong>Ag.T : </strong> ${feature.properties.Contact.AgT}</p>
//             `);

//     layer.on("mouseover", function () {
//       this.setStyle({
//         opacity: 1,
//         fillOpacity: 0.3,
//       });
//     });
//     layer.on("mouseout", function () {
//       this.setStyle({
//         opacity: 1,
//         fillOpacity: 0.7,
//       });
//     });
//   },
// });

/* ***************************************************************************************************************************************************** */
//  Casernes
const markersCasernes = L.markerClusterGroup()
const geoJsonLayerCasernes = L.geoJson(casernes, {
  onEachFeature: function (feature, layer) {
    if (feature.properties.ARRONDISSEMENT !== null) {
      layer.bindPopup(`
            <div>
              <p style='margin:0; padding:0'><strong>Caserne :</strong> ${feature.properties.CASERNE}</p>
              <p style='margin:0; padding:0'><strong>Arrond.:</strong> ${feature.properties.ARRONDISSEMENT}</p>
            </div>
            `)
    } else {
      layer.bindPopup(`
      <div>
        <p><strong>Caserne :</strong> ${feature.properties.CASERNE}</p>
        <p><strong>Ville: </strong> ${feature.properties.VILLE}</p>
      </div>`)
    }
    layer.on("mouseover", function () {
      this.openPopup()
    })
    layer.on("mouseout", function () {
      this.closePopup()
    })
  },
})
const casernesMarkers = markersCasernes.addLayer(geoJsonLayerCasernes)
// map.fitBounds(markersCasernes.getBounds());

/* ***************************************************************************************************************************************************** */
//    Bornes de recharges
//    BR_15_11_2022
const markersBR = L.markerClusterGroup()
const geoJsonLayerBR = L.geoJson(BR, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup(`
       <div>
         <p style='margin:0; padding:0; color:#4ef54a; background-color: black; padding:0 5px; border-radius:5px'><strong>Nom de la borne :</strong> ${feature.properties.Nom_Borne}</p>
	 <p style='margin:0; padding:0;'><strong>Nom_du_parc :</strong> ${feature.properties.Nom_du_parc}</p>
	 <p style='margin:0; padding:0;'><strong>Adresse :</strong> ${feature.properties.Adresse}</p>
	 <p style='margin:0; padding:0;'><strong>Rue :</strong> ${feature.properties.Rue}</p>
	 <p style='margin:0; padding:0;'><strong>Ville :</strong> ${feature.properties.Ville}</p>
	 <p style='margin:0; padding:0;'><strong>Province :</strong> ${feature.properties.Province}</p>
         <p style='margin:0; padding:0;'><strong>Code Postal :</strong> ${feature.properties.CodePostal}</p>
	 <p style='margin:0; padding:0;'><strong>Niveau de recharge :</strong> ${feature.properties.Niveau_recharge}</p>
	 <p style='margin:0; padding:0;'><strong>Coût :</strong> ${feature.properties.Coût} ($)</p>
	 <p style='margin:0; padding:0;'><strong>Mode de tarification :</strong> ${feature.properties.Mode_tarification}</p>
	 <p style='margin:0; padding:0;'><strong>Type d'emplacement :</strong> ${feature.properties.Type_Emplacement}</p>
	 <p style='margin:0; padding:0;'><strong>Puissance :</strong> ${feature.properties.Puissance} (kW)</p>
       </div>
     `)
    layer.on("mouseover", function () {
      this.openPopup()
    })
    layer.on("mouseout", function () {
      this.closePopup()
    })
  },
})

const BRMarkers = markersBR.addLayer(geoJsonLayerBR)
// map.fitBounds(markersBR.getBounds());

/* ***************************************************************************************************************************************************** */

//   RAAV 15/11/2022
//   RAAV VS LOCAL
function getColorRAAV(feature) {
  switch (feature) {
    case 1:
      return "#4933d5"
    case 0:
      return "#4c9b20"
  }
}
function styleRAAV(feature) {
  if (feature.properties.TRC_TOP_RAAV == 1) {
    return {
      color: getColorRAAV(feature.properties.TRC_TOP_RAAV),
      fillColor: getColorRAAV(feature.properties.TRC_TOP_RAAV),
      weight: 5,
      opacity: 1,
    }
  } else {
    return {
      color: getColorRAAV(feature.properties.TRC_TOP_RAAV),
      fillColor: getColorRAAV(feature.properties.TRC_TOP_RAAV),
      opacity: 1,
    }
  }
}
const raavLayer = L.geoJson(RAAV, {
  style: styleRAAV,
  onEachFeature: function (feature, layer) {
    if (feature.properties.TRC_TOP_RAAV == 1) {
      layer.bindPopup(`
            <p style='margin:0; padding:0;'><strong>Type : </strong>RAAV</p>
            `)
    } else {
      layer.bindPopup(`
        <p style='margin:0; padding:0;'><strong>Type : </strong>Local</p>
      `)
    }
  },
})


/* ***************************************************************************************************************************************************** */

//   Camionnage 15/11/2022
// const camionnageLayer = L.geoJson(camionnage, {
//   onEachFeature: function (feature, layer) {
//     layer.setStyle({ color: "green" });
//     layer.bindPopup(`
//             <p style='margin:0; padding:0;'><strong>Camionnage</strong></p>
//             `);
//     layer.on("mouseover", function () {
//       this.openPopup();
//     });
//     layer.on("mouseout", function () {
//       this.closePopup();
//     });
//   },
// });

/* ***************************************************************************************************************************************************** */

// listen for the results event and add every result to the map
const pegmanIcon = L.icon({
  iconUrl: "../img/google-street-view.png",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
})

// Add a marker to the center of the map
const markerGSV = L.marker(map.getCenter(), { icon: pegmanIcon })
// Make sure the marker stays in the centre when the map is moved
map.on("move", function () {
  let center = markerGSV.setLatLng(map.getCenter())
  // console.log(center)
})

//  Control Groups et overlays
const baseMaps = {
  //   "Mapbox Light": Light,
  //   "Mapbox Streets": Streets,
  //   "Mapbox Outdoors": Outdoors,
  //   "Mapbox Satellite": Satellite,
  //   "Google Streets": googleStreets,
  //   "Google Satellite": googleSat,
  //   "Google Hybrid": googleHybrid,
  //   "Google Terrain": googleTerrain ,
  //   "ISRI Streets": esriTile,
  //   "Open Street Map": osm,
}

const overlayMaps = {
  //   "Contrat 1093":C1093_Layer,
  //   "Contrat 1096":C1096_Layer,
  //   "Contrat 1104":C1104_Layer,
  //   "Contrat 1105":C1105_Layer,
  //   "Contrat 1106":C1106_Layer,
  //   "Contrat 1108":C1108_Layer,
  //   "Inspecteurs": inspectionLayer,
  //   Arrondissement: arrondissementsLayer,
  //   "Axes mobilité sans trav.": axeMobLayer,
  //   "Axes sensibles avec trav.": axeSensibleLayer,
  //   Patrimoine: patrimoineLayer,
  //   "Ruelles vertes": ruellesVertesLayer,
  //   Casernes: casernesMarkers,
  //   "Secteurs AGIR": secteursAgirLayer,
  //   Inspecteurs: inspecteursLayer,
  //   Horticulteurs: horticulteursLayer,
  //   "Google Street View": markerGSV,
}

// L.control.layers(baseMaps, overlayMaps, { collapsed: true }).addTo(map);

const baseTree = {
  label: "Fonds de carte",
  children: [
    { label: "Mapbox Light", layer: Light },
    { label: "Mapbox Streets", layer: Streets },
    { label: "Google Streets", layer: googleStreets },
    { label: "Google Satellite", layer: googleSat },
    { label: "ISRI Streets", layer: esriTile },
    { label: "Open Street Map", layer: osm },
  ],
}

// const layers2023 = L.featureGroup([
//   C_PRR_Layer,
//   C_BRV_Layer,
//   C_ECL_Layer,
//   C_ESP_Layer,
//   C_PCPR_Layer,
//   C_RAQ_Layer,
//   C_REG_Layer,
// ]).addTo(map);
// map.fitBounds(layers2023.getBounds());

const overlaysTree = {
  label: "Calques de travail",
  selectAllCheckbox: "Un/select all",
  children: [
    {
      label: "Projets",
      selectAllCheckbox: true,
      children: [
        {
          label: "2022",
          selectAllCheckbox: true,
          children: [
            { label: "Contrat 1093", layer: C1093_Layer },
            { label: "Contrat 1096", layer: C1096_Layer },
            { label: "Contrat 1104", layer: C1104_Layer },
            { label: "Contrat 1105", layer: C1105_Layer },
            { label: "Contrat 1106", layer: C1106_Layer },
            { label: "Contrat 1108", layer: C1108_Layer },
          ],
        },
        {
          label: "2023",
          selectAllCheckbox: true,
          children: [
            {
              label: "Corpo",
              selectAllCheckbox: true,
              children: [
                { label: "ESP", layer: C_ESP_Layer },
                { label: "PCPR-PRCPR", layer: C_PCPR_Layer },
                { label: "Rehab AQ", layer: C_RAQ_Layer },
                { label: "Rehab EG", layer: C_REG_Layer },
                { label: "BRV", layer: C_BRV_Layer },
                { label: "Voirie-Éclairage", layer: C_ECL_Layer },
              ],
            },
            {
              label: "Arrondissement",
              selectAllCheckbox: true,
              children: [
                { label: "PRR", layer: C_PRR_Layer },
                { label: "Place Pierre", layer: C_PlacePierre_Layer },
                { label: "Place l'Archevêque", layer: C_PlaceArchev_Layer },
                { label: "Pavé Alvéol. ruelle verte", layer: C_PaveRV_Layer },
                { label: "Végét. Saillie 1104", layer: C_Saillie_1104_Layer },
                { label: "Végét. Saillie 1108", layer: C_Saillie_1108_Layer },
                { label: "Inst. clôture Parc Oscar", layer: C_Cloture_Layer },
                { label: "Mini fôret", layer: C_Foret_Layer }
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Autres",
      selectAllCheckbox: true,
      children: [
        { label: "Secteurs d'inspection", layer: inspectionLayer },
        { label: "Réseau RAAV", layer: raavLayer },
	{ label: "Renseignements Chaussée", layer: chausseeLayer},
        // { label: "Camionnage", layer: camionnageLayer }
        { label: "Arrondissements", layer: arrondissementsLayer },
        { label: "Casernes pompiers", layer: casernesMarkers },
        { label: "Bornes de recharge", layer: BRMarkers },
        { label: "Secteurs des Collectes", layer: collectesLayer },
	{ label: "Secteurs Arboriculture", layer: sectArboLayer },
	{ label: "Fosses et saillies", layer: fossesSailliesLayer },
        { label: "Google Street View", layer: markerGSV }
      ],
    },
  ],
}

const lay = L.control.layers.tree(baseTree, overlaysTree, {
  namedToggle: true,
  selectorBack: false,
  closedSymbol: "&#8862; &#x1f5c0;",
  openedSymbol: "&#8863; &#x1f5c1;",
  collapseAll: "Réduire tout",
  expandAll: "Développer tout",
  collapsed: false,
})

lay.addTo(map).collapseTree(true).expandSelected(true)

L.control
  .locate({
    flyTo: true,
    strings: {
      title: "Montre-moi où je suis !",
    },
  })
  .addTo(map)

map.addControl(
  new L.Control.Fullscreen({
    title: {
      false: "Afficher plein écran",
      true: "Quitter le plein écran",
    },
  })
)

// Google Street View
L.streetView({ position: "topright" }).addTo(map)

// Draw Tools
// const drawnItems = new L.FeatureGroup();
// map.addLayer(drawnItems);

// const drawControl = new L.Control.Draw({
//   // position: "topright",
//   draw: {
//     polygon: {
//       shapeOptions: {
//         color: "#490066",
//       },
//       allowIntersection: false,
//       drawError: {
//         color: "orange",
//         timeout: 2000,
//       },
//       showArea: true,
//       metric: true,
//       repeatMode: true,
//     },
//     polyline: {
//       shapeOptions: {
//         color: "#490066",
//       },
//       showArea: true,
//       metric: true,
//       repeatMode: true,
//     },
//     rectangle: false,
//     circlemarker: false,
//     marker: true,
//     circle: false,
//   },
//   edit: {
//     featureGroup: drawnItems,
//   },
// });
// map.addControl(drawControl);

// map.on("draw:created", function (e) {
//   layer = e.layer;
//   drawnItems.addLayer(layer);
// });

let arcgisOnline = L.esri.Geocoding.arcgisOnlineProvider({ countries: "CA" })
const searchControl = L.esri.Geocoding.geosearch({
  // collapseAfterResult: false,
  placeholder: "Rechercher des lieux ou des adresses...",
  title: "Recherche d'emplacement",
  providers: [arcgisOnline],
}).addTo(map)

searchControl.on("results", function (data) {
  results.clearLayers()
  for (let i = data.results.length - 1; i >= 0; i--) {
    results.addLayer(L.marker(data.results[i].latlng, { icon: travIcon }))
  }
})

// Échelle à droite en bas
L.control.scale({ position: "bottomleft" }).addTo(map)

const legendCorpo = L.control.Legend({
  position: "bottomright",
  title: "Légende (Corpo 2023)",
  collapsed: true,
  symbolWidth: 24,
  opacity: 1,
  column: 2,
  legends: [
    {
      label: "ESP",
      type: "polyline",
      layers: C_ESP_Layer,
      color: "#f50d12",
      fillColor: "#f50d12",
      weight: 6,
    },
    {
      label: "PCPR-PRCPR",
      type: "polyline",
      layers: C_PCPR_Layer,
      color: "#504C43",
      fillColor: "#504C43",
      weight: 4,
    },
    {
      label: "Rehab AQ",
      type: "polyline",
      layers: C_RAQ_Layer,
      color: "#3388ff",
      fillColor: "#3388ff",
      weight: 6,
    },
    {
      label: "Rehab EG",
      type: "polyline",
      layers: C_REG_Layer,
      color: "#964b00",
      fillColor: "#964b00",
      weight: 6,
    },
    {
      label: "BRV",
      type: "image",
      url: "../img/brv1.jpg",
      layers: C_BRV_Layer,
    },
    {
      label: "Éclairage",
      type: "polyline",
      layers: C_ECL_Layer,
      color: "#810081",
      fillColor: "#810081",
      weight: 6,
    },
  ],
}).addTo(map);

const legendArrond = L.control.Legend({
  position: "bottomright",
  title: "Légende (Arrond. 2023)",
  collapsed: true,
  symbolWidth: 24,
  opacity: 1,
  column: 2,
  legends: [
    {
      label: "PRR Lapierre",
      type: "polyline",
      layers: C_PRR_Layer,
      color: "#65fe08",
      fillColor: "#65fe08",
      weight: 6,
    },
    {
      label: "Déminéralisation Place Pierre",
      type: "polyline",
      layers: C_PlacePierre_Layer,
      color: "green",
      fillColor: "green",
      weight: 6,
    },
    {
      label: "Amén. Place l'Archevêque",
      type: "polyline",
      layers: C_PlaceArchev_Layer,
      color: "#FCC330",
      fillColor: "#FCC330",
      weight: 6,
    },
    {
      label: "Pavé Alvéolé Ruelle verte",
      type: "polyline",
      layers: C_PaveRV_Layer,
      color: "#89BC81",
      fillColor: "#89BC81",
      weight: 6,
    },
    {
      label: "Végét. Saillie 1104",
      type: "image",
      layers: C_Saillie_1104_Layer,
      url: "./img/arbre1.png",
    },
    {
      label: "Végét. Saillie 1108",
      type: "image",
      layers: C_Saillie_1108_Layer,
      url: "./img/arbre2.jpg",
    },
    {
      label: "Install. Clôture Parc Oscar",
      type: "polyline",
      layers: C_Cloture_Layer,
      color: "#30FCB6",
      fillColor: "#30FCB6",
      weight: 6,
    },
    {
      label: "Mini forêt",
      type: "polyline",
      layers: C_Foret_Layer,
      color: "#20b2aa",
      fillColor: "#20b2aa",
      weight: 6,
    },
  ],
}).addTo(map);


// C_PRR_Layer.on('add', function() {
//   legend2.addTo(map)
// });
	       
// C_PRR_Layer.on('remove', function(){
//   map.removeControl(legend2)
// });

// C_ESP_Layer.on('add', function(){
//   legend1.addTo(map)
// });
// C_ESP_Layer.on('remove', function(){
//   map.removeControl(legend1)
// });	

chausseeLayer.on('add', function(){
   map.removeControl(legend1);
   map.removeControl(legend2);
});
		 
chausseeLayer.on('remove', function(){
   legend1.addTo(map);
   legend2.addTo(map);
});
