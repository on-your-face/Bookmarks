import React from 'react';
import Container from '../../components/Container/Container';
import Box from '../../components/Box/Box';
import Element from '../../components/Element/Element';
import LinkElement from '../../components/LinkElement';
import Icons from '../../components/Icons';

function Modal_Software() {
   return (
      <Modal>
         <Container>
            <Box>
               <Element>
                  <LinkElement href="https://rufus.ie/ru/">
                     <img src={Icons.Rufus} alt="Rufus" />
                  </LinkElement>
               </Element>
            </Box>
         </Container>
      </Modal>
   );
}

export default Modal_Software;
