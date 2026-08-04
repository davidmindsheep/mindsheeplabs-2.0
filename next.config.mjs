/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      // The Appointment Engine offer no longer lives on this site.
      { source: "/appointment-engine", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
