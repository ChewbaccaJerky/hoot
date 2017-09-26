# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# default users
john = {
  username: "JohnRobin",
  password: "password",
  email: "johnrobinlugtu@gmail.com",
  first_name: "John",
  last_name: "Lugtu"
}

diane = {
  username: "DianeMariel",
  password: "password",
  email: "dianemariel28@gmail.com",
  first_name: "Diane",
  last_name: "Custodio"
}

jay = {
  username: "JayJay",
  password: "password",
  email: "jayjay@gmail.com",
  first_name: "Amerlito",
  last_name: "Reyes"
}

lie = {
  username: "LieLie",
  password: "password",
  email: "lielie@gmail.com",
  first_name: "Loreli-Lie",
  last_name: "Lugtu"
}

imron = {
  username: "Imron",
  password: "password",
  email: "imron@gmail.com",
  first_name: "Imron",
  last_name: "Lacsina"
}

demo = {
  username: "demo",
  password: "password",
  email: "demo@test.com",
  first_name: "Chuck",
  last_name: "Norris"
}

User.create(john)
User.create(diane)
User.create(jay)
User.create(lie)
User.create(imron)
User.create(demo)

#### Reviews

## Gary Danko ChIJq342JeGAhYARwdtH9tlX7gg
review1 = {
  author_id: 2,
  author_username: 'DianeMariel',
  place_id: 'ChIJq342JeGAhYARwdtH9tlX7gg',
  ratings: 5,
  body: "After two years, this place is still amazing.  I came with my mother to celebrate her birthday and the food was just as delicious, succulent, and decadent as the first time and the service was warm and affable with being too overbearing.  All in all, a beautiful experience.
         My mother and I ate 10 courses total with a variety of appetizers, entrees, and desserts.  Everything was well seasoned, perfectly portioned, and cooked to perfection.  The waiters are still as attentive and efficient as ever without being overly intrusive.
         Gary Danko is still an amazing restaurant where you will definitely get your money's worth.  If you're visiting SF, I would definitely recommend coming here, and even if you're a native to the Bay Area, if you haven't been to Gary Danko, you're missing out."
}

review2 = {
  author_id: 1,
  author_username: 'JohnRobin',
  place_id: 'ChIJq342JeGAhYARwdtH9tlX7gg',
  ratings: 4,
  body: "You know a place is classy when they serve their butter under a cloche.
         A great meal overall, and the price is 'reasonable' for a Michelin star restaurant. Could have done without the uppity hostess though. There's no way she could have seen the broke down Kia rental I pulled up in. How did she even know we were poor??"
}

review3 = {
  author_id: 4,
  author_username: 'LieLie',
  place_id: 'ChIJq342JeGAhYARwdtH9tlX7gg',
  ratings: 5,
  body: "Finally!!! After years of waiting, I finally got a chance to get reservations for this restaurant. My BFF and I planned a birthday trip to celebrate my milestone and we decided to hit up wine country and SF. We had made reservations 5 months in advance with careful planning. A credit card is needed to make reservations. The only reservation available for the day we wanted was 9pm. Damn that's late!

We played dress up and took an uber from our hotel and arrived early enough to ensure we checked in. We were welcomed and promptly sat at a cute little booth on the left side of the restaurant. The sitting area is tiny with about 10-ish tables. Our booth was a little funky as we were sitting side by side and looking out towards the other tables. There was also another table next to us with the same sitting situation. The tables are super close together so get cozy with your neighbors!

We decided to do the 3- course tasting menu since we were eating all day. We were going to share plates as well so we chose different items. There is a 3, 4, or 5 course available from $87-$124. We both decided on cocktails to start. I opted for a glass of prosecco. They offer a little taste before they pour you a glass. For the courses, you get to select courses from any of the categories. You can choose all entrees, all starters, all desserts, or mix and match. We were offered comped bread and butter as we wait.

We chose to share the following:
-branzini: loved the softness of the fish and the crispy skin. Yum!
-roasted Maine lobster: super buttery and left me wanting more. My fave of all of the nights tasting. I would order 3 of this for my 3 course!
-seared filet of beef: my entree was amazing! So tender and flavorful. I engulfed that baby up within minutes!
-loin of lamb: served rare so if you want it to be cooked more make sure you let them know! Even if you ask for med rare you should really ask about preparations. It was delicious though.
-chocolate soufflé: so so good, but rich!
-warm butter cake: my BFF loved his dessert. I'm more of a chocolate fan so I defer to my soufflé.

We also ordered coffees with our desserts. Since I was celebrating my milestone, I was also given a chocolate torte cake with a happy birthday decorated on the plate and a candle. Lastly, we were given a plate of petite desserts compliments of the chef!

As a departing gift we were also given pineapple upside down cakes for our breakfast the next morning. How awesome is that!

One of the best dining experiences I've had, and looking forward to taking my husband on a special occasion when we come back to the Bay Area!

Tip: Def make your res as soon as possible to get a reasonable dinner time!"
}

review4 = {
  author_id: 3,
  author_username: 'JayJay',
  place_id: 'ChIJq342JeGAhYARwdtH9tlX7gg',
  ratings: 4.5,
  body: "I don't know if I need to add my review on this restaurant because they have tons of reviews already and it's almost like must go place for fine dining in sf..
Maybe that's why I expected too much..?
The service, food, ambience were great but I don't know..it's dfntly one fine dining restaurant and nothing wrong but I felt just a little above than average overall...
Maybe I expected too much? or am I too spoiled..?
Anyways, from the menus we had, the best were oyster, salmon, lobster.
I feel they are much more confident on seafood. Though I loved their steak too.
Also if you go to Gary Danko, I recommend you to try tasting menu than a la carte. Tasting menus seem much more balanced and very well thought out & prepared.
And I loved their breakfast muffin(pineapple in it) to take out at the end of your meal. If they sell it, I would buy every week..Really loved it!

PS. I loved our hostess lady, she's very kind and delightful. And her smile made us comfortable."
}

# Boulevard Restaurant ChIJF-zbSmSAhYARvOafjdCRszQ
review5 = {
  author_id: 3,
  author_username: 'JayJay',
  place_id: 'ChIJF-zbSmSAhYARvOafjdCRszQ',
  ratings: 5,
  body: "How have I not reviewed Boulevard yet?!? We had our wedding reception there! And when I say reception, I mean dinner for 14 people. We rented the wine vault and it was spectacular.
         What I loved about this is that we didn't need a set menu. We gave everyone a menu, told them to get whatever they want and had a friend in charge of making sure the wine kept coming. It was PERFECT.  That was Nov 2015. We of course went back for our 1st anniversary in 2016 and we will be going back for our 2nd anniversary this November. The staff was wonderful.
         I can't comment on all of the food because between us and our group we probably had everything. But I can say that there were no complaints. I had a filet, my husband had the lamb. We had several cheeses, desserts, starters. It was a smorgasbord. I may have mentioned this. It was perfect.
         Worth every penny and it's now a very special place for us."
}

review6 = {
  author_id: 5,
  author_username: 'Imron',
  place_id: 'ChIJF-zbSmSAhYARvOafjdCRszQ',
  ratings: 3,
  body: "This 3 starts is just for our host ,otherwise , food was great and I give them 5 *for food and wine selection.

ordered T-Bone Lamb which was great . Appetizer fresh calamari and for dessert we ordered ice cream and pie and cream brûlée.
Unfortunately our server was horrible..,  in one point I was thinking : may be a candy camera around me , too bad to be true ..
I have very good gay friends and always have respect for all of gay people but this black dude was something ...
I am sure the management knows about that and they should really consider to fire him .

If you are in SF  I highly Recommend them but make sure you ask for a better server ."
}

review7 = {
  author_id: 4,
  author_username: 'LieLie',
  place_id: 'ChIJF-zbSmSAhYARvOafjdCRszQ',
  ratings: 3,
  body: "Good experience, but not sure if I'd come here again.
         Started off the meal with the scallops and soft shell crab appetizers. The scallops were cooked very well, but I didn't enjoy the hard texture of the bed of beans/corn it came on. The soft shell crab was amazing and flavorful.
         Ordered the salmon and prime rib for the main course. The salmon was good, but it came with  a green sauce that made it too salty. The quinoa mashed potatoes and vegetables that it came with were really tasty though. The prime rib was average, but came with the best cornbread I've ever had.
         Also ordered a peach and shortbread ice cream sundae and a cocktail with gin and white peach purree. Both were pretty good!
         Service was great as well."
}

review8 = {
  author_id: 2,
  author_username: 'DianeMariel',
  place_id: 'ChIJF-zbSmSAhYARvOafjdCRszQ',
  ratings: 4,
  body: "Went there in 2015 for my birthday, it is nice, but small table, crowd space. The environment is ok, food is good, we had steak there. Service was great. Easy to get reservation, which is a plus for downtown. Pretty relaxing.

Right next to Bay bridge, beautiful scene."
}


# Nopa ChIJ_dQjyK-AhYARBc9DFlxcclg
review9 = {
  author_id: 1,
  author_username: 'JohnRobin',
  place_id: 'ChIJ_dQjyK-AhYARBc9DFlxcclg',
  ratings: 5,
  body: "WOW! Bravo!

I got to Nopa on a Thursday at 5pm sharp knowing that this place is extremely popular. To my surprise, no one was around to put their name on the list so I was first. WOO! The hostess let us know we'd be seated at 615pm. We got cocktails in the meantime and Nopa was prompt about seating us at 615.

There drink menu is extensive- lots of good cocktails to choose from (they are known for cocktails), lots of wine, and some beer. SO FOR MY BEER LOVERS- they have bottled Pliny the Elder!!!!!!!!!! COULD NOT NOT order it, so my friend and I went for the pliny instead of cocktails.

To eat, we ordered the flatbread- Chorizo, Roasted Peppers, Sweet Corn, Arugula and Feta and the pork chop- Fingerling Potatoes, Wickson Apple Sauce, Mustard Greens and Walnuts. AND YUM! The flatbread was very good, perfect for two or three, and a great starter. The bread was warm, soft, and lightly coated in olive oil and just enough toppings where it's not considered a pizza. The main event, the pork chop! I'm not the biggest pork fan but had to order it and wasnt disappointed. It was juicy, full of flavor, and generously portioned. The applesauce/walnuts was a great touch!

PS... PARKING- I found parking across the street! I believe if it's a weekday and you get there early before people are back from work, parking isn't too bad! I saw a few places to park nearby and lucked out with one across the street."
}

review10 = {
  author_id: 5,
  author_username: 'Imron',
  place_id: 'ChIJ_dQjyK-AhYARBc9DFlxcclg',
  ratings: 4,
  body: "Would give 5 stars for the food, but the service was a little pretentious. Waited about 45 min for a bar seat and despite asking the bartenders to let me know when they thought one might open up, they basically ignored me - even after I did manage to secure a seat.

But as for the food, the pork chop lived up to the hype. And like many other comments, I'm not even a huge pork chop fan, but it was tender, full of flavor and the portion is ridiculous.

I'd definitely come back and hope for a more welcoming atmosphere next time."
}

review11 = {
  author_id: 3,
  author_username: 'JayJay',
  place_id: 'ChIJ_dQjyK-AhYARBc9DFlxcclg',
  ratings: 4,
  body: "Still going strong after 11 years, Nopa has come to be known as one of the Bay Area's signature restaurants, not least because of its menu that evolves constantly thanks to an emphasis on fresh, local ingredients, its boisterous atmosphere, or its solid drinks program.

Reservations are still hard to attain, but if you're lucky like I've been in snagging seats several times at the bar just before weekday evening concerts at the Independent, you can still enjoy everything Nopa has to offer without too much advance effort. For a West Bay venue that's this good and this popular, prices are quite reasonable - $15-18 for decently sized starters and $25-35 for solidly portioned entrees. I've had the burger and found it quite delicious, while a pappardelle entrée was quite hearty and filling as well. A persimmon and quince tartlet with maple ginger ice cream, almond praline, and pomegranate was an incredibly delicious way to cap the whole meal.

Service is engaging although somewhat programmatic given how busy this place is, but for a sampling of what Bay Area dining is like, you can't go wrong here. Worth checking out especially if you can get reservations."
}

# Creating reviews
Review.create(review1);
Review.create(review2);
Review.create(review3);
Review.create(review5);
Review.create(review6);
Review.create(review7);
Review.create(review8);
Review.create(review9);
Review.create(review10);
Review.create(review11);
