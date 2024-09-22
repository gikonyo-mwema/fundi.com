import React from 'react';

const AdminPanelLayout = ({ children }) => {
  return (
    <div>
      <header>Admin Panel</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default AdminPanelLayout;

