var wms_layers = [];


        var lyr_argenmap_0 = new ol.layer.Tile({
            'title': 'argenmap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_Hitos_tp8_practica_1 = new ol.format.GeoJSON();
var features_Hitos_tp8_practica_1 = format_Hitos_tp8_practica_1.readFeatures(json_Hitos_tp8_practica_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hitos_tp8_practica_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hitos_tp8_practica_1.addFeatures(features_Hitos_tp8_practica_1);
cluster_Hitos_tp8_practica_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Hitos_tp8_practica_1
});
var lyr_Hitos_tp8_practica_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Hitos_tp8_practica_1, 
                style: style_Hitos_tp8_practica_1,
                popuplayertitle: 'Hitos_tp8_practica',
                interactive: true,
                title: '<img src="styles/legend/Hitos_tp8_practica_1.png" /> Hitos_tp8_practica'
            });

lyr_argenmap_0.setVisible(true);lyr_Hitos_tp8_practica_1.setVisible(true);
var layersList = [lyr_argenmap_0,lyr_Hitos_tp8_practica_1];
lyr_Hitos_tp8_practica_1.set('fieldAliases', {'fid': 'fid', 'NOMBRE': 'NOMBRE', });
lyr_Hitos_tp8_practica_1.set('fieldImages', {'fid': '', 'NOMBRE': '', });
lyr_Hitos_tp8_practica_1.set('fieldLabels', {'fid': 'no label', 'NOMBRE': 'header label - always visible', });
lyr_Hitos_tp8_practica_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});