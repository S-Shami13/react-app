import React, { useState } from 'react';
import { Modal, Box, Button, List, ListItem, Typography } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const products = [
  { id: 1, name: 'Product 1', parts: ['SN123', 'SN124', 'SN125'] },
  { id: 2, name: 'Product 2', parts: ['SN223', 'SN224', 'SN225'] },
  // Add more products as needed
];

const MyProducts: React.FC = () => {
  const [openProductModal, setOpenProductModal] = useState(false);
  const [openPartsModal, setOpenPartsModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleOpenProductModal = () => setOpenProductModal(true);
  const handleCloseProductModal = () => setOpenProductModal(false);
  const handleOpenPartsModal = (product: any) => {
    setSelectedProduct(product);
    setOpenPartsModal(true);
  };
  const handleClosePartsModal = () => setOpenPartsModal(false);

  return (
    <div>
      <Button onClick={handleOpenProductModal}>Show Products</Button>

      <Modal open={openProductModal} onClose={handleCloseProductModal}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">Products</Typography>
          <List>
            {products.map((product) => (
              <ListItem button key={product.id} onClick={() => handleOpenPartsModal(product)}>
                {product.name}
              </ListItem>
            ))}
          </List>
        </Box>
      </Modal>

      {selectedProduct && (
        <Modal open={openPartsModal} onClose={handleClosePartsModal}>
          <Box sx={style}>
            <Typography variant="h6" component="h2">Parts for {selectedProduct.name}</Typography>
            <List>
              {selectedProduct.parts.map((part: string, index: number) => (
                <ListItem key={index}>{part}</ListItem>
              ))}
            </List>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default MyProducts;
