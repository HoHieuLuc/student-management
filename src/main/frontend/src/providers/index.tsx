import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import ReactQueryProvider from './ReactQueryProvider';
import ThemeProvider from './ThemeProvider';

interface Props {
    children: JSX.Element;
}

const Provider = ({ children }: Props) => {
    return (
        <ReactQueryProvider>
            <ThemeProvider>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </ThemeProvider>
            <ReactQueryDevtools />
        </ReactQueryProvider>
    );
};
export default Provider;