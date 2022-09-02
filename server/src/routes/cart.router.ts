// import express, { Request, Response, Router } from 'express'
// import { LOG } from '../logger';
// import { CartService } from '../services/cart.service';
// import { ICart } from '../interfaces';


// const cartRouter: Router = express.Router()
// cartRouter.use(express.json())

// cartRouter.post('/create', async (req: Request, res: Response) => {
//     try {
//         let cart: ICart = req.body.cart;
//         cart = await CartService.create(cart);
//         res.status(200).json({ cart });
//     } catch (error: any) {
//         LOG.error(error)
//         res.status(500).json({ error: error.message });
//     }
// });

// // cartRouter.get('/getAll', async (req: Request, res: Response) => {
// //     try {
// //         res.status(200).json({ carts: await cartservice.getAll() });
// //     } catch (error: any) {
// //         LOG.error(error)
// //         res.status(500).json({ error: error.message });
// //     }
// // })

// // cartRouter.get('/getOne/:cartId', async (req: Request, res: Response) => {
// //     const cartId = req?.params?.cartId;
// //     try {
// //         res.status(200).json({ cart: await cartservice.get(cartId) });
// //     } catch (error) {
// //         LOG.error(error)
// //         res.status(500).json({ error: `Unable to find matching document with cartId: ${req.params.cartId}` });
// //     }
// // })

// // cartRouter.post("/updateOne", async (req: Request, res: Response) => {
// //     try {
// //         let cart: ICart = req.body.cart;
// //         await cartservice.update(cart)
// //         res.status(200).json({})
// //     } catch (error) {
// //         LOG.error(error)
// //         res.status(500).json({ error: error.message });
// //     }
// // });

// // cartRouter.delete("/deleteOne/:cartId", async (req: Request, res: Response) => {
// //     try {
// //         const cartId = req?.params?.cartId;
// //         await cartservice.delete(cartId)
// //         res.status(200).json({});
// //     } catch (error) {
// //         LOG.error(error)
// //         res.status(500).json({ error: error.message });
// //     }
// // });

// export { cartRouter }