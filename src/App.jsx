import { useEffect } from "react";
import ModernLoading from "./ModernLoading";

export default function App() {
  useEffect(() => {
    // Extract the URL path
    const path = window.location.pathname.substring(1); // Removes the leading '/'
    
    // Define URL to fetch based on the path
    let url;
    if (path === "bg") {
      url = "https://bhagwad-geeta.onrender.com";
    } else if(path === "isa") {
	url = "https://ishushreyas-admin.onrender.com";
    }else {
      console.warn("Unknown path, no URL to fetch.");
      return;
    }

    // Send GET request and redirect if successful
    fetch(url)
      .then(response => {
        if (response.ok) {
          window.location.href = url; // Redirect to the specified URL
        } else {
          console.error("Failed to fetch the URL.");
        }
      })
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div className="app">
      <ModernLoading />
    </div>
  );
}
