"use strict"
const products = [
	{
		id: 1,
		name: "Airpods Wireless Bluetooth Headphones",
		image: "An Image URL",
		description: "Oh sure! Blame the wizards! I daresay that Fry has discovered the smelliest object in the known universe! Of all the friends I've had… you're the first. Come, Comrade Bender! We must take to the streets!",
		brand: "Apple",
		category: "Electronics",
		price: 89.99,
		countInStock: 3,
		rating: 4.5,
		reviews: 4
	},
	{
		id: 2,
		name: "Deluxe Skis",
		image: "An Image URL",
		description: "Oh dear! She's stuck in an infinite loop, and he's an idiot! Well, that's love for you. I was having the most wonderful dream. Except you were there, and you were there, and you were there! Dr. Zoidberg, that doesn't make sense. But, okay!",
		brand: "Ski Inc",
		category: "Sports",
		price: 200.99,
		countInStock: 2,
		rating: 4,
		reviews: 2
	},
	{
		id: 3,
		name: "Color Pencils",
		image: "An Image URL",
		description: "My fellow Earthicans, as I have explained in my book 'Earth in the Balance'', and the much more popular ''Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards. Incidentally, you have a dime up your nose.",
		brand: "Artsy Co",
		category: "Art and Education",
		price: 10.99,
		countInStock: 2,
		rating: 4,
		reviews: 2
	}
]

module.exports = {
	async up (queryInterface, Sequelize) {
		return await queryInterface.bulkInsert("products", products)
	},

	async down (queryInterface, Sequelize) {
		return await queryInterface.bulkDelete("products", products)
	}
}
