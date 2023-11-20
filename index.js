// Function to get the public IP address
function getPublicIP() {
    // Make a request to ipinfo.io
    return fetch('https://ipinfo.io/json')
      .then(response => response.json())
      .then(data => data.ip)
      .catch(error => {
        console.error('Error fetching IP address:', error);
        return null;
      });
  }
  
  // Example usage
  getPublicIP().then(ipAddress => {
    console.log('Public IP address:', ipAddress);
  });
  