const Order = require('../models/OrderModel');

module.exports = {
    // Create a new 
    createOrder: async (req, res) => {
        const orderItem= new Order({
            food_id: req.body.food_id,
            order_id: req.body.order_id,
            order_status: req.body.order_status
        })
        try {
            // console.log(req.body);
            // Create a new order using the data from the request body
            const newOrder = await Order.create(orderItem);

            // If the order was successfully created, send a success response
            res.status(201).json({ message: 'Get all orders', order:newOrder });
        } catch (error) {
            // If an error occurred during order creation, handle it
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    // Get all orders
    getAllOrders: async (req, res) => {
        try {
            // Fetch all orders from the database
            const orders = await Order.find();

            // Send the fetched orders as a response
            res.status(200).json({ message: 'Get all orders', orders });
        } catch (error) {
            // If an error occurred while fetching orders, handle it
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    // Get order by ID
    getOrderById: async (req, res) => {
        try {
            // Fetch the order by its ID from the database
            const order = await Order.findById(req.params.id);

            // If the order was found, send it as a response
            if (order) {
                res.status(200).json({ message: 'Get order by ID', order });
            } else {
                // If the order was not found, send a 404 (Not Found) response
                res.status(404).json({ message: 'Order not found' });
            }
        } catch (error) {
            // If an error occurred while fetching the order, handle it
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    // Update order by ID
    updateOrderById: async (req, res) => {
        try {
            // Update the order by its ID with the data from the request body
            const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });

            // If the order was updated successfully, send it as a response
            if (updatedOrder) {
                res.status(200).json({ message: 'Update order by ID', order: updatedOrder });
            } else {
                // If the order was not found, send a 404 (Not Found) response
                res.status(404).json({ message: 'Order not found' });
            }
        } catch (error) {
            // If an error occurred while updating the order, handle it
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    // Delete order by ID
    deleteOrderById: async (req, res) => {
        try {
            // Delete the order by its ID from the database
            const deletedOrder = await Order.findByIdAndDelete(req.params.id);

            // If the order was deleted successfully, send it as a response
            if (deletedOrder) {
                res.status(200).json({ message: 'Delete order by ID', order: deletedOrder });
            } else {
                // If the order was not found, send a 404 (Not Found) response
                res.status(404).json({ message: 'Order not found' });
            }
        } catch (error) {
            // If an error occurred while deleting the order, handle it
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};


// module.exports = {
//     // Create a new order
//     createOrder: async (req, res) => {
//         try {
//             console.log(req.body);
//             // Create a new order using the data from the request body
//             const newOrder = await Order.create(req.body);

//             // If the order was successfully created, send a success response
//             res.status(201).json(newOrder);
//         } catch (error) {
//             // If an error occurred during order creation, handle it
//             console.error(error);
//             res.status(500).json({ message: 'Internal server error' });
//         }
//  }
// }