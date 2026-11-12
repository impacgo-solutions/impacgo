import map from "../assets/map.webp";

const LocationMap = () => {
  return (
    <div className="w-full">
      <a
        href="https://maps.app.goo.gl/gHKQR8dvMK4gky1K9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={map}
          alt="Click to view on Google Maps"
          loading="lazy"
          className="
            w-full
            h-[500px]
            sm:h-[400px]
            md:h-[500px]
            lg:h-[600px]
            object-cover
            cursor-pointer
            rounded-2xl
            shadow-glass-lg
            border
            border-white/60
            hover:shadow-xl
            transition-shadow
            duration-300
          "
        />
      </a>
    </div>
  );
};

export default LocationMap;
