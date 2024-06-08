import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Product {
    id: number,
    name: string,
    price: number,
    quantity: number
}

interface CartState {
    products: Product[]
}

const initialState: CartState = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<Product>) => {
            const existingProduct = state.products.find(product => product.id === action.payload.id);
            if (existingProduct) {
              existingProduct.quantity += action.payload.quantity;
            } else {
              state.products.push(action.payload);
            }
          },
        removeProductFromCart: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(p => p.id !== action.payload);
        },
        clearCart: (state) => {
            state.products = []
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const product = state.products.find(product => product.id === action.payload);
            if (product) {
              product.quantity += 1;
            }
          },
          decreaseQuantity: (state, action: PayloadAction<number>) => {
            const product = state.products.find(product => product.id === action.payload);
            if (product) {
              if (product.quantity > 1) {
                product.quantity -= 1;
              } else {
                state.products = state.products.filter(p => p.id !== action.payload);
              }
            }
          },
    }
})

export const { addProductToCart, removeProductFromCart, increaseQuantity, decreaseQuantity ,clearCart } = cartSlice.actions;
export default cartSlice.reducer;