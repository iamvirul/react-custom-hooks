

# React Custom Hooks

A collection of custom React hooks for various advanced use cases.

## Installation

```sh
npm install react-custom-hooks
```

## Hooks

### `useFetch`

Fetches data from a URL asynchronously.

```javascript
import { useFetch } from 'react-custom-hooks';

const App = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
```

### `useLocalStorage`

Manages state in `localStorage`.

```javascript
import { useLocalStorage } from 'react-custom-hooks';

const App = () => {
  const [name, setName] = useLocalStorage('name', 'John Doe');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>Name: {name}</p>
    </div>
  );
};

export default App;
```

### `useToggle`

Toggles between true/false states.

```javascript
import { useToggle } from 'react-custom-hooks';

const App = () => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <p>Toggle state: {isToggled ? 'ON' : 'OFF'}</p>
    </div>
  );
};

export default App;
```

### `useDebounce`

Delays invoking a function until after a specified delay.

```javascript
import { useState } from 'react';
import { useDebounce } from 'react-custom-hooks';

const App = () => {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 500);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Debounced text: {debouncedText}</p>
    </div>
  );
};

export default App;
```

### `usePrevious`

Returns the previous value of a state or prop.

```javascript
import { useState, useEffect } from 'react';
import { usePrevious } from 'react-custom-hooks';

const App = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  useEffect(() => {
    console.log(`Previous count: ${prevCount}`);
  }, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
```

### `useWindowSize`

Tracks the current window size.

```javascript
import { useWindowSize } from 'react-custom-hooks';

const App = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </div>
  );
};

export default App;
```

### `useEventListener`

Adds an event listener to the document or specific element.

```javascript
import { useEventListener } from 'react-custom-hooks';

const App = () => {
  useEventListener('click', () => {
    console.log('Document clicked!');
  });

  return <div>Click anywhere on the document.</div>;
};

export default App;
```

### `useOnScreen`

Detects if an element is currently visible on the screen.

```javascript
import { useRef } from 'react';
import { useOnScreen } from 'react-custom-hooks';

const App = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div>
      <div ref={ref} style={{ height: '100px', background: isVisible ? 'green' : 'red' }}>
        {isVisible ? 'Visible' : 'Not Visible'}
      </div>
    </div>
  );
};

export default App;
```

### `useTimeout`

Executes a callback after a specified delay.

```javascript
import { useState } from 'react';
import { useTimeout } from 'react-custom-hooks';

const App = () => {
  const [visible, setVisible] = useState(false);

  useTimeout(() => setVisible(true), 5000);

  return (
    <div>
      {visible ? 'Visible' : 'Not Visible'}
    </div>
  );
};

export default App;
```

### `useInterval`

Executes a callback repeatedly at a specified interval.

```javascript
import { useState } from 'react';
import { useInterval } from 'react-custom-hooks';

const App = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
```

### `useClickOutside`

Detects clicks outside of a specified element.

```javascript
import { useRef } from 'react';
import { useClickOutside } from 'react-custom-hooks';

const App = () => {
  const ref = useRef();
  useClickOutside(ref, () => {
    alert('Clicked outside!');
  });

  return (
    <div ref={ref} style={{ padding: '50px', background: 'lightgray' }}>
      Click outside of this box
    </div>
  );
};

export default App;
```

### `useFetchWithCache`

Fetches data from a URL with caching support.

```javascript
import { useFetchWithCache } from 'react-custom-hooks';

const App = () => {
  const { data, loading, error } = useFetchWithCache('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
```

### `useAsync`

Manages asynchronous operations with status tracking.

```javascript
import { useAsync } from 'react-custom-hooks';

const fetchData = async () => {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

const App = () => {
  const { execute, status, value, error } = useAsync(fetchData, false);

  return (
    <div>
      <button onClick={execute}>Fetch Data</button>
      {status === 'idle' && <p>Click the button to start fetching</p>}
      {status === 'pending' && <p>Loading...</p>}
      {status === 'error' && <p>Error: {error.message}</p>}
      {status === 'success' && (
        <div>
          <h1>Data</h1>
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
```

### `useDarkMode`

Toggles dark mode state.

```javascript
import { useDarkMode } from 'react-custom-hooks';

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
      <button onClick={() => setDarkMode(prevMode => !prevMode)}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default App;
```

### `useHover`

Detects if an element is being hovered over.

```javascript
import { useHover } from 'react-custom-hooks';

const App = () => {
  const [ref, isHovered] = useHover();

  return (
    <div>
      <div ref={ref} style={{ padding: '50px', background: isHovered ? 'blue' : 'gray' }}>
        Hover over this box
      </div>
    </div>
  );
};

export default App;
```

### `useDebouncedCallback`

Delays invoking a callback function until after a specified delay.

```javascript
import { useState } from 'react';
import { useDebouncedCallback } from 'react-custom-hooks';

const App = () => {
  const [value, setValue] = useState('');
  const debouncedCallback = useDebouncedCallback((newValue) => {
    console.log('Debounced:', newValue);
  }, 500);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          debouncedCallback(e.target.value);
        }}
      />
    </div>
  );
};

export default App;
```

### `useThrottle`

Limits the rate at which a callback function is invoked.

```javascript
import { useState } from 'react';
import { useThrottle } from 'react-custom-hooks';

const App = () => {
  const [value, setValue] = useState('');
  const throttledValue = useThrottle

(value, 500);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Throttled value: {throttledValue}</p>
    </div>
  );
};

export default App;
```

### `useOnlineStatus`

Tracks the online/offline status of the browser.

```javascript
import { useOnlineStatus } from 'react-custom-hooks';

const App = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <p>Online status: {isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default App;
```

### `useLocalStorageReducer`

Manages state in `localStorage` using a reducer.

```javascript
import { useLocalStorageReducer } from 'react-custom-hooks';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useLocalStorageReducer('count', reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default App;
```

### `useScript`

Loads an external script and provides its loading status.

```javascript
import { useScript } from 'react-custom-hooks';

const App = () => {
  const { scriptLoaded, scriptError } = useScript({
    src: 'https://www.example.com/external-script.js',
    onLoad: () => {
      console.log('Script loaded successfully.');
    },
    onError: () => {
      console.error('Script loading failed.');
    }
  });

  return (
    <div>
      {scriptLoaded && <p>External script loaded.</p>}
      {scriptError && <p>Error loading script: {scriptError.message}</p>}
    </div>
  );
};

export default App;
```

### `useAsyncEffect`

Combines `useEffect` with async operations.

```javascript
import { useAsyncEffect } from 'react-custom-hooks';

const App = () => {
  useAsyncEffect(async () => {
    const result = await fetch('https://api.example.com/data');
    const data = await result.json();
    console.log(data);
  }, []);

  return <div>Check console for fetched data.</div>;
};

export default App;
```

### `useMediaQuery`

Tracks changes in media query matches.

```javascript
import { useMediaQuery } from 'react-custom-hooks';

const App = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      <p>Device type: {isMobile ? 'Mobile' : 'Desktop'}</p>
    </div>
  );
};

export default App;
```

### `useGeolocation`

Retrieves and tracks the user's geolocation.

```javascript
import { useGeolocation } from 'react-custom-hooks';

const App = () => {
  const { position, error } = useGeolocation();

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {position && (
        <p>
          Latitude: {position.latitude}, Longitude: {position.longitude}
        </p>
      )}
    </div>
  );
};

export default App;
```

### `useLocalStorageState`

Manages state in `localStorage` with a useState-like API.

```javascript
import { useLocalStorageState } from 'react-custom-hooks';

const App = () => {
  const [name, setName] = useLocalStorageState('name', 'John Doe');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>
    </div>
  );
};

export default App;
```

### `useNetworkStatus`

Monitors the network status (online/offline).

```javascript
import { useNetworkStatus } from 'react-custom-hooks';

const App = () => {
  const isOnline = useNetworkStatus();

  return (
    <div>
      <p>Network status: {isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default App;
```

### `useWebSocket`

Manages WebSocket connections.

```javascript
import { useWebSocket } from 'react-custom-hooks';

const App = () => {
  const socket = useWebSocket('wss://echo.websocket.org');

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      console.log('Message from server: ', event.data);
    };

    return () => {
      socket.close();
    };
  }, [socket]);

  const sendMessage = () => {
    if (socket) {
      socket.send('Hello, WebSocket!');
    }
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default App;
```

### `useClipboard`

Provides functionality to interact with the clipboard.

```javascript
import { useClipboard } from 'react-custom-hooks';

const App = () => {
  const { copyToClipboard, clipboard } = useClipboard();

  return (
    <div>
      <input type="text" value={clipboard} readOnly />
      <button onClick={() => copyToClipboard('Copied text')}>Copy Text</button>
    </div>
  );
};

export default App;
```

### `useIdleTimeout`

Detects user inactivity and triggers a callback after a specified idle period.

```javascript
import { useIdleTimeout } from 'react-custom-hooks';

const App = () => {
  const isIdle = useIdleTimeout(5000, () => {
    console.log('User is idle!');
  });

  return (
    <div>
      <p>User is {isIdle ? 'idle' : 'active'}</p>
    </div>
  );
};

export default App;
```

## Author

- **Virul Nirmala Wickramasinghe**

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```
