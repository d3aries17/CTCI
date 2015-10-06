/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'dorsa, sans-serif': '<script src=\"http://use.edgefonts.net/dorsa:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-169px', '-99px', '2300px', '1277px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['352px', '-660px', '2312px', '1405px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['38']]
                        },
                        {
                            id: 'yellodroid2',
                            type: 'image',
                            rect: ['754px', '366px', '400px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"yellodroid.png",'0px','0px']
                        },
                        {
                            id: 'trans2',
                            type: 'image',
                            rect: ['423px', '-87px', '1934px', '1931px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"trans2.png",'0px','0px']
                        },
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['29', '21', '641', '317', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle3',
                                type: 'rect',
                                rect: ['367px', '28px', '473px', '230px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 300px; font-family: dorsa, sans-serif; text-transform: uppercase; color: rgb(0, 0, 0);\">Jessie</span><span style=\"font-size: 300px; font-family: dorsa, sans-serif; text-transform: uppercase;\">Bean</span></p>",
                                font: ['Arial, Helvetica, sans-serif', [250, "px"], "rgba(255,255,255,1.00)", "900", "none", "", "break-word", "nowrap"],
                                textStyle: ["8px", "", "", "", ""]
                            }]
                        },
                        {
                            id: 'youtube16',
                            type: 'image',
                            rect: ['268px', '484px', '128px', '128px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"youtube16.png",'0px','0px']
                        },
                        {
                            id: 'facebook27_1',
                            type: 'image',
                            rect: ['468px', '657px', '128px', '128px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"facebook27%20%281%29.png",'0px','0px']
                        },
                        {
                            id: 'instagram4_1',
                            type: 'image',
                            rect: ['81px', '657px', '128px', '128px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"instagram4%20%281%29.png",'0px','0px']
                        },
                        {
                            id: 'twitter19_1',
                            type: 'image',
                            rect: ['268px', '657px', '128px', '128px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"twitter19%20%281%29.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['209px', '295px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 0, 0); font-family: dorsa, sans-serif; text-transform: uppercase; letter-spacing: 30px; font-size: 50px;\">About M</span><span style=\"color: rgb(0, 0, 0); font-family: dorsa, sans-serif; text-transform: uppercase; font-size: 50px;\">E</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [25, "px"], "rgba(0,0,0,1.00)", "900", "underline", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-156109280");
