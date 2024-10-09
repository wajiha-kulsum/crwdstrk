// app/layout.js
import './theme.css';
import '../library/FontAwesome.js'; // Import your FontAwesome setup
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import FontAwesome styles
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Prevent FontAwesome from adding the CSS automatically

// Optional: Import your global styles here

// Import your Navbar and Footer components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> Navbar will appear on every page */}
        <main>{children}</main> {/* This renders the page content */}
        {/* <Footer /> Footer will appear on every page */}
      </body>
    </html>
  );
}
