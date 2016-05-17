﻿/*global dojo */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
/*
 | Copyright 2012 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
dojo.provide("js.Config");
dojo.declare("js.Config", null, {

    // This file contains various configuration settings for "HTML5" template
    //
    // Use this file to perform the following:
    //
    // 1.  Specify application title                  - [ Tag(s) to look for: ApplicationName ]
    // 2.  Set path for application icon              - [ Tag(s) to look for: ApplicationIcon ]
    // 3.  Set splash screen message                  - [ Tag(s) to look for: SplashScreenMessage ]
    // 4.  Set URL for help page                      - [ Tag(s) to look for: HelpURL ]
    //
    // 5.  Specify URLs for base maps                  - [ Tag(s) to look for: BaseMapLayers ]
    // 6.  Set initial map extent                     - [ Tag(s) to look for: DefaultExtent ]
    //
    // 7.  Or for using map services:
    // 7a. Customize info-Window settings             - [ Tag(s) to look for: InfoWindowHeader, InfoPopupFieldsCollection ]
    // 7b. Customize info-Popup size                  - [ Tag(s) to look for: InfoPopupHeight, InfoPopupWidth ]
    // 7c. Customize data formatting                  - [ Tag(s) to look for: ShowNullValueAs]
    //
    // 8. Customize address search settings           - [ Tag(s) to look for: LocatorURL, LocatorFields, DefaultValue, LocatorMarkupSymbolPath, LocatorRippleSize ]
    //
    // 9. Set URL for geometry service               - [ Tag(s) to look for: GeometryService ]
    //
    // 10. Customize routing settings for directions  - [ Tag(s) to look for: RouteServiceURL, RouteColor, RouteWidth, SearchforDirections]
    //
    // 11. Configure data to be displayed on the bottom panel, ReferenceOverlayLayer
    //                                                - [ Tag(s) to look for: InfoBoxWidth, Services, ReferenceOverlayLayer]
    //
    // 12. Customize the Zoom level, CallOutAddress, Render color, ripple size
    //                                                - [ Tag(s) to look for: Zoom level, CallOutAddress, RendererColor, RippleSize]
    //
    // 13. Specify URLs for map sharing               - [ Tag(s) to look for: MapSharingOptions (set TinyURLServiceURL, TinyURLResponseAttribute) ]
    // 13a.In case of changing the TinyURL service
    //     Specify URL for the new service            - [ Tag(s) to look for: FacebookShareURL, TwitterShareURL, ShareByMailLink ]
    //
    //

    // ------------------------------------------------------------------------------------------------------------------------
    // GENERAL SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set application title.
    ApplicationName: "My Government Services",

    // Set application icon path.
    ApplicationIcon: "images/City Logo.png",

    // Set splash window content - Message that appears when the application starts.
    SplashScreenMessage: "<b>Welcome to My Government Services</b><br/><hr/><br/>The <b>Altamonte Springs Government Services</b> application helps residents locate a government facility and obtain information about curbside and dropoff services provided by a government agency.<br/> <br/>To locate a service, simply enter an address or activity in the search box, or use your current location.  Your location will then be highlighted on the map and relevant information about available curbside and dropoff services will be presented to the user.<br/><br/>",

    // Set URL of help page/portal.
    HelpURL: "help.htm",

    // URL to proxy program
    ProxyURL: "proxy/proxy.ashx",

    // ------------------------------------------------------------------------------------------------------------------------
    // BASEMAP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set baseMap layers.
    // Please note: All base maps need to use the same spatial reference. By default, on application start the first base map will be loaded
    BaseMapLayers: [{
        Key: "topoMap",
        ThumbnailSource: "images/basemap_topographic.png",
        Name: "Topographic",
        MapURL: "http://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer"
		}, {
		Key: "imageryMap",
        ThumbnailSource: "images/basemap_imagery.png",
        Name: "Imagery",
        MapURL: "http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"
		}],

    // Initial map extent. Use comma (,) to separate values and don t delete the last comma.
    DefaultExtent: "-9066819,3328838,-9054615,3337266",


    // ------------------------------------------------------------------------------------------------------------------------
    // INFO-POPUP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Info-popup is a popup dialog that gets displayed on selecting a feature

    //Field for Displaying the features as info window header.
    InfoWindowHeader: "NAME",

    // Set the content to be displayed on the info-Popup. Define labels, field values, field types and field formats.
    InfoPopupFieldsCollection: [{
        DisplayText: "Name:",
        FieldName: "NAME"
    }, {
        DisplayText: "Address:",
        FieldName: "FULLADDR"
    }, {
        DisplayText: "Contact:",
        FieldName: "CONTACT"
    }, {
        DisplayText: "Phone:",
        FieldName: "PHONE"
    }, {
        DisplayText: "Email:",
        FieldName: "EMAIL"
    }, {
        DisplayText: "Days Open:",
        FieldName: "OPERDAYS"
    }, {
        DisplayText: "Hours of Operation:",
        FieldName: "OPERHOURS"
    }],

    // Set size of the info-Popup - select maximum height and width in pixels.
    //minimum height should be 200 for the info-popup in pixels
    InfoPopupHeight: 225,

    //minimum width should be 300 for the info-popup in pixels
    InfoPopupWidth: 350,

    // Set string value to be shown for null or blank values.
    ShowNullValueAs: "N/A",

    // ------------------------------------------------------------------------------------------------------------------------
    // ADDRESS SEARCH SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set Locator service URL.

    LocatorSettings: {
        LocatorMarkupSymbolPath: "images/RedPushpin.png", // Set pushpin image path.
        MarkupSymbolSize: {
            width: 25,
            height: 25
        },
        Locators: [{
            DisplayText: "Search Address", //Set placeholder text
            DefaultValue: "225 Newburyport Ave Altamonte Springs FL 32701", // Set default address to search.
            LocatorParameters: ["SingleLine"], // Set Locator fields (fields to be used for searching).
            LocatorURL: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
            CandidateFields: "Loc_name, Score, Match_addr", //Set which fields are returned in results
            DisplayField: "${Match_addr}", //Set which field from results is displayed
            AddressMatchScore: 80, //Set minimum score to be considered a match
            LocatorFieldName: 'Loc_name', //The returned field which specifies match type (specific locator within composite)
            LocatorFieldValues: ["USA.StreetName", "USA.PointAddress", "USA.StreetAddress"] //List of acceptable individual locators (within composite)
        }]
    },

    // ------------------------------------------------------------------------------------------------------------------------
    // GEOMETRY SERVICE SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set geometry service URL.
    GeometryService: "https://webgis.altamonte.org/arcgis/rest/services/Utilities/Geometry/GeometryServer",

    // ------------------------------------------------------------------------------------------------------------------------
    // DRIVING DIRECTIONS SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set URL for routing service (network analyst).
    RouteServiceURL: "https://webgis.altamonte.org/arcgis/rest/services/Citywide/AltamonteSprings_RoutingService/NAServer/Route",

    // Set color for the route symbol.
    RouteColor: "#CC6633",

    // Set width of the route.
    RouteWidth: 4,

    //Enabling the "SearchforDirections" parameter will draw routes and provide directions using the ArcGIS Online World Route Service.
    //The World Route Service is an ArcGIS Online for organizations subscription service that uses credits when routes are generated.
    // Set this to true to show directions on map
    SearchforDirections: true,

    // ------------------------------------------------------------------------------------------------------------------------
    // SETTINGS FOR INFO-PODS ON THE BOTTOM PANEL
    // ------------------------------------------------------------------------------------------------------------------------
    // Set width of the boxes in the bottom panel.
    InfoBoxWidth: 417,

    //Operational layer collection.
    Services: {
        TrashPickup: {
            Name: "Trash Pickup",
            Image: "images/trash.png",
            HasRendererImage: false,
            ServiceUrl: "https://webgis.altamonte.org/arcgis/rest/services/LGIM/GovernmentServices/MapServer/9",
            FieldNames: [{
                ServiceAvailability: [{
                    FieldName: "MONDAY",
                    DisplayText: "Mon"
                }, {
                    FieldName: "TUESDAY",
                    DisplayText: "Tue"
                }, {
                    FieldName: "WEDNESDAY",
                    DisplayText: "Wed"
                }, {
                    FieldName: "THURSDAY",
                    DisplayText: "Thu"
                }, {
                    FieldName: "FRIDAY",
                    DisplayText: "Fri"
                }, {
                    FieldName: "SATURDAY",
                    DisplayText: "Sat"
                }, {
                    FieldName: "SUNDAY",
                    DisplayText: "Sun"
                }]
            }, {
                Field: "Agency : ${AGENCY}"
            }, {
                Field: "Contact : ${CONTACT}"
            }, {
                Field: "Phone: ${PHONE}"
            }, {
                Links: [{
                    DisplayText: "Website",
                    FieldName: "AGENCYURL",
                    type: "web"
                }, {
                    DisplayText: "Email",
                    FieldName: "EMAIL",
                    type: "mail"
                }]
            }],

            Color: "#FCD208",
            isRendererColor: true,
            LayerVisibility: true
        },
        RecyclingPickup: {
            Name: "Recycling Pickup",
            Image: "images/recycling.png",
            HasRendererImage: false,
            ServiceUrl: "https://webgis.altamonte.org/arcgis/rest/services/LGIM/GovernmentServices/MapServer/10",
            FieldNames: [{
                ServiceAvailability: [{
                    FieldName: "MONDAY",
                    DisplayText: "Mon"
                }, {
                    FieldName: "TUESDAY",
                    DisplayText: "Tue"
                }, {
                    FieldName: "WEDNESDAY",
                    DisplayText: "Wed"
                }, {
                    FieldName: "THURSDAY",
                    DisplayText: "Thu"
                }, {
                    FieldName: "FRIDAY",
                    DisplayText: "Fri"
                }, {
                    FieldName: "SATURDAY",
                    DisplayText: "Sat"
                }, {
                    FieldName: "SUNDAY",
                    DisplayText: "Sun"
                }]
            }, {
                Field: "Agency : ${AGENCY}"
            }, {
                Field: "Contact : ${CONTACT}"
            }, {
                Field: "Phone: ${PHONE}"
            }, {
                Links: [{
                    DisplayText: "Website",
                    FieldName: "AGENCYURL",
                    type: "web"
                }, {
                    DisplayText: "Email",
                    FieldName: "EMAIL",
                    type: "mail"
                }]
            }],
            Color: "#0000FF",
            isRendererColor: true,
            LayerVisibility: true
        },
        YardWastePickup: {
            Name: "Yard Waste Pickup",
            Image: "images/yardWaste.png",
            HasRendererImage: false,
            ServiceUrl: "https://webgis.altamonte.org/arcgis/rest/services/LGIM/GovernmentServices/MapServer/12",
            FieldNames: [{
                ServiceAvailability: [{
                    FieldName: "MONDAY",
                    DisplayText: "Mon"
                }, {
                    FieldName: "TUESDAY",
                    DisplayText: "Tue"
                }, {
                    FieldName: "WEDNESDAY",
                    DisplayText: "Wed"
                }, {
                    FieldName: "THURSDAY",
                    DisplayText: "Thu"
                }, {
                    FieldName: "FRIDAY",
                    DisplayText: "Fri"
                }, {
                    FieldName: "SATURDAY",
                    DisplayText: "Sat"
                }, {
                    FieldName: "SUNDAY",
                    DisplayText: "Sun"
                }]
            }, {
                Field: "Agency : ${AGENCY}"
            }, {
                Field: "Contact : ${CONTACT}"
            }, {
                Field: "Phone: ${PHONE}"
            }, {
                Links: [{
                    DisplayText: "Website",
                    FieldName: "AGENCYURL",
                    type: "web"
                }, {
                    DisplayText: "Email",
                    FieldName: "EMAIL",
                    type: "mail"
                }]
            }],
            Color: "#009933",
            isRendererColor: true,
            LayerVisibility: true
        },
		CityCommissioners: {
            Name: "City Commissioners",
            Image: "images/Cityhall.png",
            HasRendererImage: false,
            ServiceUrl: "https://webgis.altamonte.org/arcgis/rest/services/CityClerk/ArcGIS_Online_Map_Services_Districts/MapServer/0",
            FieldNames: [{
                Field: "Commissoner District : ${District_2011}"
            }, {
			    Field: "Commissoner : ${Commissioner}"
            }, {
                Field: "Term Expiration : ${Term_Expiration}"
            }, {
                Field: "Phone: ${Phone}"
            }, {
                Links: [{
                    DisplayText: "Website",
                    FieldName: "DISTRICTURL",
                    type: "web"
				}]
            }],
            Color: "#3770D2",
            isRendererColor: true,
            LayerVisibility: true
        },
        RailroadStations: {
            Name: "Railroad Stations",
            Image: "images/RailStation.png",
            HasRendererImage: false,
            ServiceUrl: "https://webgis.altamonte.org/arcgis/rest/services/LGIM/GovernmentServices/MapServer/8",
            distance: 4,
            FieldNames: [{
                FieldName: "NAME"
            }, {
                FieldName: "FULLADDR"
            }, {
                FieldName: "PHONE"
            }],
            LayerVisibility: true,
            ShowBeyondBuffer: true
        },
        DeptPublicWorks: {
            Name: "Department of Public Works",
            Image: "images/DeptPW.png",
            HasRendererImage: false,
            ServiceUrl: "https://webgis.altamonte.org/arcgis/rest/services/LGIM/GovernmentServices/MapServer/2",
            distance: 4,
            FieldNames: [{
                FieldName: "NAME"
            }, {
                FieldName: "FULLADDR"
            }, {
                FieldName: "PHONE"
            }],
            LayerVisibility: true,
            ShowBeyondBuffer: true
        },
        CommunityCenter: {
            Name: "Community Centers",
            Image: "images/CommunityCenter.png",
            HasRendererImage: false,
            ServiceUrl: "https://webgis.altamonte.org/arcgis/rest/services/LGIM/GovernmentServices/MapServer/1",
            distance: 4,
            FieldNames: [{
                FieldName: "NAME"
            }, {
                FieldName: "FULLADDR"
            }, {
                FieldName: "PHONE"
            }],
            LayerVisibility: true,
            ShowBeyondBuffer: true
        },
        PostOffices: {
            Name: "Post Offices",
            Image: "images/postOffice.png",
            HasRendererImage: false,
            ServiceUrl: "https://webgis.altamonte.org/arcgis/rest/services/LGIM/GovernmentServices/MapServer/7",
            distance: 4,
            FieldNames: [{
                FieldName: "NAME"
            }, {
                FieldName: "FULLADDR"
            }, {
                FieldName: "PHONE"
            }],
            LayerVisibility: true,
            ShowBeyondBuffer: true
        },
		CityHall: {
            Name: "City Hall",
            Image: "images/Cityhall.png",
            HasRendererImage: false,
            ServiceUrl: "https://webgis.altamonte.org/arcgis/rest/services/LGIM/GovernmentServices/MapServer/0",
            distance: 4,
            FieldNames: [{
                FieldName: "NAME"
            }, {
                FieldName: "FULLADDR"
            }, {
                FieldName: "PHONE"
            }],
            LayerVisibility: true,
            ShowBeyondBuffer: true
        },
        Library: {
            Name: "Library",
            Image: "images/library.png",
            HasRendererImage: false,
            ServiceUrl: "https://webgis.altamonte.org/arcgis/rest/services/LGIM/GovernmentServices/MapServer/5",
            distance: 4,
            FieldNames: [{
                FieldName: "NAME"
            }, {
                FieldName: "FULLADDR"
            }, {
                FieldName: "PHONE"
            }],
            LayerVisibility: true,
            ShowBeyondBuffer: true
        },
        PoliceStations: {
            Name: "Police Stations",
            Image: "images/policeStations.png",
            HasRendererImage: false,
            ServiceUrl: "https://webgis.altamonte.org/arcgis/rest/services/LGIM/GovernmentServices/MapServer/6",
            distance: 4,
            FieldNames: [{
                FieldName: "NAME"
            }, {
                FieldName: "FULLADDR"
            }, {
                FieldName: "PHONE"
            }],
            LayerVisibility: true,
            ShowBeyondBuffer: true
        },
        FireStations: {
            Name: "Fire Stations",
            Image: "images/fireStations.png",
            HasRendererImage: false,
            ServiceUrl: "https://webgis.altamonte.org/arcgis/rest/services/LGIM/GovernmentServices/MapServer/3",
            distance: 4,
            FieldNames: [{
                FieldName: "NAME"
            }, {
                FieldName: "FULLADDR"
            }, {
                FieldName: "PHONE"
            }],
            LayerVisibility: true,
            ShowBeyondBuffer: true
        }
    },


    // ServiceUrl is the REST end point for the reference overlay layer
    // DisplayOnLoad setting this will show the reference overlay layer on load
    ReferenceOverlayLayer: {
        ServiceUrl: "http://yourserver/arcgis/rest/services/Trails/MapServer",
        DisplayOnLoad: false
    },

    //Set required zoom level.
    ZoomLevel: 15,

    //Set Address to be displayed on mobile callout.
    CallOutAddress: "Street: ${Address}",

    //Set Renderer color for selected feature.
    RendererColor: "#CC6633",

    //Set size of the ripple.
    RippleSize: 25,

    // ------------------------------------------------------------------------------------------------------------------------
    // SETTINGS FOR MAP SHARING
    // ------------------------------------------------------------------------------------------------------------------------
    // Set URL for TinyURL service, and URLs for social media.
    MapSharingOptions: {
        TinyURLServiceURL: "https://api-ssl.bitly.com/v3/shorten?longUrl=${0}",
        FacebookShareURL: "http://www.facebook.com/sharer.php?u=${0}&t=My%20Government%20Services",
        TwitterShareURL: "http://mobile.twitter.com/compose/tweet?status=My%20Government%20Services ${0}",
        ShareByMailLink: "mailto:%20?subject=Check%20out%20this%20map!&body=${0}"
    }
});
