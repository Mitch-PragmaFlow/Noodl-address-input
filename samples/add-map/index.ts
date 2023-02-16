/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_add_map]
// Initialize and add the map
let map: google.maps.Map;
async function initMap(): Promise<void> {
  // [START maps_add_map_instantiate_map]
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };

  // Request needed libraries.
  const [{ Map }, { AdvancedMarkerView }] = await Promise.all([
    google.maps.importLibrary("maps"),
    google.maps.importLibrary("marker")
  ]);

  // The map, centered at Uluru
  map = new Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 4,
      center: position,
      mapId: 'DEMO_MAP_ID',
    }
  );
  // [END maps_add_map_instantiate_map]

  // [START maps_add_map_instantiate_marker]
  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map,
    position: position,
    title: 'Uluru'
  });
  // [END maps_add_map_instantiate_marker]
}

initMap();
// [END maps_add_map]

//google.maps.importLibrary('core').then(initMap);

export {};
