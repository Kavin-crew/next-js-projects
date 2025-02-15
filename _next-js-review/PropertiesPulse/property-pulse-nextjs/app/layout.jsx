import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse",
  keywords: "real estate, property, rental property, property management",
  description: "Find your next rental property with Property Pulse",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
