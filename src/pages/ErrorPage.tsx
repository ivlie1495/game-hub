import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';

import Navbar from '@components/Navbar';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'This page does not exist'
            : 'An unexpected error occured.'}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
