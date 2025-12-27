import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-[80vh] overflow-hidden bg-gradient-to-b from-blue-400 to-blue-600">
        {/* Animated cloud background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large background clouds */}
          <div className="absolute top-[10%] left-[5%] opacity-30 animate-float-slow">
            <Cloud width={280} height={160} />
          </div>
          <div className="absolute top-[25%] right-[8%] opacity-40 animate-float">
            <Cloud width={320} height={180} />
          </div>
          <div className="absolute bottom-[15%] left-[15%] opacity-30 animate-float-slow">
            <Cloud width={260} height={140} />
          </div>
          <div className="absolute top-[60%] right-[20%] opacity-25 animate-float-reverse">
            <Cloud width={240} height={130} />
          </div>

          {/* Foreground clouds */}
          <div className="absolute top-[5%] right-[25%] opacity-70 animate-float-slow">
            <Cloud width={180} height={100} />
          </div>
          <div className="absolute bottom-[25%] right-[10%] opacity-60 animate-float">
            <Cloud width={200} height={110} />
          </div>
        </div>

        {/* 404 Content */}
        <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
          <h1 className="text-[150px] font-bold text-white leading-none drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)] mb-4">
            404
          </h1>

          {/* Cloud with message */}
          <div className="relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[400px] h-[220px] opacity-90">
              <Cloud width={400} height={220} />
            </div>

            <div className="relative z-10 mt-6">
              <h2 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">Page Not Found</h2>
              <p className="text-white text-xl mb-10 max-w-md mx-auto font-medium drop-shadow-md">
                The page you're looking for has drifted away into the clouds.
              </p>
              <Link
                href="/"
                className="inline-block bg-white text-blue-600 font-semibold py-4 px-10 rounded-full transition-all hover:bg-blue-50 hover:scale-105 hover:shadow-lg shadow-md text-lg"
              >
                Return to Clear Skies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Cloud SVG component for realistic clouds
function Cloud({ width = 200, height = 120 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M168.5 78.5C181.5 78.5 192 68 192 55C192 42 181.5 31.5 168.5 31.5C167.5 31.5 166.5 31.5 165.5 31.7C161.5 13.8 145.5 0.5 126.5 0.5C104 0.5 86 21 86 46C86 47.5 86 49 86.2 50.5C84.5 50.2 82.8 50 81 50C63.5 50 49.5 64 49.5 81.5C49.5 99 63.5 113 81 113H168.5C181.5 113 192 102.5 192 89.5C192 76.5 181.5 66 168.5 66C167.5 66 166.5 66 165.5 66.2C161.5 48.3 145.5 35 126.5 35C123.5 35 120.5 35.3 117.7 35.8C122.5 38.5 126.5 42.5 129.5 47.2C132.5 46.5 135.7 46 139 46C151.5 46 162 56.5 162 69C162 70 162 71 161.8 72C165.8 73.5 168.5 77.5 168.5 78.5Z"
        fill="white"
      />
      <path
        d="M43.5 95.5C56.5 95.5 67 85 67 72C67 59 56.5 48.5 43.5 48.5C42.5 48.5 41.5 48.5 40.5 48.7C36.5 30.8 20.5 17.5 1.5 17.5C-21 17.5 -39 38 -39 63C-39 64.5 -39 66 -38.8 67.5C-40.5 67.2 -42.2 67 -44 67C-61.5 67 -75.5 81 -75.5 98.5C-75.5 116 -61.5 130 -44 130H43.5C56.5 130 67 119.5 67 106.5C67 93.5 56.5 83 43.5 83C42.5 83 41.5 83 40.5 83.2C36.5 65.3 20.5 52 1.5 52C-1.5 52 -4.5 52.3 -7.3 52.8C-2.5 55.5 1.5 59.5 4.5 64.2C7.5 63.5 10.7 63 14 63C26.5 63 37 73.5 37 86C37 87 37 88 36.8 89C40.8 90.5 43.5 94.5 43.5 95.5Z"
        fill="white"
      />
    </svg>
  )
}

