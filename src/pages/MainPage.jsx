import React from 'react';
import Container from '../components/Container/Container';
import Box from '../components/Box/Box';
import Element from '../components/Element/Element';
import Icons from '../components/Icons';

function MainPage() {
   return (
      <Container>
         <Box>
            <Element>
               <img src={Icons.TelegramHT} alt="TelegramHT" />
            </Element>
            <Element>
               <img src={Icons.Software} alt="Software" />
            </Element>
         </Box>
      </Container>
   );
}

export default MainPage;
