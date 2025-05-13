import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <main className="h-[100vh] relative">
      <Spline scene="https://prod.spline.design/axeb0aUXFcZEVFJe/scene.splinecode" />

      <div className="p-4 hidden lg:block absolute bottom-4 left-4 bg-white/30 backdrop-blur-sm bg-opacity-75 rounded-xl bangers-regular tracking-wider">
        <p className="lg:text-2xl xl:text-4xl text-white tracking-widest">
          <strong>Mouse Controls for 3D View:</strong>
        </p>
        <ul className="lg:text-base xl:text-2xl list-none">
          <li className="text-black ml-4">
            <strong className="text-white">Left-click + drag:</strong> Rotate
            the 3D object
          </li>
          <li className="text-black ml-4">
            <strong className="text-white">
              Middle-click (mouse 3) + drag:
            </strong>{" "}
            Zoom in/out
          </li>
          <li className="text-black ml-4">
            <strong className="text-white">Right-click + drag:</strong> Pan the
            view
          </li>
          <li className="text-black ml-4">
            <strong className="text-white">Mouse Wheel:</strong> Zoom in/out
          </li>
        </ul>
      </div>
    </main>
  );
}
