import { useState, useEffect } from 'react';

const useWebSocket = (url) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    setSocket(ws);

    return () => {
      ws.close();
    };
  }, [url]);

  return socket;
};

export default useWebSocket;
