import Image from "next/image";

export default function HoneycombCluster({
  position = "top-left",
  opacity = 0.7,
  rotate = 0,
}) {
  const positions = {
    "top-left": "top-15 left-5",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-20 right-15",
  };

  return (
    <div
      className={`absolute ${positions[position]} pointer-events-none`}
      style={{
        transform: `rotate(${rotate}deg)`,
        opacity,
      }}
    >
        <Image
            src="/honeycomb.svg"
            alt="Honeycomb cluster"
            width={200}
            height={200}
            priority
            className="filter invert hidden sm:block"
            />
    </div>
           
  );
}      