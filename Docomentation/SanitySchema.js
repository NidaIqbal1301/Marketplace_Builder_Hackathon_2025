// schemas/product.js
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
      {
        name: 'stock',
        type: 'number',
        title: 'Stock Level',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  
  // schemas/order.js
  export const orderSchema = {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'customerName',
        type: 'string',
        title: 'Customer Name',
      },
      {
        name: 'products',
        type: 'array',
        title: 'Ordered Products',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
      {
        name: 'paymentStatus',
        type: 'string',
        title: 'Payment Status',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Paid', value: 'paid' },
            { title: 'Failed', value: 'failed' },
          ],
        },
      },
      {
        name: 'orderDate',
        type: 'datetime',
        title: 'Order Date',
      },
    ],
  };
  
  // schemas/index.js
  import product from './product';
  import { orderSchema } from './order';
  
  export const schemaTypes = [product, orderSchema];
  