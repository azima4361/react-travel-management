'use strict';

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Booking = sequelize.define('Booking', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guestSize: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  return Booking;
};
