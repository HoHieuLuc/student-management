import ReactDOM from 'react-dom/client';
import Provider from './providers';
import App from './App';

import 'dayjs/locale/en';
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider>
        <App />
    </Provider>
);
