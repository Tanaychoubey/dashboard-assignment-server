const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/activity', (req, res) => {
    const activityData = Array.from({ length: 12 }, (_, i) => ({
        name: `Week ${i + 1}`,
        value: Math.floor(Math.random() * 1000)
    }));
    res.json(activityData);
});

const orders = [
    { id: '123456', customer: 'John Smith', date: '1/24/24', amount: 210.50, status: 'approved' },
    { id: '123457', customer: 'Emma Wilson', date: '1/23/24', amount: 185.75, status: 'pending' },
    { id: '123458', customer: 'Kevin White', date: '1/22/24', amount: 350.25, status: 'declined' },
];

const feedback = [
    { id: '1', customer: 'Sarah Parker', rating: 5, comment: 'Excellent service and quick delivery!', date: '1/24/24' },
    { id: '2', customer: 'David Jones', rating: 4, comment: 'Good product quality, will order again.', date: '1/23/24' },
];

app.get('/api/activity', (req, res) => {
    res.json(activityData);
});

app.get('/api/orders', (req, res) => {
    res.json(orders);
});

app.get('/api/feedback', (req, res) => {
    res.json(feedback);
});

app.get('/api/stats', (req, res) => {
    const stats = {
        totalUsers: Math.floor(Math.random() * 100) + 1,
        totalCategories: Math.floor(Math.random() * 100) + 1,
        totalOrders: Math.floor(Math.random() * 100) + 1,
        totalRevenue: Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000
    };
    res.json(stats);
});

app.get('/api/dashboard', (req, res) => {
    res.json({
        activityData,
        orders,
        feedback
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});