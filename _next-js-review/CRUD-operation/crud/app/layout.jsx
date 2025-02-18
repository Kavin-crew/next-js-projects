export const metadata = {
  title: "CRUD App",
  keywords: "crud, create, read, update, delete",
  description: "perform crud operations with database",
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
