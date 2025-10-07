import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map
    map.current = L.map(mapContainer.current).setView(
      [9.992844500398933, 76.28705959892827],
      16
    );

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map.current);

    // Create custom icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div class="relative">
          <div class="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
          <div class="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <div class="w-4 h-4 rounded-full bg-white"></div>
          </div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });

    // Add marker
    L.marker([9.992844500398933, 76.28705959892827], { icon: customIcon })
      .addTo(map.current)
      .bindPopup(
        '<div class="text-center"><strong class="text-base">Bluebird Media Solutions</strong><br/><span class="text-sm text-muted-foreground">Kochi, Kerala, India</span></div>',
        { closeButton: false }
      )
      .openPopup();

    // Cleanup
    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;
