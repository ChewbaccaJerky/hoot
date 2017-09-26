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

## Gary Danko
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

#

# Creating reviews
Review.create(review1);
Review.create(review2);
Review.create(review3);
Review.create(review4);
