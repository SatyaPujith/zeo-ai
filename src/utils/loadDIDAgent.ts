/**
 * Dynamically loads the D-ID agent script with credentials from environment variables
 */
export function loadDIDAgent() {
  const clientKey = import.meta.env.VITE_DID_CLIENT_KEY;
  const agentId = import.meta.env.VITE_DID_AGENT_ID;

  if (!clientKey || !agentId) {
    console.error('D-ID credentials not found in environment variables');
    return;
  }

  // Check if script already exists
  const existingScript = document.querySelector('script[src*="agent.d-id.com"]');
  if (existingScript) {
    console.log('D-ID script already loaded');
    return;
  }

  // Create and configure the script element
  const script = document.createElement('script');
  script.type = 'module';
  script.src = 'https://agent.d-id.com/v2/index.js';
  script.setAttribute('data-mode', 'full');
  script.setAttribute('data-client-key', clientKey);
  script.setAttribute('data-agent-id', agentId);
  script.setAttribute('data-name', 'did-agent');
  script.setAttribute('data-monitor', 'true');
  script.setAttribute('data-target-id', 'zeo-agent-container');

  script.onload = () => {
    console.log('D-ID agent script loaded successfully');
  };

  script.onerror = () => {
    console.error('Failed to load D-ID agent script');
  };

  // Append to document head
  document.head.appendChild(script);

  console.log('D-ID agent script initialized with credentials from env');
}
