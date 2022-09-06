import { MantineProvider, MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
    colorScheme: 'light',
    components: {
        Table: {
            styles: {
                root: {
                    tbody: {
                        tr: {
                            td: {
                                whiteSpace: 'nowrap',
                            },
                        }
                    },
                    thead: {
                        tr: {
                            whiteSpace: 'nowrap',
                        }
                    }
                }
            }
        }
    }
};

interface Props {
    children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
    return (
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
            {children}
        </MantineProvider>
    );
};
export default ThemeProvider;