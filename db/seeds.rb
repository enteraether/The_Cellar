# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

25.times do Wine.create(name: Faker::Beer.name, region: [Burgundy, Champagne, Liore, Piedmont, Alsace, Rhone, Languedoc-Roussillon].sample, notes: [fruity, floral, vanilla, tobacco].sample, grape_variety: [Cabernet-Sauvignon, Riesling, Sangiovese, Pinot Noir].sample, type: [Red, White, Sparkling, Rose].sample, vintage: [2009, 2000, 1989, 1995, 2004, 1988, 1994, 2001].sample, label: Faker::Beer.brand, price: [45.00, 33.00, 29.00, 65.00, 87.00].sample)





