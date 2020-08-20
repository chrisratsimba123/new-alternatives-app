const db = require('../DB/Connections')
const Testimonial = require('../Models/Testimonial')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const testimonials = 
    [
        {
            content:
              "I love the groups at New Alternatives.  I am always learning from many diffrent people with similar struggles...  New Alternatives is a nice place. Kate and the staff are great.  The clothing is good. And the clients are like family to me.",
            author: "Elliott Perry",
          },
          {
            content: "They saved my life.  I cannot thank them enough. ",
            author: "Jimmy Dean",
          },
          {
            content: "Definitely would recommend to anyone who feels lost.",
            author: "John Barleycorn",
          },
          {
            content: "Counselors were very kind and had a million resources to offer.",
            author: "Joan Jett",
          },
          {
            content: "Gave me a sense of community and now I want to give back.",
            author: "Sara McCormick",
          },
          {
            content:
              "When I was stuck, the staff at New Alternatives were the only ones in my corner.",
            author: "Kingston Perez",
          },
          {
            content:
              "New Alternatives has changed so many people's lives, helping us see people for who they are without prejudice, whether they are black, white, trans, gay, bisexual, or somewhere in between.  Kate B is the most incredible woman ever. She has saved my life and broken down barriers for people liek me to be safe and to be free.",
            author: "Shasha Washington",
          },
          {
            content:
              "I am learning to love myself. When talking with Kate, there are no judgments. There is no hatred here, and we have the chance to grow.",
            author: "Jaska Young",
          },
    ]

    await Testimonial.insertMany(testimonials)
    console.log("Created a new testimonial!")
}

const run = async () => {
    await main()
    db.close()
}

run()