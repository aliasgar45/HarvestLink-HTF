const Order = require('../models/OrderModel');
const User = require('../models/userModel');

module.exports = {
    // Create a new order
        // Create a new order
        createOrder: async (req, res) => {
            try {
                // Get user email from request or from JWT token if you're using authentication
                // const userEmail = req.body.user_email; // Assuming it's sent in the request body
                const email = req.params.email;
                // Find customer based on the user's email
                const customer = await User.findOne({ email });
                
                // Check if customer exists
                // if (!customer) {
                //     return res.status(404).json({ message: 'Customer not found' });
                // }
        
                // Create a new order with the retrieved customer ID and order type
                const orderItem = new Order({
                    food_id: req.body.food_id,
                    user_id: customer._id,
                    order_status: req.body.order_status,
                    order_type: req.body.order_type
                });
        
                // Save the order to the database
                const newOrder = await orderItem.save();
        
                // If the order was successfully created, send a success response
                res.status(201).json({ message: 'Order created successfully', order: newOrder });
            } catch (error) {
                // If an error occurred during order creation, handle it
                console.error(error);
                res.status(500).json({ message: 'Internal server error' });
            }
        },
        
    
        // Rest of the controller functions remain the same...
    

    // Get all orders
    getAllOrders: async (req, res) => {
        try {
            // Fetch all orders from the database
            const orders = await Order.find();

            // Send the fetched orders as a response
            res.status(200).json({ message: 'All orders', orders });
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
                res.status(200).json({ message: 'Order found', order });
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
                res.status(200).json({ message: 'Order updated successfully', order: updatedOrder });
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
                res.status(200).json({ message: 'Order deleted successfully', order: deletedOrder });
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
