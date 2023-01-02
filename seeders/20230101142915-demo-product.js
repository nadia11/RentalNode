'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
    {
      id: 2,
      code:"p2",
      name:"Air Compressor 5 Electric",
      type:"plain",
      availibility:true,
      needing_repair:false,
      durability:1500,
      max_durability:2000,
      mileage:null,
      price: 6500,
      minimum_rent_period:1
    },
    {
      id: 3,
      code:"p3",
      name:"Dia Blade 14 inch",
      type:"plain",
      availibility:true,
      needing_repair:false,
      durability:40000,
      max_durability:50000,
      mileage:null,
      price: 3000,
      minimum_rent_period:2
    },
    {
      id: 4,
      code:"p4",
      name:"Copper Blade 5 inch",
      type:"plain",
      availibility:false,
      needing_repair:true,
      durability:0,
      max_durability:2000,
      mileage:null,
      price: 200,
      minimum_rent_period:2
    },
    {
      id: 5,
      code:"p5",
      name:"Copper Blade 5 inch",
      type:"plain",
      availibility:false,
      needing_repair:true,
      durability:0,
      max_durability:2000,
      mileage:null,
      price: 200,
      minimum_rent_period:2
    },
    {
      id: 6,
      code:"p6",
      name:"Copper Blade 8 inch",
      type:"plain",
      availibility:true,
      needing_repair:false,
      durability:1500,
      max_durability:2000,
      mileage:null,
      price: 300,
      minimum_rent_period:2
    },
    {
      id: 7,
      code:"p7",
      name:"Beam Clamp",
      type:"plain",
      availibility:true,
      needing_repair:false,
      durability:15000,
      max_durability:20000,
      mileage:null,
      price: 800,
      minimum_rent_period:30
    },
    {
      id: 8,
      code:"p8",
      name:"Beam Clamp",
      type:"plain",
      availibility:true,
      needing_repair:false,
      durability:10000,
      max_durability:20000,
      mileage:null,
      price: 800,
      minimum_rent_period:30
    },
    {
      id: 9,
      code:"p9",
      name:"Beam Clamp",
      type:"plain",
      availibility:false,
      needing_repair:false,
      durability:5000,
      max_durability:20000,
      mileage:null,
      price: 800,
      minimum_rent_period:30
    },
    {
      id: 10,
      code:"m1",
      name:"Boom lift 40",
      type:"meter",
      availibility:true,
      needing_repair:false,
      durability:4000,
      max_durability:8000,
      mileage:10000,
      price: 1000,
      minimum_rent_period:4
    },
    {
      id: 11,
      code:"m2",
      name:"Boom lift 60",
      type:"meter",
      availibility:true,
      needing_repair:false,
      durability:8000,
      max_durability:10000,
      mileage:5000,
      price: 1500,
      minimum_rent_period:4
    },
    {
      id: 12,
      code:"m3",
      name:"Boom lift 80",
      type:"meter",
      availibility:false,
      needing_repair:true,
      durability:500,
      max_durability:12000,
      mileage:200,
      price: 2000,
      minimum_rent_period:2
    },
    {
      id: 13,
      code:"m4",
      name:"Boom lift 100",
      type:"meter",
      availibility:true,
      needing_repair:false,
      durability:4000,
      max_durability:12000,
      mileage:8500,
      price: 2500,
      minimum_rent_period:2
    },
    {
      id: 14,
      code:"m5",
      name:"Boom lift 20",
      type:"meter",
      availibility:true,
      needing_repair:false,
      durability:1200,
      max_durability:8000,
      mileage:600,
      price: 500,
      minimum_rent_period:1
    },
    {
      id: 15,
      code:"m6",
      name:"Boom lift 20",
      type:"meter",
      availibility:true,
      needing_repair:false,
      durability:8000,
      max_durability:8000,
      mileage:0,
      price: 500,
      minimum_rent_period:1
    },
    {
      id: 16,
      code:"m7",
      name:"Boom lift 20",
      type:"meter",
      availibility:true,
      needing_repair:false,
      durability:5000,
      max_durability:8000,
      mileage:1200,
      price: 500,
      minimum_rent_period:1
    },
    {
      id: 17,
      code:"m8",
      name:"Boom lift 40",
      type:"meter",
      availibility:true,
      needing_repair:false,
      durability:8000,
      max_durability:10000,
      mileage:2500,
      price: 1000,
      minimum_rent_period:2
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
