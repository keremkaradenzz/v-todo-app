import Stack from '@mui/material/Stack';

const Container = ({ children, justifyContent = "space-between", alignItems="initial" }) => {
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent={justifyContent}
            alignItems={alignItems}
        >
            {children}
        </Stack>

    )

}


export default Container;