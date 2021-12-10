# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Resort.destroy_all
Review.destroy_all
User.destroy_all

@admin = User.create!(username: 'alex', email: 'alex@alex.com', password: "Xtra$3cur3", is_admin: true)
@other_admin = User.create!(username: 'marley', email: 'marley@cat.com', password: "i<3Cuddles", is_admin: true)
@user_one = User.create!(username: 'generic_username', email: 'user@first.com', password: "testPASSWORD", is_admin: false)
@user_two = User.create!(username: 'mrmavs', email: 'maverick@cat.com', password: "i<3Birds", is_admin: false)

puts "#{User.count} users created!"

@heavenly = Resort.create!(
	name: "Heavenly", 
	city: "South Lake Tahoe", 
	state: "California", 
	country: "USA", 
	description: "High above the sapphire-blue waters of Lake Tahoe, Heavenly is one of the most unique snow resorts on the planet. 
		Whether you and your friends come to ski and ride from sunrise to sunset, head out to explore the new craft beer scene, 
		or simply unwind at the condo with the people you care about most, we’ve got you. Heavenly is all about a better way of being together.", 
	img_url: "https://tahoesouth.com/wp-content/uploads/2020/11/heavenly-mountain-resort760x450.jpg"
)
@vail = Resort.create!(
	name: "Vail", 
	city: "Vail", 
	state: "Colorado", 
	country: "USA", 
	description: "With 5,317 acres of skiable terrain, Vail gives you the freedom of living without limits. 
		Carve perfect lines on the front side and enjoy Vail's Five Star Grooming. 
		Hit the Back Bowls to lose yourself in wide open fields of snow. 
		And discover Blue Sky Basin to feel worlds away and explore backcountry-style glades.", 
	img_url: "https://s20084.pcdn.co/wp-content/uploads/2017/03/lqlb8g5huq8mkxeaan3i.jpg"
)
@park_city = Resort.create!(
	name: "Park City", 
	city: "Park City", 
	state: "Utah", 
	country: "USA", 
	description: "Let us welcome you to the place where the largest ski resort in the U.S. meets our charming, historic mountain town. 
		This is the only place where you can spend the day exploring 3,200+ vertical feet of dynamic skiing or cruise the gentle rolling 
		terrain of our High Meadow Park. Come savor modern, 
		crafted-for-you meals completed with good old-fashioned s’mores (and laughter) around the fire. 
		Come find out why a Park City escape can be as unique as you. Find your Inspiration at Park City.", 
	img_url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Park_City_overview.jpg"
)
@mammoth = Resort.create!(
	name: "Mammoth", 
	city: "Mammoth Lakes", 
	state: "California", 
	country: "USA", 
	description: "Boasting the highest lift-served summit in California at 11,053 feet, Mammoth is the leading four-season mountain 
		resort in the state offering year-round lodging and endless outdoor recreation. 
		Our winters are long and legendary – known for some of the best skiing and snowboarding in the United States. 
		When the snow melts, Mammoth Mountain transforms into a summer recreation mecca, providing boundless activities, 
		exploration and adventures.", 
	img_url: "https://www.visitmammoth.com/wp-content/uploads/listing_247-1726.jpg"
)
@whistler = Resort.create!(
	name: "Whistler Blackcomb", 
	city: "Whistler", 
	state: "British Columbia", 
	country: "Canada", 
	description: "The power of the landscape, the towering mountains, the crisp air and glinting snow cast the trivial aside 
		and draw your focus to what’s truly important. It’s a force of nature: something real. 
		It manifests itself in our undeniable reputation, our legendary terrain, our reliably deep snow and our world record-breaking gondola.
		We’re all drawn here for different reasons. Some are attracted to a mountain town with an undisputed atmosphere. 
		Others are pulled in by the pedestrian village with ski-in/ski-out lodging. 
		Many seek the outdoor adventures that range from just-enough to over-the-top. 
		Then there’s the world-famous après, five star dining, spas, shopping, or nightlife that are hard for anyone to resist. 
		And at the center of it all, the two largest, consistently top ranked, side-by-side ski mountains in North America 
		create a place with limitless possibilities.", 
	img_url: "https://www.chateau-whistler.com/wp-content/uploads/2019/10/ski-whistler-mountain-TW-mikecrane-1391x954.jpg"
)
@breck = Resort.create!(
	name: "Breckenridge", 
	city: "Breckenridge", 
	state: "Colorado", 
	country: "USA", 
	description: "As you first make your way into town, it’s impossible to miss Breck’s massive Five Peaks cutting into the skyline. 
		Part of the Rocky Mountain’s Ten Mile Range, Breck is comprised of Peaks 6, 7, 8, 9 and 10, spanning from North to South. 
		In winter, Breck’s Five Peaks are home to more than 180 trails for skiing and riding, plus a whole bunch of take-your-breath-away, 
		above-treeline terrain that offer views for days.", 
	img_url: "https://cms.inspirato.com/ImageGen.ashx?image=/media/9398795/gettyimages-498798436.jpg&width=1200"
)
@taos = Resort.create!(
	name: "Taos", 
	city: "Taos", 
	state: "New Mexico", 
	country: "USA", 
	description: "Although many travelers choose Taos for the incredible skiing and snowboarding and breathtaking mountain atmosphere, 
		the town of Taos has plenty of events and activities for artists, music-lovers, performers, hikers, foodies, and everyone in between. 
		Every day at Taos brings a new adventure.", 
	img_url: "https://taos.org/wp-content/uploads/2019/09/DSC03398-copy.jpg"
)
@big_sky = Resort.create!(
	name: "Big Sky", 
	city: "Big Sky", 
	state: "Montana", 
	country: "USA", 
	description: "Big Sky is known for pushing the limits of skiing. Whether it's providing 4,350 vertical feet of terrain from the top 
		of Lone Peak or installing North America's most technologically advanced chairlift⏤we're always looking for new ways to create 
		exceptional experiences for our guests.", 
	img_url: "https://www.explorebigsky.com/wp-content/uploads/2017/02/Lennon-Big-Sky-Resort.jpg"
)
@stowe = Resort.create!(
	name: "Stowe", 
	city: "Stowe", 
	state: "Vermont", 
	country: "USA", 
	description: "Without a doubt, Vermont’s most pristine ski town. A postcard-perfect place that’s home to a community of full-time, 
		part-time and first-time enthusiasts enjoying the very best of Vermont—from sunsets on the mountain to farm-fresh culinary 
		delights and world-famous craft beers.", 
	img_url: "https://www.sprucepeak.com/images/hero/full/village_night.jpg"
)
@revelstoke = Resort.create!(
	name: "Revelstoke", 
	city: "Revelstoke", 
	state: "British Columbia", 
	country: "Canada", 
	description: "Over 120 years of skiing history has become part of the town’s fabric, creating a community that celebrates winter 
		in all its forms. If you live for snow, welcome home. Revelstoke holds the record for the most snowfall in Canada in a single winter 
		at 80 ft or a whopping 2,438 cm, and the Resort's slopes are blanketed in an average of 10.5 metres of powder every winter.", 
	img_url: "https://assets.vogue.com/photos/5c703dbd9754bb44c775c4fd/master/pass/00-promo-image-revelstoke-british-columbia-canada.jpg"
)
@palisades = Resort.create!(
	name: "Palisades Tahoe", 
	city: "Olympic Valley", 
	state: "California", 
	country: "USA", 
	description: "Palisades Tahoe is the largest ski resort in the Lake Tahoe region, boasting 6,000 skiable acres across two mountains. 
		Formerly Squaw Valley Alpine Meadows, the more than 70-year-old resort celebrates a rich history as the host of the 1960 Winter 
		Olympics, the Spring Skiing Capital, and home mountain to dozens of Olympic and World Cup athletes across multiple snow sports. 
		With an average annual snowfall of 400 inches, Palisades Tahoe frequently operates the longest ski and snowboard season in Lake Tahoe. 
		The Village at Palisades Tahoe offers year-round events and over 50 bars, restaurants and boutiques, many of which are locally owned 
		and operated.", 
	img_url: "https://www.sportstravelmagazine.com/wp-content/uploads/2021/09/PalisadesTahoeLifts.jpeg"
)

puts "#{Resort.count} resorts created!"

Review.create(
	title: "All around fantastic trip!",
	body: "We had a great time skiing at Heavenly. Very conveniently located and amazing views of Lake Tahoe",
	rating: 4,
	tags: ["good for beginners"],
	user: @admin,
	resort: @heavenly
)
Review.create(
	title: "false advertising",
	body: "the only mammoths i saw were statues. where are the real mammoths? they also didn't have a lot of snow when i visited.",
	rating: 1,
	tags: [],
	user: @user_one,
	resort: @mammoth
)
Review.create(
	title: "Amazing place to board",
	body: "Hands down the best snowboarding in California. Make sure you go to the top and tackle Dave's run if it's open. 
		It can get crowded on the weekends, but there is enough terrain for everyone to have a good time. The local bars and restaurants
		have a ton of variety and are great for apres ski.",
	rating: 5,
	tags: ["good restaurants"],
	user: @other_admin,
	resort: @mammoth
)
Review.create(
	title: "Great time, but crowded and expensive",
	body: "Vail was crowded on weekends in the 90's, now you cant tell a weekday from a Saturday. Not knowing your way around the 
		mountain will definitely put you in long lines. But if you get up early for first chair on a pow day, 
		you can get some great turns in the back bowls and then head to blue sky basin and try to stay ahead of the masses. 
		The village has entertainment for skiers and non-skiers alike as well as top tier restaurants. It is one of the top destinations
		in the US for a reason, but it comes with an slightly more expensive price tag.",
	rating: 3,
	tags: ["good restaurants", "fast lifts", "tons of terrain"],
	user: @user_two,
	resort: @vail
)
Review.create(
	title: "Fun for the whole family!",
	body: "If you want one spot, where beginners, intermediaries, experts, and non-skiers can have fun...there might not be a better 
		choice than Park City. The kids had a fun time in ski school, and we were able to meet with them for lunch at the main lodge.",
	rating: 4,
	tags: ["family friendly", "tons of terrain"],
	user: @admin,
	resort: @park_city
)
Review.create(
	title: "best snow in the east",
	body: "Totally worth the four hour drive from Boston. Much easier than a 4+ hour flight out west.",
	rating: 5,
	tags: [],
	user: @user_two,
	resort: @stowe
)

puts "#{Review.count} reviews created!"


