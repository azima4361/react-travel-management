const express = require('express');
const router = express.Router();
const { Booking } = require('./../../models'); // Adjust the path as necessary

// POST /api/book
router.post('/book', async (req, res) => {
  const { userId, fullName, phone, guestSize, bookAt, totalAmount } = req.body;

  try {
    const newBooking = await Booking.create({ userId, fullName, phone, guestSize, bookAt, totalAmount });
    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Error creating booking', error });
  }
});

module.exports = router;
